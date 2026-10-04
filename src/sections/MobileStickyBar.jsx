import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { GUARANTEE, HERO_IMAGE, PRICE } from '../data/homeContent';

// Hidden while the pricing card itself is on screen, so the CTA isn't doubled up.
export default function MobileStickyBar() {
  const [pricingVisible, setPricingVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById('pricing');
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setPricingVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-slate-200/90 bg-white/95 px-3.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] pt-2.5 shadow-studio-lg backdrop-blur-md transition-transform duration-300 md:hidden ${
        pricingVisible ? 'translate-y-full' : 'translate-y-0'
      }`}
      inert={pricingVisible}
    >
      <div className="flex items-center gap-2.5">
        <img src={HERO_IMAGE} alt="" className="size-11 shrink-0 rounded-lg border border-slate-200 object-cover shadow-xs" />
        <div>
          <div className="flex items-baseline gap-1.5 font-sans">
            <span className="text-lg font-extrabold text-[#0F172A]">{PRICE.offer}</span>
            <s className="text-[11px] text-slate-400">{PRICE.regular}</s>
          </div>
          <span className="block text-[10px] font-semibold text-emerald-800">🛡️ {GUARANTEE.days} দিনের মানি-ব্যাক গ্যারান্টি</span>
        </div>
      </div>
      <Link
        to="/checkout"
        className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-slate-800 active:scale-95"
      >
        এখনই কিনুন →
      </Link>
    </div>
  );
}
