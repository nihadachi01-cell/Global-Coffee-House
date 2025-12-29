export interface Product {
  id: string;
  name: string;
  origin: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  roastLevel: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  description: string;
  flavorNotes: string[];
  weight: string;
  brewing: string[];
  region: string;
  elevation: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: number;
  user: string;
  comment: string;
  rating: number;
}

export enum SortOption {
  POPULARITY = 'Popularity',
  PRICE_LOW_HIGH = 'Price: Low to High',
  PRICE_HIGH_LOW = 'Price: High to Low',
  RATING = 'Average Rating'
}