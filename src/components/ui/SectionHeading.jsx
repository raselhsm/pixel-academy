export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`mx-auto mb-12 max-w-2xl text-center sm:mb-14 ${className}`}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-sky-200 bg-[#E0F2FE] px-3.5 py-1 text-xs font-bold text-[#0369A1]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-extrabold text-balance text-[#0F172A] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-slate-600 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
