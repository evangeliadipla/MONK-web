import React from 'react';
import { MapPin, Clock, Phone, Navigation, Map } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function Location() {
  return (
    <section 
      id="location" 
      className="py-20 bg-slate-50 border-y border-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          tag="LOCATION"
          title="Βρες μας εύκολα"
          subtitle="Άνοιξε τον χάρτη, δες το ωράριο και έλα για τον επόμενο specialty καφέ σου."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Map Embed - Left Column */}
          <div className="lg:col-span-7 bg-white p-2 rounded-3xl border border-slate-200 shadow-lg min-h-[350px] lg:min-h-full">
            <iframe 
              src={businessInfo.googleMapsEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1.25rem', minHeight: '350px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map location of MONK Coffee & Brunch"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Business Hours & Details - Right Column */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-100 shadow-lg flex flex-col justify-between text-left">
            <div className="space-y-8">
              {/* Header Title */}
              <div>
                <h3 className="text-2xl font-black text-monk-blue tracking-tight">
                  {businessInfo.businessName}
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  SPECIALTY COFFEE & BRUNCH BAR
                </p>
              </div>

              {/* Information List */}
              <div className="space-y-6">
                
                {/* Address Item */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-monk-blue/5 flex items-center justify-center text-monk-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Διεύθυνση</h4>
                    <p className="text-slate-700 text-sm md:text-base font-semibold mt-1">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>

                {/* Opening Hours Item */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-monk-blue/5 flex items-center justify-center text-monk-blue">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Ωράριο Λειτουργίας</h4>
                    <p className="text-slate-700 text-sm md:text-base font-semibold mt-1">
                      {businessInfo.openingHours}
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-monk-blue/5 flex items-center justify-center text-monk-blue">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Τηλέφωνο</h4>
                    <a 
                      href={businessInfo.phoneHref}
                      className="text-monk-blue text-sm md:text-base font-extrabold mt-1 hover:underline block"
                    >
                      {businessInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Map Actions Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  href={businessInfo.googleMapsUrl}
                  variant="outline"
                  className="flex items-center justify-center gap-1.5 text-xs md:text-sm px-4"
                >
                  <Map size={16} />
                  Google Maps
                </Button>
                
                <Button 
                  href={businessInfo.googleMapsDirectionsUrl}
                  variant="gold"
                  className="flex items-center justify-center gap-1.5 text-xs md:text-sm px-4"
                >
                  <Navigation size={16} />
                  Οδηγίες
                </Button>
              </div>

              <Button 
                href={businessInfo.phoneHref}
                variant="primary"
                className="w-full flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Κάλεσε Τώρα
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
