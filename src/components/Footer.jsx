import React, { useState } from 'react';
import { 
  Aperture, 
  Sparkles, 
  Send, 
  CheckCircle, 
  ShieldCheck,
  Globe,
  Share2,
  Tv
} from 'lucide-react';


export default function Footer({ onEnrollClick }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card: 5 Free Presets */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900/80 to-[#0c121e] border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider border border-emerald-500/30 inline-block mb-3">
              Free Gift For Photographers
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Download 5 Signature Cinematic Presets Free
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Join 65,000+ photographers receiving our weekly RAW file breakdowns, tone curve breakdowns, and exclusive Lightroom tips.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-sm">Presets sent to your inbox! Check your email.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Get 5 Presets</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 p-0.5 shadow-md shadow-emerald-500/20">
                <div className="w-full h-full bg-[#090b10] rounded-[10px] flex items-center justify-center">
                  <Aperture className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-extrabold tracking-tight text-white text-base font-heading">
                PIXEL<span className="text-emerald-400">ACADEMY</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              The premium online academy dedicated to mastering Adobe Lightroom, color harmony, 
              and the fine art of photography editing. Designed for ambitious creators worldwide.
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <a href="#instagram" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 flex items-center justify-center transition-colors" title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#youtube" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 flex items-center justify-center transition-colors" title="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#twitter" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 flex items-center justify-center transition-colors" title="X / Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Masterclasses */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Masterclasses
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Flagship Color & RAW</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Cinematic Color Grading</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Editorial Skin Retouching</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Atmospheric Landscapes</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Vintage 35mm Emulation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#interactive-slider" className="hover:text-emerald-400 transition-colors">Interactive Color Lab</a></li>
              <li><a href="#curriculum" className="hover:text-emerald-400 transition-colors">Course Syllabus</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Free RAW Downloads</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">Student Work</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">45 Preset Suite</a></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Academy
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#instructor" className="hover:text-emerald-400 transition-colors">About Julian Sterling</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">30-Day Guarantee</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Commercial Licensing</a></li>
              <li><a href="mailto:support@pixelacademy.photo" className="hover:text-emerald-400 transition-colors">Student Support</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Discord Lounge</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Pixel Academy Inc. All rights reserved. Adobe Lightroom is a registered trademark of Adobe Inc.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Refund Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
