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
  paymentMethod?: string;
  creatorBg: string;
  verifiedIcon: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    artistName: '3LAU',
    motto:
      'Innovate. Mint. Inspire. Transforming Fashion into Timeless Digital Treasures.',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/icons/3lau-icon.svg',
    creatorBg: 'assets/images/3lau-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    paymentMethod: 'assets/icons/eth-icon.svg',
    isFollowed: false,
  },
  {
    id: 2,
    artistName: 'Anyma',
    motto:
      'Bold Designs, Endless Possibilities—Your Creativity, Forever on the Blockchain.',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/icons/anyma-icon.svg',
    creatorBg: 'assets/images/anyma-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    paymentMethod: 'assets/icons/eth-icon.svg',
    isFollowed: false,
  },
  {
    id: 3,
    artistName: 'Doodles',
    motto:
      'Redefining Style in the Digital Age—Your Vision, Immortalized on the Blockchain.',
    description:
      'The Air Max 90 is a classic sneaker that has been around for decades. It is known for its comfort and style.',
    brand: 'Zalando',
    price: 0.2,
    items_left: 3,
    imageURL: 'assets/icons/doodles-icon.svg',
    creatorBg: 'assets/images/doodles-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    paymentMethod: 'assets/icons/eth-icon.svg',
    isFollowed: false,
  },
  {
    id: 4,
    artistName: 'Beeple',
    motto: 'Digital Fashion Reinvented—A New Era of Wearable NFTs.',
    description: 'Unique NFT-based clothing items designed for the metaverse.',
    brand: 'Metaverse Fashion',
    price: 0.5,
    items_left: 5,
    imageURL: 'assets/icons/beeple-icon.svg',
    creatorBg: 'assets/images/beeple-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    paymentMethod: 'assets/icons/eth-icon.svg',
    isFollowed: false,
  },
  {
    id: 5,
    artistName: 'Pak',
    motto: 'Timeless Digital Wearables for a New Era.',
    description: 'High-end digital fashion collectibles with unique designs.',
    brand: 'Metaverse Couture',
    price: 0.7,
    items_left: 2,
    imageURL: 'assets/icons/pak-icon.svg',
    creatorBg: 'assets/images/pak-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    paymentMethod: 'assets/icons/eth-icon.svg',
    isFollowed: false,
  },
  {
    id: 6,
    artistName: 'Daniel Allan',
    motto:
      'Empowering the future of music through innovation, community, and blockchain.',
    description: 'High-end digital fashion collectibles with unique designs.',
    brand: 'Metaverse Couture',
    price: 0.7,
    items_left: 2,
    imageURL: 'assets/icons/allan-icon.svg',
    creatorBg: 'assets/images/allan-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    paymentMethod: 'assets/icons/eth-icon.svg',
    isFollowed: false,
  },
  {
    id: 7,
    artistName: 'Defaced',
    motto: 'Defaced: Where Whimsy Meets Geometry, and Art Defies Boundaries. From Freelance to Web3, Crafting Coveted Characters and Colorful Dreams, One NFT at a Time.',
    description: 'High-end digital fashion collectibles with unique designs.',
    brand: 'Metaverse Couture',
    price: 0.7,
    items_left: 2,
    imageURL: 'assets/icons/defaced-icon.svg',
    creatorBg: 'assets/images/defaced-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    paymentMethod: 'assets/icons/eth-icon.svg',
    isFollowed: false,
  },
  {
    id: 8,
    artistName: 'Brycent',
    motto: 'Brycent is a pioneer in Web3 gaming, transforming skepticism into strategy, pixels into progress, and play into possibility, empowering creators and reshaping the gaming future.',
    description: 'High-end digital fashion collectibles with unique designs.',
    brand: 'Metaverse Couture',
    price: 0.7,
    items_left: 2,
    imageURL: 'assets/icons/brycent-icon.svg',
    creatorBg: 'assets/images/brycent-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    paymentMethod: 'assets/icons/eth-icon.svg',
    isFollowed: false,
  },
  {
    id: 9,
    artistName: 'Fvckrender',
    motto: 'FVCKRENDER, a self-taught visionary and metaverse pioneer, merges futuristic art with digital sanctuary, blurring lines between reality, gaming, and community in LVCIDIA.',
    description: 'High-end digital fashion collectibles with unique designs.',
    brand: 'Metaverse Couture',
    price: 0.7,
    items_left: 2,
    imageURL: 'assets/icons/render-icon.svg',
    creatorBg: 'assets/images/render-bg.svg',
    verifiedIcon: 'assets/icons/verified-icon.svg',
    paymentMethod: 'assets/icons/eth-icon.svg',
    isFollowed: false,
  },
];
