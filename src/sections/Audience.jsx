import { Camera, House, Laptop, Sparkles } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { AUDIENCE } from '../data/homeContent';

const ICONS = { camera: Camera, laptop: Laptop, sparkles: Sparkles, home: House };

export default function Audience() {
  return (
    <section className="border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="🎯 সঠিক কোর্স কিনা যাচাই করুন" title="এই কোর্সটি কাদের জন্য?" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE.map(({ icon, title, text }) => {
            const Icon = ICONS[icon];
            return (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-0.5 hover:border-brand-400/40 motion-reduce:transition-none">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
