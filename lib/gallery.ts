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
    before: '/images/gallery/grout-before.webp',
    after: '/images/gallery/grout-after.webp',
    category: 'bathroom',
  },
  {
    id: 'stove-1',
    title: 'Stovetop Deep Clean',
    before: '/images/gallery/stove-1-before.webp',
    after: '/images/gallery/stove-1-after.webp',
    category: 'kitchen',
  },
  {
    id: 'stove-2',
    title: 'Stove Restoration',
    before: '/images/gallery/stove-2-before.webp',
    after: '/images/gallery/stove-2-after.webp',
    category: 'kitchen',
  },
  {
    id: 'faucet',
    title: 'Fixture Polish',
    before: '/images/gallery/faucet-before.webp',
    after: '/images/gallery/faucet-after.webp',
    category: 'bathroom',
  },
  {
    id: 'shower',
    title: 'Shower Glass & Tile',
    before: '/images/gallery/shower-before.webp',
    after: '/images/gallery/shower-after.webp',
    category: 'bathroom',
  },
];
