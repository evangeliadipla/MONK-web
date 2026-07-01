import React from 'react';

export default function SectionTitle({ tag, title, subtitle, centered = true, dark = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      {tag && (
        <span className="text-xs md:text-sm font-bold tracking-widest text-monk-gold uppercase block mb-2">
          {tag}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-monk-blue'} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed font-normal`}>
          {subtitle}
        </p>
      )}
      <div className={`w-16 h-1 bg-monk-gold mt-6 ${centered ? 'mx-auto' : ''} rounded-full`} />
    </div>
  );
}
