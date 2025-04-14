export interface Product {
  id: number;
  memberName: string;
  role: string;
  imageURL: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    memberName: 'Ebony Nash',
    role:
      'Co Founder',
    imageURL: 'assets/member-images/nash-pic.svg',
  },
  {
    id: 2,
    memberName: 'Cory Bass',
    role:
      'CEO',
    imageURL: 'assets/member-images/bass-pic.svg',
  },
  {
    id: 3,
    memberName: 'Grady Thomas',
    role:
      'CTO',
    imageURL: 'assets/member-images/thomas-pic.svg',
  },
  {
    id: 4,
    memberName: 'Tracy Reyes',
    role:
      'COO',
    imageURL: 'assets/member-images/reyes-pic.svg',
  },
  {
    id: 5,
    memberName: 'Christina Maldonado',
    role:
      'Finance',
    imageURL: 'assets/member-images/maldonado-pic.svg',
  },
  {
    id: 6,
    memberName: 'Gerald Kim',
    role:
      'Member',
    imageURL: 'assets/member-images/kim-pic.svg',
  },
];
