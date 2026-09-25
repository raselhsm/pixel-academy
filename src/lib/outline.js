import { toBnDigits } from './format';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

let request;

// The public curriculum (module and lesson titles, lengths) straight from the
// database, so the sales page updates when lessons are added in /admin/content.
// Uses plain fetch to keep the Supabase client out of the landing-page bundle.
// Lessons without a video are drafts and aren't returned.
export function fetchOutline() {
  if (!url || !key) return Promise.resolve(null);
  request ??= fetch(
    `${url}/rest/v1/modules?select=id,title,position,lessons(title,position,duration)&order=position&lessons.order=position`,
    { headers: { apikey: key } },
  )
    .then((res) => (res.ok ? res.json() : null))
    .then((modules) => modules?.filter((m) => m.lessons.length) ?? null)
    .catch(() => null);
  return request;
}

// '20:24' or '1:05:30' → seconds.
const toSeconds = (duration) =>
  (duration ?? '')
    .split(':')
    .map(Number)
    .reduce((total, part) => (Number.isFinite(part) ? total * 60 + part : NaN), 0) || 0;

export function summarize(modules) {
  const lessons = modules.flatMap((m) => m.lessons);
  const minutes = Math.round(lessons.reduce((sum, l) => sum + toSeconds(l.duration), 0) / 60);
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return {
    lessonCount: lessons.length,
    lessonsLabel: `${toBnDigits(lessons.length)}টি লেসন`,
    durationLabel: [hours && `${toBnDigits(hours)} ঘণ্টা`, rest && `${toBnDigits(rest)} মিনিট`].filter(Boolean).join(' '),
    // For "X+" style claims: whole hours, or minutes when under an hour.
    atLeastLabel: hours ? `${toBnDigits(hours)} ঘণ্টা+` : `${toBnDigits(minutes)} মিনিট+`,
  };
}
