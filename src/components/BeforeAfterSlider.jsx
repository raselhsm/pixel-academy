import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Sliders, 
  Camera, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  Maximize2, 
  Eye, 
  Zap, 
  ArrowLeftRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import { COMPARISON_PRESETS } from '../data/coursesData';

export default function BeforeAfterSlider({ onEnrollClick }) {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHoldingBefore, setIsHoldingBefore] = useState(false);
  const containerRef = useRef(null);

  const preset = COMPARISON_PRESETS[activePresetIndex];

  // Effective position when holding "view raw" button
  const effectivePos = isHoldingBefore ? 100 : sliderPos;

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let percentage = (x / width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleTouchMove = (e) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMove]);

  // CSS filter styles to authentically simulate raw sensor vs graded output
  const getBeforeStyle = (styleType) => {
    switch (styleType) {
      case 'portrait':
        return 'contrast-[82%] brightness-[92%] saturate-[75%] sepia-[12%] hue-rotate-[-8deg]';
      case 'landscape':
        return 'contrast-[78%] brightness-[106%] saturate-[65%] blur-[0.2px]';
      case 'street':
        return 'contrast-[80%] brightness-[88%] saturate-[70%] sepia-[15%]';
      case 'editorial':
        return 'contrast-[85%] brightness-[96%] saturate-[80%]';
      default:
        return 'contrast-[85%] saturate-[70%]';
    }
  };

  const getAfterStyle = (styleType) => {
    switch (styleType) {
      case 'portrait':
        return 'contrast-[118%] brightness-[102%] saturate-[116%]';
      case 'landscape':
        return 'contrast-[124%] brightness-[98%] saturate-[130%]';
      case 'street':
        return 'contrast-[130%] brightness-[104%] saturate-[135%]';
      case 'editorial':
        return 'contrast-[112%] brightness-[104%] saturate-[112%]';
      default:
        return 'contrast-[115%] saturate-[120%]';
    }
  };

  return (
    <section id="interactive-slider" className="py-20 md:py-28 bg-[#090b10] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Color Lab</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              Drag the Slider. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">See the Science.</span>
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-xl">
              Interact with genuine RAW sensor captures transformed through our Lightroom Pro methodology.
              No fake Instagram filters—pure tonal curve shaping and color harmony.
            </p>
          </div>

          {/* Quick preset selector buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            {COMPARISON_PRESETS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setActivePresetIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activePresetIndex === idx
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold shadow-md shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{p.name.split(' ')[0]}</span>
                <span className="opacity-80 text-[10px] hidden sm:inline">{p.name.split(' ').slice(1).join(' ')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* The Main Comparison Canvas */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
          
          {/* Metadata Bar on Top of Canvas */}
          <div className="bg-[#0b0d14]/90 backdrop-blur-md px-6 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
                <Camera className="w-4 h-4 text-emerald-400" />
                <span>{preset.camera}</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 font-mono">{preset.exif}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-300 hidden sm:inline">{preset.location}</span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              {/* Hold to compare button */}
              <button
                onMouseDown={() => setIsHoldingBefore(true)}
                onMouseUp={() => setIsHoldingBefore(false)}
                onTouchStart={() => setIsHoldingBefore(true)}
                onTouchEnd={() => setIsHoldingBefore(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white text-[11px] font-medium border border-slate-700 flex items-center gap-1.5 transition-colors select-none"
              >
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hold to Peek RAW</span>
              </button>

              <button
                onClick={() => setSliderPos(50)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-400 hover:text-white text-[11px] font-medium border border-slate-700"
                title="Reset to 50/50 split"
              >
                50/50
              </button>
            </div>
          </div>

          {/* Interactive Image Frame */}
          <div 
            ref={containerRef}
            onClick={(e) => handleMove(e.clientX)}
            className="relative w-full h-[380px] sm:h-[520px] lg:h-[620px] cursor-ew-resize select-none overflow-hidden bg-black group"
          >
            {/* AFTER IMAGE (Underneath, full width) */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={preset.afterImage} 
                alt="After Graded by Pixel Academy"
                className={`w-full h-full object-cover transition-filter ${getAfterStyle(preset.sliderStyle)}`}
                loading="eager"
              />
              {/* After Label Badge */}
              <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
                <div className="bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-500/40 text-right shadow-xl">
                  <div className="flex items-center justify-end gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>AFTER • PIXEL ACADEMY GRADE</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5 max-w-[200px] sm:max-w-none">
                    {preset.afterDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* BEFORE IMAGE (Clipped overlay) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${effectivePos}%` }}
            >
              <div 
                className="absolute inset-0 h-full"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}
              >
                <img 
                  src={preset.beforeImage} 
                  alt="Before Unprocessed RAW"
                  className={`w-full h-full object-cover grayscale-0 ${getBeforeStyle(preset.sliderStyle)}`}
                  loading="eager"
                />
              </div>

              {/* Before Label Badge */}
              <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
                <div className="bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-xl">
                  <div className="flex items-center gap-1.5 text-slate-300 font-bold text-xs uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    <span>BEFORE • UNPROCESSED RAW</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 max-w-[200px] sm:max-w-none">
                    {preset.beforeDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Glowing Emerald Slider Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-white to-emerald-400 cursor-ew-resize z-20 pointer-events-none"
              style={{ left: `calc(${effectivePos}% - 0.5px)` }}
            >
              {/* Center Handle Knob */}
              <div 
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#08090d] border-2 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.7)] flex items-center justify-center text-emerald-400 cursor-grab active:cursor-grabbing pointer-events-auto transform hover:scale-110 transition-transform duration-200"
              >
                <ArrowLeftRight className="w-4 h-4 text-emerald-300" />
              </div>
            </div>

            {/* Instruction tooltip badge top center */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none opacity-85 hover:opacity-100 transition-opacity">
              <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
                <ArrowLeftRight className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span>Drag anywhere to compare</span>
                <span className="text-emerald-400 font-mono font-bold">{Math.round(effectivePos)}%</span>
              </div>
            </div>
          </div>

          {/* Lightroom Adjustment Inspector Bar */}
          <div className="bg-[#0e111a] px-6 py-5 border-t border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                  Active Lightroom Develop Settings
                </span>
                <h4 className="text-white font-bold text-sm">
                  {preset.name} — Color Profile & Curve Breakdown
                </h4>
              </div>

              {/* Adjustments Pill Tags */}
              <div className="flex flex-wrap items-center gap-2">
                {preset.adjustments.map((adj, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/60 text-xs hover:border-emerald-500/40 transition-colors"
                  >
                    <span className="text-slate-400 font-normal">{adj.label}:</span>
                    <span className="text-emerald-300 font-mono font-semibold">{adj.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA banner below slider */}
        <div className="mt-8 bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-emerald-950/40 rounded-2xl p-6 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                Want to learn how to grade these exact RAW files step-by-step?
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                All 4 photos and 81 additional uncompressed RAWs are included in the course downloads.
              </p>
            </div>
          </div>

          <button
            onClick={() => onEnrollClick()}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>Get All RAW Files & Presets</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
