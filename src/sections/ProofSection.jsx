import { Play } from 'lucide-react';
import { useOpenFreePreview } from '../lib/freePreview';
import { FREE_PREVIEW, INCOME_DISCLAIMER, INSTRUCTOR, STATS } from '../data/homeContent';

// Rows for the proof cards; every figure is confirmed (see homeContent.js).
const FIVERR_ROWS = [
  ['লেভেল', 'Level 2 Seller'],
  ['সম্পন্ন অর্ডার', '৫০০+ (৫-স্টার রিভিউ)'],
  ['কাজ শুরু', '২০১৮ সাল'],
  ['ক্লায়েন্ট', 'আমেরিকা, যুক্তরাজ্য, ইউরোপ'],
];

const TEACHING_ROWS = [
  ['অফিসে সরাসরি শিখেছেন', '৯২ জন'],
  ['এখন ক্লায়েন্টের কাজ করেন', '৭৭+ জন'],
  ['অনলাইনে কোর্সটি করেছেন', '৪০+ জন'],
  ['নিজের এডিটর টিম', '৩০+ জন'],
];

function Rows({ rows }) {
  return (
    <dl className="mt-4 space-y-2 border-t border-slate-800 pt-3 text-xs">
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between gap-3 text-slate-300">
          <dt>{label}</dt>
          <dd className="text-right font-bold text-emerald-400">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ProofSection() {
  const openFreePreview = useOpenFreePreview();

  return (
    <section id="instructor" className="scroll-mt-20 border-y border-slate-800/80 bg-slate-950/60 py-12 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map(({ value, label, sub, star, accent }) => (
            <div key={label} className="flex flex-col-reverse rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-center transition hover:border-emerald-500/40">
              <div>
                <dt className={`mt-1 text-sm font-semibold ${accent ? 'text-white' : 'text-emerald-400'}`}>{label}</dt>
                <p className="mt-0.5 text-xs text-slate-400">{sub}</p>
              </div>
              <dd className={`flex items-center justify-center gap-1 font-sans text-2xl font-extrabold sm:text-4xl ${accent ? 'text-emerald-400' : 'text-white'}`}>
                {value}
                {star && <span className="text-2xl text-amber-400">★</span>}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-[#0B0F17] p-6 shadow-2xl sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 border-b border-slate-800/80 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                {INSTRUCTOR.photo ? (
                  <img src={INSTRUCTOR.photo} alt={INSTRUCTOR.name} className="size-20 rounded-2xl object-cover shadow-lg shadow-emerald-500/25" />
                ) : (
                  <div aria-hidden="true" className="flex size-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-3xl font-black text-slate-950 shadow-lg shadow-emerald-500/25">
                    {INSTRUCTOR.initial}
                  </div>
                )}
                <span className="absolute -bottom-2 -right-2 rounded-full border-2 border-slate-900 bg-emerald-500 px-2 py-0.5 font-sans text-[10px] font-extrabold text-slate-950">
                  Level 2
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">{INSTRUCTOR.name}</h2>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-sans text-xs font-bold text-emerald-400">
                    Fiverr Level 2 Seller
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">প্রফেশনাল ফটো এডিটর • ২০১৮ সাল থেকে কর্মরত</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                ['অর্ডার সম্পন্ন', '৫০০+ অর্ডার'],
                ['টিম মেম্বার', '৩০+ প্রফেশনাল এডিটর'],
                ['সরাসরি শেখা স্টুডেন্ট', '৭৭+ জন এখন ক্লায়েন্টের কাজ করেন'],
              ].map(([label, value], i) => (
                <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-center">
                  <span className="text-xs text-slate-400">{label}</span>
                  <p className={`font-bold ${i === 1 ? 'text-emerald-400' : 'text-white'}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-base italic leading-relaxed text-slate-300 sm:text-lg">&ldquo;{INSTRUCTOR.quote}&rdquo;</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-5 shadow-xl transition hover:border-emerald-500">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-md bg-[#1dbf73] font-sans text-xs font-black text-white">fi</span>
                  <span className="text-sm font-bold text-white">Fiverr রেকর্ড</span>
                </div>
                <span className="rounded border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 font-sans text-[11px] font-bold text-emerald-300">Level 2</span>
              </div>
              <div className="mt-4">
                <span className="text-xs text-slate-400">ফাইভারে আয়</span>
                <div className="font-sans text-3xl font-extrabold text-emerald-400">$২১,০০০+</div>
                <span className="text-[11px] text-slate-500">লাইফটাইম ফ্রিল্যান্সিং আয় $১,০০,০০০+</span>
              </div>
              <Rows rows={FIVERR_ROWS} />
            </div>

            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-xl transition hover:border-emerald-500/40">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-sm font-bold text-white">শেখানোর রেকর্ড</span>
                <span className="rounded border border-slate-700 px-2 py-0.5 text-[11px] font-bold text-slate-300">২০১৮ থেকে</span>
              </div>
              <div className="mt-4">
                <span className="text-xs text-slate-400">অফলাইন স্টুডেন্টদের মধ্যে ক্লায়েন্ট পেয়েছেন</span>
                <div className="font-sans text-3xl font-extrabold text-white">৭৭+ / ৯২</div>
                <span className="text-[11px] text-slate-500">একই পদ্ধতিতে এখন অনলাইন কোর্স</span>
              </div>
              <Rows rows={TEACHING_ROWS} />
            </div>

            <button
              type="button"
              onClick={openFreePreview}
              className="group flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-5 text-left shadow-xl transition hover:border-emerald-500/40"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-sm font-bold text-white">কেনার আগে দেখে নিন</span>
                  <span className="size-2 rounded-full bg-emerald-400" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  কোর্সের একটা পুরো ক্লাস সবার জন্য ফ্রি। শেখানোর ধরন নিজে দেখে তারপর সিদ্ধান্ত নিন।
                </p>
              </div>
              <span className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-500/15 py-3 font-bold text-emerald-300 transition group-hover:bg-emerald-500 group-hover:text-slate-950">
                <Play className="size-4 fill-current" aria-hidden="true" />
                {FREE_PREVIEW.label}
              </span>
            </button>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-slate-500">{INCOME_DISCLAIMER}</p>
        </div>
      </div>
    </section>
  );
}
