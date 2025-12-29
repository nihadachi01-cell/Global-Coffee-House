import React, { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';

const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds if not previously closed
    const hasSeen = localStorage.getItem('hasSeenNewsletter');
    if (!hasSeen) {
      const timer = setTimeout(() => setIsOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenNewsletter', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      
      <div className="relative bg-stone-900 border border-gold-500/20 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        <div className="w-full md:w-1/2 relative min-h-[200px]">
          <img 
            src="https://picsum.photos/seed/coffee_cup/600/800" 
            alt="Coffee" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-900" />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left relative">
           <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="font-serif text-3xl font-bold text-gold-500 mb-2">Join the Club</h3>
          <p className="text-stone-300 mb-6 text-sm">Unlock 10% off your first order of premium beans and receive exclusive brewing tips.</p>
          
          <div className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-stone-500" />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-stone-800 border border-stone-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:border-gold-500 focus:outline-none placeholder-stone-500"
              />
            </div>
            <button 
              onClick={handleClose}
              className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-2.5 rounded-lg transition-colors"
            >
              Get My 10% Off
            </button>
          </div>
          <p className="text-xs text-stone-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;