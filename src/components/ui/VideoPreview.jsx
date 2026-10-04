import { useState } from 'react';
import { Play } from 'lucide-react';
import { toEmbed, youtubeId } from '../../lib/video';
import { track } from '../../lib/pixel';

// Shows only the thumbnail until someone presses play, so YouTube's player
// (hundreds of KB) never slows down the landing page for visitors from ads.
export default function VideoPreview({ url, title, label, className = '', rounded = 'rounded-2xl' }) {
  const [playing, setPlaying] = useState(false);
  const ytId = youtubeId(url);
  const embed = toEmbed(url);
  if (!embed) return null;

  if (playing || !ytId) {
    const src = ytId ? `${embed.src}&autoplay=1&playsinline=1` : embed.src;
    return (
      <div className={`overflow-hidden bg-black ${rounded} ${className}`}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="size-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setPlaying(true);
        track('ViewContent', { content_name: title });
      }}
      aria-label={`${label} — ভিডিও চালু করুন`}
      className={`group relative block overflow-hidden bg-slate-900 ${rounded} ${className}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`}
        alt=""
        fetchPriority="high"
        className="size-full object-cover opacity-90 transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" aria-hidden="true" />
      <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <span className="relative flex items-center justify-center">
          <span className="pulse-ring absolute size-20 rounded-full bg-white/30" />
          <span className="flex size-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl shadow-black/25 ring-1 ring-white/60 transition duration-300 group-hover:scale-110 group-hover:bg-[#0284C7] group-hover:text-white motion-reduce:transition-none">
            <Play className="ml-0.5 size-6 fill-current" />
          </span>
        </span>
      </span>
      <span className="absolute inset-x-3 bottom-3 text-center">
        <span className="rounded-lg bg-black/60 px-3 py-1 font-sans text-xs font-semibold text-white/90 backdrop-blur-md">
          {label}
        </span>
      </span>
    </button>
  );
}
