import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Brazilian Santos',
    origin: 'Brazil',
    region: 'Minas Gerais',
    elevation: '1,100m',
    price: 18.50,
    rating: 4.8,
    reviews: 124,
    image: 'https://picsum.photos/seed/coffee1/600/600',
    roastLevel: 'Medium',
    description: 'A classic Brazilian coffee renowned for its smooth, mild profile. It offers low acidity with pleasant nutty and chocolatey notes.',
    flavorNotes: ['Hazelnut', 'Milk Chocolate', 'Caramel'],
    weight: '12oz / 340g',
    brewing: ['French Press', 'Drip']
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    origin: 'Colombia',
    region: 'Huila',
    elevation: '1,600m',
    price: 21.00,
    rating: 4.9,
    reviews: 210,
    image: 'https://picsum.photos/seed/coffee2/600/600',
    roastLevel: 'Medium-Dark',
    description: 'Supremo beans are the largest size classification in Colombia. This coffee is perfectly balanced with sweet acidity and a velvety body.',
    flavorNotes: ['Caramel', 'Orange', 'Cherry'],
    weight: '12oz / 340g',
    brewing: ['Pour Over', 'Espresso']
  },
  {
    id: '3',
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    region: 'Gedeo Zone',
    elevation: '2,000m',
    price: 24.50,
    rating: 5.0,
    reviews: 340,
    image: 'https://picsum.photos/seed/coffee3/600/600',
    roastLevel: 'Light',
    description: 'Often considered the finest coffee in the world, Yirgacheffe is famous for its distinct floral aroma and bright, complex fruit flavors.',
    flavorNotes: ['Jasmine', 'Lemon', 'Bergamot'],
    weight: '12oz / 340g',
    brewing: ['Pour Over', 'Chemex']
  },
  {
    id: '4',
    name: 'Yemeni Mokha',
    origin: 'Yemen',
    region: 'Bani Matar',
    elevation: '2,300m',
    price: 35.00,
    rating: 4.9,
    reviews: 85,
    image: 'https://picsum.photos/seed/coffee4/600/600',
    roastLevel: 'Dark',
    description: 'One of the oldest and most historic coffees. It has a wild, rustic flavor profile with deep chocolate undertones and a wine-like acidity.',
    flavorNotes: ['Dark Chocolate', 'Spice', 'Dried Fruit'],
    weight: '12oz / 340g',
    brewing: ['Moka Pot', 'Turkish']
  },
  {
    id: '5',
    name: 'Vietnamese Robusta',
    origin: 'Vietnam',
    region: 'Dak Lak',
    elevation: '600m',
    price: 16.00,
    rating: 4.6,
    reviews: 150,
    image: 'https://picsum.photos/seed/coffee5/600/600',
    roastLevel: 'Dark',
    description: 'Bold, strong, and high in caffeine. Our premium Robusta is perfect for those who love a kick, traditionally brewed with condensed milk.',
    flavorNotes: ['Dark Cocoa', 'Nuts', 'Earth'],
    weight: '12oz / 340g',
    brewing: ['Phin Filter', 'Espresso']
  },
  {
    id: '6',
    name: 'Italian Espresso Blend',
    origin: 'Multi-Origin',
    region: 'Various',
    elevation: 'Various',
    price: 20.00,
    rating: 4.8,
    reviews: 400,
    image: 'https://picsum.photos/seed/coffee6/600/600',
    roastLevel: 'Dark',
    description: 'A crafted blend designed for the perfect espresso shot. Produces a thick, golden crema and a rich, lingering aftertaste.',
    flavorNotes: ['Toasted Bread', 'Bittersweet Chocolate', 'Molasses'],
    weight: '12oz / 340g',
    brewing: ['Espresso', 'Moka Pot']
  },
  {
    id: '7',
    name: 'Turkish Coffee Premium',
    origin: 'Multi-Origin',
    region: 'Various',
    elevation: 'Various',
    price: 19.50,
    rating: 4.7,
    reviews: 112,
    image: 'https://picsum.photos/seed/coffee7/600/600',
    roastLevel: 'Medium',
    description: 'Ultra-finely ground beans blended with a hint of cardamom. Designed for the traditional cezve brewing method.',
    flavorNotes: ['Cardamom', 'Walnut', 'Cacao'],
    weight: '8oz / 227g',
    brewing: ['Turkish Cezve']
  },
  {
    id: '8',
    name: 'Kenyan AA',
    origin: 'Kenya',
    region: 'Nyeri',
    elevation: '1,800m',
    price: 26.00,
    rating: 4.9,
    reviews: 180,
    image: 'https://picsum.photos/seed/coffee8/600/600',
    roastLevel: 'Medium-Dark',
    description: 'Kenyan AA beans are known for their savory-sweet nuance and intense, wine-y acidity with a full body.',
    flavorNotes: ['Black Currant', 'Grapefruit', 'Tomato Leaf'],
    weight: '12oz / 340g',
    brewing: ['French Press', 'Drip']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Elena R.",
    text: "The Yirgacheffe is simply divine. I've never tasted such floral notes in coffee before.",
    role: "Verified Buyer"
  },
  {
    id: 2,
    name: "Marcus T.",
    text: "Fast shipping and the beans were roasted just days before arrival. The freshness makes a huge difference.",
    role: "Coffee Enthusiast"
  },
  {
    id: 3,
    name: "Sarah J.",
    text: "The subscription box is the highlight of my month. Touring the world through coffee is amazing.",
    role: "Verified Buyer"
  }
];