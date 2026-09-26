import { ChevronDown, ShieldCheck } from 'lucide-react';
import { GUARANTEE, PRICE } from '../data/homeContent';

export default function Guarantee() {
  return (
    <section id="guarantee" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-950/30 via-slate-900 to-[#0B0F17] p-8 shadow-2xl sm:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-emerald-500/10 blur-[90px]" />

        <div className="relative flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
          <div aria-hidden="true" className="flex size-28 shrink-0 items-center justify-center rounded-3xl border-2 border-emerald-400/50 bg-emerald-500/10 shadow-2xl shadow-emerald-500/25 ring-8 ring-emerald-500/10">
            <ShieldCheck className="size-16 text-emerald-400" strokeWidth={1.8} />
          </div>

          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
              🛡️ ঝুঁকিমুক্ত সিদ্ধান্ত
            </span>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">কোনো প্রশ্ন ছাড়াই {GUARANTEE.days} দিনে পুরো টাকা ফেরত</h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              অ্যাক্সেস চালু হওয়ার পর {GUARANTEE.days} দিন ক্লাসগুলো দেখুন, প্র্যাকটিস করুন। কোর্স আপনার প্রত্যাশা পূরণ না করলে
              হোয়াটসঅ্যাপে জানান — কোনো জেরা ছাড়াই ৩ কর্মদিবসের মধ্যে আপনার পাঠানো পুরো {PRICE.offer.replace('৳ ', '')} টাকা যে বিকাশ/নগদ
              নম্বর থেকে পাঠিয়েছিলেন সেখানেই ফেরত দেওয়া হবে।
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold text-emerald-400 sm:justify-start">
              <span>✓ পুরো টাকা ফেরত</span>
              <span>✓ কোনো জেরা নেই</span>
              <span>✓ বিকাশ/নগদে সরাসরি রিফান্ড</span>
            </div>

            <details className="group rounded-xl border border-slate-700/70 text-left open:bg-slate-900/50">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 text-sm font-semibold text-emerald-300 [&::-webkit-details-marker]:hidden">
                রিফান্ডের পুরো নিয়ম পড়ুন
                <ChevronDown className="size-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
              </summary>
              <ol className="list-decimal space-y-2 px-4 pb-4 pl-9 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
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
