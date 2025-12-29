import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Star, ShoppingCart, ArrowLeft, MapPin, Coffee, Mountain, Scale } from 'lucide-react';

interface ProductDetailsProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  // Roast meter calculation
  const roastPercentage = useMemo(() => {
    switch (product?.roastLevel) {
      case 'Light': return 25;
      case 'Medium': return 50;
      case 'Medium-Dark': return 75;
      case 'Dark': return 100;
      default: return 50;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-950 text-white">
        <h2 className="text-2xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-gold-500 underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 pt-28 pb-16 animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        
        <Link to="/shop" className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="relative group">
            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl relative z-10">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute top-10 -right-4 w-full h-full bg-gold-600/10 rounded-3xl -z-0 blur-xl"></div>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <span className="bg-gold-600 text-white text-xs font-bold px-2 py-1 rounded">{product.roastLevel} Roast</span>
                 <span className="bg-stone-800 text-stone-300 text-xs font-bold px-2 py-1 rounded">{product.weight}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gold-500">${product.price.toFixed(2)}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                  <span className="text-white font-medium">{product.rating}</span>
                  <span className="text-stone-500">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-stone-300 text-lg leading-relaxed">{product.description}</p>

            {/* Flavor Notes */}
            <div>
              <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-3">Flavor Notes</h3>
              <div className="flex flex-wrap gap-3">
                {product.flavorNotes.map(note => (
                  <span key={note} className="bg-stone-800 border border-stone-700 text-stone-200 px-4 py-2 rounded-full text-sm font-medium">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-6 p-6 bg-stone-900 rounded-xl border border-stone-800">
               <div className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                 <div>
                   <p className="text-xs text-stone-500 uppercase">Region</p>
                   <p className="text-white font-medium">{product.region}, {product.origin}</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <Mountain className="w-5 h-5 text-gold-500 mt-1" />
                 <div>
                   <p className="text-xs text-stone-500 uppercase">Elevation</p>
                   <p className="text-white font-medium">{product.elevation}</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <Coffee className="w-5 h-5 text-gold-500 mt-1" />
                 <div>
                   <p className="text-xs text-stone-500 uppercase">Best For</p>
                   <p className="text-white font-medium">{product.brewing.join(', ')}</p>
                 </div>
               </div>
                <div className="flex items-start gap-3">
                 <Scale className="w-5 h-5 text-gold-500 mt-1" />
                 <div>
                   <p className="text-xs text-stone-500 uppercase">Weight</p>
                   <p className="text-white font-medium">{product.weight}</p>
                 </div>
               </div>
            </div>

            {/* Roast Meter */}
            <div>
               <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-3">Roast Intensity</h3>
               <div className="h-4 bg-stone-800 rounded-full overflow-hidden relative">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-200 via-amber-600 to-stone-950 transition-all duration-1000" style={{ width: `${roastPercentage}%` }} />
               </div>
               <div className="flex justify-between text-xs text-stone-500 mt-2">
                 <span>Light</span>
                 <span>Medium</span>
                 <span>Dark</span>
               </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-stone-800">
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-gold-600 hover:bg-gold-500 text-white text-lg font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-xl shadow-gold-900/20"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart - ${product.price.toFixed(2)}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;