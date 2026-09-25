const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

let request;

// Which sign-in options are switched on in the Supabase dashboard: the Google
// button only shows once Google is configured, and the admin checklist reads both.
export function fetchAuthSettings() {
  if (!url || !key) return Promise.resolve({ google: false, autoconfirm: false });
  request ??= fetch(`${url}/auth/v1/settings`, { headers: { apikey: key } })
    .then((res) => (res.ok ? res.json() : {}))
    .then((settings) => ({ google: Boolean(settings.external?.google), autoconfirm: Boolean(settings.mailer_autoconfirm) }))
    .catch(() => ({ google: false, autoconfirm: false }));
  return request;
}
