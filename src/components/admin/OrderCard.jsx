import { useState } from 'react';
import { Check, MessageCircle, Phone, RotateCcw, X } from 'lucide-react';
import CopyButton from '../ui/CopyButton';
import { buttonStyles, inputStyles } from './styles';
import { METHOD_LABELS, STATUS, formatDateTime } from './orderMeta';
import { toBnDigits, whatsappLink } from '../../lib/format';
import { COURSE, PRICE } from '../../data/homeContent';

const REJECT_REASONS = ['TrxID মেলেনি', 'টাকার পরিমাণ কম', 'এই নম্বর থেকে পেমেন্ট আসেনি', 'রিফান্ড দেওয়া হয়েছে'];

export default function OrderCard({ order, onReview }) {
  const [busy, setBusy] = useState(false);
  const [rejecting, setRejecting] = useState(false);
  const [note, setNote] = useState('');

  const review = async (status, reason) => {
    setBusy(true);
    try {
      await onReview(order.id, status, reason);
    } finally {
      setBusy(false);
      setRejecting(false);
    }
  };

  const loginUrl = `${window.location.origin}/login`;
  const message =
    order.status === 'rejected'
      ? `আসসালামু আলাইকুম ${order.full_name}, আপনার TrxID ${order.trx_id} যাচাই করা যায়নি${order.note ? ` (${order.note})` : ''}। সঠিক তথ্য দিয়ে আবার অর্ডার করুন: ${window.location.origin}/checkout`
      : `আসসালামু আলাইকুম ${order.full_name}, আপনার পেমেন্ট যাচাই হয়েছে। "${COURSE.title}" কোর্সটি চালু হয়ে গেছে। লগইন করে দেখুন: ${loginUrl}`;
  const manual = order.payment_method === 'manual';
  const amountMismatch = !manual && order.amount !== PRICE.amount;

  return (
    <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-bold text-white">{order.full_name}</p>
          <a href={`tel:${order.phone}`} className="mt-0.5 inline-flex items-center gap-1 font-sans text-sm text-slate-400 hover:text-white">
            <Phone className="size-3.5" /> {order.phone}
          </a>
        </div>
        <div className="text-right">
          <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${STATUS[order.status].badge}`}>{STATUS[order.status].label}</span>
          <p className="mt-1.5 text-xs text-slate-500">{formatDateTime(order.created_at)}</p>
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 rounded-xl bg-slate-950/50 p-3 text-sm sm:grid-cols-4">
        <div>
          <dt className="text-xs text-slate-500">মেথড</dt>
          <dd className="font-semibold text-white">{METHOD_LABELS[order.payment_method]}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-500">যে নম্বর থেকে</dt>
          <dd className="font-sans font-semibold text-white">{order.sender_number}</dd>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <dt className="text-xs text-slate-500">TrxID</dt>
          <dd className="flex flex-wrap items-center gap-2 font-sans font-bold text-emerald-300">
            {order.trx_id}
            <CopyButton text={order.trx_id} />
          </dd>
        </div>
        <div>
          <dt className="text-xs text-slate-500">পরিমাণ</dt>
          <dd className={`font-semibold ${amountMismatch ? 'text-amber-300' : 'text-white'}`}>
            ৳{toBnDigits(order.amount)}
            {amountMismatch && <span className="block text-[11px] font-normal">বর্তমান দাম ৳{toBnDigits(PRICE.amount)}</span>}
          </dd>
        </div>
      </dl>

      {order.note && order.status === 'rejected' && (
        <p className="mt-3 text-xs text-red-300">
          <span className="font-semibold">বাতিলের কারণ:</span> {order.note}
        </p>
      )}

      {rejecting ? (
        <div className="mt-4 space-y-3 rounded-xl border border-red-500/30 bg-red-500/5 p-3">
          <p className="text-sm font-semibold text-white">কেন বাতিল করছেন? (শিক্ষার্থী এটি দেখতে পাবে)</p>
          <div className="flex flex-wrap gap-2">
            {REJECT_REASONS.map((reason) => (
              <button
                key={reason}
                type="button"
                onClick={() => setNote(reason)}
                className={`rounded-full border px-3 py-1 text-xs transition ${note === reason ? 'border-red-400 text-red-200' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}
              >
                {reason}
              </button>
            ))}
          </div>
          <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="অথবা নিজে লিখুন (ঐচ্ছিক)" className={inputStyles} />
          <div className="flex gap-2">
            <button type="button" disabled={busy} onClick={() => review('rejected', note)} className={buttonStyles.danger}>
              <X className="size-4" /> বাতিল নিশ্চিত করুন
            </button>
            <button type="button" onClick={() => setRejecting(false)} className={buttonStyles.secondary}>
              ফিরে যান
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          {order.status !== 'approved' && (
            <button type="button" disabled={busy} onClick={() => review('approved')} className={buttonStyles.primary}>
              <Check className="size-4" /> অনুমোদন দিন
            </button>
          )}
          {order.status === 'pending' && (
            <button type="button" disabled={busy} onClick={() => setRejecting(true)} className={buttonStyles.danger}>
              <X className="size-4" /> বাতিল
            </button>
          )}
          {order.status === 'approved' && (
            <button type="button" disabled={busy} onClick={() => setRejecting(true)} className={buttonStyles.secondary} title="ভুল করে অনুমোদন দিলে">
              <RotateCcw className="size-4" /> অ্যাক্সেস বন্ধ করুন
            </button>
          )}
          {order.status !== 'pending' && (
            <a href={whatsappLink(order.phone, message)} target="_blank" rel="noopener noreferrer" className={`${buttonStyles.secondary} border-[#25D366]/50 text-[#5ee08f]`}>
              <MessageCircle className="size-4" /> শিক্ষার্থীকে জানান
            </a>
          )}
        </div>
      )}
    </li>
  );
}
