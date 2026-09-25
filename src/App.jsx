import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { track } from './lib/pixel';
import Home from './pages/Home';
import Spinner from './components/ui/Spinner';

// Account pages (and the Supabase client) load only when a visitor goes there,
// so the landing page from ads stays light.
const MemberLayout = lazy(() => import('./pages/MemberLayout'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Login = lazy(() => import('./pages/Login'));
const MyCourse = lazy(() => import('./pages/MyCourse'));
const Admin = lazy(() => import('./pages/Admin'));

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    track('PageView');
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<MemberLayout />}>
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="my-course" element={<MyCourse />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
