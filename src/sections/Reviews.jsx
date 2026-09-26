import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { MessageCircle, Star, X } from 'lucide-react';
import VideoPreview from '../components/ui/VideoPreview';
import SectionHeading from '../components/ui/SectionHeading';
import { PRICE, REVIEWS } from '../data/homeContent';

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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
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

export default function Reviews() {
  const [openShot, setOpenShot] = useState(null);
  const { videos = [], screenshots = [], testimonials = [] } = REVIEWS;
  if (!videos.length && !screenshots.length && !testimonials.length) return null;

  return (
    <section id="reviews" className="mx-auto max-w-6xl scroll-mt-24 border-t border-slate-800 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="স্টুডেন্ট রিভিউ ও চ্যাট প্রুফ"
        title="স্টুডেন্টরা নিজেরাই তাদের সাফল্যের কথা বলছে"
        subtitle="সরাসরি ক্লাস করা ও অনলাইনে শেখা শিক্ষার্থীদের আসল অভিজ্ঞতা ও প্রথম আয়ের অনুভূতি"
      />

      {/* Student Chat & Experience Testimonial Cards */}
      {testimonials.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl transition hover:border-emerald-500/30 sm:p-7"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 font-bold text-slate-950">
                      {t.avatar}
                    </span>
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                    {t.result}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-slate-300">5.0 / 5.0</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Chat snippet box mimicking WhatsApp / Messenger screenshot */}
              {t.chatSnippet && (
                <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4">
                  <div className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <MessageCircle className="size-3.5" />
                    সাপোর্ট গ্রুপে স্টুডেন্টের চ্যাট:
                  </div>
                  <p className="text-xs italic leading-relaxed text-emerald-200">
                    &ldquo;{t.chatSnippet}&rdquo;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {videos.length > 0 && (
        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
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

      <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/40 to-slate-900 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-xl font-bold text-white sm:text-2xl">পরবর্তী সফল স্টুডেন্ট হতে পারেন আপনিও</p>
          <p className="mt-1 text-sm text-slate-300">৭ দিনের ১০০% মানি-ব্যাক গ্যারান্টি সহ আজই শুরু করুন</p>
        </div>
        <Link
          to="/checkout"
          className="flex min-h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 text-base font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110 sm:w-auto"
        >
          {PRICE.offer} টাকায় ভর্তি হন →
        </Link>
      </div>

      {openShot && <Lightbox shot={openShot} onClose={() => setOpenShot(null)} />}
    </section>
  );
}
