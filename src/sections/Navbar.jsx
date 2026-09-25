import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { CircleUserRound, Menu, X } from 'lucide-react';
import Logo from '../components/ui/Logo';
import { NAV_LINKS } from '../data/homeContent';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#090d14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <a href="#top" aria-label="Pixel Academy হোম">
          <Logo />
        </a>

        <nav aria-label="প্রধান মেনু" className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-emerald-400">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:text-white sm:px-4"
          >
            <CircleUserRound className="size-4" aria-hidden="true" />
            লগইন
          </Link>
          <Link
            to="/checkout"
            className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:brightness-110 sm:inline-flex"
          >
            কোর্সটি কিনুন →
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
            className="flex size-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-slate-800 hover:text-white lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="মোবাইল মেনু" className="border-t border-slate-800 bg-[#090d14] lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-slate-200 transition hover:bg-slate-800/70 hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
