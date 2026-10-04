import { ChevronDown, ShieldCheck } from 'lucide-react';
import { GUARANTEE, PRICE } from '../data/homeContent';

export default function Guarantee() {
  return (
    <section id="guarantee" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-studio-lg sm:p-12">
        <div className="relative flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
          <div aria-hidden="true" className="flex size-20 sm:size-24 shrink-0 items-center justify-center rounded-3xl border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-sm">
            <ShieldCheck className="size-12 sm:size-14 text-emerald-600" strokeWidth={1.8} />
          </div>

          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
              🛡️ ঝুঁকিমুক্ত সিদ্ধান্ত
            </span>
            <h2 className="text-2xl font-extrabold text-[#0F172A] sm:text-3xl">কোনো প্রশ্ন ছাড়াই {GUARANTEE.days} দিনে পুরো টাকা ফেরত</h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              অ্যাক্সেস চালু হওয়ার পর {GUARANTEE.days} দিন ক্লাসগুলো দেখুন, প্র্যাকটিস করুন। কোর্স আপনার প্রত্যাশা পূরণ না করলে
              হোয়াটসঅ্যাপে জানান — কোনো জেরা ছাড়াই ৩ কর্মদিবসের মধ্যে আপনার পাঠানো পুরো {PRICE.offer.replace('৳ ', '')} টাকা যে বিকাশ/নগদ
              নম্বর থেকে পাঠিয়েছিলেন সেখানেই ফেরত দেওয়া হবে।
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold text-emerald-800 sm:justify-start">
              <span>✓ পুরো টাকা ফেরত</span>
              <span>✓ কোনো জেরা নেই</span>
              <span>✓ বিকাশ/নগদে সরাসরি রিফান্ড</span>
            </div>

            <details className="group rounded-xl border border-slate-200 text-left transition open:bg-slate-50/50">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 text-sm font-semibold text-slate-800 hover:text-[#0284C7] [&::-webkit-details-marker]:hidden">
                রিফান্ডের পুরো নিয়ম পড়ুন
                <ChevronDown className="size-4 text-slate-500 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
              </summary>
              <ol className="list-decimal space-y-2 px-4 pb-4 pl-9 text-sm leading-relaxed text-slate-600 marker:text-slate-400">
                {GUARANTEE.terms.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
