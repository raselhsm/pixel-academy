import { useId } from 'react';

export default function Field({ label, hint, error, className = '', ...inputProps }) {
  const id = useId();

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? `${id}-note` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 shadow-xs transition focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20 ${
          error ? 'border-red-400 bg-red-50/30' : 'border-slate-200 hover:border-slate-300'
        }`}
        {...inputProps}
      />
      {(error || hint) && (
        <p id={`${id}-note`} className={`mt-1.5 text-xs font-medium ${error ? 'text-red-600' : 'text-slate-500'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
}
