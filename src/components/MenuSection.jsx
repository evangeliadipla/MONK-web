import React, { useState } from 'react';
import { menuCategories, menuItems } from '../data/menu';
import SectionTitle from './SectionTitle';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const activeItems = menuItems[activeCategory] || [];

  return (
    <section 
      id="menu" 
      className="py-20 bg-slate-50 border-y border-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          tag="MONK MENU"
          title="Διάλεξε τις γεύσεις σου"
          subtitle="Από εκλεκτό specialty espresso μέχρι φρεσκοψημένα brunch πιάτα, φτιαγμένα καθημερινά με μεράκι."
        />

        {/* Categories Tabs Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex overflow-x-auto pb-3 pt-1 px-2 space-x-2 max-w-full no-scrollbar mask-image">
            {menuCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm md:text-base tracking-wide whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? 'bg-monk-blue text-white shadow-md shadow-monk-blue/15' 
                      : 'bg-white text-slate-700 hover:text-monk-blue border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {activeItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  {/* Name and Badges */}
                  <div className="flex items-center flex-wrap gap-2">
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        item.badge === 'Popular' || item.badge === 'Best Seller'
                          ? 'bg-amber-100 text-amber-800'
                          : item.badge === 'Must Try' || item.badge === 'Chef\'s Choice'
                          ? 'bg-monk-blue text-white'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Price */}
                  <span className="text-lg font-black text-monk-blue bg-monk-lightBlue px-3 py-1 rounded-xl whitespace-nowrap">
                    €{Number(item.price).toFixed(2)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm mt-3 font-normal leading-relaxed pr-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs md:text-sm text-slate-400 font-semibold italic">
            * Οι τιμές και η διαθεσιμότητα ενδέχεται να αλλάζουν. Για επιβεβαίωση καλέστε μας.
          </p>
        </div>

      </div>
    </section>
  );
}
