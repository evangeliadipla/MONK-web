import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  // Monitor scroll to add shadow and white background to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Toggle body class for hiding mobile action bar when menu is open
  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', isOpen);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#qr-menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Calculate position with header offset
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

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/95 backdrop-blur-sm md:bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={handleLogoClick}
              className="flex items-center gap-2 group"
            >
              {!logoFailed ? (
                <img 
                  src="/monk-logo.png" 
                  alt={businessInfo.businessName}
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <span className="font-extrabold text-2xl tracking-widest text-monk-blue uppercase transition-colors duration-300 group-hover:text-monk-gold">
                  MONK
                </span>
              )}
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-monk-gold ${
                  isScrolled ? 'text-slate-700' : 'text-slate-800 md:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              href="#qr-menu" 
              onClick={(e) => handleLinkClick(e, '#qr-menu')}
              variant="outline" 
              className="px-4 py-2 text-sm"
            >
              Δες το Menu
            </Button>
            <Button 
              href={businessInfo.phoneHref}
              variant="primary" 
              className="px-4 py-2 text-sm flex items-center gap-2"
            >
              <Phone size={16} />
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-monk-blue hover:text-monk-gold hover:bg-slate-100 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle main navigation menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 transform origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible h-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 border-t border-slate-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-3 text-base font-bold text-slate-800 hover:text-monk-gold hover:bg-slate-50 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-3 px-3">
            <Button 
              href="#qr-menu" 
              onClick={(e) => handleLinkClick(e, '#qr-menu')}
              variant="outline"
              className="w-full text-center"
            >
              Μενού
            </Button>
            <Button 
              href={businessInfo.phoneHref}
              variant="primary"
              className="w-full text-center flex items-center justify-center gap-1.5"
            >
              <Phone size={14} />
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
