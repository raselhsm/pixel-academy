import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { toBnDigits } from '../lib/format';
import { FAQS } from '../data/homeContent';

function FaqItem({ number, question, answer }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${number}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition duration-200 shadow-studio ${
        open ? 'border-sky-300 bg-sky-50/20 shadow-studio-md' : 'border-slate-200/80 hover:border-slate-300'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-bold text-[#0F172A] sm:text-lg"
      >
        <span>
          {toBnDigits(number)}. {question}
        </span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${
            open ? 'rotate-180 bg-sky-100 text-[#0284C7]' : ''
          }`}
        >
          <ChevronDown className="size-4" strokeWidth={2.5} aria-hidden="true" />
        </span>
      </button>
      {open && (
        <p id={id} className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-20 border-t border-slate-200/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-[#E0F2FE] px-3.5 py-1 text-xs font-bold text-[#0369A1]">
          ❓ সচরাচর জিজ্ঞাসিত প্রশ্ন
        </span>
        <h2 className="text-3xl font-extrabold text-[#0F172A] sm:text-4xl">সাধারণ কিছু জিজ্ঞাসা ও উত্তর</h2>
        <p className="text-sm text-slate-600 sm:text-base">কোর্সে ভর্তি হওয়ার আগে সবচেয়ে বেশি আসা প্রশ্নের খোলামেলা উত্তর:</p>
      </div>

      <div className="mt-10 space-y-3.5">
        {FAQS.map(({ question, answer }, i) => (
          <FaqItem key={question} number={i + 1} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
}
