import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';
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

const iconLink =
  'flex size-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-emerald-500/50 hover:text-white';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070a10] text-sm text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs leading-relaxed">
            লাইটরুম ফটো এডিটিং শিখে ফ্রিল্যান্সিংয়ে সফল ক্যারিয়ার গড়তে বাংলাদেশি শিক্ষার্থীদের পাশে।
          </p>
          <div className="flex gap-2">
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook পেজ" className={iconLink}>
              <FacebookIcon />
            </a>
            <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube চ্যানেল" className={iconLink}>
              <YouTubeIcon />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-bold text-white">যোগাযোগ</h2>
          <ul className="space-y-3">
            <li>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2.5 font-sans transition hover:text-white">
                <Phone className="size-4 text-emerald-400" aria-hidden="true" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 font-sans transition hover:text-white">
                <Mail className="size-4 text-emerald-400" aria-hidden="true" /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-400" aria-hidden="true" /> {CONTACT.address}
            </li>
          </ul>
        </div>

        <nav aria-label="প্রয়োজনীয় লিংক">
          <h2 className="mb-4 font-bold text-white">প্রয়োজনীয় লিংক</h2>
          <ul className="space-y-3">
            <li>
              <Link to="/checkout" className="transition hover:text-emerald-400">কোর্সটি কিনুন</Link>
            </li>
            <li>
              <Link to="/login" className="transition hover:text-emerald-400">স্টুডেন্ট লগইন</Link>
            </li>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="transition hover:text-emerald-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="border-t border-slate-800/80 px-4 py-5 text-center text-xs">
        © ২০২৬ Pixel Academy IT • সর্বস্বত্ব সংরক্ষিত
      </p>
    </footer>
  );
}
