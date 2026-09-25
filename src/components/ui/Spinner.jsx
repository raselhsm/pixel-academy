import { LoaderCircle } from 'lucide-react';

export default function Spinner({ label = 'লোড হচ্ছে…' }) {
  return (
    <div role="status" className="flex min-h-[50vh] items-center justify-center gap-3 text-slate-400">
      <LoaderCircle className="size-5 animate-spin text-emerald-400" aria-hidden="true" />
      {label}
    </div>
  );
}
