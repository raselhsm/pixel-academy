import React from 'react';
import { 
  Award, 
  Camera, 
  CheckCircle2, 
  Sparkles, 
  Quote, 
  Film, 
  Layers, 
  SlidersHorizontal 
} from 'lucide-react';

export default function InstructorProfile({ onEnrollClick }) {
  return (
    <section id="instructor" className="py-20 md:py-28 bg-[#07080c] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Instructor Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-emerald-500/30 p-2 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80" 
                  alt="Julian Sterling - Lead Instructor"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Overlaid Badges */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>Sony Global Ambassador</span>
                    </div>
                    <p className="text-white font-extrabold text-base font-heading">
                      Julian Sterling
                    </p>
                    <p className="text-xs text-slate-300">
                      14+ Years Editorial & Commercial Color Grading
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Credibility Pill */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0e121c] border border-emerald-500/40 p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Published Work</span>
                <span className="text-[11px] text-slate-400">Vogue • Nat Geo • Apple • Sony</span>
              </div>
            </div>
          </div>

          {/* Instructor Bio & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet Your Instructor</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-6 leading-tight">
              "Great editing isn't about hiding flaws. <br className="hidden sm:inline" />
              It's about <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">sculpting emotion.</span>"
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Over the past 14 years, I have graded editorial covers in Paris, high-speed automotive campaigns in Germany, 
                and remote landscapes in the sub-arctic. Time and time again, I see talented photographers stall because 
                they rely on generic presets and random slider twiddling.
              </p>
              <p>
                In Pixel Academy, I pull back the curtain on the actual color science: how the human eye perceives tonal roll-off, 
                how to carve depth with micro-contrast, and how to calibrate complementary hues so your work looks cohesive in any gallery or magazine.
              </p>
            </div>

            {/* Checklist of what Julian covers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Zero fluff: 100% practical, click-for-click guidance',
                'Download the exact RAW files from my commercial jobs',
                'Personal weekly Discord feedback on student work',
                'Lifetime access to my evolving preset collection'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Gear & Tools Box */}
            <div className="p-5 rounded-2xl bg-[#0c0f17] border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-xs font-bold text-white block">Primary Gear & System:</span>
                  <span className="text-[11px] font-mono text-slate-400">Sony A7R V • Leica M11 • Adobe Lightroom Classic 2026</span>
                </div>
              </div>

              <button
                onClick={() => onEnrollClick()}
                className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md shadow-emerald-500/20"
              >
                Learn With Julian
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
