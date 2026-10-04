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
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-studio-lg transition-all hover:shadow-studio-xl">
        <div className="relative">
          <VideoPreview
            url={PROMO_VIDEO_URL}
            title={`${COURSE.title} — কোর্স পরিচিতি`}
            label="▶ ক্লিক করে কোর্সের পরিচিতি দেখুন"
            className="aspect-video w-full"
            rounded="rounded-none"
          />
          <span className="pointer-events-none absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 font-sans text-xs font-semibold text-slate-700 shadow-2xs backdrop-blur-md">
            <span className="size-2 rounded-full bg-slate-500" />
            কোর্স পরিচিতি ভিডিও (২ মিনিট)
          </span>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-medium text-slate-500">কোর্সের ধরন</span>
              <p className="text-sm font-bold text-slate-900">১০০% বাংলায় রেকর্ডেড কোর্স</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-medium text-slate-500">মেয়াদ ও অ্যাক্সেস</span>
              <p className="text-sm font-bold text-emerald-700">লাইফটাইম আনলিমিটেড</p>
            </div>
          </div>

          {/* Lesson count and hours come from the live curriculum. */}
          <div className="grid grid-cols-3 gap-2.5 text-center">
            {[
              { value: toBnDigits(lessonCount), label: 'ভিডিও লেসন' },
              { value: `${toBnDigits(hours)}+`, label: 'ঘণ্টা কনটেন্ট' },
              { value: '৫০+', label: 'প্রিসেট প্যাক' },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                <span className="block font-sans text-base font-extrabold text-slate-900">{value}</span>
                <span className="text-[11px] font-medium text-slate-500">{label}</span>
              </div>
            ))}
          </div>

          <a
            href="#curriculum"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-800 shadow-xs transition hover:border-slate-300 hover:bg-slate-50"
          >
            কোর্সের সম্পূর্ণ সিলেবাস দেখুন
            <ChevronDown className="size-4 text-slate-500" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const openFreePreview = useOpenFreePreview();

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Subtle studio soft ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[640px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-100/60 via-slate-50/30 to-transparent blur-3xl"
      />

      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-6 lg:col-span-7">
          {/* Top neutral pill badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="size-1.5 rounded-full bg-slate-400" />
            {HERO.badge}
          </div>

          {/* Headline: Only 'প্রফেশনাল ফটো এডিটিং' in Adobe Lightroom Blue */}
          <h1 className="text-3xl font-extrabold leading-[1.25] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
            কোনো পূর্ব অভিজ্ঞতা ছাড়াই <br className="hidden sm:inline" />
            লাইটরুম দিয়ে <span className="text-[#0284C7]">প্রফেশনাল ফটো এডিটিং</span>{' '}
            শিখুন এবং মার্কেটপ্লেসে কাজ শুরু করুন
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            জিরো থেকে শুরু করে ওয়েডিং ফটো এডিটিং, কালার কারেকশন, নিজের প্রিসেট তৈরি এবং ফাইভারে অ্যাকাউন্ট খুলে গিগ
            পাবলিশ করা পর্যন্ত — শিখুন সরাসরি{' '}
            <span className="font-bold text-slate-900 underline decoration-slate-300 underline-offset-4">Fiverr Level 2 Seller</span>{' '}
            <span className="font-bold text-slate-900">{INSTRUCTOR.name}</span>-এর কাছ থেকে, যিনি ২০১৮ সাল থেকে বিদেশি ক্লায়েন্টের কাজ করছেন।
          </p>

          <ul className="grid gap-2.5 pt-2 sm:grid-cols-2">
            {HERO.checklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-600/10">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="space-y-4 pt-4">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-sans text-4xl font-extrabold text-slate-900 sm:text-5xl">{PRICE.offer}</span>
              <s className="font-sans text-xl text-slate-400 sm:text-2xl">
                <span className="sr-only">আগের মূল্য </span>
                {PRICE.regular}
              </s>
              <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                {PRICE.discountLabel} ছাড়
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Primary CTA: High-contrast Deep Charcoal */}
              <Link
                to="/checkout"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-slate-900 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-md shadow-slate-900/15 transition hover:bg-slate-800 active:scale-[0.98]"
              >
                এখনই ভর্তি হন - {PRICE.offer}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={openFreePreview}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-800 shadow-xs transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Play className="size-4 fill-slate-700 text-slate-700" aria-hidden="true" />
                ফ্রি ক্লাস দেখুন
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs font-medium text-slate-500">
              <span>
                <span className="font-bold text-[#E2136E]">বিকাশ</span> ও <span className="font-bold text-[#F7941D]">নগদ</span> এক্সেপ্টেড
              </span>
              <a href="#guarantee" className="flex items-center gap-1 font-semibold text-emerald-700 hover:underline">
                <ShieldCheck className="size-4 text-emerald-600" aria-hidden="true" />
                {GUARANTEE.days} দিনের মানি-ব্যাক গ্যারান্টি
              </a>
              <span className="flex items-center gap-1">
                <Lock className="size-4 text-slate-400" aria-hidden="true" />
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
