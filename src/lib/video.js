// Turns a lesson's video link into something the player can render.
export function toEmbed(url) {
  if (!url) return null;
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  const host = parsed.hostname.replace(/^www\.|^m\./, '');

  let youtubeId = null;
  if (host === 'youtu.be') youtubeId = parsed.pathname.slice(1);
  else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    youtubeId = parsed.searchParams.get('v') ?? parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1];
  }
  if (youtubeId) {
    return { type: 'iframe', src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1` };
  }

  if (host === 'vimeo.com') {
    const id = parsed.pathname.match(/^\/(\d+)/)?.[1];
    if (id) return { type: 'iframe', src: `https://player.vimeo.com/video/${id}` };
  }

  if (/\.(mp4|webm|m3u8)$/i.test(parsed.pathname)) return { type: 'video', src: url };

  // Already an embed URL (Bunny Stream, Vimeo player, Google Drive preview, …).
  return { type: 'iframe', src: url };
}
