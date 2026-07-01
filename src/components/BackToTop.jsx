import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll height to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 md:bottom-8 right-6 z-35 p-3 rounded-full bg-monk-blue text-white shadow-xl hover:bg-monk-navy border border-white/10 transition-all duration-300 transform active:scale-90 focus:outline-none focus:ring-2 focus:ring-monk-gold ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 visible' 
          : 'opacity-0 translate-y-4 scale-75 invisible pointer-events-none'
      }`}
      aria-label="Scroll back to top of page"
    >
      <ChevronUp size={24} className="animate-pulse" />
    </button>
  );
}
