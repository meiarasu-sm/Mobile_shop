
import React from 'react';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface HomeProps {
  onNavigateToListing: () => void;
  onNavigateToPDP: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateToListing, onNavigateToPDP }) => {
  return (
    <div className="pb-24 max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">smartphone</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight">TechStore<span className="text-primary">IN</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-1">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-4">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
            <div className="text-[#49659c] flex border-none bg-white dark:bg-gray-800 items-center justify-center pl-4 rounded-l-xl">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="form-input flex w-full min-w-0 flex-1 border-none bg-white dark:bg-gray-800 focus:ring-0 h-full placeholder:text-[#49659c] px-4 rounded-r-xl text-base font-normal" 
              placeholder="Search smartphones & accessories" 
            />
          </div>
        </label>
      </div>

      {/* Hero Banner */}
      <div className="px-4 py-2">
        <div 
          onClick={() => onNavigateToPDP(MOCK_PRODUCTS[0])}
          className="relative overflow-hidden rounded-xl bg-primary min-h-[180px] flex items-center cursor-pointer active:scale-[0.98] transition-all"
        >
          <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBU9ZjJIkA-o-zLmECIYUC83VIxK3-BJqSVYtfCqvckYLXvMZZXIzMqM5B2ZU8v4A9Tx4PgY5ahbjZ6_X1_f9KB7UuinPXraN_wEubbt9F5h7VlJwbmXG7K0KKliAAppYI19sOM7mEjk57S6ZpANRZzcEAGnOtBTROus4unkti54b4mq-3amcPlAylUZbzLwA5RKZUaSQEBDXsQ31hTBog-GPKym9rJHvbtpJgnRCDxBa_1X8Q8PwsaeIPvG_VzSiib5KYNORPQOexg')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
          <div className="relative p-6 z-10 max-w-[60%]">
            <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2 inline-block">New Arrival</span>
            <h2 className="text-white text-2xl font-bold leading-tight mb-2">iPhone 15 Pro</h2>
            <p className="text-white/80 text-xs mb-4">Titanium. So strong. So light. So Pro.</p>
            <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1.5">
              Shop Now <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-6">
        <div className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-[#0d121c] dark:text-white text-lg font-bold">Top Categories</h3>
          <button className="text-primary text-sm font-semibold flex items-center gap-0.5" onClick={onNavigateToListing}>
            See All <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 px-4">
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={onNavigateToListing}>
            <div className="w-full aspect-square bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">phone_iphone</span>
            </div>
            <span className="text-xs font-semibold">Phones</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full aspect-square bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="material-symbols-outlined text-primary text-3xl">headphones</span>
            </div>
            <span className="text-xs font-semibold">Audio</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full aspect-square bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="material-symbols-outlined text-primary text-3xl">watch</span>
            </div>
            <span className="text-xs font-semibold">Wearables</span>
          </div>
        </div>
      </div>

      {/* Featured Deals */}
      <div className="py-4">
        <div className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-[#0d121c] dark:text-white text-lg font-bold">Featured Deals</h3>
          <button className="text-primary text-sm font-semibold flex items-center gap-0.5" onClick={onNavigateToListing}>
            See All <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-4">
          {MOCK_PRODUCTS.map((prod) => (
            <div 
              key={prod.id} 
              onClick={() => onNavigateToPDP(prod)}
              className="min-w-[200px] w-[200px] bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer active:scale-[0.98] transition-all"
            >
              <div className="relative h-32 w-full mb-3 rounded-xl bg-gray-50 dark:bg-gray-900 overflow-hidden flex items-center justify-center p-2">
                <img className="object-contain h-full w-full" src={prod.image} alt={prod.name} />
                {prod.badge && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {prod.badge === 'New Arrival' ? '-12%' : 'BEST'}
                  </div>
                )}
              </div>
              <h4 className="text-sm font-bold mb-1 truncate">{prod.name}</h4>
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined text-yellow-400 text-xs fill-1">star</span>
                <span className="text-[10px] text-gray-500 font-medium">{prod.rating} ({prod.reviews})</span>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-primary font-bold">₹{prod.price.toLocaleString('en-IN')}</span>
                <span className="text-[10px] text-gray-400 line-through">₹{prod.originalPrice.toLocaleString('en-IN')}</span>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-4 py-6">
        <h3 className="text-[#0d121c] dark:text-white text-lg font-bold mb-4">Why Choose Us?</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: 'local_shipping', label: '24h Express Delivery' },
            { icon: 'verified', label: 'Authorized Reseller' },
            { icon: 'security', label: '1 Year Warranty' },
            { icon: 'swap_horiz', label: '7-Day Easy Returns' }
          ].map((item, idx) => (
            <div key={idx} className="bg-primary/5 dark:bg-primary/10 p-4 rounded-xl flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary mb-2">{item.icon}</span>
              <p className="text-[11px] font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Scroller */}
      <div className="py-6 border-y border-gray-100 dark:border-gray-800">
        <div className="flex overflow-x-auto no-scrollbar gap-8 px-6 opacity-50 dark:opacity-40 grayscale items-center">
          {['APPLE', 'SAMSUNG', 'ONEPLUS', 'GOOGLE', 'XIAOMI'].map(brand => (
            <span key={brand} className="text-xl font-bold whitespace-nowrap">{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
