import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import { HERO_BEFORE_IMAGE, HERO_IMAGE, SHOWCASE } from '../data/homeContent';

export default function Showcase() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl scroll-mt-20 border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
          ✨ চোখে দেখে বিশ্বাস করুন
        </span>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          সাধারণ RAW ছবিকে বানান{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">প্রফেশনাল ছবি</span>
        </h2>
        <p className="text-base leading-relaxed text-slate-300">
          স্লাইডারের গোল হ্যান্ডেলটি ডানে-বামে টেনে দেখুন লাইটরুমে সঠিক কালার কারেকশনের পর ছবি কতটা বদলে যায়:
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <div className="rounded-3xl border-2 border-slate-700/80 shadow-2xl shadow-emerald-500/10 ring-1 ring-white/10">
          <BeforeAfterSlider image={HERO_IMAGE} beforeImage={HERO_BEFORE_IMAGE} alt="ওয়েডিং ফটো" className="aspect-[16/10] w-full rounded-3xl sm:aspect-[16/9]" />
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">↔ আঙুল দিয়ে বা মাউস দিয়ে ডানে-বামে টেনে পার্থক্য দেখুন</p>
      </div>

      {/* Swipeable on phones, three columns from tablet up. */}
      <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
        {SHOWCASE.map(({ tag, title, text, lesson, image }) => (
          <div
            key={title}
            className="group w-[78vw] max-w-xs shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/50 hover:bg-slate-900 sm:w-auto sm:max-w-none"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-xl">
              <img src={image} alt={title} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
              <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[11px] font-extrabold text-slate-950">{tag}</span>
            </div>
            <div className="mt-4 space-y-1.5">
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="text-xs leading-relaxed text-slate-300">{text}</p>
              <div className="flex items-center justify-between gap-2 pt-2 text-[11px]">
                <span className="font-semibold text-emerald-400">✓ কোর্সে অন্তর্ভুক্ত</span>
                <span className="truncate font-sans text-slate-400">লেসন: {lesson}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
