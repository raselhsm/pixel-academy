import { useState } from 'react';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router';
import { Check, LoaderCircle, Star } from 'lucide-react';
import { useAuth } from '../auth/context';
import { supabase } from '../lib/supabase';
import { normalizeBdPhone } from '../lib/format';
import { COURSE, COURSE_INCLUDES, HERO_IMAGE, PRICE, SOCIAL_PROOF } from '../data/homeContent';
import Field from '../components/ui/Field';
import Spinner from '../components/ui/Spinner';
import SetupNotice from '../components/ui/SetupNotice';
import GoogleButton from '../components/auth/GoogleButton';

// Only allow redirects to paths on this site.
const safeNext = (next, fallback) => (next && next.startsWith('/') && !next.startsWith('//') ? next : fallback);

const isEmail = (value) => /^\S+@\S+\.\S+$/.test(value.trim());

function SubmitButton({ busy, children }) {
  return (
    <button
      type="submit"
      disabled={busy}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110 disabled:opacity-60"
    >
      {busy && <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}

function Message({ tone = 'error', children }) {
  const styles =
    tone === 'error' ? 'border-red-500/30 bg-red-500/10 text-red-300' : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300';
  return (
    <p role={tone === 'error' ? 'alert' : 'status'} className={`rounded-xl border px-4 py-3 text-sm ${styles}`}>
      {children}
    </p>
  );
}

// Left-hand panel on desktop: reminds visitors what they're signing up for.
function CoursePanel() {
  return (
    <aside className="hidden flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-950/50 via-slate-900 to-slate-900 p-8 lg:flex">
      <div>
        <div className="flex items-center gap-4">
          <img src={HERO_IMAGE} alt="" className="size-16 rounded-2xl object-cover" />
          <div>
            <span className="text-xs font-bold text-emerald-400">{COURSE.format}</span>
            <p className="font-bold leading-snug text-white">{COURSE.title}</p>
          </div>
        </div>
        <ul className="mt-8 space-y-3 text-sm text-slate-300">
          {COURSE_INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" strokeWidth={3} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
        <div className="flex items-center gap-0.5 text-amber-400">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="size-4 fill-current" aria-hidden="true" />
          ))}
          <span className="ml-2 font-sans text-sm font-bold text-white">{SOCIAL_PROOF.rating}/5</span>
        </div>
        <p className="mt-1 text-sm text-slate-400">{SOCIAL_PROOF.students} শিক্ষার্থী ইতিমধ্যে কোর্সটিতে ভর্তি হয়েছেন</p>
        <p className="mt-3 font-sans text-lg font-extrabold text-emerald-400">
          {PRICE.offer} <s className="text-sm font-normal text-slate-500">{PRICE.regular}</s>
        </p>
      </div>
    </aside>
  );
}

function Layout({ children }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2">
      <CoursePanel />
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl sm:p-8">{children}</div>
    </div>
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
    <Layout>
      <h1 className="text-2xl font-bold text-white">নতুন পাসওয়ার্ড দিন</h1>
      <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
        <Field label="নতুন পাসওয়ার্ড" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <Message>{error}</Message>}
        <SubmitButton busy={busy}>পাসওয়ার্ড সেভ করুন</SubmitButton>
      </form>
    </Layout>
  );
}

const TABS = [
  { key: 'login', label: 'লগইন' },
  { key: 'signup', label: 'নতুন অ্যাকাউন্ট' },
];

