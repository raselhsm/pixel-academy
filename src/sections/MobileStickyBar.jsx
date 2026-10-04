import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { formatLeft } from '../lib/format';
import { OFFER_ENDS_AT, PRICE } from '../data/homeContent';

// Phones only. Slides away while the checkout box itself is on screen, so the
// enrol button isn't doubled up.
export default function MobileStickyBar() {
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const left = useCountdown(OFFER_ENDS_AT);

  useEffect(() => {
    const target = document.getElementById('checkout');
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setCheckoutVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-brand-500/30 bg-navy/95 px-3 pb-[max(0.625rem,env(safe-area-inset-bottom))] pt-2.5 shadow-2xl backdrop-blur-lg transition-transform duration-300 md:hidden ${
        checkoutVisible ? 'translate-y-full' : 'translate-y-0'
      }`}
      inert={checkoutVisible}
    >
      <div className="min-w-0">
        <div className="flex items-baseline gap-1.5 font-sans">
          <span className="text-lg font-extrabold text-white">{PRICE.offer}</span>
          <s className="text-[11px] text-slate-500">{PRICE.regular}</s>
        </div>
        {left ? (
          <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
            <Clock className="size-3" aria-hidden="true" />
            <span className="font-sans tabular-nums">{formatLeft(left)}</span>
          </span>
        ) : (
          <span className="text-[11px] font-semibold text-brand-300">লাইফটাইম অ্যাক্সেস</span>
        )}
      </div>
      <a
        href="#checkout"
        className="cta-glow shrink-0 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 px-5 py-3 text-sm font-black text-white active:scale-95"
      >
        এখনই ভর্তি হোন
      </a>
    </div>
  );
}
