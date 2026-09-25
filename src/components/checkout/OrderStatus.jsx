import { Link } from 'react-router';
import { CircleCheck, CircleX, Clock } from 'lucide-react';
import { PAYMENT, SUPPORT_PHONE } from '../../data/homeContent';
import { whatsappLink } from '../../lib/format';

const STATES = {
  pending: {
    Icon: Clock,
    tone: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    title: 'আপনার পেমেন্ট যাচাই করা হচ্ছে',
    text: `অর্ডার জমা হয়েছে। পেমেন্ট যাচাই হলেই (${PAYMENT.verifyTime}) এই পেজেই কোর্সটি চালু হয়ে যাবে।`,
  },
  rejected: {
    Icon: CircleX,
    tone: 'border-red-500/30 bg-red-500/10 text-red-300',
    title: 'পেমেন্টটি যাচাই করা যায়নি',
    text: 'TrxID মেলেনি বা টাকার পরিমাণ সঠিক ছিল না। হোয়াটসঅ্যাপে যোগাযোগ করুন অথবা সঠিক TrxID দিয়ে আবার অর্ডার করুন।',
  },
  approved: {
    Icon: CircleCheck,
    tone: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    title: 'আপনি কোর্সটি কিনেছেন',
    text: 'লাইফটাইম অ্যাক্সেস চালু আছে। এখনই দেখা শুরু করুন।',
  },
};

export default function OrderStatus({ order }) {
  const { Icon, tone, title, text } = STATES[order.status];
  const help = whatsappLink(SUPPORT_PHONE, `আসসালামু আলাইকুম, আমার অর্ডারের TrxID: ${order.trx_id}। স্ট্যাটাস জানতে চাই।`);

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:py-16">
      <div className={`rounded-3xl border p-6 text-center sm:p-8 ${tone}`}>
        <Icon className="mx-auto size-12" aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-bold text-white">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p>
        {order.status === 'rejected' && order.note && (
          <p className="mt-3 rounded-xl bg-slate-950/40 px-4 py-2.5 text-sm text-white">
            <span className="text-slate-400">কারণ:</span> {order.note}
          </p>
        )}
        <p className="mt-4 font-sans text-xs text-slate-400">
          TrxID: <span className="font-bold text-slate-200">{order.trx_id}</span>
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {order.status === 'approved' ? (
            <Link to="/my-course" className="rounded-xl bg-emerald-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-emerald-400">
              কোর্স দেখুন →
            </Link>
          ) : (
            <a
              href={help}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] px-6 py-3 font-bold text-white transition hover:brightness-110"
            >
              হোয়াটসঅ্যাপে যোগাযোগ
            </a>
          )}
          {order.status === 'rejected' && (
            <Link to="/checkout?retry=1" className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-400">
              আবার অর্ডার করুন
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
