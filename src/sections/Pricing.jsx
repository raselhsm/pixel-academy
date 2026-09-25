import { Check, Flame, Lock } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { PRICE, PRICING_FEATURES } from '../data/homeContent';

function TimeBox({ value, label }) {
  return (
    <div className="w-16 rounded-xl border border-slate-800 bg-slate-950/70 py-2 sm:w-20">
      <div className="font-sans text-2xl font-extrabold tabular-nums text-white sm:text-3xl">{value}</div>
      <div className="text-[11px] text-slate-400">{label}</div>
    </div>
  );
}

export default function Pricing() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <section id="pricing" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative space-y-8 rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-slate-900 to-[#0b1019] p-6 text-center shadow-2xl shadow-emerald-500/10 sm:p-10 lg:p-14">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold text-emerald-400">
          <Flame className="size-3.5" aria-hidden="true" />
          স্পেশাল {PRICE.discountLabel} ছাড় চলছে
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">কোর্সে এখনই এনরোল করুন</h2>
          <p className="mt-2 text-sm text-slate-400">এককালীন ফি দিয়ে আজীবন অ্যাক্সেস এবং ভিআইপি সাপোর্ট নিশ্চিত করুন</p>
        </div>

        <div role="timer" aria-label="অফার শেষ হতে বাকি সময়">
          <p className="mb-3 text-xs font-semibold text-slate-400">অফার শেষ হতে বাকি</p>
          <div className="flex justify-center gap-2 sm:gap-3">
            <TimeBox value={hours} label="ঘণ্টা" />
            <TimeBox value={minutes} label="মিনিট" />
            <TimeBox value={seconds} label="সেকেন্ড" />
          </div>
        </div>

        <div className="flex items-baseline justify-center gap-4">
          <span className="font-sans text-xl text-slate-500 line-through sm:text-2xl">
            <span className="sr-only">আগের মূল্য </span>
            {PRICE.regular}
          </span>
          <span className="font-sans text-4xl font-extrabold text-emerald-400 sm:text-5xl">
            <span className="sr-only">বর্তমান মূল্য </span>
            {PRICE.offer}
          </span>
        </div>

        <ul className="mx-auto grid max-w-md gap-3 text-left text-sm text-slate-300 sm:grid-cols-2">
          {PRICING_FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="size-4 shrink-0 text-emerald-400" strokeWidth={3} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div>
          {/* TODO: wire to the bKash / Nagad checkout once the payment flow exists. */}
          <button
            type="button"
            className="w-full max-w-md rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:brightness-110 active:scale-[0.99] sm:text-lg"
          >
            বিকাশ / নগদ দিয়ে এখনই শুরু করুন →
          </button>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <Lock className="size-3.5" aria-hidden="true" />
            শতভাগ নিরাপদ ইনস্ট্যান্ট পেমেন্ট ও অটোমেটিক ব্যাচ অ্যাক্সেস
          </p>
        </div>
      </div>
    </section>
  );
}
