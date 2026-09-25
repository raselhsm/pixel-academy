export default function Logo({ withMark = true }) {
  return (
    <span className="flex items-center gap-3 font-sans">
      {withMark && (
        <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-lg font-bold text-slate-950 shadow-lg shadow-emerald-500/20 lg:size-10 lg:text-xl">
          P
        </span>
      )}
      <span className="text-xl font-extrabold tracking-tight text-white lg:text-2xl">
        Pixel<span className="text-emerald-400">Academy</span>
      </span>
    </span>
  );
}
