
import React from 'react';

interface CategoriesProps {
  onNavigateToListing: (category: string) => void;
  onBack: () => void;
}

const BRAND_CATEGORIES = [
  { 
    id: 'apple', 
    name: 'Apple', 
    tagline: 'Pro. Beyond.', 
    startingPrice: '₹59,900',
    count: '24 models', 
    color: 'from-[#1d1d1f] to-[#434343]',
    textColor: 'text-white',
    badge: 'Official Reseller'
  },
  { 
    id: 'samsung', 
    name: 'Samsung', 
    tagline: 'Galaxy AI is here', 
    startingPrice: '₹14,499',
    count: '42 models', 
    color: 'from-[#034ea2] to-[#007aff]',
    textColor: 'text-white',
    badge: 'S-Series Special'
  },
  { 
    id: 'google', 
    name: 'Google', 
    tagline: 'The only phone engineered by Google', 
    startingPrice: '₹44,999',
    count: '12 models', 
    color: 'from-[#4285F4] to-[#34A853]',
    textColor: 'text-white',
    badge: 'Pure Android'
  },
  { 
    id: 'oneplus', 
    name: 'OnePlus', 
    tagline: 'Never Settle', 
    startingPrice: '₹19,999',
    count: '18 models', 
    color: 'from-[#eb0029] to-[#ff4d4d]',
    textColor: 'text-white',
    badge: 'Fast & Smooth'
  },
  { 
    id: 'nothing', 
    name: 'Nothing', 
    tagline: 'Pure Instinct', 
    startingPrice: '₹23,999',
    count: '5 models', 
    color: 'from-[#000000] to-[#222222]',
    textColor: 'text-white',
    badge: 'Design First'
  },
  { 
    id: 'xiaomi', 
    name: 'Xiaomi', 
    tagline: 'Innovation for everyone', 
    startingPrice: '₹7,999',
    count: '56 models', 
    color: 'from-[#ff6700] to-[#ff9500]',
    textColor: 'text-white'
  },
  { 
    id: 'vivo', 
    name: 'Vivo', 
    tagline: 'Perfect Shot', 
    startingPrice: '₹11,999',
    count: '34 models', 
    color: 'from-[#0052cc] to-[#00b8d9]',
    textColor: 'text-white'
  },
  { 
    id: 'oppo', 
    name: 'Oppo', 
    tagline: 'Inspire Ahead', 
    startingPrice: '₹12,499',
    count: '31 models', 
    color: 'from-[#008a5e] to-[#00c283]',
    textColor: 'text-white'
  }
];

const Categories: React.FC<CategoriesProps> = ({ onNavigateToListing, onBack }) => {
  return (
    <div className="bg-[#f8fafc] dark:bg-background-dark min-h-screen pb-24 max-w-md mx-auto">
      {/* Premium Sticky Header - Back button removed for root tab feel */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 px-5 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black tracking-tight leading-none">Shop Brands</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Authorized Store</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="size-10 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-full">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <button className="size-10 flex items-center justify-center bg-primary/5 text-primary rounded-full">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </header>

      {/* Floating Search */}
      <div className="px-5 py-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
          </div>
          <input 
            type="text" 
            placeholder="Search brands or flagship series..."
            className="w-full h-14 bg-white dark:bg-gray-800 border-none rounded-2xl pl-12 pr-4 text-sm font-medium shadow-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Brand Grid */}
      <div className="px-5 space-y-4">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-sm font-black uppercase tracking-tighter text-gray-400">Official Stores</h2>
          <span className="text-[10px] font-bold text-primary">8 BRANDS FOUND</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {BRAND_CATEGORIES.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onNavigateToListing(brand.name)}
              className={`relative overflow-hidden rounded-3xl p-6 h-40 flex flex-col justify-between cursor-pointer active:scale-[0.98] transition-all bg-gradient-to-br ${brand.color} shadow-lg shadow-black/5 group`}
            >
              <div className="absolute -top-10 -right-10 size-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className={`text-2xl font-black tracking-tight ${brand.textColor}`}>{brand.name}</h3>
                  <p className={`text-[11px] font-medium opacity-80 ${brand.textColor}`}>{brand.tagline}</p>
                </div>
                {brand.badge && (
                  <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-black uppercase px-2 py-1 rounded-full border border-white/20 tracking-wider">
                    {brand.badge}
                  </span>
                )}
              </div>

              <div className="relative z-10 flex items-end justify-between">
                <div>
                  <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${brand.textColor}`}>From</p>
                  <p className={`text-lg font-black ${brand.textColor}`}>{brand.startingPrice}</p>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 ${brand.textColor}`}>
                  <span className="text-[11px] font-bold">{brand.count}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-10">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
          <div className="size-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-amber-500 text-3xl">verified</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Premium Refurbished</h4>
            <p className="text-xs text-gray-500 mt-1">Certified pre-owned flagships with 6-month warranty.</p>
            <button className="mt-3 text-primary text-xs font-bold flex items-center gap-1">
              Browse Collection <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="h-10"></div>
    </div>
  );
};

export default Categories;
