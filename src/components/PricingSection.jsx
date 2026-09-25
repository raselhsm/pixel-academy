import React from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Clock, 
  HelpCircle,
  Flame
} from 'lucide-react';

export default function PricingSection({ onEnrollClick }) {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#090b10] border-t border-white/5 relative">
      {/* Background glow behind featured card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            One-Time Payment. Lifetime Mastery.
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Say goodbye to endless monthly software subscriptions. Pay once, learn forever, and keep all presets & RAWs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Plan 1: Single Course Pass */}
          <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Single Focus
              </span>
              <h3 className="text-2xl font-bold text-white font-heading mb-2">
                Single Masterclass
              </h3>
              <p className="text-xs text-slate-400 mb-6 min-h-[36px]">
                Choose any single masterclass of your choice (e.g. Flagship, Portraits, or Landscapes).
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold text-white font-heading">$79</span>
                <span className="text-sm text-slate-500 line-through">$149</span>
                <span className="text-xs text-slate-400 ml-1">one-time</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/5 text-xs text-slate-300">
                {[
                  'Full access to 1 chosen masterclass',
                  '15+ curated RAW exercise files',
                  '10 signature course presets',
                  'Course certificate of completion',
                  'Standard email support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <button
                onClick={() => onEnrollClick({ title: 'Single Masterclass Pass', price: 79 })}
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 transition-colors text-center block border border-slate-700"
              >
                Select Single Course
              </button>
            </div>
          </div>

          {/* Plan 2: ALL-ACCESS MASTER PASS (Featured) */}
          <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0f191a] via-[#0d141e] to-[#090b10] border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20 flex flex-col justify-between relative transform lg:-translate-y-4">
            
            {/* Ribbon Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-500/40 flex items-center gap-1.5 whitespace-nowrap">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>MOST POPULAR • BEST VALUE (SAVE 78%)</span>
            </div>

            <div>
              <div className="flex items-center justify-between mt-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                  Complete Academy Pass
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                  LIFETIME
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-white font-heading mb-2">
                All-Access Pass
              </h3>
              <p className="text-xs text-slate-300 mb-6 min-h-[36px]">
                Instant lifetime access to our entire course library, all 45 presets, and uncompressed RAW downloads.
              </p>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-white font-heading">$149</span>
                <span className="text-base text-slate-400 line-through">$680</span>
                <span className="text-xs text-emerald-400 font-semibold ml-1">One-time payment</span>
              </div>
              <p className="text-[11px] text-emerald-300/90 font-mono mb-6">
                Use code <span className="underline font-bold">PIXELPRO</span> for extra seasonal discount!
              </p>

              <div className="space-y-3.5 pt-6 border-t border-emerald-500/20 text-xs text-slate-200">
                {[
                  'ALL 6 Masterclasses (52+ hours of 4K content)',
                  'Complete 45 Signature Presets Suite (.xmp & .dng)',
                  '85+ Uncompressed RAW Files (Sony, Canon, Leica)',
                  'Private Discord Critique Lounge Access',
                  'Weekly live Q&A & Photo Teardowns with Julian',
                  'Verified Certificate of Photo Mastery',
                  'ALL Future Courses & 2026+ Updates Included Free'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-500/20">
              <button
                onClick={() => onEnrollClick({ title: 'All-Access Master Pass', price: 149 })}
                className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:brightness-110 shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <span>Get Instant All-Access ($149)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Plan 3: Academy Pro + Mentorship */}
          <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                1-On-1 Feedback
              </span>
              <h3 className="text-2xl font-bold text-white font-heading mb-2">
                Pro + Mentorship
              </h3>
              <p className="text-xs text-slate-400 mb-6 min-h-[36px]">
                Everything in All-Access plus personal 1-on-1 portfolio review and RAW workflow audit by Julian.
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold text-white font-heading">$299</span>
                <span className="text-sm text-slate-500 line-through">$599</span>
                <span className="text-xs text-slate-400 ml-1">one-time</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/5 text-xs text-slate-300">
                {[
                  'Everything included in All-Access Pass',
                  '60-Min 1-on-1 Video Portfolio & Catalog Teardown',
                  'Custom-tailored preset tailored to your style',
                  'Priority feedback in private Mentor channel',
                  'Commercial client pitching templates & contract guides'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <button
                onClick={() => onEnrollClick({ title: 'Academy Pro + 1-on-1 Mentorship', price: 299 })}
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 transition-colors text-center block border border-slate-700"
              >
                Apply for Mentorship
              </button>
            </div>
          </div>

        </div>

        {/* 30-Day Money Back Guarantee Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-[#0c1017] border border-emerald-500/20 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              Risk-Free 30-Day Unconditional Guarantee
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              If your editing doesn't improve drastically, or you simply change your mind, send us a quick email within 30 days for a prompt, 100% full refund. No questions asked.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
