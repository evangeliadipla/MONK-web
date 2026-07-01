import React from 'react';
import { BookOpen, PhoneCall, Map } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function QuickActions() {
  const handleScrollToMenu = (e) => {
    const targetElement = document.querySelector('#menu');
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

  const actions = [
    {
      id: "qa-menu",
      title: "Menu",
      description: "Δες καφέδες, brunch επιλογές και σπιτικά γλυκά.",
      icon: <BookOpen className="w-8 h-8 text-monk-blue" />,
      href: "#menu",
      onClick: handleScrollToMenu,
      isExternal: false,
      buttonText: "Άνοιγμα Μενού"
    },
    {
      id: "qa-order",
      title: "Παραγγελία",
      description: "Κάλεσε μας για άμεση take-away παραλαβή χωρίς αναμονή.",
      icon: <PhoneCall className="w-8 h-8 text-monk-blue" />,
      href: businessInfo.phoneHref,
      isExternal: false,
      buttonText: businessInfo.phoneDisplay
    },
    {
      id: "qa-maps",
      title: "Οδηγίες Χάρτη",
      description: "Βρες μας εύκολα στο Αγρίνιο και λάβε οδηγίες πλοήγησης.",
      icon: <Map className="w-8 h-8 text-monk-blue" />,
      href: businessInfo.googleMapsDirectionsUrl,
      isExternal: true,
      buttonText: "Άνοιγμα Χάρτη"
    },
    {
      id: "qa-instagram",
      title: "Instagram",
      description: "Δες τα stories, τις προτάσεις μας και τα καθημερινά updates.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-monk-blue">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: businessInfo.instagramUrl,
      isExternal: true,
      buttonText: "@monkcoffeebrunch"
    }
  ];

  return (
    <section className="py-12 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => {
            const Element = action.href.startsWith('#') ? 'a' : 'a';
            return (
              <Element
                key={action.id}
                href={action.href}
                onClick={action.onClick}
                target={action.isExternal ? "_blank" : undefined}
                rel={action.isExternal ? "noopener noreferrer" : undefined}
                className="group block p-6 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-xl hover:border-monk-blue/20 transition-all duration-300 transform hover:-translate-y-1 text-left focus:outline-none focus:ring-2 focus:ring-monk-blue/55"
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    {/* Icon container with background */}
                    <div className="inline-flex p-3 rounded-xl bg-monk-lightBlue group-hover:bg-monk-blue group-hover:text-white transition-colors duration-300">
                      <div className="transition-transform duration-300 group-hover:scale-110 group-hover:text-white [&>svg]:group-hover:text-white">
                        {action.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-monk-blue transition-colors duration-300">
                        {action.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-2 font-normal leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Link Text */}
                  <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-monk-gold group-hover:text-monk-blue transition-colors duration-300">
                    <span className="border-b border-transparent group-hover:border-monk-blue pb-0.5">
                      {action.buttonText}
                    </span>
                    <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Element>
            );
          })}
        </div>
      </div>
    </section>
  );
}
