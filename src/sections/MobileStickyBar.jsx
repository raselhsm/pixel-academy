import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ShieldCheck } from 'lucide-react';
import { GUARANTEE, PRICE } from '../data/homeContent';

// Persistent Sticky Bottom CTA Bar for Mobile
// Hidden only while the pricing card itself is in full view to prevent duplicate CTAs
export default function MobileStickyBar() {
  const [pricingVisible, setPricingVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById('pricing');
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setPricingVisible(entry.isIntersecting), {
      threshold: 0.3,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-emerald-500/20 bg-[#090d14]/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl backdrop-blur-lg transition-transform duration-300 md:hidden ${
        pricingVisible ? 'translate-y-full' : 'translate-y-0'
      }`}
      inert={pricingVisible}
    >
      <div>
        <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
          <ShieldCheck className="size-3.5" />
          <span>{GUARANTEE.days} দিনের মানি-ব্যাক গ্যারান্টি</span>
        </div>
        <div className="mt-0.5 flex items-baseline gap-2 font-sans">
          <span className="text-xl font-extrabold text-white">{PRICE.offer}</span>
          <s className="text-xs text-slate-500 line-through">{PRICE.regular}</s>
          <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[10px] font-bold text-red-300">
            {PRICE.discountLabel} ছাড়
          </span>
        </div>
      </div>
      <Link
        to="/checkout"
        className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 active:scale-95"
      >
        এখনই ভর্তি হন →
      </Link>
    </div>
  );
}
