import { useId, useState } from 'react';
import { Plus } from 'lucide-react';

export function AccordionItem({ label, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-slate-900/50 transition-colors ${
        open ? 'border-emerald-500/30' : 'border-slate-800 hover:border-slate-700'
      }`}
    >
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-slate-100 transition hover:text-emerald-400 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-400 sm:p-6"
        >
          <span className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
            {label && (
              <span className="shrink-0 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-sans text-xs text-emerald-400">
                {label}
              </span>
            )}
            <span className="text-base leading-snug">{title}</span>
          </span>
          <Plus
            aria-hidden="true"
            className={`size-5 shrink-0 text-emerald-400 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          <div className="border-t border-slate-800/60 px-5 pb-6 pt-4 text-sm leading-relaxed text-slate-400 sm:px-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ children }) {
  return <div className="space-y-4">{children}</div>;
}
