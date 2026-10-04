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
    isActive ? 'bg-sky-50 text-[#0284C7] shadow-2xs font-bold' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`;

// Admin-only header: no marketing links, buy button, footer or WhatsApp.
function AdminHeader({ email, onSignOut }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-2xs">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/admin" className="flex items-center gap-3" aria-label="অ্যাডমিন ওভারভিউ">
          <Logo />
          <span className="hidden rounded-md border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs font-bold text-[#0284C7] sm:inline">
            অ্যাডমিন
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="hidden max-w-56 truncate font-sans text-sm text-slate-600 md:inline" title={email}>
            {email}
          </span>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">সাইট দেখুন</span>
          </a>
          <button
            type="button"
            onClick={onSignOut}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
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
    <div className="min-h-dvh bg-[#F8FAFC]">
      <AdminHeader email={user.email} onSignOut={signOut} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_1fr] lg:py-10">
        <aside className="min-w-0">
          <div className="lg:sticky lg:top-24">
            <p className="mb-3 hidden px-3.5 text-xs font-bold uppercase tracking-wider text-slate-400 lg:block">অ্যাডমিন প্যানেল</p>
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
