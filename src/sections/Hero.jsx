import { Link } from 'react-router';
import { ArrowRight, Check, ChevronDown, Lock, Play, ShieldCheck } from 'lucide-react';
import VideoPreview from '../components/ui/VideoPreview';
import { useOpenFreePreview } from '../lib/freePreview';
import { useCourseOutline } from '../hooks/useCourseOutline';
import { toBnDigits } from '../lib/format';
import { COURSE, GUARANTEE, HERO, INSTRUCTOR, PRICE, PROMO_VIDEO_URL } from '../data/homeContent';

function CourseInfoCard() {
  const { lessonCount, hours } = useCourseOutline();

  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      <div aria-hidden="true" className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/30 to-teal-500/20 opacity-75 blur-xl" />
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/90 shadow-2xl backdrop-blur-md">
        <div className="relative">
          <VideoPreview
            url={PROMO_VIDEO_URL}
            title={`${COURSE.title} — কোর্স পরিচিতি`}
            label="▶ ক্লিক করে কোর্সের পরিচিতি দেখুন"
            className="aspect-video w-full"
            rounded="rounded-none"
          />
          <span className="pointer-events-none absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            কোর্স পরিচিতি ভিডিও ▶ (২ মিনিট)
          </span>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs text-slate-400">কোর্সের ধরন</span>
              <p className="text-sm font-bold text-white">১০০% বাংলায় রেকর্ডেড কোর্স</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400">মেয়াদ ও অ্যাক্সেস</span>
              <p className="text-sm font-bold text-emerald-400">লাইফটাইম আনলিমিটেড</p>
            </div>
          </div>

          {/* Lesson count and hours come from the live curriculum. */}
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { value: toBnDigits(lessonCount), label: 'ভিডিও লেসন' },
              { value: `${toBnDigits(hours)}+`, label: 'ঘণ্টা কনটেন্ট' },
              { value: '৫০+', label: 'প্রিসেট প্যাক', accent: true },
            ].map(({ value, label, accent }) => (
              <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5">
                <span className={`block font-sans text-base font-extrabold ${accent ? 'text-emerald-400' : 'text-white'}`}>{value}</span>
                <span className="text-[11px] text-slate-400">{label}</span>
              </div>
            ))}
          </div>

          <a
            href="#curriculum"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 py-3 text-sm font-bold text-white transition hover:bg-emerald-500 hover:text-slate-950"
          >
            কোর্সের সম্পূর্ণ সিলেবাস দেখুন
            <ChevronDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const openFreePreview = useOpenFreePreview();

  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[650px] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 shadow-sm shadow-emerald-500/20">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            {HERO.badge}
          </div>

          <h1 className="text-3xl font-extrabold leading-[1.25] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            কোনো পূর্ব অভিজ্ঞতা ছাড়াই <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
              লাইটরুম দিয়ে প্রফেশনাল ফটো এডিটিং
            </span>{' '}
            শিখুন এবং মার্কেটপ্লেসে কাজ শুরু করুন
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            জিরো থেকে শুরু করে ওয়েডিং ফটো এডিটিং, কালার কারেকশন, নিজের প্রিসেট তৈরি এবং ফাইভারে অ্যাকাউন্ট খুলে গিগ
            পাবলিশ করা পর্যন্ত — শিখুন সরাসরি{' '}
            <span className="font-bold text-white underline decoration-emerald-500 underline-offset-4">Fiverr Level 2 Seller</span>{' '}
            <span className="font-bold text-white">{INSTRUCTOR.name}</span>-এর কাছ থেকে, যিনি ২০১৮ সাল থেকে বিদেশি ক্লায়েন্টের কাজ করছেন।
          </p>

          <ul className="grid gap-2.5 pt-2 sm:grid-cols-2">
            {HERO.checklist.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="space-y-4 pt-4">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-sans text-4xl font-extrabold text-emerald-400 sm:text-5xl">{PRICE.offer}</span>
              <s className="font-sans text-xl text-slate-500 sm:text-2xl">
                <span className="sr-only">আগের মূল্য </span>
                {PRICE.regular}
              </s>
              <span className="rounded-full border border-red-500/30 bg-red-500/15 px-3 py-1 text-xs font-bold text-red-300">
                {PRICE.discountLabel} ছাড়
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/checkout"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 px-8 py-4 text-lg font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:brightness-110 active:scale-[0.98]"
              >
                এখনই ভর্তি হন - {PRICE.offer}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={openFreePreview}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-4 text-base font-bold text-slate-200 transition hover:border-emerald-500 hover:text-emerald-400"
              >
                <Play className="size-5 fill-emerald-400 text-emerald-400" aria-hidden="true" />
                ফ্রি ক্লাস দেখুন
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-slate-400">
              <span>
                <span className="font-bold text-[#e2136e]">বিকাশ</span> ও <span className="font-bold text-[#F7941D]">নগদ</span> এক্সেপ্টেড
              </span>
              <a href="#guarantee" className="flex items-center gap-1 font-semibold text-emerald-400 hover:underline">
                <ShieldCheck className="size-4" aria-hidden="true" />
                {GUARANTEE.days} দিনের মানি-ব্যাক গ্যারান্টি
              </a>
              <span className="flex items-center gap-1">
                <Lock className="size-4" aria-hidden="true" />
                লাইফটাইম অ্যাক্সেস
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <CourseInfoCard />
        </div>
      </div>
    </section>
  );
}
