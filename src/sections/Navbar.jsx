import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { BookOpenCheck, CircleUserRound, LogOut, Menu, ShieldCheck, X } from 'lucide-react';
import Logo from '../components/ui/Logo';
import { NAV_LINKS, WHATSAPP_URL } from '../data/homeContent';

const pill =
  'flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 sm:px-4';

function WhatsAppIcon() {
  return (
    <svg className="size-4 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.12.17 1.79 2.74 4.34 3.84.61.26 1.08.42 1.45.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3" />
    </svg>
  );
}

// Highlights the account link for the section you're in (e.g. all of /admin/*).
const accountPill = ({ isActive }) =>
  isActive
    ? 'flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-sky-300 bg-sky-50 px-3 py-2 text-xs font-bold text-[#0284C7] sm:px-4'
    : pill;

// Section links jump in-page on the homepage and navigate back to it elsewhere.
function SectionLink({ href, onHome, ...props }) {
  return onHome ? <a href={href} {...props} /> : <Link to={`/${href}`} {...props} />;
}

// `account` is { loggedIn, isAdmin?, onSignOut? } — the landing page passes a
// cheap guess from localStorage, account pages pass the real session.
export default function Navbar({ account = { loggedIn: false } }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  const showBuy = pathname !== '/checkout';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8 lg:py-3.5">
        {onHome ? (
          <a href="#top" aria-label="Pixel Academy হোম">
            <Logo />
          </a>
        ) : (
          <Link to="/" aria-label="Pixel Academy হোম">
            <Logo />
          </Link>
        )}

        <nav aria-label="প্রধান মেনু" className="hidden items-center gap-8 text-sm font-semibold text-slate-600 xl:flex">
          {NAV_LINKS.map((link) => (
            <SectionLink key={link.href} href={link.href} onHome={onHome} className="transition hover:text-[#0284C7]">
              {link.label}
            </SectionLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${pill} hidden sm:flex`} aria-label="হোয়াটসঅ্যাপ হেল্পলাইন">
            <WhatsAppIcon />
            <span>হেল্পলাইন</span>
          </a>
          {account.loggedIn ? (
            <>
              {account.isAdmin && (
                <NavLink to="/admin" className={(state) => `${accountPill(state)} hidden md:flex`}>
                  <ShieldCheck className="size-4" aria-hidden="true" />
                  অ্যাডমিন
                </NavLink>
              )}
              <NavLink to="/my-course" className={accountPill}>
                <BookOpenCheck className="size-4" aria-hidden="true" />
                আমার কোর্স
              </NavLink>
              {account.onSignOut && (
                <button
                  type="button"
                  onClick={account.onSignOut}
                  aria-label="লগআউট"
                  title="লগআউট"
                  className="hidden size-9 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 md:flex"
                >
                  <LogOut className="size-4" />
                </button>
              )}
            </>
          ) : (
            <Link to="/login" className={pill}>
              <CircleUserRound className="size-4 text-slate-500" aria-hidden="true" />
              লগইন
            </Link>
          )}
          {showBuy && (
            <Link
              to="/checkout"
              className="hidden whitespace-nowrap rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-slate-900/10 transition hover:bg-slate-800 active:scale-[0.98] lg:inline-flex"
            >
              কোর্সটি কিনুন →
            </Link>
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
            className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-slate-900 xl:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="মোবাইল মেনু" className="border-t border-slate-200 bg-white/95 px-4 py-3 shadow-lg xl:hidden backdrop-blur-md">
          <ul className="mx-auto grid max-w-7xl gap-1 sm:px-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <SectionLink
                  href={link.href}
                  onHome={onHome}
                  onClick={close}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#0284C7]"
                >
                  {link.label}
                </SectionLink>
              </li>
            ))}
            {account.isAdmin && (
              <li>
                <NavLink
                  to="/admin"
                  onClick={close}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-semibold transition hover:bg-slate-100 hover:text-[#0284C7] ${
                      isActive ? 'bg-sky-50 text-[#0284C7]' : 'text-slate-700'
                    }`
                  }
                >
                  অ্যাডমিন প্যানেল
                </NavLink>
              </li>
            )}
            {account.onSignOut && (
              <li>
                <button
                  type="button"
                  onClick={() => {
                    close();
                    account.onSignOut();
                  }}
                  className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  লগআউট
                </button>
              </li>
            )}
            {showBuy && (
              <li className="pt-2 sm:hidden">
                <Link
                  to="/checkout"
                  onClick={close}
                  className="block rounded-xl bg-slate-900 py-3 text-center text-sm font-bold text-white shadow-md shadow-slate-900/10"
                >
                  কোর্সটি কিনুন →
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
