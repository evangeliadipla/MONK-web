import React, { useState, useEffect } from 'react';
import { QrCode, Phone, BookOpen } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import Button from './Button';

export default function QRMenu() {
  const [qrUrl, setQrUrl] = useState(() => {
    if (businessInfo.qrMenuUrl) return businessInfo.qrMenuUrl;
    if (typeof window !== 'undefined') return `${window.location.origin}/#qr-menu`;
    return 'https://monkcoffee.gr/#qr-menu';
  });

  useEffect(() => {
    if (!businessInfo.qrMenuUrl && typeof window !== 'undefined') {
      setQrUrl(`${window.location.origin}/#qr-menu`);
    }
  }, []);

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

  // QR API url using MONK deep blue color (#181391)
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=181391&data=${encodeURIComponent(qrUrl)}`;

  return (
    <section id="qr-menu" className="py-20 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-monk-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-monk-blue to-monk-navy text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle gold decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-monk-gold/10 rounded-full filter blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* QR Content Left */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold tracking-widest text-monk-gold uppercase">
                <QrCode size={14} />
                SCAN & ORDER
              </span>
              
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Σκάναρε το QR και δες το menu του MONK.
              </h2>
              
              <p className="text-slate-200 text-sm md:text-base font-normal leading-relaxed">
                Άνοιξε το ψηφιακό menu από το κινητό σου, δες τις διαθέσιμες επιλογές και κράτησε την παραγγελία σου απλή.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start pt-2">
                <Button 
                  href={qrUrl}
                  target="_blank"
                  variant="white"
                  className="flex items-center justify-center gap-2 font-bold"
                >
                  <BookOpen size={18} className="text-monk-blue" />
                  Άνοιγμα Menu
                </Button>
                
                <Button 
                  href={businessInfo.phoneHref}
                  variant="outlineGold"
                  className="flex items-center justify-center gap-2 border-monk-gold text-monk-gold hover:bg-monk-gold hover:text-white font-bold"
                >
                  <Phone size={18} />
                  Κάλεσε για Παραγγελία
                </Button>

                {businessInfo.woltUrl && (
                  <Button 
                    href={businessInfo.woltUrl}
                    variant="outline"
                    className="flex items-center justify-center gap-2 border-white/20 text-white hover:bg-white hover:text-monk-blue font-bold"
                  >
                    Παραγγελία Wolt
                  </Button>
                )}

                {businessInfo.efoodUrl && (
                  <Button 
                    href={businessInfo.efoodUrl}
                    variant="outline"
                    className="flex items-center justify-center gap-2 border-white/20 text-white hover:bg-white hover:text-monk-blue font-bold"
                  >
                    Παραγγελία efood
                  </Button>
                )}
              </div>
            </div>

            {/* QR Code Graphic Right */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="bg-white p-5 rounded-2xl shadow-xl border border-white/20 transition-transform duration-500 hover:scale-105 relative group">
                {/* QR Code image */}
                <img 
                  src={qrImageUrl} 
                  alt="MONK Coffee & Brunch QR Menu Code" 
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                  loading="lazy"
                />
                
                {/* Embedded Brand badge in center of QR */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-100">
                    <span className="font-extrabold text-[10px] text-monk-blue tracking-tighter">MONK</span>
                  </div>
                </div>
              </div>
              <span className="text-xs text-slate-300 font-semibold tracking-wider mt-4 block uppercase">
                QR CODE LINK: {qrUrl.replace(/^https?:\/\//i, '')}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
