import SectionHeading from '../components/ui/SectionHeading';
import { GALLERY } from '../data/homeContent';

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl scroll-mt-24 border-t border-slate-800 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="কোর্সে যে ধরণের এডিটিং শিখবেন"
        subtitle="আন্তর্জাতিক মানের ওয়েডিং, পোর্ট্রেট ও সিনেমাটিক কালার গ্রেডিং"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY.map(({ tag, title, image }, i) => (
          <figure
            key={title}
            className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 ${
              i === GALLERY.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
            <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6">
              <span className="font-sans text-xs font-bold tracking-wider text-emerald-400">{tag}</span>
              <span className="text-lg font-bold text-white">{title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
