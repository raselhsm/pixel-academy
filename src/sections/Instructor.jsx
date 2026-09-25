import { INSTRUCTOR } from '../data/homeContent';

export default function Instructor() {
  const { name, role, photo, initial, bio, stats } = INSTRUCTOR;

  return (
    <section id="instructor" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid items-center gap-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 md:grid-cols-12 lg:p-12">
        <div className="text-center md:col-span-5">
          {photo ? (
            <img
              src={photo}
              alt={name}
              loading="lazy"
              width={224}
              height={224}
              className="mx-auto size-44 rounded-2xl border-2 border-emerald-500/40 object-cover shadow-xl shadow-emerald-500/10 sm:size-56"
            />
          ) : (
            // Monogram until a real photo is added in homeContent.js.
            <div
              aria-hidden="true"
              className="mx-auto flex size-44 items-center justify-center rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/60 to-slate-900 text-7xl font-bold text-emerald-300 shadow-xl shadow-emerald-500/10 sm:size-56"
            >
              {initial}
            </div>
          )}
          <h3 className="mt-4 text-xl font-bold text-white">{name}</h3>
          <p className="text-xs font-semibold text-emerald-400">{role}</p>
        </div>

        <div className="space-y-4 md:col-span-7">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Your Mentor</span>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">আপনার মেন্টর সম্পর্কে জানুন</h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{bio}</p>
          <dl className="grid grid-cols-3 gap-3 pt-2">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col-reverse rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-3 text-center"
              >
                <dt className="text-xs text-slate-400">{label}</dt>
                <dd className="font-sans text-base font-bold text-emerald-400 sm:text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
