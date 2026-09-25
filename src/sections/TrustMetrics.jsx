import { TRUST_METRICS } from '../data/homeContent';

export default function TrustMetrics() {
  return (
    <section aria-label="আমাদের অর্জন" className="border-y border-slate-800 bg-slate-900/40 py-10">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 text-center sm:px-6 md:grid-cols-4">
        {TRUST_METRICS.map(({ value, label, accent }) => (
          <div key={label} className="flex flex-col-reverse">
            <dt className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</dt>
            <dd
              className={`font-sans text-2xl font-extrabold sm:text-3xl ${accent ? 'text-emerald-400' : 'text-white'}`}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
