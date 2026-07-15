export interface Neighborhood {
  slug: string;
  name: string;
  type: 'neighborhood' | 'rv-park' | 'family-park';
  city: string;
  description: string;
  audience: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    slug: 'mesa-del-sol',
    name: 'Mesa Del Sol',
    type: 'neighborhood',
    city: 'Yuma',
    description: 'Upscale foothills neighborhood with custom homes and scenic desert views.',
    audience: 'Families and professionals seeking premium residential living.',
    latitude: 32.68,
    longitude: -114.62,
  },
  {
    slug: 'the-ravines',
    name: 'The Ravines of Yuma',
    type: 'neighborhood',
    city: 'Yuma',
    description: 'Exclusive custom home subdivision in the eastern foothills.',
    audience: 'Homeowners with custom, upscale residential properties.',
    address: '14546 E 47th Lane, Yuma, AZ 85367',
    latitude: 32.68,
    longitude: -114.58,
  },
  {
    slug: 'country-roads',
    name: 'Country Roads',
    type: 'rv-park',
    city: 'Yuma',
    description: 'Large RV park serving active adults and seasonal snowbirds.',
    audience: '55+ active adults and seasonal snowbirds.',
    latitude: 32.70,
    longitude: -114.60,
  },
  {
    slug: 'the-palms',
    name: 'The Palms RV Resort',
    type: 'rv-park',
    city: 'Yuma',
    description: '453 large lots with Villas, Casitas, and RV spaces for 55+ active adults.',
    audience: '55+ retirees and active adults.',
    address: '3400 S Avenue 7 E, Yuma, AZ 85365',
    latitude: 32.64,
    longitude: -114.63,
  },
  {
    slug: 'arizona-west',
    name: 'Arizona West RV Park',
    type: 'rv-park',
    city: 'Yuma',
    description: '55+ retirement and senior RV resort with full amenities.',
    audience: '55+ retirees and seasonal snowbirds.',
    address: '6825 E. 32nd Street, Yuma, Arizona 85365',
    latitude: 32.66,
    longitude: -114.54,
  },
  {
    slug: 'rancho-rialto',
    name: 'Rancho Rialto',
    type: 'rv-park',
    city: 'Yuma',
    description: '55+ pet-friendly RV resort with walled and gated security.',
    audience: 'Pet-friendly 55+ retirees and active adults.',
    address: '11322 South Avenue 12 E, Yuma, AZ 85367',
    latitude: 32.62,
    longitude: -114.61,
  },
  {
    slug: 'orchard-gardens',
    name: 'Orchard Gardens',
    type: 'rv-park',
    city: 'Yuma',
    description: '126-unit shareholder-owned 55+ gated cooperative.',
    audience: '55+ cooperative members and retirees.',
    address: '650 S Avenue B, Yuma, AZ 85364',
    latitude: 32.73,
    longitude: -114.61,
  },
  {
    slug: 'del-pueblo',
    name: 'Del Pueblo RV Resort',
    type: 'rv-park',
    city: 'Yuma',
    description: '55+ community with RV and Park Model home options.',
    audience: '55+ retirees choosing between RV and park model living.',
    address: '14794 S Ave 3 E, Yuma, Arizona',
    latitude: 32.60,
    longitude: -114.62,
  },
  {
    slug: 'fortuna-de-oro',
    name: 'Fortuna de Oro',
    type: 'rv-park',
    city: 'San Luis',
    description: '1,200-site 55+ golf RV park and retirement community.',
    audience: '55+ golfers and active adults.',
    latitude: 32.48,
    longitude: -114.77,
  },
  {
    slug: 'sierra-pacific',
    name: 'Sierra Pacific',
    type: 'family-park',
    city: 'Yuma',
    description: 'Family-oriented manufactured housing community with 272 home sites.',
    audience: 'Families seeking affordable manufactured home living.',
    address: '5201 East US Highway 95, Yuma, AZ 85365',
    latitude: 32.67,
    longitude: -114.51,
  },
  {
    slug: 'friendly-acres',
    name: 'Friendly Acres RV Resort',
    type: 'family-park',
    city: 'Yuma',
    description: 'Multi-use facility with 385 total spaces (115 MH + 260 RV).',
    audience: 'Families and RV enthusiasts seeking mixed-use living.',
    address: '2779 W. 8th Street, Yuma, Arizona 85364',
    latitude: 32.71,
    longitude: -114.68,
  },
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return NEIGHBORHOODS.find((n) => n.slug === slug);
}

export function getNeighborhoodsByType(type: 'neighborhood' | 'rv-park' | 'family-park'): Neighborhood[] {
  return NEIGHBORHOODS.filter((n) => n.type === type);
}

export function getNeighborhoodsByCity(city: string): Neighborhood[] {
  return NEIGHBORHOODS.filter((n) => n.city === city);
}
