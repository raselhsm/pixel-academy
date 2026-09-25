import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { BookOpenCheck, CircleUserRound, LogOut, Menu, ShieldCheck, X } from 'lucide-react';
import Logo from '../components/ui/Logo';
import { NAV_LINKS } from '../data/homeContent';

const pill =
  'flex items-center gap-1.5 whitespace-nowrap rounded-full border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:text-white sm:px-4';

// Highlights the account link for the section you're in (e.g. all of /admin/*).
const accountPill = ({ isActive }) =>
  isActive
    ? 'flex items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-500/60 bg-emerald-500/15 px-3 py-2 text-sm font-semibold text-emerald-300 sm:px-4'
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
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#090d14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20">
        {onHome ? (
          <a href="#top" aria-label="Pixel Academy হোম">
            <Logo />
          </a>
        ) : (
          <Link to="/" aria-label="Pixel Academy হোম">
            <Logo />
          </Link>
        )}

        <nav aria-label="প্রধান মেনু" className="hidden items-center gap-7 text-sm font-medium text-slate-300 xl:flex">
          {NAV_LINKS.map((link) => (
            <SectionLink key={link.href} href={link.href} onHome={onHome} className="transition hover:text-emerald-400">
              {link.label}
            </SectionLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
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
                  className="hidden size-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-800 hover:text-white md:flex"
                >
                  <LogOut className="size-4" />
                </button>
              )}
            </>
          ) : (
            <Link to="/login" className={pill}>
              <CircleUserRound className="size-4" aria-hidden="true" />
              লগইন
            </Link>
          )}
          {showBuy && (
            <Link
              to="/checkout"
              className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:brightness-110 sm:inline-flex"
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
            className="flex size-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-slate-800 hover:text-white xl:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="মোবাইল মেনু" className="border-t border-slate-800 bg-[#090d14] xl:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <SectionLink
                  href={link.href}
                  onHome={onHome}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-slate-200 transition hover:bg-slate-800/70 hover:text-emerald-400"
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
                    `block rounded-lg px-3 py-3 transition hover:bg-slate-800/70 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : 'text-slate-200'}`
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
                  className="block w-full rounded-lg px-3 py-3 text-left text-slate-400 transition hover:bg-slate-800/70 hover:text-white"
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
                  className="block rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-center font-bold text-slate-950"
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
