
import React, { useState } from 'react';
import { Product } from '../types';

interface CheckoutProps {
  product: Product;
  onBack: () => void;
  onPlaceOrder: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ product, onBack, onPlaceOrder }) => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isOrdering, setIsOrdering] = useState(false);

  const handlePlaceOrder = () => {
    setIsOrdering(true);
    // Simulate API call
    setTimeout(() => {
      setIsOrdering(false);
      onPlaceOrder();
    }, 2000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d121c] dark:text-gray-100 min-h-screen max-w-md mx-auto relative pb-40">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between">
          <div 
            onClick={onBack}
            className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h2 className="text-lg font-bold flex-1 text-center pr-10">Checkout</h2>
        </div>
      </div>

      <main className="mt-4">
        {/* Order Summary */}
        <section>
          <h3 className="text-lg font-bold px-4 pb-2 pt-4">Order Summary</h3>
          <div className="flex items-center gap-4 bg-white dark:bg-[#1a212e] mx-4 rounded-xl px-4 min-h-[88px] py-3 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="size-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center p-2">
              <img src={product.image} alt={product.name} className="object-contain" />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <p className="text-base font-semibold line-clamp-1">{product.name}</p>
              <p className="text-[#49659c] dark:text-gray-400 text-sm font-normal mt-1">Titanium Blue • ₹{product.price.toLocaleString('en-IN')}</p>
            </div>
            <div className="shrink-0">
              <p className="text-sm font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Qty: 1</p>
            </div>
          </div>
        </section>

        {/* Shipping Address */}
        <section className="mt-6">
          <h3 className="text-lg font-bold px-4 pb-2 pt-4">Shipping Address</h3>
          <div className="px-4">
            <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a212e] p-5 shadow-sm">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">home</span>
                  <p className="text-base font-bold leading-tight">Home • Rahul Sharma</p>
                </div>
                <p className="text-[#49659c] dark:text-gray-400 text-sm leading-normal mt-1">42, Richmond Road, Bangalore, Karnataka - 560025</p>
                <p className="text-[#49659c] dark:text-gray-400 text-sm leading-normal">+91 98765 43210</p>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors">
                <span>Change</span>
              </button>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="mt-6">
          <h3 className="text-lg font-bold px-4 pb-2 pt-4">Payment Method</h3>
          <div className="mx-4 flex flex-col gap-3">
            {[
              { id: 'upi', label: 'UPI (GPay / PhonePe)', sub: 'Fast & Secure via BHIM UPI', icon: 'account_balance_wallet', color: 'bg-blue-50 text-primary' },
              { id: 'card', label: 'Credit / Debit Cards', sub: 'Visa, Mastercard, Amex, RuPay', icon: 'credit_card', color: 'bg-gray-50 text-gray-600' },
              { id: 'cod', label: 'Cash on Delivery', sub: 'Pay when you receive', icon: 'payments', color: 'bg-gray-50 text-gray-600' }
            ].map(method => (
              <label 
                key={method.id}
                className={`flex items-center justify-between p-4 bg-white dark:bg-[#1a212e] rounded-xl border-2 transition-all cursor-pointer shadow-sm ${paymentMethod === method.id ? 'border-primary' : 'border-gray-100 dark:border-gray-800'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`size-10 rounded-full flex items-center justify-center ${method.color}`}>
                    <span className="material-symbols-outlined">{method.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">{method.label}</p>
                    <p className="text-xs text-gray-500">{method.sub}</p>
                  </div>
                </div>
                <input 
                  type="radio" 
                  name="payment" 
                  checked={paymentMethod === method.id}
                  onChange={() => setPaymentMethod(method.id)}
                  className="text-primary focus:ring-primary h-5 w-5" 
                />
              </label>
            ))}
          </div>
        </section>

        {/* Trust Badges */}
        <section className="mt-8 px-4">
          <div className="flex justify-center items-center gap-6 py-4 bg-gray-50 dark:bg-[#1a212e]/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-green-600 text-xl">verified_user</span>
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">100% Secure</span>
            </div>
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-blue-600 text-xl">workspace_premium</span>
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Official Warranty</span>
            </div>
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-orange-600 text-xl">local_shipping</span>
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Free Delivery</span>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1a212e] border-t border-gray-200 dark:border-gray-800 p-4 pb-8 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex flex-col">
            <p className="text-xs text-gray-500 dark:text-gray-400">Grand Total</p>
            <p className="text-xl font-bold">₹{product.price.toLocaleString('en-IN')}</p>
          </div>
          <button className="text-primary text-sm font-semibold flex items-center gap-1">
            Details <span className="material-symbols-outlined text-sm">keyboard_arrow_up</span>
          </button>
        </div>
        <button 
          onClick={handlePlaceOrder}
          disabled={isOrdering}
          className={`w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${isOrdering ? 'opacity-70 cursor-wait' : ''}`}
        >
          {isOrdering ? (
            <>
              <div className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              Place Order
              <span className="material-symbols-outlined">arrow_forward</span>
            </>
          )}
        </button>
        <p className="text-[10px] text-center text-gray-400 mt-3">By placing the order, you agree to our Terms and Conditions.</p>
      </div>
    </div>
  );
};

export default Checkout;
