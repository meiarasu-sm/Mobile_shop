
import React from 'react';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface ListingProps {
  onBack: () => void;
  onNavigateToPDP: (product: Product) => void;
  cartCount: number;
}

const Listing: React.FC<ListingProps> = ({ onBack, onNavigateToPDP, cartCount }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 max-w-md mx-auto overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center px-4 py-3 justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black leading-tight tracking-tight">Smartphones</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative p-1">
              <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">shopping_cart</span>
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
            </div>
          </div>
        </div>

        <div className="px-4 pb-2">
          <label className="flex flex-col h-10 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-slate-500 flex border-none bg-slate-200/50 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input 
                className="form-input flex w-full border-none bg-slate-200/50 dark:bg-slate-800 focus:ring-0 rounded-r-lg pl-2 text-sm" 
                placeholder="Search brands or models" 
              />
            </div>
          </label>
        </div>

        <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-primary text-white px-3">
            <span className="text-xs font-semibold">Brand</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          {['Price', 'RAM', 'Storage'].map(filter => (
            <button key={filter} className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-slate-200/70 dark:bg-slate-800 px-3">
              <span className="text-slate-700 dark:text-slate-300 text-xs font-medium">{filter}</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          ))}
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-slate-200/70 dark:bg-slate-800 px-3">
            <span className="material-symbols-outlined text-sm">tune</span>
          </button>
        </div>
      </header>

      <main className="p-4 grid grid-cols-2 gap-4">
        {MOCK_PRODUCTS.map((product) => (
          <div 
            key={product.id}
            onClick={() => onNavigateToPDP(product)}
            className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="relative w-full aspect-[4/5] bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2">
              <div className="w-full h-full bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url('${product.image}')` }}></div>
              <button className="absolute top-2 right-2 size-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-sm">
                <span className={`material-symbols-outlined text-lg ${product.id === '1' ? 'text-rose-500 fill-1' : 'text-slate-400'}`}>favorite</span>
              </button>
              {product.badge && (
                <div className="absolute bottom-2 left-2 bg-primary/90 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                  {product.badge}
                </div>
              )}
            </div>
            <div className="p-3 flex flex-col flex-1">
              <h3 className="text-sm font-semibold line-clamp-2 mb-1">{product.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined text-amber-400 text-sm fill-1">star</span>
                <span className="text-[11px] font-medium">{product.rating}</span>
                <span className="text-[11px] text-slate-400 font-normal">({product.reviews.toLocaleString()})</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base font-bold text-slate-900 dark:text-white">₹{product.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-bold text-green-600">{product.discount}</span>
                </div>
              </div>
              <label className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-50 dark:border-slate-800 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                <input className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20" type="checkbox"/>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Compare</span>
              </label>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Listing;
