
import React from 'react';

interface SuccessProps {
  onContinue: () => void;
}

const Success: React.FC<SuccessProps> = ({ onContinue }) => {
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen max-w-md mx-auto flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-8 relative">
        <div className="size-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center animate-bounce">
          <span className="material-symbols-outlined text-green-600 text-5xl fill-1">check_circle</span>
        </div>
        <div className="absolute -top-2 -right-2 size-8 bg-primary rounded-full border-4 border-white dark:border-background-dark flex items-center justify-center animate-pulse">
          <span className="material-symbols-outlined text-white text-xs">celebration</span>
        </div>
      </div>
      
      <h1 className="text-3xl font-black mb-4 tracking-tight">Order Placed!</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
        Your high-performance tech is on its way. We've sent the confirmation details to your registered email.
      </p>
      
      <div className="w-full bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 mb-10 border border-gray-100 dark:border-gray-800">
        <div className="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</span>
          <span className="text-sm font-black">#TS-9428571</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Est. Delivery</span>
          <span className="text-sm font-black text-green-600">Tomorrow, 11 AM</span>
        </div>
      </div>
      
      <button 
        onClick={onContinue}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 active:scale-95 transition-all"
      >
        Continue Shopping
      </button>
      
      <p className="mt-8 text-xs text-gray-400 font-medium">
        Need help? <span className="text-primary cursor-pointer">Contact Support</span>
      </p>
    </div>
  );
};

export default Success;
