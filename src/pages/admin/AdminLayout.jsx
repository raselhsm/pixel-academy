import { Suspense } from 'react';
import { Navigate, NavLink, Outlet } from 'react-router';
import { BookOpen, LayoutDashboard, ReceiptText, Users } from 'lucide-react';
import { useAuth } from '../../auth/context';
import { supabase } from '../../lib/supabase';
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

export default function AdminLayout() {
  const { user, profile, loading } = useAuth();

  if (!supabase) return <SetupNotice />;
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login?next=/admin" replace />;
  if (!profile) return <Spinner />;
  if (!profile.is_admin) return <Navigate to="/my-course" replace />;

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_1fr] lg:py-10">
      <aside className="min-w-0">
        <div className="lg:sticky lg:top-28">
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
      <section className="min-w-0">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
}
