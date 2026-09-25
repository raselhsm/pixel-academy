import React, { useState, useEffect } from 'react';
import { 
  Aperture, 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  Sliders, 
  BookOpen, 
  Star, 
  Zap, 
  ShieldCheck,
  Check
} from 'lucide-react';

export default function Navbar({ onEnrollClick, onOpenPreview }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-black text-emerald-200 border-b border-emerald-500/20 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white tracking-wide">SPRING MASTERCLASS ENROLLMENT:</span>
            <span>Save 40% with code <strong className="text-emerald-400 font-mono bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">PIXELPRO</strong></span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-emerald-300/80">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> 45 Signature Presets Included Free
            </span>
            <span className="text-emerald-500/40">|</span>
            <span className="text-white font-medium">12 Seats Remaining Today</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-2xl py-3 border-b border-white/10' : 'bg-[#08090d]/80 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#090b10] rounded-[10px] flex items-center justify-center">
                  <Aperture className="w-5 h-5 text-emerald-400 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold tracking-tight text-white text-lg font-heading">
                    PIXEL<span className="text-emerald-400">ACADEMY</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase -mt-0.5">
                  Lightroom Color Masterclass
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
              <a href="#interactive-slider" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 py-1">
                <Sliders className="w-4 h-4 text-emerald-500" />
                Before / After
              </a>
              <a href="#courses" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 py-1">
                <BookOpen className="w-4 h-4 text-slate-400" />
                Courses
              </a>
              <a href="#curriculum" className="hover:text-emerald-400 transition-colors py-1">
                Curriculum
              </a>
              <a href="#instructor" className="hover:text-emerald-400 transition-colors py-1">
                Instructor
              </a>
              <a href="#reviews" className="hover:text-emerald-400 transition-colors py-1 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                Reviews
              </a>
              <a href="#pricing" className="hover:text-emerald-400 transition-colors py-1">
                Pricing
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={() => onOpenPreview()}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/60"
              >
                Sample Lesson
              </button>

              <button
                onClick={() => onEnrollClick()}
                className="relative group px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all duration-300 flex items-center gap-2 transform active:scale-95"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onEnrollClick()}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-emerald-400"
              >
                Enroll
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-t border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3">
            <a 
              href="#interactive-slider" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5"
            >
              Interactive Before/After Slider
            </a>
            <a 
              href="#courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5"
            >
              All Masterclasses
            </a>
            <a 
              href="#curriculum" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5"
            >
              Curriculum (6 Modules)
            </a>
            <a 
              href="#instructor" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5"
            >
              Lead Instructor
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5"
            >
              Student Reviews (4.98★)
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5"
            >
              Lifetime Pricing
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPreview();
                }}
                className="w-full py-2.5 rounded-xl border border-slate-700 text-sm font-semibold text-slate-200 text-center"
              >
                Watch Free Sample Lesson
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnrollClick();
                }}
                className="w-full py-3 rounded-xl bg-emerald-400 text-black font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/20 text-center"
              >
                Enroll In Masterclass (40% Off)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
