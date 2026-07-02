import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import Offers from './components/Offers';
import QRMenu from './components/QRMenu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans select-none antialiased">
      {/* Sticky header navigation */}
      <Navbar />

      {/* Main website body contents */}
      <main className="flex-grow">
        <Hero />
        <QuickActions />
        <Offers />
        <QRMenu />
        <Gallery />
        <Reviews />
        <Location />
        <Contact />
      </main>

      {/* Footer info & links */}
      <Footer />

      {/* Bottom overlay bar (visible only on mobile viewports) */}
      <MobileActionBar />

      {/* Floating scroll to top utility */}
      <BackToTop />
    </div>
  );
}

export default App;
