import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 pt-16 pb-8 text-stone-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
             <Link to="/" className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 rounded-full bg-gold-600 flex items-center justify-center text-white">
                  <Coffee className="w-4 h-4" />
               </div>
               <span className="font-serif text-xl font-bold text-stone-100">Global Coffee</span>
             </Link>
             <p className="text-sm leading-relaxed">
               Exploring the world to bring you the finest, ethically sourced coffee beans. Roasted fresh, delivered with love.
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-bold mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-gold-500 transition-colors">Shop All Coffee</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">Our Origin Story</Link></li>
              <li><Link to="/shop" className="hover:text-gold-500 transition-colors">Wholesale</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Store Locations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-gold-500" />
                <span>123 Roast Ave, Coffee District,<br/>Seattle, WA 98101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500" />
                <span>hello@globalcoffee.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
             <h3 className="text-white font-serif font-bold mb-6">Follow Us</h3>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-gold-600 hover:text-white transition-all">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-gold-600 hover:text-white transition-all">
                 <Facebook className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-gold-600 hover:text-white transition-all">
                 <Twitter className="w-5 h-5" />
               </a>
             </div>
             <div className="mt-8">
               <p className="text-xs mb-2">Subscribe to our newsletter</p>
               <div className="flex">
                 <input type="email" placeholder="Email" className="bg-stone-900 text-white text-xs px-3 py-2 rounded-l-md focus:outline-none border border-stone-800 w-full" />
                 <button className="bg-gold-600 text-white px-3 py-2 rounded-r-md text-xs font-bold hover:bg-gold-500">OK</button>
               </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 Global Coffee House. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;