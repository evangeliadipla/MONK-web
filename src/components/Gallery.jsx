import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { Camera, ImageOff } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Gallery() {
  // Track failed images to display fallbacks locally
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  // Asymmetric layout patterns for tailwind classes (desktop grid layout)
  const getGridSpanClasses = (index) => {
    switch (index) {
      case 0:
        return "lg:col-span-2 lg:row-span-1 h-72 md:h-80";
      case 1:
        return "lg:col-span-1 lg:row-span-2 h-[26rem] md:h-[32rem] lg:h-full";
      case 2:
        return "lg:col-span-1 lg:row-span-1 h-72 md:h-80";
      case 3:
        return "lg:col-span-1 lg:row-span-1 h-72 md:h-80";
      case 4:
        return "lg:col-span-1 lg:row-span-1 h-72 md:h-80";
      case 5:
        return "lg:col-span-1 lg:row-span-1 h-72 md:h-80";
      default:
        return "lg:col-span-1 lg:row-span-1 h-72 md:h-80";
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-slate-50 border-b border-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          tag="MONK MOMENTS"
          title="Μια πρώτη γεύση από το MONK"
          subtitle="Coffee, brunch, interior λεπτομέρειες και take away στιγμές σε καθαρό, urban ύφος."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-fr">
          {galleryItems.map((item, index) => {
            const isFailed = failedImages[item.id];
            
            return (
              <div 
                key={item.id}
                className={`${getGridSpanClasses(index)} relative rounded-2xl overflow-hidden shadow-md group border border-slate-200/50 bg-slate-900 transition-all duration-300 hover:shadow-xl`}
              >
                {!isFailed ? (
                  <>
                    <img 
                      src={item.imageUrl} 
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => handleImageError(item.id)}
                      loading="lazy"
                    />
                    {/* Shadow overlay card content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                      <span className="text-xs font-black text-monk-gold tracking-widest uppercase mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-lg font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-xs mt-2 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </>
                ) : (
                  // Gradient Fallback in case image fails to load or no connection
                  <div className={`w-full h-full bg-gradient-to-br ${item.fallbackGradient} flex flex-col justify-between p-6 text-white text-left`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-black tracking-widest bg-white/10 text-monk-gold px-2 py-0.5 rounded-full uppercase">
                        {item.category}
                      </span>
                      <ImageOff size={16} className="text-white/40" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-xs mt-2 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Visual Label (always visible overlay for context) */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-monk-blue uppercase tracking-wider shadow-sm border border-slate-100/30 group-hover:bg-monk-blue group-hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                  <Camera size={12} />
                  {item.category}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
