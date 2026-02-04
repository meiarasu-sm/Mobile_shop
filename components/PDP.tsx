
import React, { useState } from 'react';
import { Product } from '../types';

interface PDPProps {
  product: Product;
  onBack: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const PDP: React.FC<PDPProps> = ({ product, onBack, onAddToCart, onBuyNow }) => {
  const [selectedStorage, setSelectedStorage] = useState(product.variants.storage[0]);
  const [selectedColor, setSelectedColor] = useState(product.variants.colors[0]);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-40 max-w-md mx-auto relative">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <span className="material-symbols-outlined">arrow_back</span>
          <h2 className="text-sm font-semibold tracking-tight uppercase text-primary">GadgetPro India</h2>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined cursor-pointer">share</span>
          <span className="material-symbols-outlined cursor-pointer">favorite</span>
        </div>
      </nav>

      {/* Image Gallery */}
      <div className="bg-white dark:bg-background-dark">
        <div className="relative overflow-hidden aspect-square">
          <div 
            className="w-full h-full bg-contain bg-center bg-no-repeat p-10" 
            style={{ backgroundImage: `url('${product.image}')` }}
          ></div>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            <div className="h-1.5 w-6 rounded-full bg-primary"></div>
            {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>)}
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="px-4 pt-6 bg-white dark:bg-background-dark">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">New Launch</span>
          <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
            <span className="material-symbols-outlined text-[16px] text-yellow-500 fill-1">star</span>
            <span className="text-black dark:text-white">{product.rating}</span>
            <span>({(product.reviews/1000).toFixed(1)}k reviews)</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold leading-tight mb-2">{product.name}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">{product.description}</p>
      </div>

      {/* Pricing */}
      <div className="px-4 py-4 bg-white dark:bg-background-dark border-y border-gray-50 dark:border-gray-800">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-black text-black dark:text-white">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-gray-400 line-through text-lg">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          <span className="text-green-600 font-bold text-sm">{product.discount}</span>
        </div>
        <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">credit_card</span>
            <p className="text-xs font-medium">EMI starts at <span className="font-bold text-primary">₹6,450/mo</span>. No Cost EMI available</p>
          </div>
          <span className="material-symbols-outlined text-sm text-primary">info</span>
        </div>
      </div>

      {/* Specs Chips */}
      <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar bg-white dark:bg-background-dark">
        {[
          { icon: 'camera', label: 'Main', value: '48MP' },
          { icon: 'memory', label: 'Chip', value: 'A17 Pro' },
          { icon: 'battery_charging_full', label: 'Battery', value: '29 Hrs' },
          { icon: 'smartphone', label: 'Display', value: '6.7" OLED' }
        ].map((spec, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center min-w-[90px] p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <span className="material-symbols-outlined text-primary mb-2">{spec.icon}</span>
            <span className="text-[10px] uppercase font-bold text-gray-400">{spec.label}</span>
            <span className="text-xs font-bold">{spec.value}</span>
          </div>
        ))}
      </div>

      {/* Variants */}
      <div className="px-4 py-6 bg-white dark:bg-background-dark space-y-6">
        <div>
          <h3 className="text-sm font-bold mb-3 uppercase tracking-wider text-gray-500">Color</h3>
          <div className="flex gap-4">
            {product.variants.colors.map(color => (
              <div 
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`p-1 rounded-full cursor-pointer transition-all ${selectedColor === color ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200'}`}
              >
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color }}></div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-3 uppercase tracking-wider text-gray-500">Storage</h3>
          <div className="flex gap-2">
            {product.variants.storage.map(size => (
              <button 
                key={size}
                onClick={() => setSelectedStorage(size)}
                className={`flex-1 py-3 px-2 rounded-lg border-2 transition-all font-bold text-sm ${selectedStorage === size ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 dark:border-gray-800 text-gray-500'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery Check */}
      <div className="mx-4 my-6 p-4 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="text-sm font-semibold">Delivery Options</span>
          </div>
        </div>
        <div className="flex gap-2">
          <input className="flex-1 bg-white dark:bg-background-dark border-gray-300 dark:border-gray-700 rounded-lg px-4 text-sm focus:ring-primary focus:border-primary" placeholder="Enter Pincode" type="text"/>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm">Check</button>
        </div>
        <p className="mt-3 text-xs text-gray-500 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px] text-green-500">check_circle</span>
          Free delivery by Tomorrow, 11:00 AM
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-8 mb-10">
        <div className="flex border-b border-gray-200 dark:border-gray-800 px-4">
          <button className="flex-1 py-4 text-sm font-bold border-b-2 border-primary text-primary">Specifications</button>
          <button className="flex-1 py-4 text-sm font-bold text-gray-400">Reviews (1,240)</button>
        </div>
        <div className="p-4 bg-white dark:bg-background-dark">
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-[#0d121c] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">4.9</p>
              <div className="flex gap-0.5 text-primary">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined fill-1 text-[18px]">star</span>)}
              </div>
              <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Global Score</p>
            </div>
            <div className="grid min-w-[200px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-2">
              {[
                { star: 5, pct: 90 },
                { star: 4, pct: 7 },
                { star: 3, pct: 2 }
              ].map(r => (
                <React.Fragment key={r.star}>
                  <p className="text-xs font-bold">{r.star}</p>
                  <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                    <div className="rounded-full bg-primary" style={{ width: `${r.pct}%` }}></div>
                  </div>
                  <p className="text-xs font-medium text-right text-gray-500">{r.pct}%</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 p-4 pb-8 z-50 flex gap-4 max-w-md mx-auto">
        <button 
          onClick={onAddToCart}
          className="flex-[0.4] py-4 px-2 rounded-xl border-2 border-primary text-primary font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
          Add to Cart
        </button>
        <button 
          onClick={onBuyNow}
          className="flex-1 py-4 px-2 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/25 active:scale-95 transition-transform"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PDP;
