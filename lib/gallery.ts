export interface BeforeAfterPair {
  id: string;
  title: string;
  before: string;
  after: string;
  category: 'kitchen' | 'bathroom' | 'general' | 'appliance';
}

export const GALLERY: BeforeAfterPair[] = [
  {
    id: 'grout',
    title: 'Tile & Grout Restoration',
    before: '/images/gallery/before_grout.webp',
    after: '/images/gallery/after_grout.webp',
    category: 'bathroom',
  },
  {
    id: 'stove-1',
    title: 'Stovetop Deep Clean',
    before: '/images/gallery/stove before.jpg',
    after: '/images/gallery/stove after.jpg',
    category: 'kitchen',
  },
  {
    id: 'stove-2',
    title: 'Stove Restoration',
    before: '/images/gallery/stove before 1.jpg',
    after: '/images/gallery/stove after 2.jpg',
    category: 'kitchen',
  },
  {
    id: 'faucet',
    title: 'Fixture Polish',
    before: '/images/gallery/faucet before.jpg',
    after: '/images/gallery/faucet after.jpg',
    category: 'bathroom',
  },
  {
    id: 'shower',
    title: 'Shower Glass & Tile',
    before: '/images/gallery/shower before.jpg',
    after: '/images/gallery/shower after.jpg',
    category: 'bathroom',
  },
];
