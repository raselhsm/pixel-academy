import { Gift } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { toBnDigits } from '../lib/format';
import { BONUS_TOTAL, BONUSES, PRICE } from '../data/homeContent';

export default function BonusStack() {
  return (
    <section className="border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="🎁 কোর্সের সাথে ফ্রি বোনাস"
          title={`কেন ${PRICE.offer} একদম জলের দামে?`}
          subtitle="কোর্সের সাথে এই বোনাসগুলো আলাদা কিনতে হবে না — সবই বান্ডেলের ভেতরে।"
        />
        <ul className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">
          {BONUSES.map(({ title, value }, i) => (
            <li key={title} className="flex items-center gap-4 border-b border-slate-800 p-4 last:border-b-0 sm:p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                <Gift className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold text-amber-400">বোনাস {toBnDigits(i + 1)}</span>
                <span className="block font-semibold leading-snug text-white">{title}</span>
              </span>
              <span className="shrink-0 text-right text-xs text-slate-400">
                মূল্য
                <span className="block font-sans text-sm font-bold text-slate-200">{value}</span>
              </span>
            </li>
          ))}
          <li className="flex flex-wrap items-center justify-between gap-2 bg-gradient-to-r from-brand-600/25 to-brand-400/10 p-5">
            <span className="font-bold text-white">
              মোট মূল্য: <s className="font-sans text-slate-400">{BONUS_TOTAL}</s>
            </span>
            <span className="rounded-lg bg-amber-500 px-3 py-1 text-sm font-extrabold text-slate-950">আজ পাচ্ছেন ফ্রিতে!</span>
          </li>
        </ul>
        <div className="mt-8 text-center">
          <a href="#checkout" className="cta-glow inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 px-8 text-lg font-extrabold text-white transition hover:brightness-110">
            বোনাসসহ ভর্তি হোন — {PRICE.offer}
          </a>
        </div>
      </div>
    </section>
  );
}
