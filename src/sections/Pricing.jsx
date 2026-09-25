import { Link } from 'react-router';
import { Check, Flame, Lock } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { toBnDigits } from '../lib/format';
import { HOW_TO_BUY, OFFER_ENDS_AT, PRICE, PRICING_FEATURES } from '../data/homeContent';

function TimeBox({ value, label }) {
  return (
    <div className="w-16 rounded-xl border border-slate-800 bg-slate-950/70 py-2 sm:w-20">
      <div className="font-sans text-2xl font-extrabold tabular-nums text-white sm:text-3xl">{value}</div>
      <div className="text-[11px] text-slate-400">{label}</div>
    </div>
  );
}

export default function Pricing() {
  const left = useCountdown(OFFER_ENDS_AT);

  return (
    <section id="pricing" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative space-y-8 rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-slate-900 to-[#0b1019] p-6 text-center shadow-2xl shadow-emerald-500/10 sm:p-10 lg:p-14">
        {left && (
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold text-emerald-400">
            <Flame className="size-3.5" aria-hidden="true" />
            স্পেশাল {PRICE.discountLabel} ছাড় চলছে
          </div>
        )}

        <div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">আজই কোর্সটি কিনুন</h2>
          <p className="mt-2 text-sm text-slate-400">এককালীন পেমেন্টে লাইফটাইম অ্যাক্সেস — কোনো মাসিক চার্জ নেই</p>
        </div>

        {left && (
          <div role="timer" aria-label="অফার শেষ হতে বাকি সময়">
            <p className="mb-3 text-xs font-semibold text-slate-400">অফার শেষ হতে বাকি</p>
            <div className="flex justify-center gap-2 sm:gap-3">
              {left.days > 0 && <TimeBox value={toBnDigits(left.days)} label="দিন" />}
              <TimeBox value={left.hours} label="ঘণ্টা" />
              <TimeBox value={left.minutes} label="মিনিট" />
              <TimeBox value={left.seconds} label="সেকেন্ড" />
            </div>
          </div>
        )}

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
          <Link
            to="/checkout"
            className="inline-block w-full max-w-md rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:brightness-110 active:scale-[0.99] sm:text-lg"
          >
            বিকাশ / নগদ দিয়ে এখনই কিনুন →
          </Link>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <Lock className="size-3.5" aria-hidden="true" />
            পেমেন্ট যাচাই হলেই লগইন করে কোর্স দেখা শুরু করুন
          </p>
        </div>

        <div className="border-t border-slate-800 pt-8 text-left">
          <h3 className="mb-5 text-center text-lg font-bold text-white">কীভাবে কিনবেন? মাত্র ৩টি ধাপ</h3>
          <ol className="grid gap-4 sm:grid-cols-3">
            {HOW_TO_BUY.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-emerald-500 font-sans text-sm font-extrabold text-slate-950">
                  {toBnDigits(i + 1)}
                </span>
                <p className="mt-3 font-bold text-white">{step.title}</p>
                <p className="mt-1 text-sm text-slate-400">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
