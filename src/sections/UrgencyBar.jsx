import { Link } from 'react-router';
import { Flame } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { toBnDigits } from '../lib/format';
import { OFFER_ENDS_AT, PRICE } from '../data/homeContent';

export default function UrgencyBar() {
  const left = useCountdown(OFFER_ENDS_AT);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-center gap-2 border-b border-emerald-400/20 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 px-3 py-2 text-center text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/10 sm:text-sm">
      <Flame className="size-4 shrink-0 animate-pulse text-amber-950" aria-hidden="true" />
      <span>
        ফেসবুক ও ইনস্টাগ্রাম স্পেশাল অফার: মাত্র {PRICE.offer} টাকায় (মূল্য {PRICE.regular})
      </span>
      {left && (
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          • অফার শেষ হতে:
          <span className="rounded bg-slate-950 px-2 py-0.5 font-sans text-xs font-extrabold tabular-nums tracking-wider text-emerald-400">
            {left.days > 0 && `${toBnDigits(left.days)} দিন `}
            {left.hours}:{left.minutes}:{left.seconds}
          </span>
        </span>
      )}
      <Link
        to="/checkout"
        className="ml-2 inline-flex items-center rounded-lg bg-slate-950 px-2.5 py-0.5 text-xs font-extrabold text-emerald-300 transition hover:bg-black hover:text-white"
      >
        অফার নিন →
      </Link>
    </div>
  );
}
