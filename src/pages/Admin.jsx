import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { Check, MessageCircle, Phone, RefreshCw, X } from 'lucide-react';
import { useAuth } from '../auth/context';
import { supabase } from '../lib/supabase';
import { toBnDigits, whatsappLink } from '../lib/format';
import { COURSE, PAYMENT } from '../data/homeContent';
import CopyButton from '../components/ui/CopyButton';
import Spinner from '../components/ui/Spinner';
import SetupNotice from '../components/ui/SetupNotice';

const TABS = [
  { key: 'pending', label: 'যাচাই বাকি' },
  { key: 'approved', label: 'অনুমোদিত' },
  { key: 'rejected', label: 'বাতিল' },
];

const STATUS_BADGE = {
  pending: 'bg-amber-500/15 text-amber-300',
  approved: 'bg-emerald-500/15 text-emerald-300',
  rejected: 'bg-red-500/15 text-red-300',
};

const formatTime = (iso) =>
  new Date(iso).toLocaleString('bn-BD', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });

function OrderCard({ order, onReview, busy }) {
  const approvedMessage = `আসসালামু আলাইকুম ${order.full_name}, আপনার পেমেন্ট যাচাই হয়েছে। "${COURSE.title}" কোর্সটি চালু হয়ে গেছে। লগইন করে দেখুন: ${window.location.origin}/login`;

  return (
    <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-bold text-white">{order.full_name}</p>
          <a href={`tel:${order.phone}`} className="mt-0.5 inline-flex items-center gap-1 font-sans text-sm text-slate-400 hover:text-white">
            <Phone className="size-3.5" /> {order.phone}
          </a>
        </div>
        <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${STATUS_BADGE[order.status]}`}>
          {TABS.find((t) => t.key === order.status).label}
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 rounded-xl bg-slate-950/50 p-3 text-sm sm:grid-cols-4">
        <div>
          <dt className="text-xs text-slate-500">মেথড</dt>
          <dd className="font-semibold text-white">{PAYMENT.methods[order.payment_method]?.label}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-500">যে নম্বর থেকে</dt>
          <dd className="font-sans font-semibold text-white">{order.sender_number}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-500">TrxID</dt>
          <dd className="flex items-center gap-2 font-sans font-bold text-emerald-300">
            {order.trx_id}
            <CopyButton text={order.trx_id} />
          </dd>
        </div>
        <div>
          <dt className="text-xs text-slate-500">পরিমাণ • সময়</dt>
          <dd className="font-semibold text-white">
            ৳{toBnDigits(order.amount)} <span className="text-xs font-normal text-slate-400">• {formatTime(order.created_at)}</span>
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-2">
        {order.status !== 'approved' && (
          <button
            type="button"
            disabled={busy}
            onClick={() => onReview(order.id, 'approved')}
            className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-50"
          >
            <Check className="size-4" /> অনুমোদন দিন
          </button>
        )}
        {order.status !== 'rejected' && (
          <button
            type="button"
            disabled={busy}
            onClick={() => onReview(order.id, 'rejected')}
            className="flex items-center gap-1.5 rounded-xl border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10 disabled:opacity-50"
          >
            <X className="size-4" /> বাতিল
          </button>
        )}
        {order.status === 'approved' && (
          <a
            href={whatsappLink(order.phone, approvedMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
          >
            <MessageCircle className="size-4" /> স্টুডেন্টকে জানান
          </a>
        )}
      </div>
    </li>
  );
}

export default function Admin() {
  const { user, profile, loading } = useAuth();
  const [tab, setTab] = useState('pending');
  const [orders, setOrders] = useState(null);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState(null);
  const isAdmin = Boolean(profile?.is_admin);

  const [reloadKey, setReloadKey] = useState(0);
  const reload = () => setReloadKey((k) => k + 1);

  useEffect(() => {
    if (!isAdmin) return;
    let cancelled = false;
    supabase
      .from('orders')
      .select('*')
      .eq('status', tab)
      .order('created_at', { ascending: tab === 'pending' })
      .limit(200)
      .then(({ data, error: err }) => {
        if (cancelled) return;
        setError(err ? 'অর্ডার লোড করা যায়নি।' : null);
        setOrders({ tab, reloadKey, rows: data ?? [] });
      });
    return () => {
      cancelled = true;
    };
  }, [isAdmin, tab, reloadKey]);

  if (!supabase) return <SetupNotice />;
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login?next=/admin" replace />;
  if (!profile) return <Spinner />;
  if (!isAdmin) return <Navigate to="/my-course" replace />;

  const review = async (id, status) => {
    setBusyId(id);
    const { error: err } = await supabase.from('orders').update({ status, reviewed_at: new Date().toISOString() }).eq('id', id);
    setBusyId(null);
    if (err) return setError('আপডেট করা যায়নি, আবার চেষ্টা করুন।');
    reload();
  };

  const rows = orders?.tab === tab ? orders.rows : null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-white">অর্ডার ম্যানেজমেন্ট</h1>
        <button
          type="button"
          onClick={reload}
          className="flex items-center gap-1.5 rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:text-white"
        >
          <RefreshCw className="size-4" /> রিফ্রেশ
        </button>
      </div>
      <p className="mt-2 text-sm text-slate-400">
        বিকাশ/নগদ অ্যাপে TrxID ও টাকার পরিমাণ মিলিয়ে তারপর অনুমোদন দিন। অনুমোদন দিলেই স্টুডেন্ট কোর্স দেখতে পারবে।
      </p>

      <div role="tablist" className="mt-6 flex gap-2 overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => setTab(t.key)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === t.key ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800/70 text-slate-300 hover:text-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {error && <p role="alert" className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}

      {!rows ? (
        <Spinner />
      ) : rows.length === 0 ? (
        <p className="py-16 text-center text-slate-400">এই তালিকায় কোনো অর্ডার নেই।</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {rows.map((order) => (
            <OrderCard key={order.id} order={order} onReview={review} busy={busyId === order.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
