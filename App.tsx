
import React, { useState, useEffect } from 'react';
import { Screen, Product } from './types';
import { MOCK_PRODUCTS } from './constants';
import Home from './components/Home';
import Listing from './components/Listing';
import PDP from './components/PDP';
import Checkout from './components/Checkout';
import Success from './components/Success';
import Categories from './components/Categories';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(3);

  // Sync scroll on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen(Screen.PDP);
  };

  const handleBack = () => {
    if (currentScreen === Screen.PDP || currentScreen === Screen.LISTING || currentScreen === Screen.CATEGORIES) {
      setCurrentScreen(Screen.HOME);
    } else if (currentScreen === Screen.CHECKOUT) {
      setCurrentScreen(Screen.PDP);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return (
          <Home 
            onNavigateToListing={() => setCurrentScreen(Screen.LISTING)}
            onNavigateToPDP={navigateToProduct}
          />
        );
      case Screen.CATEGORIES:
        return (
          <Categories 
            onBack={handleBack}
            onNavigateToListing={() => setCurrentScreen(Screen.LISTING)}
          />
        );
      case Screen.LISTING:
        return (
          <Listing 
            onBack={handleBack}
            onNavigateToPDP={navigateToProduct}
            cartCount={cartCount}
          />
        );
      case Screen.PDP:
        return selectedProduct ? (
          <PDP 
            product={selectedProduct}
            onBack={handleBack}
            onAddToCart={() => setCartCount(prev => prev + 1)}
            onBuyNow={() => setCurrentScreen(Screen.CHECKOUT)}
          />
        ) : (
          <div className="p-10 text-center">Product not found.</div>
        );
      case Screen.CHECKOUT:
        return selectedProduct ? (
          <Checkout 
            product={selectedProduct}
            onBack={handleBack}
            onPlaceOrder={() => setCurrentScreen(Screen.SUCCESS)}
          />
        ) : (
          <div className="p-10 text-center">Nothing to checkout.</div>
        );
      case Screen.SUCCESS:
        return (
          <Success 
            onContinue={() => setCurrentScreen(Screen.HOME)}
          />
        );
      default:
        return <Home 
          onNavigateToListing={() => setCurrentScreen(Screen.LISTING)} 
          onNavigateToPDP={navigateToProduct}
        />;
    }
  };

  const isTabScreen = currentScreen === Screen.HOME || currentScreen === Screen.LISTING || currentScreen === Screen.CATEGORIES;

  return (
    <div className="min-h-screen">
      {renderScreen()}
      
      {/* Universal Bottom Nav for Main Screens */}
      {isTabScreen && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-around h-16 max-w-md mx-auto">
            <button 
              onClick={() => setCurrentScreen(Screen.HOME)}
              className={`flex flex-col items-center gap-0.5 w-full ${currentScreen === Screen.HOME ? 'text-primary' : 'text-slate-500'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === Screen.HOME ? 'fill-1' : ''}`}>home</span>
              <span className="text-[10px] font-bold">Home</span>
            </button>
            <button 
              onClick={() => setCurrentScreen(Screen.CATEGORIES)}
              className={`flex flex-col items-center gap-0.5 w-full ${currentScreen === Screen.CATEGORIES ? 'text-primary' : 'text-slate-500'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === Screen.CATEGORIES ? 'fill-1' : ''}`}>category</span>
              <span className="text-[10px] font-bold">Categories</span>
            </button>
            <button 
              onClick={() => setCurrentScreen(Screen.LISTING)}
              className={`flex flex-col items-center gap-0.5 w-full ${currentScreen === Screen.LISTING ? 'text-primary' : 'text-slate-500'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === Screen.LISTING ? 'fill-1' : ''}`}>sell</span>
              <span className="text-[10px] font-bold">Deals</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 w-full text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-2xl">person</span>
              <span className="text-[10px] font-medium">Account</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 w-full text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-2xl">history</span>
              <span className="text-[10px] font-medium">Orders</span>
            </button>
          </div>
          <div className="h-6 w-full"></div>
        </nav>
      )}
    </div>
  );
};

export default App;
