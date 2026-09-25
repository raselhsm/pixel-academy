const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

let request;

// Which sign-in methods are switched on in the Supabase dashboard, so the
// Google button only shows once Google is actually configured.
export function fetchAuthSettings() {
  if (!url || !key) return Promise.resolve({ google: false });
  request ??= fetch(`${url}/auth/v1/settings`, { headers: { apikey: key } })
    .then((res) => (res.ok ? res.json() : {}))
    .then((settings) => ({ google: Boolean(settings.external?.google) }))
    .catch(() => ({ google: false }));
  return request;
}
