import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Check, CreditCard, Lock, ShieldCheck } from 'lucide-react';
import Field from '../components/ui/Field';
import { normalizeBdPhone } from '../lib/format';
import { COURSE, GUARANTEE, HERO_IMAGE, PRICE } from '../data/homeContent';

// Card needs a payment gateway (SSLCommerz etc.), which isn't set up yet, so
// it shows as "coming soon" and bKash/Nagad carry on through /checkout.
const METHODS = [
  { key: 'bkash', label: 'বিকাশ', mark: 'bKash', color: '#E2136E' },
  { key: 'nagad', label: 'নগদ', mark: 'Nagad', color: '#F7941D' },
  { key: 'card', label: 'কার্ড / নেট ব্যাংকিং', mark: 'Card', soon: true },
];

const SUMMARY = ['লাইফটাইম অ্যাক্সেস', '৫০+ প্রিসেট ও ১০০+ RAW ফাইল', 'প্রাইভেট সাপোর্ট গ্রুপ ও লাইভ Q&A', `${GUARANTEE.days} দিনের মানি-ব্যাক গ্যারান্টি`];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'আপনার নাম লিখুন';
  if (!normalizeBdPhone(form.phone)) errors.phone = 'সঠিক মোবাইল নম্বর দিন (যেমন 017XXXXXXXX)';
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'সঠিক ইমেইল দিন';
  return errors;
}

export default function CheckoutBox() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [method, setMethod] = useState('bkash');
  const [errors, setErrors] = useState({});

  const bind = (key) => ({
    value: form[key],
    onChange: (e) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    },
    error: errors[key],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;
    // Router state, not the URL, so contact details never land in links or logs.
    navigate('/checkout', { state: { prefill: form, method } });
  };

  return (
    <section id="checkout" className="scroll-mt-28 border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300">
            🔥 অফার প্রাইসে ভর্তি চলছে
          </span>
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">আজই ভর্তি হয়ে শুরু করুন</h2>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-brand-500/30 bg-slate-900/70 shadow-2xl shadow-brand-900/30 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="border-b border-slate-800 bg-gradient-to-br from-brand-950/80 to-navy p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex gap-4">
              <img src={HERO_IMAGE} alt="" className="size-20 shrink-0 rounded-xl object-cover" />
              <div>
                <span className="rounded bg-brand-500/15 px-2 py-0.5 text-[11px] font-bold text-brand-300">{COURSE.format}</span>
                <h3 className="mt-1.5 font-bold leading-snug text-white">{COURSE.fullTitle}</h3>
              </div>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
              {SUMMARY.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-400" strokeWidth={3} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-end justify-between border-t border-slate-800 pt-5">
              <span className="text-sm text-slate-400">মোট</span>
              <span className="text-right font-sans">
                <s className="block text-sm text-slate-500">{PRICE.regular}</s>
                <span className="text-3xl font-extrabold text-white">{PRICE.offer}</span>
              </span>
            </div>
          </aside>

          <form onSubmit={onSubmit} noValidate className="space-y-5 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="আপনার নাম" autoComplete="name" placeholder="যেমন: রাহিম আহমেদ" className="sm:col-span-2" {...bind('name')} />
              <Field label="মোবাইল নম্বর" type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXXXXXXXX" {...bind('phone')} />
              <Field label="ইমেইল" type="email" autoComplete="email" placeholder="you@gmail.com" {...bind('email')} />
            </div>

            <fieldset>
              <legend className="mb-2 text-sm font-semibold text-slate-200">পেমেন্ট মেথড</legend>
              <div role="radiogroup" aria-label="পেমেন্ট মেথড" className="grid grid-cols-3 gap-2.5">
                {METHODS.map((m) => {
                  const selected = method === m.key;
                  return (
                    <button
                      key={m.key}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      disabled={m.soon}
                      onClick={() => setMethod(m.key)}
                      style={selected ? { borderColor: m.color, backgroundColor: `${m.color}22` } : undefined}
                      className="relative flex flex-col items-center gap-1 rounded-xl border-2 border-slate-700 px-2 py-3 text-xs font-bold text-slate-200 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-700"
                    >
                      {m.soon ? (
                        <CreditCard className="size-5 text-slate-300" aria-hidden="true" />
                      ) : (
                        <span className="rounded px-1.5 font-sans text-sm font-black text-white" style={{ backgroundColor: m.color }}>
                          {m.mark}
                        </span>
                      )}
                      {m.label}
                      {m.soon && <span className="text-[10px] font-semibold text-amber-400">শীঘ্রই আসছে</span>}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <button
              type="submit"
              className="cta-glow flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 px-4 py-4 text-base font-extrabold text-white transition hover:brightness-110 sm:text-lg"
            >
              পেমেন্ট সম্পন্ন করুন এবং কোর্স অ্যাক্সেস নিন
              <ArrowRight className="size-5 shrink-0" aria-hidden="true" />
            </button>
            <p className="flex items-start justify-center gap-1.5 text-center text-xs leading-relaxed text-slate-400">
              <Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              আপনার তথ্য সম্পূর্ণ নিরাপদ। পরের ধাপে পেমেন্ট করে TrxID দিন — যাচাই হলেই কোর্সের অ্যাক্সেস পেয়ে যাবেন।
            </p>
            <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-brand-300">
              <ShieldCheck className="size-4" aria-hidden="true" />
              {GUARANTEE.days} দিনের ১০০% মানি-ব্যাক গ্যারান্টি
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
