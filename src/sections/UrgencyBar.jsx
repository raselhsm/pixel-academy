import { Flame } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { formatLeft } from '../lib/format';
import { OFFER_ENDS_AT, PRICE } from '../data/homeContent';

// Hidden once the real offer deadline (OFFER_ENDS_AT) has passed.
export default function UrgencyBar() {
  const left = useCountdown(OFFER_ENDS_AT);
  if (!left) return null;

  return (
    <a
      href="#checkout"
      className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-[length:200%_100%] px-3 py-2 text-center text-xs font-bold text-slate-950 motion-safe:animate-[urgency-shift_6s_linear_infinite] sm:text-sm"
    >
      <Flame className="size-4 shrink-0 motion-safe:animate-pulse" aria-hidden="true" />
      <span className="hidden sm:inline">ফ্ল্যাশ অফার: এখন ভর্তি হলে পাচ্ছেন {PRICE.discountLabel} ডিসকাউন্ট! শেষ হতে বাকি:</span>
      <span className="sm:hidden">ফ্ল্যাশ অফার: {PRICE.discountLabel} ছাড়! বাকি:</span>
      <span className="rounded-md bg-navy px-2 py-0.5 font-sans text-xs font-extrabold tabular-nums tracking-wider text-amber-400 sm:text-sm">
        {formatLeft(left)}
      </span>
    </a>
  );
}
