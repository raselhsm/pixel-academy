import { useId } from 'react';

export default function Field({ label, hint, error, className = '', ...inputProps }) {
  const id = useId();

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-slate-200">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? `${id}-note` : undefined}
        className={`w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-base text-white placeholder:text-slate-500 transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 ${
          error ? 'border-red-500/70' : 'border-slate-700'
        }`}
        {...inputProps}
      />
      {(error || hint) && (
        <p id={`${id}-note`} className={`mt-1.5 text-xs ${error ? 'text-red-400' : 'text-slate-400'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
}
