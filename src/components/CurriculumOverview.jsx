import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  PlayCircle, 
  Download, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  FileCode,
  ArrowRight
} from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/coursesData';

export default function CurriculumOverview({ onEnrollClick, onOpenPreview }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleModule = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-[#090b10] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Syllabus</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Inside the Flagship Curriculum
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            6 modules engineered to bridge the gap between technical color science and intuitive fine-art aesthetics.
          </p>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 text-center">
          <div className="bg-[#0e111a] p-4 rounded-2xl border border-white/5">
            <span className="text-2xl font-black text-emerald-400 font-heading">6</span>
            <span className="block text-xs text-slate-400 mt-1">Core Modules</span>
          </div>
          <div className="bg-[#0e111a] p-4 rounded-2xl border border-white/5">
            <span className="text-2xl font-black text-white font-heading">52</span>
            <span className="block text-xs text-slate-400 mt-1">4K Video Lessons</span>
          </div>
          <div className="bg-[#0e111a] p-4 rounded-2xl border border-white/5">
            <span className="text-2xl font-black text-white font-heading">14.5</span>
            <span className="block text-xs text-slate-400 mt-1">Total Hours</span>
          </div>
          <div className="bg-[#0e111a] p-4 rounded-2xl border border-white/5">
            <span className="text-2xl font-black text-emerald-400 font-heading">85+</span>
            <span className="block text-xs text-slate-400 mt-1">RAW Files Included</span>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {CURRICULUM_MODULES.map((module, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div 
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isExpanded 
                    ? 'bg-[#0e121c] border-emerald-500/40 shadow-xl shadow-emerald-950/20' 
                    : 'bg-[#0a0d14] border-white/5 hover:border-slate-800'
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleModule(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`text-sm sm:text-base font-mono font-bold px-3 py-1.5 rounded-xl border ${
                      isExpanded 
                        ? 'bg-emerald-500 text-black border-emerald-400 shadow-md shadow-emerald-500/20' 
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}>
                      MOD {module.number}
                    </span>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                        {module.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          {module.duration}
                        </span>
                        <span>•</span>
                        <span>{module.lessons.length} Lessons</span>
                        <span>•</span>
                        <span className="text-emerald-400 font-medium">Includes RAW Exercise</span>
                      </div>
                    </div>
                  </div>

                  <div className={`p-2 rounded-xl border transition-colors ${
                    isExpanded ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'text-slate-500 border-transparent'
                  }`}>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5">
                    <div className="space-y-3 mt-2">
                      {module.lessons.map((lesson, lIdx) => (
                        <div 
                          key={lIdx}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-slate-700/80 transition-all text-xs sm:text-sm group"
                        >
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                            <span className="text-slate-200 group-hover:text-white font-medium">
                              {module.number}.{lIdx + 1} {lesson}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                            {lIdx === 0 && (
                              <button
                                onClick={() => onOpenPreview()}
                                className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30 hover:bg-emerald-500 hover:text-black transition-colors"
                              >
                                Free Preview
                              </button>
                            )}
                            <span className="text-[11px] font-mono text-slate-500">
                              {12 + (lIdx * 3)}m
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                      <div className="flex items-center gap-2 text-emerald-300">
                        <Download className="w-4 h-4" />
                        <span>Includes {module.number === '01' ? '12' : '15'} Downloadable RAW Practice Files (.ARW & .CR3)</span>
                      </div>

                      <button
                        onClick={() => onEnrollClick()}
                        className="text-xs font-bold text-white hover:text-emerald-400 flex items-center gap-1 group"
                      >
                        <span>Unlock All Lessons</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
