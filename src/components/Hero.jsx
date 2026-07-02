import React, { useState } from 'react';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import Button from './Button';

export default function Hero() {
  const [logoFailed, setLogoFailed] = useState(false);

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
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-br from-white via-monk-lightBlue to-white overflow-hidden"
    >
      {/* Decorative background blur shapes */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-monk-blue/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-monk-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Branded Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-monk-blue/5 border border-monk-blue/10">
              <span className="text-xs md:text-sm font-bold tracking-wider text-monk-blue uppercase">
                {businessInfo.tagline}
              </span>
            </div>

            {/* Title / Logo Header */}
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-center lg:justify-start">
                {!logoFailed ? (
                  <img 
                    src="/monk-logo.png" 
                    alt="MONK Logo" 
                    className="h-16 w-auto object-contain mx-auto lg:mx-0"
                    onError={() => setLogoFailed(true)}
                  />
                ) : (
                  <span className="text-4xl md:text-5xl font-black tracking-widest text-monk-blue uppercase block">
                    MONK
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                  Coffee & Brunch
                </h1>
              </div>
              <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Specialty coffee, brunch plates και take away επιλογές σε ένα καθαρό, urban σημείο για κάθε ώρα της ημέρας.
              </p>
            </div>

            {/* CTA Actions Button Area */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button 
                href="#qr-menu" 
                onClick={handleScrollToMenu}
                variant="primary"
                className="group flex items-center justify-center gap-2"
              >
                Δες το Menu
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                href={businessInfo.phoneHref}
                variant="outline"
                className="flex items-center justify-center gap-2 border-slate-300 text-slate-800 hover:border-monk-blue hover:bg-monk-blue/5 hover:text-monk-blue"
              >
                <Phone size={18} />
                Κάλεσε για Παραγγελία
              </Button>

              <Button 
                href={businessInfo.googleMapsDirectionsUrl}
                variant="secondary"
                className="flex items-center justify-center gap-2 text-slate-700 hover:text-monk-blue"
              >
                <MapPin size={18} className="text-monk-gold" />
                Βρες μας στο Χάρτη
              </Button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-8 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <span className="block text-2xl font-bold text-monk-blue">100%</span>
                <span className="text-xs font-semibold text-slate-500 uppercase">Specialty Beans</span>
              </div>
              <div className="border-x border-slate-200 px-4">
                <span className="block text-2xl font-bold text-monk-blue">Fresh</span>
                <span className="text-xs font-semibold text-slate-500 uppercase">Brunch Plates</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-monk-blue">Daily</span>
                <span className="text-xs font-semibold text-slate-500 uppercase">08:00 - 22:00</span>
              </div>
            </div>

          </div>

          {/* Branded Media Visual Right Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square">
              {/* Outer decorative gold/blue frames */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-monk-gold/30 pointer-events-none animate-[spin_60s_linear_infinite]" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-monk-gold rounded-2xl filter blur-xl opacity-30 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-monk-blue rounded-full filter blur-2xl opacity-20" />

              {/* Main Visual Image Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" 
                  alt="Aesthetic coffee preparation and latte art served at MONK"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                {/* Visual Overlay Card */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent text-white text-left">
                  <span className="text-xs font-bold text-monk-gold uppercase tracking-widest block mb-1">
                    Specialty Coffee Culture
                  </span>
                  <h3 className="text-lg md:text-xl font-bold">
                    Φτιαγμένος για τους λάτρεις του καλού καφέ.
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
