import { BadgeCheck, Quote } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { INCOME_DISCLAIMER, INSTRUCTOR } from '../data/homeContent';

// Owner-confirmed figures (see INSTRUCTOR in homeContent.js).
const STATS = [
  { value: '৫০০+', label: 'সফল ফাইভার অর্ডার' },
  { value: '$২১,০০০+', label: 'ফাইভারে আর্নিং' },
  { value: '৯২+', label: 'অফলাইন স্টুডেন্ট' },
  { value: '৫★', label: 'ফাইভারে টপ রেটিং' },
];

export default function Instructor() {
  return (
    <section id="instructor" className="scroll-mt-28 border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="👨‍🏫 আপনার মেন্টর" title="যিনি নিজে প্রতিদিন বিদেশি ক্লায়েন্টের কাজ করেন" />

        <div className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 md:grid-cols-[220px_1fr] md:items-center">
          <div className="mx-auto text-center">
            {INSTRUCTOR.photo ? (
              <img src={INSTRUCTOR.photo} alt={INSTRUCTOR.name} className="size-44 rounded-full border-4 border-brand-500/40 object-cover" />
            ) : (
              <span className="flex size-44 items-center justify-center rounded-full border-4 border-brand-500/40 bg-gradient-to-br from-brand-700 to-brand-950 text-5xl font-extrabold text-white">
                {INSTRUCTOR.initial}
              </span>
            )}
            <h3 className="mt-4 flex items-center justify-center gap-1.5 text-xl font-bold text-white">
              {INSTRUCTOR.name}
              <BadgeCheck className="size-5 text-brand-400" aria-label="ভেরিফায়েড" />
            </h3>
            <p className="text-sm text-brand-300">Fiverr Level 2 Seller • ৫+ বছর অভিজ্ঞতা</p>
          </div>

          <div className="space-y-5">
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-slate-800 bg-navy/70 p-3 text-center">
                  <dd className="font-sans text-xl font-extrabold text-white">{value}</dd>
                  <dt className="mt-0.5 text-xs text-slate-400">{label}</dt>
                </div>
              ))}
            </dl>
            {INSTRUCTOR.bio.map((p) => (
              <p key={p.slice(0, 20)} className="text-sm leading-relaxed text-slate-300">
                {p}
              </p>
            ))}
            <blockquote className="relative rounded-2xl border-l-4 border-brand-400 bg-brand-500/10 p-4 pl-5 text-sm italic leading-relaxed text-slate-200">
              <Quote className="mb-1 size-5 text-brand-400" aria-hidden="true" />
              {INSTRUCTOR.quote}
            </blockquote>
            <p className="text-xs text-slate-500">{INCOME_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
