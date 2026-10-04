import { useRef, useState } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

const clamp = (n) => Math.min(100, Math.max(0, n));

// The "before" layer is clipped with clip-path, so both images share the same
// box and never need their widths re-synced on resize.
export default function BeforeAfterSlider({ image, beforeImage, alt, className = '' }) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef(null);

  const moveTo = (clientX) => {
    const rect = frameRef.current.getBoundingClientRect();
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) moveTo(e.clientX);
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 2;
    const next = {
      ArrowLeft: (p) => p - step,
      ArrowDown: (p) => p - step,
      ArrowRight: (p) => p + step,
      ArrowUp: (p) => p + step,
      Home: () => 0,
      End: () => 100,
    }[e.key];
    if (!next) return;
    e.preventDefault();
    setPos((p) => clamp(next(p)));
  };

  return (
    <div
      ref={frameRef}
      role="slider"
      tabIndex={0}
      aria-label="আগে ও পরে তুলনা স্লাইডার"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-valuetext={`${Math.round(pos)}% অরিজিনাল RAW`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onKeyDown={onKeyDown}
      className={`relative cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-2xl bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] ${className}`}
    >
      <img
        src={image}
        alt={`${alt} — লাইটরুম এডিট`}
        draggable={false}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 font-sans text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-md backdrop-blur-md border border-white/60">
        Lightroom Edit
      </span>

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden="true"
      >
        <img
          src={beforeImage ?? image}
          alt=""
          draggable={false}
          className={`absolute inset-0 size-full object-cover ${beforeImage ? '' : 'brightness-90 contrast-75 grayscale-[25%]'}`}
        />
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-slate-950/70 px-3.5 py-1.5 font-sans text-[11px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md border border-white/20">
          Original RAW
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex size-10 sm:size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-800 shadow-[0_4px_16px_rgba(0,0,0,0.25)] ring-2 ring-white/90 transition group-hover:scale-105">
          <ChevronsLeftRight className="size-4 sm:size-5 text-slate-700" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
