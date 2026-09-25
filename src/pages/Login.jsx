import { useState } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router';
import { LoaderCircle } from 'lucide-react';
import { useAuth } from '../auth/context';
import { supabase } from '../lib/supabase';
import Field from '../components/ui/Field';
import Spinner from '../components/ui/Spinner';
import SetupNotice from '../components/ui/SetupNotice';

// Only allow redirects to paths on this site.
const safeNext = (next) => (next && next.startsWith('/') && !next.startsWith('//') ? next : '/my-course');

function Card({ title, subtitle, children }) {
  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:py-16">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl sm:p-8">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

function SubmitButton({ busy, children }) {
  return (
    <button
      type="submit"
      disabled={busy}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 font-bold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-60"
    >
      {busy && <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}

function Message({ tone = 'error', children }) {
  const styles = tone === 'error' ? 'border-red-500/30 bg-red-500/10 text-red-300' : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300';
  return (
    <p role={tone === 'error' ? 'alert' : 'status'} className={`rounded-xl border px-4 py-3 text-sm ${styles}`}>
      {children}
    </p>
  );
}

function NewPasswordForm({ onDone }) {
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) return setError('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের দিন');
    setBusy(true);
    const { error: err } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (err) return setError('পাসওয়ার্ড পরিবর্তন করা যায়নি। আবার চেষ্টা করুন।');
    onDone();
  };

  return (
    <Card title="নতুন পাসওয়ার্ড দিন">
      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <Field label="নতুন পাসওয়ার্ড" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <Message>{error}</Message>}
        <SubmitButton busy={busy}>পাসওয়ার্ড সেভ করুন</SubmitButton>
      </form>
    </Card>
  );
}

export default function Login() {
  const { user, loading, recovering, clearRecovering } = useAuth();
  const [params] = useSearchParams();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState(null);

  if (!supabase) return <SetupNotice />;
  if (loading) return <Spinner />;
  if (user && recovering) return <NewPasswordForm onDone={clearRecovering} />;
  if (user) return <Navigate to={safeNext(params.get('next'))} replace />;

  const onLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const { error: err } = await supabase.auth.signInWithPassword({ email: email.trim().toLowerCase(), password });
    setBusy(false);
    if (!err) return;
    setError(
      err.code === 'email_not_confirmed'
        ? 'আপনার ইমেইলে পাঠানো লিংকে ক্লিক করে অ্যাকাউন্ট কনফার্ম করুন।'
        : err.code === 'invalid_credentials'
          ? 'ইমেইল বা পাসওয়ার্ড ভুল হয়েছে।'
          : 'লগইন করা যায়নি। ইন্টারনেট চেক করে আবার চেষ্টা করুন।',
    );
  };

  const onReset = async (e) => {
    e.preventDefault();
    setError(null);
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return setError('সঠিক ইমেইল দিন');
    setBusy(true);
    await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), { redirectTo: `${window.location.origin}/login` });
    setBusy(false);
    // Same message whether or not the account exists, so emails can't be probed.
    setNotice('এই ইমেইলে অ্যাকাউন্ট থাকলে পাসওয়ার্ড রিসেট লিংক পাঠানো হয়েছে। ইনবক্স (ও স্প্যাম ফোল্ডার) চেক করুন।');
  };

  if (mode === 'reset') {
    return (
      <Card title="পাসওয়ার্ড ভুলে গেছেন?" subtitle="আপনার ইমেইল দিন, রিসেট লিংক পাঠিয়ে দেব।">
        <form onSubmit={onReset} noValidate className="space-y-4">
          <Field label="ইমেইল" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {error && <Message>{error}</Message>}
          {notice && <Message tone="success">{notice}</Message>}
          <SubmitButton busy={busy}>রিসেট লিংক পাঠান</SubmitButton>
          <button type="button" onClick={() => setMode('login')} className="w-full text-sm text-slate-400 hover:text-white">
            ← লগইনে ফিরে যান
          </button>
        </form>
      </Card>
    );
  }

  return (
    <Card title="স্টুডেন্ট লগইন" subtitle="কোর্স কেনার সময় যে ইমেইল ও পাসওয়ার্ড দিয়েছিলেন সেটি দিন।">
      <form onSubmit={onLogin} noValidate className="space-y-4">
        <Field label="ইমেইল" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Field label="পাসওয়ার্ড" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="text-right">
          <button type="button" onClick={() => setMode('reset')} className="text-xs text-emerald-400 hover:underline">
            পাসওয়ার্ড ভুলে গেছেন?
          </button>
        </div>
        {error && <Message>{error}</Message>}
        <SubmitButton busy={busy}>লগইন করুন</SubmitButton>
      </form>
      <p className="mt-6 border-t border-slate-800 pt-5 text-center text-sm text-slate-400">
        এখনো কোর্সটি কেনেননি?{' '}
        <Link to="/checkout" className="font-semibold text-emerald-400 hover:underline">
          এখনই কিনুন →
        </Link>
      </p>
    </Card>
  );
}
