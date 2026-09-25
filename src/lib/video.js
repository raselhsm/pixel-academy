function parse(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return { parsed, host: parsed.hostname.replace(/^www\.|^m\./, '') };
  } catch {
    return null;
  }
}

// The video ID of any YouTube link (watch, youtu.be, embed, shorts, live), or null.
export function youtubeId(url) {
  const p = parse(url);
  if (!p) return null;
  if (p.host === 'youtu.be') return p.parsed.pathname.slice(1) || null;
  if (p.host === 'youtube.com' || p.host === 'youtube-nocookie.com') {
    return p.parsed.searchParams.get('v') ?? p.parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1] ?? null;
  }
  return null;
}

// Turns a lesson's video link into something the player can render.
export function toEmbed(url) {
  const p = parse(url);
  if (!p) return null;
  const { parsed, host } = p;

  const ytId = youtubeId(url);
  if (ytId) {
    return { type: 'iframe', src: `https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1` };
  }

  if (host === 'vimeo.com') {
    const id = parsed.pathname.match(/^\/(\d+)/)?.[1];
    if (id) return { type: 'iframe', src: `https://player.vimeo.com/video/${id}` };
  }

  if (/\.(mp4|webm|m3u8)$/i.test(parsed.pathname)) return { type: 'video', src: url };

  // Already an embed URL (Bunny Stream, Vimeo player, Google Drive preview, …).
  return { type: 'iframe', src: url };
}