export default function Login() {
  const { user, loading, recovering, clearRecovering } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [mode, setMode] = useState(params.get('mode') === 'signup' ? 'signup' : 'login');
  const [fields, setFields] = useState({ name: '', phone: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState(null);

  if (!supabase) return <SetupNotice />;
  if (loading) return <Spinner />;
  if (user && recovering) return <NewPasswordForm onDone={clearRecovering} />;
  if (user) return <Navigate to={safeNext(params.get('next'), '/my-course')} replace />;

  const bind = (key) => ({
    value: fields[key],
    error: errors[key],
    onChange: (e) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    },
  });

  const switchMode = (next) => {
    setMode(next);
    setError(null);
    setNotice(null);
    setErrors({});
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const { error: err } = await supabase.auth.signInWithPassword({ email: fields.email.trim().toLowerCase(), password: fields.password });
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

  const onSignup = async (e) => {
    e.preventDefault();
    setError(null);
    const found = {};
    if (!fields.name.trim()) found.name = 'আপনার নাম লিখুন';
    if (!normalizeBdPhone(fields.phone)) found.phone = 'সঠিক মোবাইল নম্বর দিন (যেমন 017XXXXXXXX)';
    if (!isEmail(fields.email)) found.email = 'সঠিক ইমেইল দিন';
    if (fields.password.length < 6) found.password = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের দিন';
    setErrors(found);
    if (Object.keys(found).length) return;

    setBusy(true);
    const { data, error: err } = await supabase.auth.signUp({
      email: fields.email.trim().toLowerCase(),
      password: fields.password,
      options: {
        data: { full_name: fields.name.trim(), phone: normalizeBdPhone(fields.phone) },
        emailRedirectTo: `${window.location.origin}/checkout`,
      },
    });
    setBusy(false);
    if (err) {
      if (err.code === 'user_already_exists') {
        switchMode('login');
        setError('এই ইমেইলে আগেই অ্যাকাউন্ট আছে। পাসওয়ার্ড দিয়ে লগইন করুন।');
        return;
      }
      setError(err.code === 'weak_password' ? 'পাসওয়ার্ডটি আরও শক্তিশালী দিন (অক্ষর ও সংখ্যা মিলিয়ে)।' : 'অ্যাকাউন্ট খোলা যায়নি। একটু পরে আবার চেষ্টা করুন।');
      return;
    }
    if (!data.session) {
      setNotice('অ্যাকাউন্ট তৈরি হয়েছে! আপনার ইমেইলে একটি কনফার্মেশন লিংক পাঠানো হয়েছে, সেটিতে ক্লিক করলেই লগইন হয়ে যাবেন।');
      return;
    }
    // New accounts usually want to buy next.
    navigate(safeNext(params.get('next'), '/checkout'), { replace: true });
  };

  const onReset = async (e) => {
    e.preventDefault();
    setError(null);
    if (!isEmail(fields.email)) return setError('সঠিক ইমেইল দিন');
    setBusy(true);
    await supabase.auth.resetPasswordForEmail(fields.email.trim().toLowerCase(), { redirectTo: `${window.location.origin}/login` });
    setBusy(false);
    // Same message whether or not the account exists, so emails can't be probed.
    setNotice('এই ইমেইলে অ্যাকাউন্ট থাকলে পাসওয়ার্ড রিসেট লিংক পাঠানো হয়েছে। ইনবক্স (ও স্প্যাম ফোল্ডার) চেক করুন।');
  };

  if (mode === 'reset') {
    return (
      <Layout>
        <h1 className="text-2xl font-bold text-white">পাসওয়ার্ড ভুলে গেছেন?</h1>
        <p className="mt-2 text-sm text-slate-400">আপনার ইমেইল দিন, রিসেট লিংক পাঠিয়ে দেব।</p>
        <form onSubmit={onReset} noValidate className="mt-6 space-y-4">
          <Field label="ইমেইল" type="email" autoComplete="email" placeholder="you@gmail.com" {...bind('email')} />
          {error && <Message>{error}</Message>}
          {notice && <Message tone="success">{notice}</Message>}
          <SubmitButton busy={busy}>রিসেট লিংক পাঠান</SubmitButton>
          <button type="button" onClick={() => switchMode('login')} className="w-full text-sm text-slate-400 hover:text-white">
            ← লগইনে ফিরে যান
          </button>
        </form>
      </Layout>
    );
  }

  const signup = mode === 'signup';
  // Google users come back to the same place an email login would send them.
  const googleNext = safeNext(params.get('next'), signup ? '/checkout' : '/my-course');

  return (
    <Layout>
      <div role="tablist" aria-label="লগইন বা নতুন অ্যাকাউন্ট" className="grid grid-cols-2 gap-1 rounded-xl bg-slate-950/60 p-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={mode === t.key}
            onClick={() => switchMode(t.key)}
            className={`rounded-lg py-2.5 text-sm font-bold transition ${
              mode === t.key ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <h1 className="mt-6 text-2xl font-bold text-white">{signup ? 'ফ্রি অ্যাকাউন্ট খুলুন' : 'আবার স্বাগতম!'}</h1>
      <p className="mt-1.5 text-sm text-slate-400">
        {signup ? 'অ্যাকাউন্ট খুলে বিকাশ/নগদে পেমেন্ট করুন, যাচাই হলেই কোর্স চালু।' : 'লগইন করে আপনার কোর্স দেখা চালিয়ে যান।'}
      </p>

      <div className="mt-6">
        <GoogleButton next={googleNext} label={signup ? 'Google দিয়ে অ্যাকাউন্ট খুলুন' : 'Google দিয়ে লগইন করুন'} />
      </div>

      <form onSubmit={signup ? onSignup : onLogin} noValidate className="space-y-4">
        {signup && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="আপনার নাম" autoComplete="name" placeholder="যেমন: রাহিম আহমেদ" {...bind('name')} />
            <Field label="মোবাইল নম্বর" type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXXXXXXXX" {...bind('phone')} />
          </div>
        )}
        <Field label="ইমেইল" type="email" autoComplete="email" placeholder="you@gmail.com" {...bind('email')} />
        <Field
          label="পাসওয়ার্ড"
          type="password"
          autoComplete={signup ? 'new-password' : 'current-password'}
          placeholder={signup ? 'কমপক্ষে ৬ অক্ষর' : ''}
          {...bind('password')}
        />
        {!signup && (
          <div className="-mt-1 text-right">
            <button type="button" onClick={() => switchMode('reset')} className="text-xs text-emerald-400 hover:underline">
              পাসওয়ার্ড ভুলে গেছেন?
            </button>
          </div>
        )}
        {error && <Message>{error}</Message>}
        {notice && <Message tone="success">{notice}</Message>}
        <SubmitButton busy={busy}>{signup ? 'অ্যাকাউন্ট খুলুন' : 'লগইন করুন'}</SubmitButton>
      </form>

      <p className="mt-6 border-t border-slate-800 pt-5 text-center text-sm text-slate-400">
        {signup ? (
          <>
            আগে থেকেই অ্যাকাউন্ট আছে?{' '}
            <button type="button" onClick={() => switchMode('login')} className="font-semibold text-emerald-400 hover:underline">
              লগইন করুন
            </button>
          </>
        ) : (
          <>
            নতুন?{' '}
            <button type="button" onClick={() => switchMode('signup')} className="font-semibold text-emerald-400 hover:underline">
              ফ্রি অ্যাকাউন্ট খুলুন
            </button>{' '}
            অথবা{' '}
            <Link to="/checkout" className="font-semibold text-emerald-400 hover:underline">
              সরাসরি কোর্সটি কিনুন →
            </Link>
          </>
        )}
      </p>
    </Layout>
  );
}
