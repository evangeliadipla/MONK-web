import React from 'react';
import { reviews } from '../data/reviews';
import { Star, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function Reviews() {
  // Render stars based on rating
  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < count ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
        }`}
      />
    ));
  };

  return (
    <section 
      id="reviews" 
      className="py-20 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          tag="REVIEWS"
          title="Τι λένε οι πελάτες μας"
          subtitle="Μικρές καθημερινές εντυπώσεις από ανθρώπους που επιστρέφουν για καφέ, brunch και χαλαρό mood."
        />

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative text-left"
            >
              {/* Quote Mark background decorator */}
              <div className="absolute top-6 right-6 text-monk-blue/5 font-serif text-7xl select-none leading-none pointer-events-none">
                “
              </div>

              <div className="space-y-4 relative z-10">
                {/* Star rating and name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-monk-blue/5 flex items-center justify-center font-bold text-monk-blue">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{review.name}</h4>
                    <div className="flex gap-0.5 mt-1">{renderStars(review.stars)}</div>
                  </div>
                </div>
                
                {/* Comment Text */}
                <p className="text-slate-600 text-sm font-normal leading-relaxed italic">
                  {review.comment}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">{review.date}</span>
                <span className="text-slate-400 font-bold bg-slate-200/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[9px]">
                  {review.sourceLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center max-w-lg mx-auto">
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            * Ενδεικτικές κριτικές πελατών. Θα αντικατασταθούν με πραγματικές Google Reviews μετά την επιβεβαίωση του Google Business profile.
          </p>
        </div>

        {/* Call to action buttons for reviews */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Button 
            href={businessInfo.googleReviewsUrl}
            variant="outline"
            className="flex items-center justify-center gap-2"
          >
            Δες όλες τις κριτικές στο Google
          </Button>
          
          <Button 
            href={businessInfo.googleReviewWriteUrl}
            variant="gold"
            className="flex items-center justify-center gap-2"
          >
            <MessageSquare size={16} />
            Άφησε την κριτική σου
          </Button>
        </div>

      </div>
    </section>
  );
}
