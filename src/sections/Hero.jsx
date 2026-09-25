import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import { HERO_IMAGE, PRICE, STUDENT_AVATARS } from '../data/homeContent';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-0 -z-10 size-96 bg-emerald-500/10 blur-[130px]"
      />

      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            ব্যাচ ০৬ রেজিস্ট্রেশন চলছে • মাত্র ১২টি সিট বাকি
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-balance text-white sm:text-5xl lg:text-6xl">
            প্রফেশনাল{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
              লাইটরুম এডিটিং
            </span>{' '}
            শিখুন, আন্তর্জাতিক ক্যারিয়ার গড়ুন।
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            কোনো পূর্ব অভিজ্ঞতা ছাড়াই বেসিক RAW প্রসেসিং থেকে শুরু করে হাই-এন্ড ওয়েডিং কালার গ্রেডিং ও স্কিন রিটাচিং
            শিখুন। সাথে থাকছে ফাইভার ও আপওয়ার্কে ক্লায়েন্ট পাওয়ার কমপ্লিট রোডম্যাপ।
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#pricing"
              className="group flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              কোর্সে জয়েন করুন ({PRICE.discountLabel} ছাড়)
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
            <a
              href="#curriculum"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-4 font-semibold text-slate-200 transition hover:border-slate-500"
            >
              কারিকুলাম দেখুন
              <ChevronDown className="size-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 border-t border-slate-800/80 pt-5">
            <div className="flex -space-x-3">
              {STUDENT_AVATARS.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full border-2 border-slate-900 object-cover"
                />
              ))}
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-slate-900 bg-emerald-950 font-sans text-xs font-bold text-emerald-400">
                +1.2k
              </div>
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-sm text-amber-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                ))}
                <span className="ml-1.5 font-sans font-bold text-white">4.9/5</span>
              </div>
              <p className="text-xs text-slate-400">১২৫০+ শিক্ষার্থী ইতিমধ্যে সফলভাবে সম্পন্ন করেছেন</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-800 to-slate-900/60 p-2.5 shadow-2xl">
            <BeforeAfterSlider
              image={HERO_IMAGE}
              alt="ওয়েডিং ফটো"
              className="aspect-[4/5] max-h-[520px] w-full sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <p className="px-2 pt-3 text-center text-xs text-slate-400">
              দাগটি ডানে-বামে টেনে (বা অ্যারো কী দিয়ে) এডিটিংয়ের আউটপুট দেখুন
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
