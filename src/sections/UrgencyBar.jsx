import { Flame } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { PRICE } from '../data/homeContent';

export default function UrgencyBar() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-4 py-2 text-center text-xs font-bold text-slate-950 sm:text-sm">
      <Flame className="size-4 shrink-0" aria-hidden="true" />
      <span>স্পেশাল {PRICE.discountLabel} ডিসকাউন্ট আর মাত্র:</span>
      <time
        className="rounded bg-slate-950 px-2 py-0.5 font-sans text-xs font-extrabold tabular-nums tracking-wider text-emerald-400"
        aria-live="off"
      >
        {hours}:{minutes}:{seconds}
      </time>
      <a href="#pricing" className="ml-2 hidden underline underline-offset-2 transition hover:text-white sm:inline">
        ছাড় নিন →
      </a>
    </div>
  );
}
