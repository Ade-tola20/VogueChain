export interface Product {
  isFollowed: boolean;
  id: number;
  artistName: string;
  motto: string;
  description: string;
  brand: string;
  price: number;
  items_left: number;
  imageURL: string;
  brandBg: string;
  verifiedIcon: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    artistName: 'Adidas',
    motto:
      'Impossible is Nothing',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/icons/adidas-icon.svg',
    brandBg: 'assets/images/adidas-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    isFollowed: false,
  },
  {
    id: 1,
    artistName: 'Nike',
    motto:
      'Just Do It',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/icons/nike-icon.svg',
    brandBg: 'assets/images/nike-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    isFollowed: false,
  },
  {
    id: 1,
    artistName: 'Lacoste',
    motto:
      'Life is a beautiful sport',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/icons/lacoste-icon.svg',
    brandBg: 'assets/images/lacoste-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    isFollowed: false,
  },
];
