import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { Lock, LoaderCircle } from 'lucide-react';
import { useAuth } from '../auth/context';
import { supabase } from '../lib/supabase';
import { fetchMyOrder } from '../lib/orders';
import { track } from '../lib/pixel';
import { isValidTrxId, normalizeBdPhone, normalizeTrxId, whatsappLink } from '../lib/format';
import { COURSE, PAYMENT, PRICE, SUPPORT_PHONE } from '../data/homeContent';
import Field from '../components/ui/Field';
import Spinner from '../components/ui/Spinner';
import OrderSummary from '../components/checkout/OrderSummary';
import OrderStatus from '../components/checkout/OrderStatus';
import PaymentInstructions, { MethodPicker } from '../components/checkout/PaymentInstructions';

function Step({ number, title, children }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6">
      <h2 className="mb-4 flex items-center gap-3 text-lg font-bold text-white">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-sans text-sm font-extrabold text-slate-950">
          {number}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

const orderMessage = (order) =>
  [
    `নতুন অর্ডার — ${COURSE.title}`,
    `নাম: ${order.full_name}`,
    `মোবাইল: ${order.phone}`,
    `পেমেন্ট: ${PAYMENT.methods[order.payment_method].label} (${order.sender_number})`,
    `TrxID: ${order.trx_id}`,
    `পরিমাণ: ৳${order.amount}`,
  ].join('\n');

function validate(form, needsAccount) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'আপনার নাম লিখুন';
  if (!normalizeBdPhone(form.phone)) errors.phone = 'সঠিক মোবাইল নম্বর দিন (যেমন 017XXXXXXXX)';
  if (needsAccount) {
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'সঠিক ইমেইল দিন';
    if (form.password.length < 6) errors.password = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের দিন';
  }
  if (!normalizeBdPhone(form.sender)) errors.sender = 'যে নম্বর থেকে টাকা পাঠিয়েছেন সেটি দিন';
  if (!isValidTrxId(normalizeTrxId(form.trxId))) errors.trxId = 'সঠিক TrxID দিন (মেসেজে পাবেন, যেমন 9ABC1DEF2G)';
  return errors;
}

