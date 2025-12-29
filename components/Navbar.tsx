import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Coffee } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'Our Story' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gold-600 flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform">
             <Coffee className="w-6 h-6" />
          </div>
          <div>
             <h1 className="font-serif text-2xl font-bold text-stone-100 tracking-wide leading-none">Global</h1>
             <p className="text-[0.65rem] text-gold-500 uppercase tracking-widest font-bold">Coffee House</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-500 ${isActive(link.path) ? 'text-gold-500' : 'text-stone-300'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link to="/shop" className="text-stone-300 hover:text-white hidden md:block">
            <Search className="w-5 h-5" />
          </Link>
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-stone-300 hover:text-gold-500 transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-gold-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button 
            className="md:hidden text-stone-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800 absolute w-full left-0 top-full p-6 flex flex-col space-y-4 shadow-2xl">
           {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-serif font-medium ${isActive(link.path) ? 'text-gold-500' : 'text-stone-300'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;