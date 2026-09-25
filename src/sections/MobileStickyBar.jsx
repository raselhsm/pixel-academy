import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { PRICE } from '../data/homeContent';

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
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-slate-800 bg-[#090d14]/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        pricingVisible ? 'translate-y-full' : 'translate-y-0'
      }`}
      inert={pricingVisible}
    >
      <div>
        <span className="text-xs text-slate-400">রেকর্ডেড কোর্স • লাইফটাইম</span>
        <div className="flex items-baseline gap-2 font-sans">
          <span className="text-lg font-bold text-emerald-400">{PRICE.offer}</span>
          <s className="text-xs text-slate-500">{PRICE.regular}</s>
        </div>
      </div>
      <Link
        to="/checkout"
        className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20"
      >
        কোর্সটি কিনুন →
      </Link>
    </div>
  );
}
