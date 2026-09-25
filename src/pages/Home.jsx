import { useEffect, useState } from 'react';
import { track } from '../lib/pixel';
import { hasStoredSession } from '../lib/session';
import { PRICE } from '../data/homeContent';
import UrgencyBar from '../sections/UrgencyBar';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import TrustMetrics from '../sections/TrustMetrics';
import Transformation from '../sections/Transformation';
import Gallery from '../sections/Gallery';
import Curriculum from '../sections/Curriculum';
import Bonuses from '../sections/Bonuses';
import Instructor from '../sections/Instructor';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import MobileStickyBar from '../sections/MobileStickyBar';
import WhatsAppButton from '../sections/WhatsAppButton';

export default function Home() {
  const [loggedIn] = useState(hasStoredSession);

  useEffect(() => {
    track('ViewContent', { value: PRICE.amount, currency: 'BDT' });
  }, []);

  return (
    // overflow-x-clip (not hidden) keeps decorative glows from widening the
    // mobile viewport without breaking the sticky header.
    <div id="top" className="overflow-x-clip pb-24 md:pb-0">
      <UrgencyBar />
      <Navbar account={{ loggedIn }} />
      <main>
        <Hero />
        <TrustMetrics />
        <Transformation />
        <Gallery />
        <Curriculum />
        <Bonuses />
        <Instructor />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppButton raised />
    </div>
  );
}
