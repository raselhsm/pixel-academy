// Tailwind class sets shared by the admin pages.

export const buttonStyles = {
  primary: 'inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-50',
  secondary: 'inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white disabled:opacity-50',
  danger: 'inline-flex items-center justify-center gap-1.5 rounded-xl border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10 disabled:opacity-50',
  icon: 'inline-flex size-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white disabled:opacity-30',
};

export const inputStyles =
  'w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30';
