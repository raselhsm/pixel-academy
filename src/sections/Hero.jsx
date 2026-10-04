import { CheckCircle2, Laptop, Play, Star } from 'lucide-react';
import VideoPreview from '../components/ui/VideoPreview';
import { useOpenFreePreview } from '../lib/freePreview';
import { HERO, PRICE, PROMO_VIDEO_URL } from '../data/homeContent';

function VideoCard() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div aria-hidden="true" className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-brand-600/40 to-brand-400/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/90 shadow-2xl">
        <VideoPreview url={PROMO_VIDEO_URL} title="কোর্স পরিচিতি" label="কোর্স পরিচিতি ভিডিও দেখুন" className="aspect-video w-full" rounded="rounded-none" />
        <dl className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800 text-center">
          {HERO.videoStats.map(({ value, label }) => (
            <div key={label} className="px-2 py-3.5">
              <dt className="sr-only">{label}</dt>
              <dd className="text-base font-extrabold text-white sm:text-lg">{value}</dd>
              <dd className="text-[11px] text-slate-400 sm:text-xs">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default function Hero() {
  const openFreePreview = useOpenFreePreview();

  return (
    <section className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(0,117,255,0.22),transparent_65%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 sm:pt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
              <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              {HERO.trustBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-300">
              <Laptop className="size-3.5" aria-hidden="true" />
              {HERO.prerequisite}
            </span>
          </div>

          <h1 className="text-[1.75rem] font-extrabold leading-[1.3] text-white text-balance sm:text-4xl lg:text-[2.6rem]">
            {HERO.headline} —{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-200 bg-clip-text text-transparent">{HERO.headlineAccent}</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{HERO.subheadline}</p>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {HERO.checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div>
              <span className="block text-xs text-slate-400">
                রেগুলার ফি: <s className="font-sans">{PRICE.regular}</s>
              </span>
              <span className="text-sm text-slate-300">
                অফার প্রাইস: <strong className="font-sans text-2xl font-extrabold text-white">{PRICE.offer}</strong>
              </span>
            </div>
            <span className="rounded-lg bg-amber-500 px-2.5 py-1 text-sm font-extrabold text-slate-950">{PRICE.discountLabel} ছাড়</span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#checkout"
              className="cta-glow flex min-h-14 items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 px-7 text-lg font-extrabold text-white transition hover:brightness-110"
            >
              এখনই ভর্তি হোন — {PRICE.offer}
            </a>
            <button
              type="button"
              onClick={openFreePreview}
              className="flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 font-bold text-slate-100 transition hover:border-brand-400 hover:text-white"
            >
              ফ্রি ট্রেলার ক্লাস দেখুন
              <Play className="size-4 fill-current" aria-hidden="true" />
            </button>
          </div>
        </div>

        <VideoCard />
      </div>
    </section>
  );
}
