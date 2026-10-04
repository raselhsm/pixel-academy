import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { X } from 'lucide-react';
import VideoPreview from '../components/ui/VideoPreview';
import SectionHeading from '../components/ui/SectionHeading';
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
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.caption}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="বন্ধ করুন"
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
      >
        <X className="size-5" aria-hidden="true" />
      </button>
      <figure className="max-h-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.caption} className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl" />
        <figcaption className="mt-3 text-center text-sm font-medium text-white/90">{shot.caption}</figcaption>
      </figure>
    </div>
  );
}

// Real student reviews only. Hidden entirely until some are added in homeContent.js.
export default function Reviews() {
  const [openShot, setOpenShot] = useState(null);
  const { videos, screenshots } = REVIEWS;
  if (!videos.length && !screenshots.length) return null;

  return (
    <section id="reviews" className="mx-auto max-w-6xl scroll-mt-24 border-t border-slate-200/80 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="রিভিউ"
        title="স্টুডেন্টরা নিজেরাই বলছে"
        subtitle="সবগুলো আসল স্টুডেন্টের আসল মেসেজ আর ভিডিও, তাদের অনুমতি নিয়ে দেওয়া।"
      />

      {videos.length > 0 && (
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
          {videos.map((v) => (
            <figure key={v.youtubeUrl} className="w-[72vw] max-w-[260px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <VideoPreview url={v.youtubeUrl} title={`${v.name}-এর রিভিউ`} label={v.name} className="aspect-[9/16] w-full" />
              <figcaption className="mt-3">
                <span className="block font-bold text-[#0F172A]">{v.name}</span>
                <span className="block text-sm text-slate-500">{v.detail}</span>
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
                className="block w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-studio transition hover:border-slate-300 hover:shadow-studio-md"
              >
                <img src={s.src} alt={s.caption} loading="lazy" className="w-full" />
              </button>
              <figcaption className="mt-2 text-sm font-medium text-slate-600">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-studio-md sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <p className="text-xl font-extrabold text-[#0F172A] sm:text-2xl">পরের সফল স্টুডেন্ট হতে পারেন আপনি</p>
        <Link
          to="/checkout"
          className="flex min-h-14 w-full items-center justify-center rounded-xl bg-slate-900 px-8 text-base sm:text-lg font-bold text-white shadow-md shadow-slate-900/15 transition hover:bg-slate-800 active:scale-[0.98] sm:w-auto"
        >
          এখনই ভর্তি হন
        </Link>
      </div>

      {openShot && <Lightbox shot={openShot} onClose={() => setOpenShot(null)} />}
    </section>
  );
}
