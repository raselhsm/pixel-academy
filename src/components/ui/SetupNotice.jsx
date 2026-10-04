import { Link } from 'react-router';
import { WHATSAPP_URL } from '../../data/homeContent';

// Shown on account pages until Supabase keys are configured.
export default function SetupNotice() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-[#0F172A]">স্টুডেন্ট লগইন শীঘ্রই চালু হচ্ছে</h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        কোর্স কিনতে বা অ্যাক্সেস পেতে হোয়াটসঅ্যাপে যোগাযোগ করুন অথবা চেকআউট পেজ থেকে অর্ডার পাঠান।
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link to="/checkout" className="rounded-xl bg-[#0284C7] px-6 py-3 font-bold text-white shadow-studio hover:bg-[#0369A1]">
          কোর্সটি কিনুন
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 shadow-2xs hover:bg-slate-50"
        >
          হোয়াটসঅ্যাপ
        </a>
      </div>
    </div>
  );
}
