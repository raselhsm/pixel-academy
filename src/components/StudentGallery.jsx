import React from 'react';
import { Star, CheckCircle, Quote, Sparkles, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/coursesData';

export default function StudentGallery({ onEnrollClick }) {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#07080c] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Real Student Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Rated 4.98 / 5 By 18,400+ Editors
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Hear from commercial photographers, wedding creators, and landscape artists who transformed their visual identity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="p-8 rounded-3xl glass-card border border-white/5 hover:border-emerald-500/30 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono font-bold text-slate-400 ml-2">5.0</span>
                </div>

                {/* Content Quote */}
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-3.5">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-500/30"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">{t.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-400 block">{t.role}</span>
                  <span className="text-[10px] text-emerald-400/80 font-mono">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0a0d14] border border-white/5 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-400">
          <div>
            <span className="text-xl font-bold text-white block font-heading">100%</span>
            <span>Money-Back Guarantee</span>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10" />
          <div>
            <span className="text-xl font-bold text-white block font-heading">4.98 / 5.0</span>
            <span>Average Course Rating</span>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10" />
          <div>
            <span className="text-xl font-bold text-white block font-heading">48,000+</span>
            <span>Preset Downloads</span>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10" />
          <div>
            <span className="text-xl font-bold text-white block font-heading">135</span>
            <span>Countries Represented</span>
          </div>
        </div>

      </div>
    </section>
  );
}
