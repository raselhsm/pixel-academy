import { Suspense } from 'react';
import { Link, Navigate, NavLink, Outlet } from 'react-router';
import { BookOpen, ExternalLink, LayoutDashboard, LogOut, ReceiptText, Users } from 'lucide-react';
import { useAuth } from '../../auth/context';
import { supabase } from '../../lib/supabase';
import Logo from '../../components/ui/Logo';
import Spinner from '../../components/ui/Spinner';
import SetupNotice from '../../components/ui/SetupNotice';

const LINKS = [
  { to: '/admin', end: true, label: 'ওভারভিউ', Icon: LayoutDashboard },
  { to: '/admin/orders', label: 'অর্ডার', Icon: ReceiptText },
  { to: '/admin/students', label: 'শিক্ষার্থী', Icon: Users },
  { to: '/admin/content', label: 'কোর্স কনটেন্ট', Icon: BookOpen },
];

const linkClass = ({ isActive }) =>
  `flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
    isActive ? 'bg-emerald-500/15 text-emerald-300' : 'text-slate-400 hover:bg-slate-800/70 hover:text-white'
  }`;

// Admin-only header: no marketing links, buy button, footer or WhatsApp.
function AdminHeader({ email, onSignOut }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#090d14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/admin" className="flex items-center gap-3" aria-label="অ্যাডমিন ওভারভিউ">
          <Logo />
          <span className="hidden rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400 sm:inline">
            অ্যাডমিন
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="hidden max-w-56 truncate font-sans text-sm text-slate-400 md:inline" title={email}>
            {email}
          </span>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">সাইট দেখুন</span>
          </a>
          <button
            type="button"
            onClick={onSignOut}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <LogOut className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">লগআউট</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default function AdminLayout() {
  const { user, profile, loading, signOut } = useAuth();

  if (!supabase) return <SetupNotice />;
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login?next=/admin" replace />;
  if (!profile) return <Spinner />;
  if (!profile.is_admin) return <Navigate to="/my-course" replace />;

  return (
    <div className="min-h-dvh">
      <AdminHeader email={user.email} onSignOut={signOut} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_1fr] lg:py-10">
        <aside className="min-w-0">
          <div className="lg:sticky lg:top-24">
            <p className="mb-3 hidden px-3.5 text-xs font-bold uppercase tracking-wider text-slate-500 lg:block">অ্যাডমিন প্যানেল</p>
            <nav aria-label="অ্যাডমিন মেনু" className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:px-0">
              {LINKS.map(({ to, end, label, Icon }) => (
                <NavLink key={to} to={to} end={end} className={linkClass}>
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>
        <main className="min-w-0">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