export default function Checkout() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [orderLookup, setOrderLookup] = useState(null);
  const [method, setMethod] = useState('bkash');
  const [edits, setEdits] = useState({});
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    track('InitiateCheckout', { value: PRICE.amount, currency: 'BDT' });
  }, []);

  const userId = user?.id;
  useEffect(() => {
    if (!userId) return;
    fetchMyOrder().then((order) => setOrderLookup({ userId, order }));
  }, [userId]);

  // undefined while the signed-in student's latest order is still loading.
  const existingOrder = !userId ? null : orderLookup?.userId === userId ? orderLookup.order : undefined;

  if (!submitting && (loading || existingOrder === undefined)) return <Spinner />;

  const retrying = params.get('retry') === '1' && existingOrder?.status === 'rejected';
  if (existingOrder && !retrying) return <OrderStatus order={existingOrder} />;

  const needsAccount = Boolean(supabase) && !user;
  // Untouched fields fall back to the signed-in student's profile.
  const form = {
    name: edits.name ?? profile?.full_name ?? '',
    phone: edits.phone ?? profile?.phone ?? '',
    email: edits.email ?? '',
    password: edits.password ?? '',
    sender: edits.sender ?? '',
    trxId: edits.trxId ?? '',
  };
  const bind = (key) => ({
    value: form[key],
    onChange: (e) => {
      setEdits((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    },
    error: errors[key],
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form, needsAccount);
    setErrors(found);
    setFormError(null);
    if (Object.keys(found).length) return;

    const order = {
      full_name: form.name.trim(),
      phone: normalizeBdPhone(form.phone),
      payment_method: method,
      sender_number: normalizeBdPhone(form.sender),
      trx_id: normalizeTrxId(form.trxId),
      amount: PRICE.amount,
    };

    const whatsappOrder = whatsappLink(SUPPORT_PHONE, orderMessage(order));

    if (!supabase) {
      // Accounts aren't set up yet: hand the order to WhatsApp so the sale still goes through.
      track('Purchase', { value: PRICE.amount, currency: 'BDT' });
      window.location.assign(whatsappOrder);
      return;
    }

    // If anything below fails, the student has usually already paid; give them a way out.
    const fail = (message) => setFormError({ message, whatsappOrder });

    setSubmitting(true);
    try {
      if (needsAccount) {
        const { data, error } = await supabase.auth.signUp({
          email: form.email.trim().toLowerCase(),
          password: form.password,
          options: { data: { full_name: order.full_name, phone: order.phone } },
        });
        if (error) {
          fail(
            error.code === 'user_already_exists'
              ? 'এই ইমেইলে আগেই অ্যাকাউন্ট আছে। উপরের "লগইন করুন" লিংকে গিয়ে লগইন করে আবার অর্ডার করুন।'
              : error.code === 'weak_password'
                ? 'পাসওয়ার্ডটি আরও শক্তিশালী দিন (অক্ষর ও সংখ্যা মিলিয়ে)।'
                : 'অ্যাকাউন্ট খোলা যায়নি। একটু পরে আবার চেষ্টা করুন।',
          );
          return;
        }
        if (!data.session) {
          fail('আপনার ইমেইলে একটি কনফার্মেশন লিংক পাঠানো হয়েছে। লিংকে ক্লিক করে লগইন করুন, তারপর এই পেজে TrxID দিয়ে অর্ডার সম্পন্ন করুন।');
          return;
        }
      }

      const { error } = await supabase.from('orders').insert(order);
      if (error) {
        fail(
          error.code === '23505'
            ? 'এই TrxID দিয়ে আগেই একটি অর্ডার জমা হয়েছে। সমস্যা হলে হোয়াটসঅ্যাপে যোগাযোগ করুন।'
            : 'অর্ডার জমা দেওয়া যায়নি। ইন্টারনেট চেক করে আবার চেষ্টা করুন।',
        );
        return;
      }

      track('Purchase', { value: PRICE.amount, currency: 'BDT' });
      navigate('/my-course');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8 text-center lg:text-left">
        <h1 className="text-2xl font-extrabold text-white sm:text-3xl">কোর্সটি কিনুন — মাত্র ৩টি ধাপ</h1>
        <p className="mt-2 text-sm text-slate-400">বিকাশ বা নগদে পেমেন্ট করে TrxID দিন, যাচাই হলেই কোর্স চালু।</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:gap-8">
        <aside className="lg:order-last">
          <div className="lg:sticky lg:top-24">
            <OrderSummary />
          </div>
        </aside>

        <form onSubmit={onSubmit} noValidate className="space-y-5">
          <Step number="১" title="আপনার তথ্য">
            {user ? (
              <p className="mb-4 rounded-xl bg-slate-950/50 px-4 py-3 text-sm text-slate-300">
                লগইন করা আছে: <span className="font-sans font-semibold text-white">{user.email}</span>
              </p>
            ) : (
              needsAccount && (
                <p className="mb-4 text-sm text-slate-400">
                  আগে থেকে অ্যাকাউন্ট আছে?{' '}
                  <Link to="/login?next=/checkout" className="font-semibold text-emerald-400 underline-offset-2 hover:underline">
                    লগইন করুন
                  </Link>
                </p>
              )
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="আপনার নাম" autoComplete="name" placeholder="যেমন: রাহিম আহমেদ" {...bind('name')} />
              <Field label="মোবাইল নম্বর" type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXXXXXXXX" {...bind('phone')} />
              {needsAccount && (
                <>
                  <Field label="ইমেইল" type="email" autoComplete="email" placeholder="you@gmail.com" {...bind('email')} />
                  <Field
                    label="পাসওয়ার্ড দিন"
                    type="password"
                    autoComplete="new-password"
                    placeholder="কমপক্ষে ৬ অক্ষর"
                    hint="এই ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করে কোর্স দেখবেন"
                    {...bind('password')}
                  />
                </>
              )}
            </div>
          </Step>

          <Step number="২" title="বিকাশ / নগদে পেমেন্ট করুন">
            <MethodPicker value={method} onChange={setMethod} />
            <PaymentInstructions method={method} />
          </Step>

          <Step number="৩" title="পেমেন্টের তথ্য দিন">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label={`যে ${PAYMENT.methods[method].label} নম্বর থেকে পাঠিয়েছেন`}
                type="tel"
                inputMode="tel"
                placeholder="01XXXXXXXXX"
                {...bind('sender')}
              />
              <Field
                label="Transaction ID (TrxID)"
                autoCapitalize="characters"
                autoComplete="off"
                spellCheck={false}
                placeholder="যেমন: 9ABC1DEF2G"
                className="font-sans"
                {...bind('trxId')}
              />
            </div>
          </Step>

          {formError && (
            <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <p>{formError.message}</p>
              <a
                href={formError.whatsappOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-semibold text-white underline underline-offset-2"
              >
                টাকা পাঠিয়ে ফেলেছেন? হোয়াটসঅ্যাপে TrxID পাঠান →
              </a>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 text-lg font-extrabold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:brightness-110 disabled:opacity-60"
          >
            {submitting && <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />}
            {supabase ? 'অর্ডার কনফার্ম করুন' : 'হোয়াটসঅ্যাপে অর্ডার পাঠান'}
          </button>
          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
            <Lock className="size-3.5" aria-hidden="true" />
            আপনার তথ্য সুরক্ষিত। পেমেন্ট যাচাই হলেই কোর্স চালু হবে ({PAYMENT.verifyTime})।
          </p>
        </form>
      </div>
    </div>
  );
}
