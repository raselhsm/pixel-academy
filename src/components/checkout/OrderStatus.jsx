import { Link } from 'react-router';
import { CircleCheck, CircleX, Clock } from 'lucide-react';
import { PAYMENT, SUPPORT_PHONE } from '../../data/homeContent';
import { whatsappLink } from '../../lib/format';

const STATES = {
  pending: {
    Icon: Clock,
    iconColor: 'text-amber-600',
    bannerTone: 'border-amber-200 bg-amber-50/80',
    title: 'আপনার পেমেন্ট যাচাই করা হচ্ছে',
    text: `অর্ডার জমা হয়েছে। পেমেন্ট যাচাই হলেই (${PAYMENT.verifyTime}) এই পেজেই কোর্সটি চালু হয়ে যাবে।`,
  },
  rejected: {
    Icon: CircleX,
    iconColor: 'text-red-600',
    bannerTone: 'border-red-200 bg-red-50/80',
    title: 'পেমেন্টটি যাচাই করা যায়নি',
    text: 'TrxID মেলেনি বা টাকার পরিমাণ সঠিক ছিল না। হোয়াটসঅ্যাপে যোগাযোগ করুন অথবা সঠিক TrxID দিয়ে আবার অর্ডার করুন।',
  },
  approved: {
    Icon: CircleCheck,
    iconColor: 'text-emerald-600',
    bannerTone: 'border-emerald-200 bg-emerald-50/80',
    title: 'আপনি কোর্সটি কিনেছেন',
    text: 'লাইফটাইম অ্যাক্সেস চালু আছে। এখনই দেখা শুরু করুন।',
  },
};

export default function OrderStatus({ order }) {
  const { Icon, iconColor, bannerTone, title, text } = STATES[order.status];
  const help = whatsappLink(SUPPORT_PHONE, `আসসালামু আলাইকুম, আমার অর্ডারের TrxID: ${order.trx_id}। স্ট্যাটাস জানতে চাই।`);

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:py-16">
      <div className={`rounded-3xl border p-6 text-center shadow-studio sm:p-8 ${bannerTone}`}>
        <Icon className={`mx-auto size-12 ${iconColor}`} aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-bold text-[#0F172A]">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
        {order.status === 'rejected' && order.note && (
          <p className="mt-3 rounded-xl border border-red-200 bg-white/80 px-4 py-2.5 text-sm text-red-900">
            <span className="font-semibold text-slate-600">কারণ:</span> {order.note}
          </p>
        )}
        <p className="mt-4 font-sans text-xs text-slate-500">
          TrxID: <span className="font-bold text-slate-800">{order.trx_id}</span>
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {order.status === 'approved' ? (
            <Link to="/my-course" className="rounded-xl bg-[#0284C7] px-6 py-3 font-bold text-white shadow-xs transition hover:bg-[#0369A1]">
              কোর্স দেখুন →
            </Link>
          ) : (
            <a
              href={help}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] px-6 py-3 font-bold text-white shadow-xs transition hover:brightness-105"
            >
              হোয়াটসঅ্যাপে যোগাযোগ
            </a>
          )}
          {order.status === 'rejected' && (
            <Link to="/checkout?retry=1" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 shadow-2xs transition hover:bg-slate-50">
              আবার অর্ডার করুন
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
