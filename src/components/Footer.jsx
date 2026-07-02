import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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
    <footer className="bg-slate-900 text-white pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-left">
          
          {/* Brand Info - Column 1 */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#home" 
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group inline-block"
            >
              {!logoFailed ? (
                <img 
                  src="/monk-logo.png" 
                  alt={businessInfo.businessName}
                  className="h-10 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <span className="font-extrabold text-2xl tracking-widest text-white uppercase transition-colors duration-300 group-hover:text-monk-gold">
                  MONK
                </span>
              )}
            </a>
            
            <p className="text-slate-400 text-sm max-w-sm font-normal leading-relaxed">
              {businessInfo.description}
            </p>

            {/* Hours summary */}
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
              {businessInfo.openingHours}
            </p>
          </div>

          {/* Quick Links Navigation - Column 2 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-monk-gold uppercase">Πλοήγηση</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <a 
                  href="#qr-menu" 
                  onClick={(e) => handleLinkClick(e, '#qr-menu')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Μενού
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => handleLinkClick(e, '#gallery')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#location" 
                  onClick={(e) => handleLinkClick(e, '#location')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Τοποθεσία
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Επικοινωνία
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Contact - Column 3 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-monk-gold uppercase">Ακολούθησε μας</h4>
            <div className="flex gap-3">
              {businessInfo.instagramUrl && (
                <a 
                  href={businessInfo.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-monk-blue transition-colors focus:outline-none focus:ring-2 focus:ring-monk-blue/50"
                  aria-label="Find us on Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
              )}
              
              {businessInfo.facebookUrl && (
                <a 
                  href={businessInfo.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-monk-blue transition-colors focus:outline-none focus:ring-2 focus:ring-monk-blue/50"
                  aria-label="Find us on Facebook"
                >
                  <FacebookIcon size={20} />
                </a>
              )}

              {businessInfo.tiktokUrl && (
                <a 
                  href={businessInfo.tiktokUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-monk-blue transition-colors focus:outline-none focus:ring-2 focus:ring-monk-blue/50"
                  aria-label="Find us on TikTok"
                >
                  {/* Custom TikTok SVG icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.56 4.2 1.12 1.35 2.7 2.29 4.38 2.68v3.8c-1.28-.17-2.52-.77-3.48-1.63-.78-.71-1.33-1.63-1.6-2.64v7.41c.04 2.1-.56 4.21-1.74 5.86-1.57 2.27-4.22 3.56-6.94 3.32-3.13-.19-5.91-2.43-6.52-5.49-.78-3.42 1.05-7.06 4.39-8.16.89-.31 1.83-.43 2.77-.38v3.91c-.88-.16-1.8.07-2.5.64-.81.61-1.24 1.63-1.14 2.64.08 1.25.99 2.36 2.23 2.58 1.31.25 2.71-.53 3.06-1.8.09-.37.11-.76.11-1.15V.02z"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Email link fallback */}
            {businessInfo.emailHref && (
              <div className="pt-2">
                <a 
                  href={businessInfo.emailHref}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  {businessInfo.email}
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Footer Bottom Meta */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">
          <div>
            © 2026 MONK Coffee & Brunch. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Website designed for MONK.</span>
            <button 
              onClick={handleScrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-full"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={12} />
              TOP
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
