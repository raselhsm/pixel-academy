import { ChevronDown, MonitorPlay, PlayCircle } from 'lucide-react';
import { useOpenFreePreview } from '../lib/freePreview';
import CourseCard from './CourseCard';
import { COURSE, INSTRUCTOR, SOCIAL_PROOF } from '../data/homeContent';

const HIGHLIGHTS = ['নিজের সময়ে শিখুন', 'মোবাইল ও ল্যাপটপে দেখুন', 'প্রিসেট ও RAW ফাইল ফ্রি'];

export default function Hero() {
  const openFreePreview = useOpenFreePreview();

  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-0 -z-10 size-96 bg-emerald-500/10 blur-[130px]"
      />

      {/* On phones the card sits right under the headline; on desktop it's the right-hand column. */}
      <div className="grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-8">
        <div className="space-y-5 lg:col-span-7 lg:pt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
            <MonitorPlay className="size-4" aria-hidden="true" />
            বাংলায় {COURSE.format} • নিজের সময়ে শিখুন
          </div>

          <h1 className="text-[2rem] font-extrabold leading-tight text-balance text-white sm:text-5xl lg:text-6xl">
            ঘরে বসে{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
              লাইটরুম ফটো এডিটিং
            </span>{' '}
            শিখুন, ফ্রিল্যান্সিংয়ে আয়ের পথ তৈরি করুন
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            একদম শুরু থেকে প্রফেশনাল ওয়েডিং ফটো এডিটিং, তারপর ফাইভারে অ্যাকাউন্ট খুলে কাজ পাওয়া পর্যন্ত — শেখাচ্ছেন
            ২০১৮ সাল থেকে বিদেশি ক্লায়েন্টের কাজ করা <span className="font-semibold text-white">{INSTRUCTOR.name}</span>।
          </p>
        </div>

        <div className="lg:col-span-5 lg:row-span-2">
          <div className="mx-auto max-w-md lg:sticky lg:top-24 lg:max-w-none">
            <CourseCard />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-7">
          <ul className="flex flex-wrap gap-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="rounded-full border border-slate-700 bg-slate-900/60 px-3.5 py-1.5 text-sm text-slate-200">
                ✓ {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4 border-t border-slate-800/80 pt-5">
            <div className="flex -space-x-3">
              {SOCIAL_PROOF.initials.map((letter, i) => (
                <span
                  key={letter + i}
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-700 to-slate-800 text-sm font-bold text-slate-200"
                >
                  {letter}
                </span>
              ))}
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-slate-900 bg-emerald-950 text-xs font-bold text-emerald-400">
                {SOCIAL_PROOF.badge}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-snug text-white">{SOCIAL_PROOF.headline}</p>
              <p className="mt-0.5 text-xs text-slate-400">{SOCIAL_PROOF.sub}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <button
              type="button"
              onClick={openFreePreview}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 font-bold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <PlayCircle className="size-5" aria-hidden="true" />
              ফ্রি ক্লাস দেখুন
            </button>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-emerald-400"
            >
              কোর্সে কী কী শিখবেন দেখুন
              <ChevronDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
