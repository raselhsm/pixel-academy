export default function Logo({ withMark = true }) {
  return (
    <span className="flex items-center gap-3">
      {withMark && (
        <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 shadow-lg shadow-brand-600/30">
          <span className="font-sans text-xl font-black text-white">P</span>
        </span>
      )}
      <span className="leading-tight">
        <span className="block font-sans text-lg font-bold tracking-tight text-white">Pixel Academy</span>
        <span className="block font-sans text-[11px] font-medium text-brand-400">Lightroom &amp; Freelancing</span>
      </span>
    </span>
  );
}
