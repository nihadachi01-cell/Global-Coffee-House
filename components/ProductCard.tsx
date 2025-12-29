import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-stone-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-800 hover:border-gold-500/30">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur text-gold-500 text-xs font-bold px-3 py-1 rounded-full border border-gold-500/20">
          {product.origin}
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <Link 
              to={`/product/${product.id}`}
              className="bg-white text-stone-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gold-500 hover:text-white"
            >
              View Details
            </Link>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`} className="hover:text-gold-500 transition-colors">
             <h3 className="font-serif font-bold text-xl text-stone-100 leading-tight">{product.name}</h3>
          </Link>
          <div className="flex items-center gap-1 bg-stone-900 px-2 py-0.5 rounded text-xs">
            <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
            <span className="text-stone-300 font-medium">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-stone-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
            {product.flavorNotes.slice(0, 2).map((note, i) => (
                <span key={i} className="text-xs text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-700">
                    {note}
                </span>
            ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-gold-500 font-bold text-lg">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 bg-stone-700 hover:bg-gold-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;