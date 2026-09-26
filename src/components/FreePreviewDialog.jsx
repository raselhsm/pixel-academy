import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { X } from 'lucide-react';
import { toEmbed } from '../lib/video';
import { track } from '../lib/pixel';
import { FREE_PREVIEW } from '../data/homeContent';

export default function FreePreviewDialog({ onClose }) {
  const closeRef = useRef(null);
  const embed = toEmbed(FREE_PREVIEW.url);

  useEffect(() => {
    track('ViewContent', { content_name: FREE_PREVIEW.label });
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
      aria-label={FREE_PREVIEW.label}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="font-semibold text-white">{FREE_PREVIEW.label}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="বন্ধ করুন"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="aspect-video overflow-hidden rounded-2xl bg-black">
          {embed && (
            <iframe
              src={`${embed.src}&autoplay=1&playsinline=1`}
              title={FREE_PREVIEW.label}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="size-full"
            />
          )}
        </div>
        <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-slate-400">ভালো লাগলে বাকি সব লেসন পেতে ভর্তি হন।</p>
          <Link
            to="/checkout"
            onClick={onClose}
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-emerald-500 px-8 font-bold text-slate-950 transition hover:bg-emerald-400 sm:w-auto"
          >
            পুরো কোর্সে ভর্তি হন →
          </Link>
        </div>
      </div>
    </div>
  );
}
