import { useState } from 'react';
import { Play } from 'lucide-react';
import { toEmbed, youtubeId } from '../../lib/video';
import { track } from '../../lib/pixel';

// Shows only the thumbnail until someone presses play, so YouTube's player
// (hundreds of KB) never slows down the landing page for visitors from ads.
export default function VideoPreview({ url, title, label, className = '' }) {
  const [playing, setPlaying] = useState(false);
  const ytId = youtubeId(url);
  const embed = toEmbed(url);
  if (!embed) return null;

  if (playing || !ytId) {
    const src = ytId ? `${embed.src}&autoplay=1&playsinline=1` : embed.src;
    return (
      <div className={`overflow-hidden rounded-2xl bg-black ${className}`}>
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
      className={`group relative block overflow-hidden rounded-2xl bg-slate-900 ${className}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`}
        alt=""
        fetchPriority="high"
        className="size-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" aria-hidden="true" />
      <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-xl ring-8 ring-emerald-500/25 transition group-hover:scale-110 motion-reduce:transition-none">
        <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
      </span>
      <span className="absolute inset-x-0 bottom-0 p-4 text-left text-sm font-bold text-white">{label}</span>
    </button>
  );
}
