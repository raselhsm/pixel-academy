import { Link } from 'react-router';
import { useCourseIncludes } from '../hooks/useCourseOutline';
import { Check, Flame, Lock, PlayCircle } from 'lucide-react';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import VideoPreview from '../components/ui/VideoPreview';
import { useCountdown } from '../hooks/useCountdown';
import { toBnDigits } from '../lib/format';
import { COURSE, GUARANTEE, HERO_BEFORE_IMAGE, HERO_IMAGE, OFFER_ENDS_AT, PRICE, PROMO_VIDEO_URL, SUPPORT_PHONE } from '../data/homeContent';

export default function CourseCard() {
  const left = useCountdown(OFFER_ENDS_AT);
  const includes = useCourseIncludes();

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900 shadow-2xl shadow-emerald-500/10 ring-1 ring-white/5">
      <div className="relative p-2.5 pb-0">
        {PROMO_VIDEO_URL ? (
          <>
            <VideoPreview url={PROMO_VIDEO_URL} title={`${COURSE.title} — কোর্স পরিচিতি`} label="কোর্সের পরিচিতি দেখুন" className="aspect-video w-full" />
            <p className="px-1 pt-2 text-center text-[11px] text-slate-400">▶ কোর্সে কী শিখবেন, ভিডিওতে দেখুন</p>
          </>
        ) : (
          <>
            <BeforeAfterSlider image={HERO_IMAGE} beforeImage={HERO_BEFORE_IMAGE} alt="ওয়েডিং ফটো" className="aspect-[4/3] w-full" />
            <p className="px-1 pt-2 text-center text-[11px] text-slate-400">↔ টেনে দেখুন: এডিটের আগে ও পরে</p>
          </>
        )}
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-400">
            <PlayCircle className="size-3.5" aria-hidden="true" /> {COURSE.title} • {COURSE.format}
          </span>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-sans">
            <span className="text-4xl font-extrabold text-white">{PRICE.offer}</span>
            <s className="text-lg text-slate-500">
              <span className="sr-only">আগের মূল্য </span>
              {PRICE.regular}
            </s>
            <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-bold text-red-300">{PRICE.discountLabel} ছাড়</span>
          </div>
          {left && (
            <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-amber-300">
              <Flame className="size-4" aria-hidden="true" />
              ছাড় শেষ হতে বাকি{' '}
              <span className="font-sans tabular-nums">
                {left.days > 0 && `${toBnDigits(left.days)} দিন `}
                {left.hours}:{left.minutes}:{left.seconds}
              </span>
            </p>
          )}
        </div>

        <div>
          <Link
            to="/checkout"
            className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 text-lg font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:brightness-110 active:scale-[0.99]"
          >
            এখনই কোর্সটি কিনুন →
          </Link>
          <p className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <Lock className="size-3.5" aria-hidden="true" />
            <span>
              <span className="font-semibold text-[#f06aa7]">বিকাশ</span> / <span className="font-semibold text-[#F7941D]">নগদ</span> দিয়ে পেমেন্ট
            </span>
          </p>
          <a href="#guarantee" className="mt-1.5 block text-center text-xs font-semibold text-emerald-400 hover:underline">
            ✓ {GUARANTEE.days} দিনের মানি-ব্যাক গ্যারান্টি
          </a>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <p className="mb-3 text-sm font-bold text-white">এই কোর্সে যা পাচ্ছেন:</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" strokeWidth={3} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-xs text-slate-400">
          কোনো প্রশ্ন? কল/হোয়াটসঅ্যাপ:{' '}
          <a href={`tel:${SUPPORT_PHONE}`} className="font-sans font-bold text-emerald-400 hover:underline">
            {SUPPORT_PHONE}
          </a>
        </p>
      </div>
    </div>
  );
}
