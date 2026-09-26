import { useCallback, useEffect, useState } from 'react';
import { track } from '../lib/pixel';
import { hasStoredSession } from '../lib/session';
import { FreePreviewContext } from '../lib/freePreview';
import FreePreviewDialog from '../components/FreePreviewDialog';
import { PRICE } from '../data/homeContent';
import UrgencyBar from '../sections/UrgencyBar';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import ProofSection from '../sections/ProofSection';
import Showcase from '../sections/Showcase';
import Curriculum from '../sections/Curriculum';
import Reviews from '../sections/Reviews';
import Pricing from '../sections/Pricing';
import Guarantee from '../sections/Guarantee';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import MobileStickyBar from '../sections/MobileStickyBar';
import WhatsAppButton from '../sections/WhatsAppButton';

export default function Home() {
  const [loggedIn] = useState(hasStoredSession);
  const [previewOpen, setPreviewOpen] = useState(false);
  const openPreview = useCallback(() => setPreviewOpen(true), []);
  const closePreview = useCallback(() => setPreviewOpen(false), []);

  useEffect(() => {
    track('ViewContent', { value: PRICE.amount, currency: 'BDT' });
  }, []);

  return (
    // overflow-x-clip (not hidden) keeps decorative glows from widening the
    // mobile viewport without breaking the sticky header.
    <FreePreviewContext.Provider value={openPreview}>
      <div id="top" className="overflow-x-clip pb-24 md:pb-0">
        <UrgencyBar />
        <Navbar account={{ loggedIn }} />
        <main>
          <Hero />
          <ProofSection />
          <Showcase />
          <Curriculum />
          <Reviews />
          <Pricing />
          <Guarantee />
          <FAQ />
        </main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppButton raised />
        {previewOpen && <FreePreviewDialog onClose={closePreview} />}
      </div>
    </FreePreviewContext.Provider>
  );
}
