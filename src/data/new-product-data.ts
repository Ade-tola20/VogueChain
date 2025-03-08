export interface Product {
  isLiked: boolean;
  id: number;
  artistName: string;
  description: string;
  brand: string;
  price: number;
  items_left: number;
  imageURL: string;
  slug: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    artistName: 'Drift',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/nfts/drift-nft.svg',
    slug: 'the-air-max-90',
    isLiked: false,
  },
  {
    id: 2,
    artistName: 'Doodles',
    description:
      'The Air Max 95 is another classic sneaker from Nike. It features a unique design and is known for its comfort.',
    brand: 'Burberry',
    price: 0.9,
    items_left: 2,
    imageURL: 'assets/nfts/doodles-nft.svg',
    slug: 'the-air-max-95',
    isLiked: false,
  },
  {
    id: 3,
    artistName: 'Coldie',
    description:
      'The Air Max 97 is a popular sneaker that is known for its sleek design and comfort. It is a favorite among sneakerheads.',
    brand: 'Chanel',
    price: 0.15,
    items_left: 3,
    imageURL: 'assets/nfts/coldie-nft.svg',
    slug: 'the-air-max-97',
    isLiked: false,
  },
];
