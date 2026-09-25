import { Check, X } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { OUTCOMES, PAIN_POINTS } from '../data/homeContent';

function ComparisonCard({ tone, title, items }) {
  const positive = tone === 'positive';
  const Icon = positive ? Check : X;

  return (
    <div
      className={`space-y-5 rounded-3xl border p-6 sm:p-8 ${
        positive
          ? 'border-emerald-500/30 bg-emerald-950/30 shadow-xl shadow-emerald-500/5'
          : 'border-red-500/20 bg-red-950/20'
      }`}
    >
      <h3 className={`flex items-center gap-3 text-lg font-bold ${positive ? 'text-emerald-400' : 'text-red-400'}`}>
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-full ${
            positive ? 'bg-emerald-500/20' : 'bg-red-500/20'
          }`}
        >
          <Icon className="size-4" strokeWidth={3} aria-hidden="true" />
        </span>
        {title}
      </h3>
      <ul className={`space-y-3 text-sm leading-relaxed ${positive ? 'text-slate-300' : 'text-slate-400'}`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Icon
              className={`mt-1 size-3.5 shrink-0 ${positive ? 'text-emerald-400' : 'text-red-400/70'}`}
              strokeWidth={3}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Transformation() {
  return (
    <section id="why" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Transformation"
        title="সাধারণ এডিটর বনাম প্রফেশনাল কালারিস্ট"
        subtitle="ইউটিউবে এলোমেলো ভিডিও দেখে সময় নষ্ট না করে সঠিক গাইডলাইনে শিখুন"
      />
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
        <ComparisonCard tone="negative" title="সঠিক গাইডলাইন ছাড়া শিখলে" items={PAIN_POINTS} />
        <ComparisonCard tone="positive" title="পিক্সেল একাডেমি থেকে শিখলে" items={OUTCOMES} />
      </div>
    </section>
  );
}
