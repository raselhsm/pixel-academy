export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`mx-auto mb-12 max-w-2xl text-center sm:mb-14 ${className}`}>
      <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold text-balance text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm text-slate-400 sm:text-base">{subtitle}</p>}
    </div>
  );
}
