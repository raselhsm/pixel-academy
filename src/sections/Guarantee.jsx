import { ChevronDown } from 'lucide-react';
import { GUARANTEE } from '../data/homeContent';

export default function Guarantee() {
  return (
    <section id="guarantee" className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="flex flex-col items-center gap-8 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6 sm:p-10 md:flex-row md:items-start md:gap-10">
        {/* Seal-style badge */}
        <div aria-hidden="true" className="flex size-40 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-emerald-400/60">
          <div className="flex size-[85%] flex-col items-center justify-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30">
            <span className="font-heading text-6xl font-extrabold leading-none text-emerald-300">{GUARANTEE.days}</span>
            <span className="mt-1 text-sm font-semibold text-emerald-200">দিনের গ্যারান্টি</span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">ঝুঁকি পুরোটাই আমাদের</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {GUARANTEE.summary} কোর্সটা নিজে দেখে তারপর সিদ্ধান্ত নিন — আমরা জানি কোর্সে কী আছে, তাই এই নিশ্চয়তা দিতে পারি।
          </p>

          <details className="group mt-6 rounded-xl border border-slate-700/70 text-left open:bg-slate-900/50">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 font-semibold text-emerald-300 [&::-webkit-details-marker]:hidden">
              রিফান্ডের পুরো নিয়ম পড়ুন
              <ChevronDown className="size-5 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <ol className="list-decimal space-y-2 px-4 pb-4 pl-9 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
              {GUARANTEE.terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          </details>
        </div>
      </div>
    </section>
  );
}
