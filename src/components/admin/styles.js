// Tailwind class sets shared by the admin pages.

export const buttonStyles = {
  primary:
    'inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0284C7] px-4 py-2 text-sm font-bold text-white shadow-2xs transition hover:bg-[#0369A1] disabled:opacity-50',
  secondary:
    'inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-2xs transition hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50',
  danger:
    'inline-flex items-center justify-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:opacity-50',
  icon: 'inline-flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30',
};

export const inputStyles =
  'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20';
