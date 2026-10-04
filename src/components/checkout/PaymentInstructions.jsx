import CopyButton from '../ui/CopyButton';
import { PAYMENT, PRICE } from '../../data/homeContent';
import { toBnDigits } from '../../lib/format';

const METHOD_STYLES = {
  bkash: {
    active: 'border-[#E2136E] bg-[#E2136E]/5 text-[#E2136E] ring-1 ring-[#E2136E]/20',
    dot: 'bg-[#E2136E]',
  },
  nagad: {
    active: 'border-[#F7941D] bg-[#F7941D]/5 text-[#F7941D] ring-1 ring-[#F7941D]/20',
    dot: 'bg-[#F7941D]',
  },
};

export function MethodPicker({ value, onChange }) {
  return (
    <div role="radiogroup" aria-label="পেমেন্ট মেথড" className="grid grid-cols-2 gap-3">
      {Object.entries(PAYMENT.methods).map(([key, method]) => {
        const selected = value === key;
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(key)}
            className={`flex items-center justify-center gap-2.5 rounded-xl border-2 px-4 py-3 text-base font-bold shadow-2xs transition ${
              selected ? METHOD_STYLES[key].active : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <span className={`size-2.5 rounded-full ${METHOD_STYLES[key].dot}`} aria-hidden="true" />
            {method.label}
          </button>
        );
      })}
    </div>
  );
}

export default function PaymentInstructions({ method }) {
  const m = PAYMENT.methods[method];

  return (
    <ol className="mt-4 space-y-3 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 text-sm text-slate-700 sm:p-5 shadow-2xs">
      <li>
        <span className="font-bold text-slate-900">১.</span> {m.app} খুলুন অথবা <span className="font-sans font-semibold text-slate-900">{m.ussd}</span> ডায়াল
        করুন → <span className="font-bold text-slate-900">{PAYMENT.type}</span> সিলেক্ট করুন।
      </li>
      <li className="flex flex-wrap items-center gap-2">
        <span>
          <span className="font-bold text-slate-900">২.</span> এই নম্বরে পাঠান:
        </span>
        <span className="font-sans text-lg font-extrabold tracking-wide text-slate-900">{PAYMENT.number}</span>
        <CopyButton text={PAYMENT.number} label="নম্বর কপি" />
      </li>
      <li className="flex flex-wrap items-center gap-2">
        <span>
          <span className="font-bold text-slate-900">৩.</span> টাকার পরিমাণ:
        </span>
        <span className="font-sans text-lg font-extrabold text-slate-900">৳ {toBnDigits(PRICE.amount)}</span>
        <CopyButton text={String(PRICE.amount)} label="কপি" />
      </li>
      <li>
        <span className="font-bold text-slate-900">৪.</span> পেমেন্ট সফল হলে মেসেজে পাওয়া <span className="font-bold text-slate-900">TrxID</span>{' '}
        নিচের ঘরে লিখুন।
      </li>
    </ol>
  );
}
