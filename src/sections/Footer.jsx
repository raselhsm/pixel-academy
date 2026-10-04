import { Link } from 'react-router';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Logo from '../components/ui/Logo';
import { CONTACT, FOOTER_LINKS } from '../data/homeContent';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}

const socialIconStyle =
  'flex size-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 ring-1 ring-white/10 transition-all duration-200 hover:bg-[#0284C7] hover:text-white hover:ring-[#0284C7]/50 hover:scale-105';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 lg:gap-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-4 md:col-span-5 lg:col-span-5">
            <Logo inverted />
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              লাইটরুম ফটো এডিটিং শিখে ফ্রিল্যান্সিংয়ে সফল ক্যারিয়ার গড়তে বাংলাদেশি শিক্ষার্থীদের পাশে।
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook পেজ"
                className={socialIconStyle}
              >
                <FacebookIcon />
              </a>
              <a
                href={CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube চ্যানেল"
                className={socialIconStyle}
              >
                <YouTubeIcon />
              </a>
            </div>

            {/* Payment Trust Badges */}
            <div className="pt-3">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                স্বীকৃত পেমেন্ট মেথড
              </span>
              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-800/80 px-2.5 py-1 text-xs font-bold text-[#E2136E]">
                  <span className="size-2 rounded-full bg-[#E2136E]" /> বিকাশ
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-800/80 px-2.5 py-1 text-xs font-bold text-[#F7941D]">
                  <span className="size-2 rounded-full bg-[#F7941D]" /> নগদ
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-slate-300">
                  <ShieldCheck className="size-3.5 text-sky-400" /> ১০০% সুরক্ষিত
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="md:col-span-4 lg:col-span-4">
            <h2 className="mb-4 text-base font-semibold tracking-wide text-white">যোগাযোগ</h2>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 font-sans transition-colors duration-200 hover:text-sky-400"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-sky-400 ring-1 ring-white/5">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <span>{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 font-sans transition-colors duration-200 hover:text-sky-400"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-sky-400 ring-1 ring-white/5">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-sky-400 ring-1 ring-white/5">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <span className="leading-snug text-slate-400">{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h2 className="mb-4 text-base font-semibold tracking-wide text-white">প্রয়োজনীয় লিংক</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/checkout" className="transition-colors duration-200 hover:text-sky-400">
                  কোর্সটি কিনুন
                </Link>
              </li>
              <li>
                <Link to="/login" className="transition-colors duration-200 hover:text-sky-400">
                  স্টুডেন্ট লগইন
                </Link>
              </li>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition-colors duration-200 hover:text-sky-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 sm:flex-row text-xs text-slate-500">
          <p>© ২০২৬ Pixel Academy IT • সর্বস্বত্ব সংরক্ষিত</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Designed for Lightroom Creators</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
