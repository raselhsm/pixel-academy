import { Quote } from 'lucide-react';
import { INCOME_DISCLAIMER, INSTRUCTOR } from '../data/homeContent';

export default function Instructor() {
  const { name, role, photo, initial, bio, metadata, quote } = INSTRUCTOR;

  return (
    <section id="instructor" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
        <div className="order-last lg:order-first lg:col-span-5">
          {/* Big portrait only with a real photo; otherwise a small monogram sits by the name. */}
          {photo && (
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border border-emerald-500/30 shadow-xl shadow-emerald-500/10">
              <img src={photo} alt={name} loading="lazy" className="size-full object-cover object-top" />
            </div>
          )}

          {/* Lightroom's Metadata panel, as a nod to the course subject. */}
          <dl className={`mx-auto max-w-sm ${photo ? 'mt-5' : ''} overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 font-sans text-sm`}>
            <div className="border-b border-slate-800 bg-slate-900/80 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Metadata
            </div>
            {metadata.map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-4 border-b border-slate-800/60 px-4 py-2 last:border-0">
                <dt className="text-slate-500">{label}</dt>
                <dd className="text-right font-semibold text-slate-100">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-5 lg:col-span-7 lg:pt-2">
          <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400">আপনার মেন্টর</span>
          <div className="flex items-center gap-4">
            {!photo && (
              <span aria-hidden="true" className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/60 to-slate-900 font-heading text-2xl font-extrabold text-emerald-300">
                {initial}
              </span>
            )}
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{name}</h2>
              <p className="mt-1 text-sm font-semibold text-emerald-400">{role}</p>
            </div>
          </div>
          {bio.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-slate-300">
              {paragraph}
            </p>
          ))}
          <blockquote className="flex gap-3 rounded-2xl border-l-4 border-emerald-500 bg-emerald-500/5 p-5 text-slate-200">
            <Quote className="size-5 shrink-0 text-emerald-400" aria-hidden="true" />
            <p className="leading-relaxed">{quote}</p>
          </blockquote>
          <p className="text-xs leading-relaxed text-slate-500">{INCOME_DISCLAIMER}</p>
        </div>
      </div>
    </section>
  );
}
