import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Truck, Award, Star } from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Coffee Beans"
            className="w-full h-full object-cover animate-pulse-slow scale-105"
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/50 to-stone-950" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 border border-gold-500/50 rounded-full text-gold-400 text-sm font-bold tracking-widest mb-6 uppercase backdrop-blur-sm">
            Est. 2024
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Discover the World’s<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-700">Finest Coffee</span>
          </h1>
          <p className="text-stone-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Premium hand-selected beans from Brazil, Colombia, Ethiopia, and beyond. Roasted to perfection and delivered to your door.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-gold-900/50 flex items-center justify-center gap-2"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm"
            >
              Our Story
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-stone-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 hover:border-gold-500/30 transition-all group">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Global Origins</h3>
              <p className="text-stone-400">Sourced directly from ethically managed farms in over 15 distinct coffee-growing regions.</p>
            </div>
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 hover:border-gold-500/30 transition-all group">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-stone-400">Only the top 1% of Arabica and Robusta beans make it into our bags. Hand-picked perfection.</p>
            </div>
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 hover:border-gold-500/30 transition-all group">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Fresh Roasting</h3>
              <p className="text-stone-400">Small-batch roasted daily to ensure maximum freshness when it arrives at your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-stone-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">Curated Selection</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-2">Bestselling Beans</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-gold-500 font-bold hover:text-white transition-colors">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-block px-8 py-3 border border-gold-500 text-gold-500 rounded-full font-bold hover:bg-gold-500 hover:text-white transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-4xl font-bold text-center text-white mb-16">Loved by Coffee Enthusiasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-stone-900 p-8 rounded-2xl border border-stone-800 relative">
                 <div className="absolute -top-4 left-8 text-6xl text-gold-600/20 font-serif">"</div>
                 <div className="flex gap-1 mb-6 text-gold-500">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                 </div>
                 <p className="text-stone-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                 <div>
                   <h4 className="font-bold text-white">{t.name}</h4>
                   <span className="text-xs text-stone-500 uppercase tracking-wide">{t.role}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-stone-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <img 
              src="https://images.unsplash.com/photo-1442512595367-f2d30a2919d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Barista" 
              className="rounded-2xl shadow-2xl"
             />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900">Experience Coffee Like Never Before</h2>
            <p className="text-stone-700 text-lg">
              Join thousands of happy customers who have elevated their morning ritual. 
              Whether you prefer a bright Pour Over or a deep Espresso, we have the perfect bean for you.
            </p>
            <div className="pt-4">
              <Link to="/shop" className="inline-block bg-stone-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gold-600 transition-colors shadow-lg">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;