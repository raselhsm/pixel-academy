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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div className="w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3.5 flex items-center justify-between gap-4">
          <p className="text-base font-bold text-[#0F172A] sm:text-lg">{FREE_PREVIEW.label}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="বন্ধ করুন"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-black">
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
          <p className="text-sm font-medium text-slate-600">ভালো লাগলে বাকি সব লেসন পেতে ভর্তি হন।</p>
          <Link
            to="/checkout"
            onClick={onClose}
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-slate-900 px-8 font-bold text-white shadow-md shadow-slate-900/15 transition hover:bg-slate-800 active:scale-[0.98] sm:w-auto"
          >
            পুরো কোর্সে ভর্তি হন →
          </Link>
        </div>
      </div>
    </div>
  );
}
