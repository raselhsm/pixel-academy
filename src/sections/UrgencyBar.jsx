import { Link } from 'react-router';
import { Flame } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { toBnDigits } from '../lib/format';
import { OFFER_ENDS_AT, PRICE } from '../data/homeContent';

export default function UrgencyBar() {
  const left = useCountdown(OFFER_ENDS_AT);
  if (!left) return null;

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-2.5 border-b border-amber-200/70 bg-amber-50/80 px-4 py-2 text-center text-xs font-semibold text-slate-800 sm:text-sm">
      <span className="flex size-5 items-center justify-center rounded-full bg-amber-200/60 text-amber-800">
        <Flame className="size-3.5 shrink-0" aria-hidden="true" />
      </span>
      <span>
        সীমিত সময়ের অফার: <span className="font-bold text-amber-900">{PRICE.discountLabel} ছাড়</span> শেষ হতে বাকি:
      </span>
      <span className="rounded-md border border-amber-200/80 bg-white px-2 py-0.5 font-sans text-xs font-bold tabular-nums tracking-wider text-amber-900 shadow-xs">
        {left.days > 0 && `${toBnDigits(left.days)} দিন `}
        {left.hours}:{left.minutes}:{left.seconds}
      </span>
      <Link
        to="/checkout"
        className="ml-2 hidden rounded-md bg-slate-900 px-3 py-1 text-xs font-bold text-white shadow-xs transition hover:bg-slate-800 sm:inline-flex"
      >
        ছাড়ে কিনুন →
      </Link>
    </div>
  );
}
