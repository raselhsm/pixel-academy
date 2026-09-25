import { Suspense } from 'react';
import { Link, Outlet } from 'react-router';
import { LogOut } from 'lucide-react';
import { AuthProvider } from '../auth/AuthProvider';
import { useAuth } from '../auth/context';
import Logo from '../components/ui/Logo';
import Spinner from '../components/ui/Spinner';
import WhatsAppButton from '../sections/WhatsAppButton';

function Header() {
  const { user, profile, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#090d14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" aria-label="Pixel Academy হোম">
          <Logo />
        </Link>
        {user && (
          <nav className="flex items-center gap-1 text-sm sm:gap-2">
            {profile?.is_admin && (
              <Link to="/admin" className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
                অ্যাডমিন
              </Link>
            )}
            <Link to="/my-course" className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
              আমার কোর্স
            </Link>
            <button
              type="button"
              onClick={signOut}
              aria-label="লগআউট"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <LogOut className="size-4" />
              <span className="hidden sm:inline">লগআউট</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default function MemberLayout() {
  return (
    <AuthProvider>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
        <WhatsAppButton />
      </div>
    </AuthProvider>
  );
}
