import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { GUARANTEE, PRICE } from '../data/homeContent';

// Last push before the footer, for visitors who scrolled the whole page.
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800 py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[680px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold leading-tight text-balance text-white sm:text-5xl">
          আজকের ছবিগুলোই হতে পারে আপনার প্রথম পোর্টফোলিও
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {PRICE.offer} এককালীন, লাইফটাইম অ্যাক্সেস, আর {GUARANTEE.days} দিনের টাকা ফেরতের গ্যারান্টি।
        </p>
        <Link
          to="/checkout"
          className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-10 text-lg font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:brightness-110 sm:w-auto"
        >
          এখনই ভর্তি হন
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
