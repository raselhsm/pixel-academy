import { Link } from 'react-router';
import { ArrowRight, Check, Lock, ShieldCheck } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { useCourseIncludes } from '../hooks/useCourseOutline';
import { toBnDigits } from '../lib/format';
import { GUARANTEE, HOW_TO_BUY, OFFER_ENDS_AT, PRICE } from '../data/homeContent';

function TimeBox({ value, label }) {
  return (
    <div className="w-16 rounded-xl border border-slate-800 bg-slate-950/70 py-2 sm:w-20">
      <div className="font-sans text-2xl font-extrabold tabular-nums text-white sm:text-3xl">{value}</div>
      <div className="text-[11px] text-slate-400">{label}</div>
    </div>
  );
}

export default function Pricing() {
  // Countdown only appears while a real offer deadline is set in homeContent.js.
  const left = useCountdown(OFFER_ENDS_AT);
  const includes = useCourseIncludes();

  return (
    <section id="pricing" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative space-y-8 overflow-hidden rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-slate-900 to-[#0B0F17] p-6 text-center shadow-2xl glow-emerald-lg sm:p-10 lg:p-12">
        <div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">আজই কোর্সে ভর্তি হয়ে শেখা শুরু করুন</h2>
          <p className="mt-2 text-sm text-slate-400">এককালীন পেমেন্টে লাইফটাইম অ্যাক্সেস • কোনো গোপন বা মাসিক ফি নেই</p>
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

        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 text-left">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-4 py-3 text-xs sm:px-6">
            <span className="font-bold text-emerald-400">✨ কোর্সের সাথে যা যা পাচ্ছেন</span>
          </div>
          <ul className="divide-y divide-slate-800/80 px-4 sm:px-6">
            {includes.map((item) => (
              <li key={item} className="flex items-center justify-between gap-3 py-3 text-sm text-slate-200">
                <span className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" strokeWidth={3} aria-hidden="true" />
                  {item}
                </span>
                <span className="shrink-0 text-xs font-bold text-emerald-400">
                  {/সার্টিফিকেট|প্রিসেট|RAW|গ্রুপ/.test(item) ? 'ফ্রি' : 'অন্তর্ভুক্ত'}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t-2 border-dashed border-slate-800 bg-emerald-950/30 px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>নিয়মিত মূল্য:</span>
              <s className="font-sans text-base">{PRICE.regular}</s>
            </div>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-base font-bold text-white sm:text-lg">এখনকার মূল্য:</span>
              <span className="flex items-baseline gap-2">
                <span className="font-sans text-3xl font-extrabold text-emerald-400 sm:text-4xl">{PRICE.offer}</span>
                <span className="rounded border border-red-500/30 bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-300">{PRICE.discountLabel} সাশ্রয়</span>
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/checkout"
            className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 py-4 text-lg font-extrabold text-slate-950 shadow-2xl shadow-emerald-500/30 transition hover:brightness-110 active:scale-[0.98]"
          >
            বিকাশ / নগদ দিয়ে ভর্তি হন
            <ArrowRight className="size-5" strokeWidth={2.5} aria-hidden="true" />
          </Link>
          <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <Lock className="size-3.5 text-emerald-400" aria-hidden="true" />
            পেমেন্ট যাচাই হলেই লগইন করে সব লেসন দেখতে পারবেন
          </p>
          <a
            href="#guarantee"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/40 px-4 py-1.5 text-xs font-semibold text-emerald-300 hover:underline"
          >
            <ShieldCheck className="size-4 text-emerald-400" aria-hidden="true" />
            {GUARANTEE.days} দিনের মানি-ব্যাক গ্যারান্টি • কোনো ঝুঁকি নেই
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-left">
          <h3 className="mb-5 text-center text-lg font-bold text-white">ভর্তি হওয়ার সহজ ৩টি ধাপ</h3>
          <ol className="grid gap-4 sm:grid-cols-3">
            {HOW_TO_BUY.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-emerald-500 font-sans text-sm font-extrabold text-slate-950">
                  {toBnDigits(i + 1)}
                </span>
                <p className="mt-3 font-bold text-white">{step.title}</p>
                <p className="mt-1 text-xs text-slate-400">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
