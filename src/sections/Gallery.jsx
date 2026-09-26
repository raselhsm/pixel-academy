import SectionHeading from '../components/ui/SectionHeading';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import { GALLERY, HERO_BEFORE_IMAGE, HERO_IMAGE, PROMO_VIDEO_URL } from '../data/homeContent';

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl scroll-mt-24 border-t border-slate-800 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="এডিটিং স্টাইল"
        title="কোর্সে যে ধরনের এডিটিং শিখবেন"
        subtitle="ওয়েডিং, কালার কারেকশন ও কাস্টম প্রিসেট দিয়ে প্রফেশনাল লুক"
      />
      {/* The hero shows the intro video once it's set, so the before/after lives here. */}
      {PROMO_VIDEO_URL && (
        <div className="mx-auto mb-10 max-w-4xl">
          <BeforeAfterSlider image={HERO_IMAGE} beforeImage={HERO_BEFORE_IMAGE} alt="ওয়েডিং ফটো" className="aspect-[16/10] w-full" />
          <p className="pt-3 text-center text-xs text-slate-400">↔ দাগটি টেনে এডিটের আগে ও পরে দেখুন</p>
        </div>
      )}
      {/* Swipeable row on phones so the section doesn't push the curriculum far down. */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
        {GALLERY.map(({ label, title, image }) => (
          <figure
            key={title}
            className="group relative w-[75vw] max-w-xs shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 sm:w-auto sm:max-w-none"
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none sm:h-72"
            />
            <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-5">
              <span className="text-xs font-bold text-emerald-400">{label}</span>
              <span className="text-lg font-bold text-white">{title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
