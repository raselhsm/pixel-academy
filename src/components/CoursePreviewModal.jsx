import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  ArrowRight,
  Sliders
} from 'lucide-react';

export default function CoursePreviewModal({ isOpen, onClose, course, onEnrollClick }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  const currentCourse = course || {
    title: 'Lightroom Pro: The Complete Color & Raw Mastery',
    tagline: 'Lesson 1.4: Rescuing Blown Highlights and Crafting Natural Roll-off',
    instructor: { name: 'Julian Sterling' },
    price: 119
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0c0f18] border border-emerald-500/30 shadow-2xl overflow-hidden z-10 flex flex-col my-8">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#090b10] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
              Free 4K Sample Lesson Preview
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Mockup */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {/* Simulated Lightroom Workspace Video Scene */}
          <img 
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1600&q=80" 
            alt="Lightroom Masterclass Lesson"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

          {/* Center Play Indicator */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-16 h-16 rounded-full bg-emerald-400/90 text-black flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-1" />
            )}
          </button>

          {/* Simulated Video HUD Overlay */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-emerald-300 font-mono text-[11px] border border-emerald-500/30">
              4K 60FPS • HDR
            </span>
            <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-white font-mono text-[11px] border border-white/10">
              Chapter 01: The Tone Curve
            </span>
          </div>

          {/* Video Bottom Timeline Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
            {/* Timeline scrubber bar */}
            <div className="w-full h-1.5 bg-slate-700/80 rounded-full mb-3 cursor-pointer overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full w-[42%] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-3">
                <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-emerald-400">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button onClick={() => setIsMuted(!isMuted)} className="hover:text-emerald-400">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-slate-300">06:42 / 15:30</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
                  Lightroom Classic 2026
                </span>
                <Maximize className="w-4 h-4 hover:text-emerald-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Info & Lesson Details */}
        <div className="p-6 bg-[#090b10]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                {currentCourse.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Instructor: {currentCourse.instructor?.name || 'Julian Sterling'} • 15:30 min Free Sample Lesson
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onEnrollClick(currentCourse);
              }}
              className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:brightness-110 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Unlock Full Course (${currentCourse.price || 119})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p>
              In this preview lesson, Julian demonstrates how to use the parametric tone curve to pull out micro-details in high-contrast skin tones without introducing harsh digital artifacts.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
