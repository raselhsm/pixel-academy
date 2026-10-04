export default function Logo({ withMark = true, inverted = false }) {
  return (
    <span className="flex items-center gap-2.5">
      {withMark && (
        <span className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0369A1] shadow-sm shadow-sky-600/20 ring-1 ring-black/5">
          <span className="font-sans text-lg sm:text-xl font-extrabold text-white tracking-tight">Lr</span>
        </span>
      )}
      <span className="leading-tight">
        <span className={`block font-sans text-base sm:text-lg font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-[#0F172A]'}`}>
          Pixel Academy
        </span>
        <span className={`block font-sans text-[11px] font-semibold ${inverted ? 'text-sky-400' : 'text-[#0284C7]'}`}>
          Lightroom &amp; Freelancing
        </span>
      </span>
    </span>
  );
}
