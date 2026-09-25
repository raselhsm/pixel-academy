import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { fetchAuthSettings } from '../../lib/authSettings';

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="size-5" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

// Renders nothing until Google sign-in is enabled in Supabase.
export default function GoogleButton({ next = '/my-course', label = 'Google দিয়ে চালিয়ে যান', divider = 'অথবা ইমেইল দিয়ে' }) {
  const [enabled, setEnabled] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchAuthSettings().then((s) => !cancelled && setEnabled(s.google));
    return () => {
      cancelled = true;
    };
  }, []);

  if (!enabled) return null;

  const signIn = async () => {
    setBusy(true);
    setError(null);
    const { error: err } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}${next}` },
    });
    // On success the browser leaves the page; only failures land here.
    if (err) {
      setBusy(false);
      setError('Google দিয়ে লগইন করা যায়নি। আবার চেষ্টা করুন।');
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={signIn}
        disabled={busy}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-white py-3.5 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 disabled:opacity-60"
      >
        <GoogleLogo />
        {label}
      </button>
      {error && <p className="mt-2 text-center text-xs text-red-400">{error}</p>}
      {divider && (
        <div className="my-5 flex items-center gap-3 text-xs text-slate-500" aria-hidden="true">
          <span className="h-px flex-1 bg-slate-800" />
          {divider}
          <span className="h-px flex-1 bg-slate-800" />
        </div>
      )}
    </div>
  );
}
