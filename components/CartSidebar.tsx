import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, updateQuantity, removeItem }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-stone-900 border-l border-stone-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full text-stone-100">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold-500" />
              <h2 className="text-xl font-serif font-semibold">Your Selection</h2>
            </div>
            <button onClick={onClose} className="text-stone-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                <ShoppingBag className="w-16 h-16 opacity-20" />
                <p>Your cart is currently empty.</p>
                <button onClick={onClose} className="text-gold-500 hover:text-gold-400 font-semibold underline underline-offset-4">
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-stone-800/50 p-4 rounded-lg border border-stone-700">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-1">
                    <h3 className="font-serif font-medium text-lg">{item.name}</h3>
                    <p className="text-stone-400 text-sm mb-2">{item.weight}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-stone-900 rounded-full px-2 py-1 border border-stone-700">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:text-gold-500 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:text-gold-500"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-semibold text-gold-500">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="self-start text-stone-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 bg-stone-900 border-t border-stone-800 space-y-4">
              <div className="space-y-2 text-sm text-stone-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-white">Calculated at checkout</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-serif font-bold pt-4 border-t border-stone-800">
                <span>Total</span>
                <span className="text-gold-500">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-gold-600 hover:bg-gold-500 text-white py-4 rounded-lg font-bold tracking-wide transition-all transform hover:scale-[1.02] shadow-lg shadow-gold-900/20">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;