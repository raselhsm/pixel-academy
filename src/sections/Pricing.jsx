import { Link } from 'react-router';
import { Check, Flame, Lock, ShieldCheck, Sparkles } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { toBnDigits } from '../lib/format';
import { HOW_TO_BUY, OFFER_ENDS_AT, PRICE, VALUE_STACK } from '../data/homeContent';

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
        {/* Scarcity badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold text-emerald-400">
          <Flame className="size-3.5 text-amber-400" aria-hidden="true" />
          ফেসবুক ও ইনস্টাগ্রাম স্পেশাল {PRICE.discountLabel} ছাড় চলছে
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            আজই এনরোল করুন — স্পেশাল অফার মূল্যে
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            এককালীন পেমেন্টে লাইফটাইম অ্যাক্সেস • কোনো লুকায়িত বা মাসিক চার্জ নেই
          </p>
        </div>

        {left && (
          <div role="timer" aria-label="অফার শেষ হতে বাকি সময়" className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              ⏳ আজকের ডিসকাউন্ট শেষ হতে বাকি
            </p>
            <div className="flex justify-center gap-2 sm:gap-3">
              {left.days > 0 && <TimeBox value={toBnDigits(left.days)} label="দিন" />}
              <TimeBox value={left.hours} label="ঘণ্টা" />
              <TimeBox value={left.minutes} label="মিনিট" />
              <TimeBox value={left.seconds} label="সেকেন্ড" />
            </div>
          </div>
        )}

        {/* Value Stack Breakdown Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 text-left">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3 sm:px-6">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Sparkles className="size-4" /> কোর্সের সাথে যা যা পাচ্ছেন
            </span>
            <span className="text-xs font-bold text-slate-400">প্রকৃত বাজারমূল্য</span>
          </div>

          <div className="divide-y divide-slate-800/60 px-4 sm:px-6">
            {VALUE_STACK.map(({ item, value }) => (
              <div key={item} className="flex items-center justify-between gap-4 py-3 text-sm">
                <span className="flex items-center gap-2.5 text-slate-200">
                  <Check className="size-4 shrink-0 text-emerald-400" strokeWidth={3} />
                  <span>{item}</span>
                </span>
                <span className="shrink-0 font-sans text-xs font-semibold text-slate-400 line-through sm:text-sm">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Slashed Total vs Offer Price Footer */}
          <div className="border-t-2 border-dashed border-slate-800 bg-emerald-950/30 px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>সর্বমোট প্রকৃত মূল্য:</span>
              <span className="font-sans text-base line-through">{PRICE.regular}</span>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-base font-bold text-white sm:text-lg">
                স্পেশাল ডিসকাউন্ট অফার মূল্য:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-3xl font-extrabold text-emerald-400 sm:text-4xl">
                  {PRICE.offer}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button & Guarantees */}
        <div className="space-y-3">
          <Link
            to="/checkout"
            className="inline-flex w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 text-lg font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:brightness-110 active:scale-[0.99]"
          >
            বিকাশ / নগদ দিয়ে এখনই ভর্তি হন →
          </Link>

          <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <Lock className="size-3.5" aria-hidden="true" />
            পেমেন্ট যাচাই হওয়ামাত্রই ইনস্ট্যান্ট অ্যাকাউন্ট অ্যাক্সেস পাবেন
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 px-4 py-1.5 text-xs font-semibold text-emerald-300">
            <ShieldCheck className="size-4 text-emerald-400" />
            ৭ দিনের ১০০% মানি-ব্যাক গ্যারান্টি • কোনো ঝুঁকি নেই
          </div>
        </div>

        {/* 3-Step Buying Guide */}
        <div className="border-t border-slate-800 pt-8 text-left">
          <h3 className="mb-5 text-center text-lg font-bold text-white">ভর্তি হওয়ার সহজ ৩টি ধাপ</h3>
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
