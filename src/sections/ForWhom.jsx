import { Check, X } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { FOR_WHOM, NOT_FOR } from '../data/homeContent';

export default function ForWhom() {
  return (
    <section id="for-whom" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading eyebrow="কাদের জন্য" title="এই কোর্সটি আপনার জন্য, যদি…" />

      <div className="grid gap-5 md:grid-cols-5">
        <ul className="space-y-3 rounded-3xl border border-emerald-500/30 bg-emerald-950/25 p-6 sm:p-8 md:col-span-3">
          {FOR_WHOM.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-slate-200 sm:text-lg">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-slate-950">
                <Check className="size-4" strokeWidth={3} aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 md:col-span-2">
          <h3 className="font-bold text-slate-300">আপনার জন্য নয়, যদি…</h3>
          <ul className="mt-4 space-y-3">
            {NOT_FOR.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                <X className="mt-0.5 size-4 shrink-0 text-red-400/80" strokeWidth={3} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
