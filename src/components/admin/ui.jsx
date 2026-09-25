// Small building blocks shared by the admin pages.

export function PageHeader({ title, subtitle, actions }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Panel({ title, action, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-800 bg-slate-900/50 ${className}`}>
      {title && (
        <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-5 py-4">
          <h2 className="font-bold text-white">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function ErrorNote({ children }) {
  return (
    <p role="alert" className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
      {children}
    </p>
  );
}

export function EmptyState({ children }) {
  return <p className="px-5 py-14 text-center text-sm text-slate-400">{children}</p>;
}
