// Shared heading for the landing-page sections.
export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-12">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-extrabold leading-snug text-white text-balance sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-base leading-relaxed text-slate-300">{subtitle}</p>}
    </div>
  );
}
