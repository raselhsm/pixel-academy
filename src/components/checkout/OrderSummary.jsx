import { Check, ShieldCheck } from 'lucide-react';
import { COURSE, COURSE_INCLUDES, HERO_IMAGE, PRICE } from '../../data/homeContent';

export default function OrderSummary() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
      <div className="flex gap-4">
        <img src={HERO_IMAGE} alt="" className="size-20 shrink-0 rounded-xl object-cover" />
        <div>
          <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-400">{COURSE.format}</span>
          <h2 className="mt-1.5 font-bold leading-snug text-white">{COURSE.title}</h2>
          <p className="text-xs text-slate-400">{COURSE.subtitle}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
        <span className="text-sm text-slate-400">মোট</span>
        <div className="flex items-baseline gap-2 font-sans">
          <s className="text-sm text-slate-500">{PRICE.regular}</s>
          <span className="text-2xl font-extrabold text-emerald-400">{PRICE.offer}</span>
        </div>
      </div>

      <ul className="mt-5 hidden space-y-2.5 border-t border-slate-800 pt-4 text-sm text-slate-300 lg:block">
        {COURSE_INCLUDES.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" strokeWidth={3} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-5 flex items-start gap-2 rounded-xl bg-slate-950/50 p-3 text-xs leading-relaxed text-slate-400">
        <ShieldCheck className="size-4 shrink-0 text-emerald-400" aria-hidden="true" />
        এককালীন পেমেন্ট, কোনো মাসিক চার্জ নেই। পেমেন্ট যাচাই হলেই লাইফটাইম অ্যাক্সেস।
      </p>
    </div>
  );
}
