import { Link, NavLink, useLocation } from 'react-router';
import { BookOpenCheck, CircleUserRound, LogOut, ShieldCheck, Star } from 'lucide-react';
import Logo from '../components/ui/Logo';
import { RATING } from '../data/homeContent';

const pill =
  'flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-slate-700 bg-slate-800/60 px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-brand-400 hover:text-white sm:px-4';

// Highlights the account link for the section you're in (e.g. all of /admin/*).
const accountPill = ({ isActive }) =>
  isActive
    ? 'flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-brand-400/60 bg-brand-500/15 px-3 py-2 text-xs font-bold text-brand-300 sm:px-4'
    : pill;

// No section links on purpose: visitors from ads should only see the offer and
// the enrol button. `account` is { loggedIn, isAdmin?, onSignOut? } — the
// landing page passes a cheap guess from localStorage, account pages pass the
// real session.
export default function Navbar({ account = { loggedIn: false } }) {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const showBuy = pathname !== '/checkout';
  const buyClass =
    'whitespace-nowrap rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 px-4 py-2 text-sm font-extrabold text-white shadow-lg shadow-brand-600/30 transition hover:brightness-110 sm:px-5';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-navy/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {onHome ? (
          <a href="#top" aria-label="Pixel Academy হোম">
            <Logo />
          </a>
        ) : (
          <Link to="/" aria-label="Pixel Academy হোম">
            <Logo />
          </Link>
        )}

        <div className="flex items-center gap-2">
          {onHome && (
            <span className="hidden items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-300 sm:flex">
              <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              <span className="font-sans">{RATING}</span> রেটিং
            </span>
          )}
          {account.loggedIn ? (
            <>
              {account.isAdmin && (
                <NavLink to="/admin" className={accountPill} aria-label="অ্যাডমিন">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                  <span className="hidden sm:inline">অ্যাডমিন</span>
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
                  className="flex size-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-800 hover:text-white"
                >
                  <LogOut className="size-4" />
                </button>
              )}
            </>
          ) : (
            !onHome && (
              <Link to="/login" className={pill}>
                <CircleUserRound className="size-4" aria-hidden="true" />
                লগইন
              </Link>
            )
          )}
          {showBuy &&
            (onHome ? (
              <a href="#checkout" className={buyClass}>
                ভর্তি হোন
              </a>
            ) : (
              <Link to="/checkout" className={buyClass}>
                ভর্তি হোন
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
}
