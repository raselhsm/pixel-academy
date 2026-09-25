import { ChevronDown, MonitorPlay, Star } from 'lucide-react';
import CourseCard from './CourseCard';
import { COURSE, SOCIAL_PROOF } from '../data/homeContent';

const HIGHLIGHTS = ['নিজের সময়ে শিখুন', 'মোবাইল ও ল্যাপটপে দেখুন', 'প্রিসেট ও RAW ফাইল ফ্রি'];

export default function Hero() {
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
            {COURSE.format} • আজই শুরু করুন, নিজের সময়ে শিখুন
          </div>

          <h1 className="text-[2rem] font-extrabold leading-tight text-balance text-white sm:text-5xl lg:text-6xl">
            প্রফেশনাল{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
              লাইটরুম এডিটিং
            </span>{' '}
            শিখুন, আন্তর্জাতিক ক্যারিয়ার গড়ুন।
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            কোনো পূর্ব অভিজ্ঞতা ছাড়াই লাইটরুমের বেসিক থেকে কালিং, কালার কারেকশন, প্রিসেট তৈরি ও রিয়েল ওয়েডিং
            প্রজেক্ট শিখুন। সাথে থাকছে ফাইভারে অ্যাকাউন্ট খুলে গিগ পাবলিশ করে ক্লায়েন্ট পাওয়ার গাইড।
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
                {SOCIAL_PROOF.students}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-sm text-amber-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                ))}
                <span className="ml-1.5 font-sans font-bold text-white">{SOCIAL_PROOF.rating}/5</span>
                <span className="ml-1 text-xs text-slate-400">({SOCIAL_PROOF.reviews})</span>
              </div>
              <p className="text-xs text-slate-400">{SOCIAL_PROOF.students} শিক্ষার্থী ইতিমধ্যে কোর্সটিতে ভর্তি হয়েছেন</p>
            </div>
          </div>

          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-emerald-400"
          >
            কোর্সে কী কী শিখবেন দেখুন
            <ChevronDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
