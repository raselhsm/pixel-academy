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
    <dl className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs">
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between gap-3 text-slate-600">
          <dt>{label}</dt>
          <dd className="text-right font-bold text-slate-900">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ProofSection() {
  const openFreePreview = useOpenFreePreview();

  return (
    <section id="instructor" className="scroll-mt-20 border-y border-slate-200/80 bg-slate-50/60 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map(({ value, label, sub, star }) => (
            <div
              key={label}
              className="flex flex-col-reverse rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-studio transition hover:border-slate-300 hover:shadow-studio-md"
            >
              <div>
                <dt className="mt-1 text-sm font-bold text-slate-800">{label}</dt>
                <p className="mt-0.5 text-xs text-slate-500">{sub}</p>
              </div>
              <dd className="flex items-center justify-center gap-1 font-sans text-2xl font-extrabold text-slate-900 sm:text-4xl">
                {value}
                {star && <span className="text-2xl text-[#F59E0B]">★</span>}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-studio-lg sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 border-b border-slate-100 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                {INSTRUCTOR.photo ? (
                  <img src={INSTRUCTOR.photo} alt={INSTRUCTOR.name} className="size-20 rounded-2xl object-cover shadow-sm ring-1 ring-black/5" />
                ) : (
                  <div aria-hidden="true" className="flex size-20 items-center justify-center rounded-2xl bg-slate-900 text-3xl font-extrabold text-white shadow-sm ring-1 ring-black/5">
                    {INSTRUCTOR.initial}
                  </div>
                )}
                <span className="absolute -bottom-2 -right-2 rounded-full border-2 border-white bg-slate-900 px-2 py-0.5 font-sans text-[10px] font-extrabold text-white shadow-xs">
                  Level 2
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{INSTRUCTOR.name}</h2>
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-0.5 font-sans text-xs font-semibold text-slate-700">
                    Fiverr Level 2 Seller
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500">প্রফেশনাল ফটো এডিটর • ২০১৮ সাল থেকে কর্মরত</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {[
                ['অর্ডার সম্পন্ন', '৫০০+ অর্ডার'],
                ['টিম মেম্বার', '৩০+ প্রফেশনাল এডিটর'],
                ['সরাসরি শেখা স্টুডেন্ট', '৭৭+ জন এখন ক্লায়েন্টের কাজ করেন'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-2.5 text-center">
                  <span className="text-xs text-slate-500">{label}</span>
                  <p className="font-bold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-base italic leading-relaxed text-slate-600 sm:text-lg">&ldquo;{INSTRUCTOR.quote}&rdquo;</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-studio transition hover:border-slate-300">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-md bg-[#1dbf73] font-sans text-xs font-black text-white">fi</span>
                  <span className="text-sm font-bold text-slate-900">Fiverr রেকর্ড</span>
                </div>
                <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-sans text-[11px] font-bold text-emerald-800">Level 2</span>
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-slate-500">ফাইভারে আয়</span>
                <div className="font-sans text-3xl font-extrabold text-slate-900">$২১,০০০+</div>
                <span className="text-[11px] text-slate-500">লাইফটাইম ফ্রিল্যান্সিং আয় $১,০০,০০০+</span>
              </div>
              <Rows rows={FIVERR_ROWS} />
            </div>

            <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-studio transition hover:border-slate-300">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-sm font-bold text-slate-900">শেখানোর রেকর্ড</span>
                <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-bold text-slate-700">২০১৮ থেকে</span>
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-slate-500">অফলাইন স্টুডেন্টদের মধ্যে ক্লায়েন্ট পেয়েছেন</span>
                <div className="font-sans text-3xl font-extrabold text-slate-900">৭৭+ / ৯২</div>
                <span className="text-[11px] text-slate-500">একই পদ্ধতিতে এখন অনলাইন কোর্স</span>
              </div>
              <Rows rows={TEACHING_ROWS} />
            </div>

            <button
              type="button"
              onClick={openFreePreview}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-5 text-left shadow-studio transition hover:border-slate-300 hover:bg-slate-50"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-sm font-bold text-slate-900">কেনার আগে দেখে নিন</span>
                  <span className="size-2 rounded-full bg-slate-400" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  কোর্সের একটা পুরো ক্লাস সবার জন্য ফ্রি। শেখানোর ধরন নিজে দেখে তারপর সিদ্ধান্ত নিন।
                </p>
              </div>
              <span className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-bold text-white shadow-xs transition group-hover:bg-slate-800">
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
