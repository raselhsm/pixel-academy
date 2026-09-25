import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AuthProvider } from '../auth/AuthProvider';
import { useAuth } from '../auth/context';
import Spinner from '../components/ui/Spinner';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppButton from '../sections/WhatsAppButton';

function Shell() {
  const { user, profile, signOut } = useAuth();
  const { pathname } = useLocation();

  // The admin panel brings its own compact header and skips the site chrome.
  if (pathname.startsWith('/admin')) {
    return (
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar account={{ loggedIn: Boolean(user), isAdmin: Boolean(profile?.is_admin), onSignOut: user ? signOut : undefined }} />
      <main className="flex-1">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function MemberLayout() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
