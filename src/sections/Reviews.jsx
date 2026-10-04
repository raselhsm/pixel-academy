import { useEffect, useRef, useState } from 'react';
import { Star, Trophy, X } from 'lucide-react';
import VideoPreview from '../components/ui/VideoPreview';
import SectionTitle from '../components/ui/SectionTitle';
import { REVIEWS } from '../data/homeContent';

function Lightbox({ shot, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={shot.caption} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="বন্ধ করুন"
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X className="size-5" aria-hidden="true" />
      </button>
      <figure className="max-h-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.caption} className="max-h-[80vh] w-auto rounded-xl object-contain" />
        <figcaption className="mt-3 text-center text-sm text-slate-300">{shot.caption}</figcaption>
      </figure>
    </div>
  );
}

function TestimonialCard({ name, detail, result, text, photo }) {
  return (
    <figure className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <div className="flex gap-0.5" aria-label="৫ স্টার রেটিং">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">“{text}”</blockquote>
      {result && (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-brand-500/10 px-3 py-2 text-xs font-semibold text-brand-300">
          <Trophy className="size-4 shrink-0" aria-hidden="true" />
          {result}
        </p>
      )}
      <figcaption className="mt-4 flex items-center gap-3">
        {photo ? (
          <img src={photo} alt="" className="size-10 rounded-full object-cover" />
        ) : (
          <span className="flex size-10 items-center justify-center rounded-full bg-brand-500/20 font-bold text-brand-300">{name.slice(0, 1)}</span>
        )}
        <span>
          <span className="block font-semibold text-white">{name}</span>
          <span className="block text-xs text-slate-400">{detail}</span>
        </span>
      </figcaption>
    </figure>
  );
}

// Real student reviews only. Hidden entirely until some are added in homeContent.js.
export default function Reviews() {
  const [openShot, setOpenShot] = useState(null);
  const { testimonials, videos, screenshots } = REVIEWS;
  if (!testimonials.length && !videos.length && !screenshots.length) return null;

  return (
    <section id="reviews" className="mx-auto max-w-6xl scroll-mt-28 border-t border-slate-800 px-4 py-16 sm:px-6 sm:py-20">
      <SectionTitle
        eyebrow="⭐ স্টুডেন্ট রিভিউ"
        title="স্টুডেন্টরা নিজেরাই বলছে"
        subtitle="সবগুলো আসল স্টুডেন্টের আসল মতামত, তাদের অনুমতি নিয়ে দেওয়া।"
      />

      {testimonials.length > 0 && (
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      )}

      {videos.length > 0 && (
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
          {videos.map((v) => (
            <figure key={v.youtubeUrl} className="w-[72vw] max-w-[260px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <VideoPreview url={v.youtubeUrl} title={`${v.name}-এর রিভিউ`} label={v.name} className="aspect-[9/16] w-full" />
              <figcaption className="mt-3">
                <span className="block font-semibold text-white">{v.name}</span>
                <span className="block text-sm text-slate-400">{v.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {screenshots.length > 0 && (
        <div className="mt-12 columns-2 gap-4 md:columns-3">
          {screenshots.map((s) => (
            <figure key={s.src} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenShot(s)}
                aria-label={`${s.caption}, বড় করে দেখুন`}
                className="block w-full overflow-hidden rounded-2xl border border-slate-800"
              >
                <img src={s.src} alt={s.caption} loading="lazy" className="w-full" />
              </button>
              <figcaption className="mt-2 text-sm text-slate-400">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-brand-400/[0.07] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <p className="text-xl font-bold text-white sm:text-2xl">পরের সফল স্টুডেন্ট হতে পারেন আপনি</p>
        <a href="#checkout" className="flex min-h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 px-8 text-lg font-bold text-white transition hover:brightness-110 sm:w-auto">
          এখনই ভর্তি হোন
        </a>
      </div>

      {openShot && <Lightbox shot={openShot} onClose={() => setOpenShot(null)} />}
    </section>
  );
}
