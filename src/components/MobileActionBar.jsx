import React from 'react';
import { Phone, BookOpen, Navigation } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function MobileActionBar() {
  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#qr-menu');
    if (targetElement) {
      const offset = 90; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="mobile-action-bar fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200/60 z-30 grid grid-cols-3 py-2 px-3 gap-2 md:hidden shadow-[0_-8px_30px_rgb(0,0,0,0.06)]"
      style={{ contentVisibility: 'auto' }}
    >
      {/* Action 1: Call Shop */}
      <a
        href={businessInfo.phoneHref}
        className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-monk-blue hover:bg-slate-50 transition-colors active:scale-95 duration-200 focus:outline-none min-h-[48px]"
        aria-label="Call MONK Coffee & Brunch to order"
      >
        <div className="w-9 h-9 rounded-full bg-monk-lightBlue flex items-center justify-center mb-1">
          <Phone size={18} className="text-monk-blue" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
          Κλήση
        </span>
      </a>

      {/* Action 2: Show Menu */}
      <a
        href="#qr-menu"
        onClick={handleScrollToMenu}
        className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-monk-blue hover:bg-slate-50 transition-colors active:scale-95 duration-200 focus:outline-none min-h-[48px]"
        aria-label="Scroll to menu section"
      >
        <div className="w-9 h-9 rounded-full bg-monk-blue flex items-center justify-center mb-1 shadow-md shadow-monk-blue/15">
          <BookOpen size={18} className="text-white" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-monk-blue">
          Μενού
        </span>
      </a>

      {/* Action 3: Directions Map */}
      <a
        href={businessInfo.googleMapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-monk-blue hover:bg-slate-50 transition-colors active:scale-95 duration-200 focus:outline-none min-h-[48px]"
        aria-label="Get directions to MONK Coffee & Brunch on Google Maps"
      >
        <div className="w-9 h-9 rounded-full bg-monk-lightBlue flex items-center justify-center mb-1">
          <Navigation size={18} className="text-monk-gold" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
          Οδηγίες
        </span>
      </a>
    </div>
  );
}
