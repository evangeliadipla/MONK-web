import React from 'react';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'gold', 'outline', 'white'
  className = '',
  disabled = false,
  target,
  rel,
  ariaLabel,
  ...props
}) {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-bold px-6 py-3 rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm md:text-base";

  // Variant classes
  const variants = {
    primary: "bg-monk-blue text-white hover:bg-monk-navy focus:ring-monk-blue shadow-lg shadow-monk-blue/10 hover:shadow-xl hover:shadow-monk-blue/20",
    secondary: "bg-monk-lightBlue text-monk-blue hover:bg-monk-blue/10 focus:ring-monk-blue/50",
    gold: "bg-monk-gold text-white hover:bg-monk-goldDark focus:ring-monk-gold shadow-lg shadow-monk-gold/10 hover:shadow-xl hover:shadow-monk-gold/20",
    outline: "border-2 border-monk-blue text-monk-blue hover:bg-monk-blue hover:text-white focus:ring-monk-blue",
    outlineGold: "border-2 border-monk-gold text-monk-gold hover:bg-monk-gold hover:text-white focus:ring-monk-gold",
    white: "bg-white text-monk-blue hover:bg-slate-50 focus:ring-white shadow-lg"
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    // If it's a relative/anchor link on the page, don't use target="_blank"
    const isAnchor = href.startsWith('#');
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={isAnchor ? undefined : target || "_blank"}
        rel={isAnchor ? undefined : rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
