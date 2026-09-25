import React from 'react';
import { 
  Download, 
  Sliders, 
  MessageSquare, 
  Award, 
  RefreshCw, 
  Laptop, 
  FolderArchive,
  Sparkles
} from 'lucide-react';

export default function ToolkitPerks() {
  const perks = [
    {
      icon: Sliders,
      title: '45 Signature Lightroom Presets',
      desc: 'Tested across 50,000+ camera captures. Includes desktop .xmp and mobile .dng formats for instant sync.',
      badge: 'Worth $129'
    },
    {
      icon: FolderArchive,
      title: '85+ Full-Resolution RAW Files',
      desc: 'Uncompressed Sony A7R V, Leica M11, and Canon R5 raw exercise files so you can edit alongside each lesson.',
      badge: 'Exclusive RAWs'
    },
    {
      icon: MessageSquare,
      title: 'Private Discord Critique Lounge',
      desc: 'Get your photo edits critiqued directly by Julian Sterling and collaborate with 4,200+ passionate peers.',
      badge: 'Weekly Reviews'
    },
    {
      icon: Award,
      title: 'Official Pixel Academy Certificate',
      desc: 'Receive a verified credential upon submitting your final capstone edit project to display on LinkedIn & website.',
      badge: 'Portfolio Ready'
    },
    {
      icon: RefreshCw,
      title: 'Lifetime 2026+ Updates Included',
      desc: 'As Adobe rolls out new AI features and mask algorithms, our curriculum updates automatically at zero added cost.',
      badge: 'Forever Access'
    },
    {
      icon: Laptop,
      title: 'Cross-Device Desktop & Mobile',
      desc: 'Seamlessly learn on your Mac, PC, iPad, or smartphone with responsive player speed controls and offline download.',
      badge: 'Any Device'
    }
  ];

  return (
    <section className="py-20 bg-[#090b10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Complete Production Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Everything You Need to Edit Like a Pro
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            No hidden add-ons. You get our full professional toolkit from the moment you step inside.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div 
                key={i}
                className="p-7 rounded-3xl glass-card border border-white/5 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-emerald-400 border border-emerald-500/20">
                      {perk.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-emerald-300 transition-colors">
                    {perk.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
