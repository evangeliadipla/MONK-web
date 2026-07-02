import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SectionTitle from './SectionTitle';
import Button from './Button';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
  const socials = [
    {
      id: "c-instagram",
      name: "Instagram",
      username: "@monkcoffeebrunch",
      icon: <InstagramIcon size={24} />,
      url: businessInfo.instagramUrl,
      isAvailable: !!businessInfo.instagramUrl,
      activeColor: "hover:border-pink-500/30 hover:text-pink-600 hover:bg-pink-50/50"
    },
    {
      id: "c-facebook",
      name: "Facebook",
      username: "MONK Coffee & Brunch",
      icon: <FacebookIcon size={24} />,
      url: businessInfo.facebookUrl,
      isAvailable: !!businessInfo.facebookUrl,
      activeColor: "hover:border-blue-600/30 hover:text-blue-600 hover:bg-blue-50/50"
    },
    {
      id: "c-tiktok",
      name: "TikTok",
      username: "Μη διαθέσιμο",
      icon: (
        // Custom TikTok SVG Icon
        <svg size={24} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.56 4.2 1.12 1.35 2.7 2.29 4.38 2.68v3.8c-1.28-.17-2.52-.77-3.48-1.63-.78-.71-1.33-1.63-1.6-2.64v7.41c.04 2.1-.56 4.21-1.74 5.86-1.57 2.27-4.22 3.56-6.94 3.32-3.13-.19-5.91-2.43-6.52-5.49-.78-3.42 1.05-7.06 4.39-8.16.89-.31 1.83-.43 2.77-.38v3.91c-.88-.16-1.8.07-2.5.64-.81.61-1.24 1.63-1.14 2.64.08 1.25.99 2.36 2.23 2.58 1.31.25 2.71-.53 3.06-1.8.09-.37.11-.76.11-1.15V.02z"/>
        </svg>
      ),
      url: businessInfo.tiktokUrl,
      isAvailable: !!businessInfo.tiktokUrl,
      activeColor: "hover:border-slate-800/30 hover:text-black hover:bg-slate-50"
    },
    {
      id: "c-email",
      name: "Email",
      username: "Θα προστεθεί σύντομα",
      icon: <Mail size={24} />,
      url: businessInfo.emailHref,
      isAvailable: !!businessInfo.emailHref,
      activeColor: "hover:border-monk-blue/30 hover:text-monk-blue hover:bg-monk-lightBlue/50"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          tag="CONTACT & SOCIALS"
          title="Καφές, παραγγελίες και social updates"
          subtitle="Κάλεσε για παραγγελία ή στείλε μήνυμα στο Instagram για νέα, stories και καθημερινά updates."
        />

        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Main Direct Actions Area */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 border border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-left shadow-sm">
            <div className="space-y-2 max-w-lg">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Θέλεις να παραγγείλεις take away;
              </h3>
              <p className="text-sm text-slate-500 font-normal leading-relaxed">
                Προετοιμάζουμε την παραγγελία σου άμεσα. Κάλεσε μας, πες μας τι θέλεις και θα σε περιμένει έτοιμο και ζεστό στο κατάστημα.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">
              <Button 
                href={businessInfo.instagramUrl}
                variant="outline"
                className="flex items-center justify-center gap-2 font-bold text-slate-800 hover:border-monk-blue hover:text-monk-blue"
              >
                <InstagramIcon size={18} />
                Μήνυμα
              </Button>
              
              <Button 
                href={businessInfo.phoneHref}
                variant="primary"
                className="flex items-center justify-center gap-2 font-bold"
              >
                <Phone size={18} />
                Κλήση Παραγγελίας
              </Button>

              {businessInfo.woltUrl && (
                <Button 
                  href={businessInfo.woltUrl}
                  variant="secondary"
                  className="flex items-center justify-center gap-2 font-bold text-sky-600 hover:bg-sky-50 border border-sky-100"
                >
                  Wolt
                </Button>
              )}

              {businessInfo.efoodUrl && (
                <Button 
                  href={businessInfo.efoodUrl}
                  variant="secondary"
                  className="flex items-center justify-center gap-2 font-bold text-red-600 hover:bg-red-50 border border-red-100"
                >
                  efood
                </Button>
              )}
            </div>
          </div>

          {/* Social Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socials.map((social) => {
              if (social.isAvailable) {
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-left focus:outline-none focus:ring-2 focus:ring-monk-blue/50 ${social.activeColor}`}
                  >
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="text-slate-400 group-hover:text-inherit">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-base">{social.name}</h4>
                        <p className="text-xs text-slate-400 mt-1 font-bold truncate">
                          {social.username}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              }

              // Disabled Fallback card
              return (
                <div
                  key={social.id}
                  className="p-6 rounded-2xl bg-slate-50/50 border border-dashed border-slate-200 text-left opacity-60 select-none cursor-not-allowed"
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="text-slate-300">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-400 text-base">{social.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 font-bold uppercase tracking-wider">
                        {social.username}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
