// Small building blocks shared by the admin pages.

export function PageHeader({ title, subtitle, actions }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Panel({ title, action, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-200/90 bg-white shadow-studio ${className}`}>
      {title && (
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
          <h2 className="font-bold text-[#0F172A]">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function ErrorNote({ children }) {
  return (
    <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
      {children}
    </p>
  );
}

export function EmptyState({ children }) {
  return <p className="px-5 py-14 text-center text-sm text-slate-500">{children}</p>;
}
