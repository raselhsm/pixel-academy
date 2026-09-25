import { Gift } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { BONUSES } from '../data/homeContent';

export default function Bonuses() {
  return (
    <section id="bonuses" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 p-6 sm:p-10 lg:p-14">
        <SectionHeading
          eyebrow="Free Perks"
          title="কোর্সের সাথে সম্পূর্ণ ফ্রি পাচ্ছেন"
          subtitle="কোনো অতিরিক্ত খরচ ছাড়াই, কোর্সের সাথেই"
        />
        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {BONUSES.map(({ title, description }, i) => (
            <li
              key={title}
              className={`space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-emerald-500/30 ${
                i === BONUSES.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Gift className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
                  কোর্সের সাথে ফ্রি
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
