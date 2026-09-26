import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { toBnDigits } from '../lib/format';
import { FAQS } from '../data/homeContent';

function FaqItem({ number, question, answer }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${number}`;

  return (
    <div className={`overflow-hidden rounded-2xl border bg-slate-900/60 transition ${open ? 'border-emerald-500/40' : 'border-slate-800 hover:border-slate-700'}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-bold text-white sm:text-lg"
      >
        <span>
          {toBnDigits(number)}. {question}
        </span>
        <span className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown className="size-4" strokeWidth={2.5} aria-hidden="true" />
        </span>
      </button>
      {open && (
        <p id={id} className="border-t border-slate-800/60 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-300">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-20 border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
          ❓ সচরাচর জিজ্ঞাসিত প্রশ্ন
        </span>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">সাধারণ কিছু জিজ্ঞাসা ও উত্তর</h2>
        <p className="text-sm text-slate-300">কোর্সে ভর্তি হওয়ার আগে সবচেয়ে বেশি আসা প্রশ্নের খোলামেলা উত্তর:</p>
      </div>

      <div className="mt-10 space-y-4">
        {FAQS.map(({ question, answer }, i) => (
          <FaqItem key={question} number={i + 1} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
}
