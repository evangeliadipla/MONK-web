import React from 'react';
import { monkPicks } from '../data/offers';
import { Sparkles, Phone, BookOpen, Coffee } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { businessInfo } from '../data/businessInfo';

export default function Offers() {
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
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          tag="MONK PICKS"
          title="Οι Προτάσεις της Εβδομάδας"
          subtitle="Ξεχωριστές daily επιλογές και γευστικοί συνδυασμοί που προτείνουν οι baristas και οι σεφ του MONK."
        />

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {monkPicks.map((pick) => {
            const isBrunch = pick.tag.includes("BRUNCH");
            const isCoffee = pick.tag.includes("COFFEE");
            
            return (
              <div 
                key={pick.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:border-monk-blue/10 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Header Highlight strip */}
                <div className={`h-2 w-full ${
                  isBrunch ? 'bg-monk-gold' : isCoffee ? 'bg-monk-blue' : 'bg-slate-800'
                }`} />

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Tag / Category Label */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black tracking-widest text-slate-400 uppercase">
                        {pick.tag}
                      </span>
                      {pick.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-monk-lightBlue text-monk-blue px-2 py-0.5 rounded-full">
                          {pick.badge}
                        </span>
                      )}
                    </div>

                    {/* Offer Title */}
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-monk-blue transition-colors duration-300">
                      {pick.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-500 font-normal leading-relaxed">
                      {pick.description}
                    </p>
                  </div>

                  {/* Pricing and Button */}
                  <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400 font-bold uppercase">Τιμή Πρότασης</span>
                      <span className="text-2xl font-black text-monk-blue bg-monk-lightBlue/80 px-3 py-1 rounded-xl">
                        €{Number(pick.price).toFixed(2)}
                      </span>
                    </div>

                    {/* Action buttons */}
                    {isCoffee ? (
                      <Button 
                        href={businessInfo.phoneHref}
                        variant="primary"
                        className="w-full text-center flex items-center justify-center gap-2"
                      >
                        <Phone size={16} />
                        {pick.actionText}
                      </Button>
                    ) : (
                      <Button 
                        href="#qr-menu"
                        onClick={handleScrollToMenu}
                        variant="outline"
                        className="w-full text-center flex items-center justify-center gap-2"
                      >
                        <BookOpen size={16} />
                        {pick.actionText}
                      </Button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Price and Availability Note */}
        <div className="mt-12 text-center">
          <p className="text-xs md:text-sm text-slate-400 font-semibold italic">
            * Οι τιμές είναι ενδεικτικές. Οι τιμές και η διαθεσιμότητα επιβεβαιώνονται από το κατάστημα.
          </p>
        </div>

      </div>
    </section>
  );
}
