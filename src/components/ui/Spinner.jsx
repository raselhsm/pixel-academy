import { LoaderCircle } from 'lucide-react';

export default function Spinner({ label = 'লোড হচ্ছে…' }) {
  return (
    <div role="status" className="flex min-h-[50vh] items-center justify-center gap-3 text-slate-500 font-medium">
      <LoaderCircle className="size-5 animate-spin text-[#0284C7]" aria-hidden="true" />
      {label}
    </div>
  );
}
