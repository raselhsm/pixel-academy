import { Link } from 'react-router';
import { Flame } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { toBnDigits } from '../lib/format';
import { OFFER_ENDS_AT, PRICE } from '../data/homeContent';

export default function UrgencyBar() {
  const left = useCountdown(OFFER_ENDS_AT);
  if (!left) return null;

  return (
    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-4 py-2 text-center text-xs font-bold text-slate-950 sm:text-sm">
      <Flame className="size-4 shrink-0" aria-hidden="true" />
      <span>{PRICE.discountLabel} ছাড় শেষ হতে বাকি:</span>
      <span className="rounded bg-slate-950 px-2 py-0.5 font-sans text-xs font-extrabold tabular-nums tracking-wider text-emerald-400">
        {left.days > 0 && `${toBnDigits(left.days)} দিন `}
        {left.hours}:{left.minutes}:{left.seconds}
      </span>
      <Link to="/checkout" className="ml-2 hidden underline underline-offset-2 transition hover:text-white sm:inline">
        ছাড়ে কিনুন →
      </Link>
    </div>
  );
}
