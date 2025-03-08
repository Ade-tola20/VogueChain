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
  creatorBg: string;
  verifiedIcon: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    artistName: '3LAU',
    motto: 'Innovate. Mint. Inspire. Transforming Fashion into Timeless Digital Treasures.',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/icons/3lau-icon.svg',
    creatorBg: 'assets/images/3lau-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    isFollowed: false,
  },
  {
    id: 1,
    artistName: 'Anyma',
    motto: 'Bold Designs, Endless Possibilities—Your Creativity, Forever on the Blockchain.',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/icons/anyma-icon.svg',
    creatorBg: 'assets/images/anyma-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    isFollowed: false,
  },
  {
    id: 1,
    artistName: 'Doodles',
    motto: 'Redefining Style in the Digital Age—Your Vision, Immortalized on the Blockchain.',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/icons/doodles-icon.svg',
    creatorBg: 'assets/images/doodles-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    isFollowed: false,
  }
];
