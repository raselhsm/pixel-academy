import React from 'react';
import { 
  Play, 
  ArrowRight, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Layers, 
  Download, 
  Award,
  SlidersHorizontal,
  Camera
} from 'lucide-react';

export default function Hero({ onEnrollClick, onOpenPreview }) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-teal-500/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>The 2026 Master Lightroom Editing System</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-white/80">Domestika & MasterClass Aesthetic</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
            Turn Flat RAW Photos Into{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
              Cinematic Works of Art.
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full opacity-60"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Master the precise color grading, tone curve architecture, and surgical AI masking workflows 
            used by commercial colorists and Vogue contributors. Stop guessing sliders—start creating timeless visuals.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={() => onEnrollClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:brightness-110 shadow-xl shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-3 transform active:scale-95 group"
            >
              <span>Enroll In Masterclass</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onOpenPreview()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md group"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black text-emerald-400 transition-colors">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch 15-Min Free Lesson</span>
            </button>
          </div>

          {/* Social Proof & Rating Bar */}
          <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-xs text-slate-400">
            {/* Avatars + Rating */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#08090d] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#08090d] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#08090d] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#08090d] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Student" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white ml-1">4.98</span>
                </div>
                <span className="text-slate-400">18,400+ Photographers Taught</span>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-white/10" />

            {/* Feature Highlights */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">85+ RAW Practice Files</span>
              </div>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">45 Signature Presets</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">30-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
