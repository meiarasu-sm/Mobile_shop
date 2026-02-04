
export enum Screen {
  HOME = 'HOME',
  LISTING = 'LISTING',
  PDP = 'PDP',
  CHECKOUT = 'CHECKOUT',
  SUCCESS = 'SUCCESS',
  CATEGORIES = 'CATEGORIES'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  variants: {
    colors: string[];
    storage: string[];
  };
  category: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
