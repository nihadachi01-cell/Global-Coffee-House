import React, { useState, useMemo } from 'react';
import { Product, SortOption } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const [selectedRoast, setSelectedRoast] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>(SortOption.POPULARITY);

  const roasts = ['All', 'Light', 'Medium', 'Medium-Dark', 'Dark'];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedRoast !== 'All') {
      result = result.filter(p => p.roastLevel === selectedRoast);
    }

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.origin.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortBy) {
      case SortOption.PRICE_LOW_HIGH:
        result.sort((a, b) => a.price - b.price);
        break;
      case SortOption.PRICE_HIGH_LOW:
        result.sort((a, b) => b.price - a.price);
        break;
      case SortOption.RATING:
        result.sort((a, b) => b.rating - a.rating);
        break;
      // Default Popularity (based on constant order or add popularity field)
    }

    return result;
  }, [selectedRoast, searchQuery, sortBy]);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-stone-950 animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-serif text-5xl font-bold text-white">Our Collection</h1>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Explore our curated selection of single-origin beans and premium blends. 
            Filter by roast or search for your favorite origin.
          </p>
        </div>

        {/* Filters Toolbar */}
        <div className="sticky top-20 z-30 bg-stone-900/90 backdrop-blur-md rounded-xl p-4 mb-12 shadow-xl border border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Search */}
            <div className="w-full md:w-1/3 relative">
              <input 
                type="text" 
                placeholder="Search coffee..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-800 border border-stone-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold-500"
              />
            </div>

            {/* Roast Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              <span className="text-stone-500 text-sm font-bold mr-2 whitespace-nowrap">ROAST LEVEL:</span>
              {roasts.map(roast => (
                <button
                  key={roast}
                  onClick={() => setSelectedRoast(roast)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedRoast === roast 
                      ? 'bg-gold-600 text-white' 
                      : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                  }`}
                >
                  {roast}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="w-full md:w-auto relative group">
               <div className="flex items-center gap-2 bg-stone-800 px-4 py-2.5 rounded-lg border border-stone-700 cursor-pointer">
                 <SlidersHorizontal className="w-4 h-4 text-gold-500" />
                 <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="bg-transparent text-white text-sm focus:outline-none appearance-none cursor-pointer pr-4"
                 >
                    {Object.values(SortOption).map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                 </select>
                 <ChevronDown className="w-4 h-4 text-stone-500" />
               </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-2xl text-stone-400 mb-2">No coffees found</h3>
            <p className="text-stone-600">Try adjusting your search or filters.</p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedRoast('All');}}
              className="mt-4 text-gold-500 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;