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
    artistName: '3LAU',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.005,
    items_left: 10,
    imageURL: 'assets/nfts/3lau-nft.svg',
    slug: 'the-air-max-90',
    isLiked: false,
  },
  {
    id: 2,
    artistName: '6529',
    description:
      'The Air Max 95 is another classic sneaker from Nike. It features a unique design and is known for its comfort.',
    brand: 'Burberry',
    price: 0.009,
    items_left: 5,
    imageURL: 'assets/nfts/6529-nft.svg',
    slug: 'the-air-max-95',
    isLiked: false,
  },
  {
    id: 3,
    artistName: 'al6z',
    description:
      'The Air Max 97 is a popular sneaker that is known for its sleek design and comfort. It is a favorite among sneakerheads.',
    brand: 'Chanel',
    price: 0.015,
    items_left: 3,
    imageURL: 'assets/nfts/al6z-nft.svg',
    slug: 'the-air-max-97',
    isLiked: false,
  },
  {
    id: 4,
    artistName: 'All Seeing Seneca',
    description:
      'The Air Max 270 is a newer sneaker from Nike that has gained popularity in recent years. It features a large air unit for comfort.',
    brand: 'Alexander Wang',
    price: 0.02,
    items_left: 7,
    imageURL: 'assets/nfts/seneca-nft.svg',
    slug: 'the-air-max-270',
    isLiked: false,
  },
  {
    id: 5,
    artistName: 'Amanda Cassat',
    description:
      'The Air Max 720 is another newer sneaker from Nike that features a large air unit for comfort. It is known for its futuristic design.',
    brand: 'Fenty',
    price: 0.025,
    items_left: 2,
    imageURL: 'assets/nfts/cassat-nft.svg',
    slug: 'the-air-max-720',
    isLiked: false,
  },
  {
    id: 6,
    artistName: 'Andrea Oshea',
    description:
      'The Air Max 720 is another newer sneaker from Nike that features a large air unit for comfort. It is known for its futuristic design.',
    brand: 'Louis Vuitton',
    price: 0.03,
    items_left: 2,
    imageURL: 'assets/nfts/oshea-nft.svg',
    slug: 'the-air-max-720',
    isLiked: false,
  },
  {
    id: 7,
    artistName: 'Auroboros',
    description:
      'The Air Max 720 is another newer sneaker from Nike that features a large air unit for comfort. It is known for its futuristic design.',
    brand: 'Lacoste',
    price: 0.035,
    items_left: 2,
    imageURL: 'assets/nfts/auroboros-nft.svg',
    slug: 'the-air-max-720',
    isLiked: false,
  },
  {
    id: 8,
    artistName: 'Anyma',
    description:
      'The Air Max 720 is another newer sneaker from Nike that features a large air unit for comfort. It is known for its futuristic design.',
    brand: 'Nike',
    price: 0.04,
    items_left: 2,
    imageURL: 'assets/nfts/anyma-nft.svg',
    slug: 'the-air-max-720',
    isLiked: false,
  },
  {
    id: 9,
    artistName: 'Azuki',
    description:
      'The Air Max 720 is another newer sneaker from Nike that features a large air unit for comfort. It is known for its futuristic design.',
    brand: 'Adidas',
    price: 0.045,
    items_left: 2,
    imageURL: 'assets/nfts/azuki-nft.svg',
    slug: 'the-air-max-720',
    isLiked: false,
  },
];
