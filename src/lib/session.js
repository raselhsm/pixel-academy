// Cheap "is someone logged in?" check for pages that don't load the Supabase
// client (the landing page). supabase-js stores the session under this key.
const url = import.meta.env.VITE_SUPABASE_URL;
const storageKey = url ? `sb-${new URL(url).hostname.split('.')[0]}-auth-token` : null;

export function hasStoredSession() {
  if (!storageKey) return false;
  try {
    return Boolean(window.localStorage.getItem(storageKey));
  } catch {
    return false;
  }
}
