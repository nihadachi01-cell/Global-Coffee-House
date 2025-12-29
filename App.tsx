import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import CartSidebar from './components/CartSidebar';
import NewsletterPopup from './components/NewsletterPopup';
import AICoffeeSommelier from './components/AICoffeeSommelier';
import { CartItem, Product } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-gold-500 selection:text-white">
        <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />
        
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
        
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cart={cart}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
        
        <NewsletterPopup />
        <AICoffeeSommelier />
      </div>
    </Router>
  );
};

export default App;