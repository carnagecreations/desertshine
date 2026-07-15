export interface Neighborhood {
  slug: string;
  name: string;
  type: 'neighborhood' | 'rv-park' | 'family-park';
  city: string;
  description: string;
  audience: string;
  latitude?: number;
  longitude?: number;
}

export const NEIGHBORHOODS: Neighborhood[] = [
  // Neighborhoods
  { slug: 'araby', name: 'Araby', type: 'neighborhood', city: 'Yuma', description: 'Established neighborhood in Yuma.', audience: 'Families and professionals in Yuma.', latitude: 32.69, longitude: -114.63 },
  { slug: 'barkley-ranch', name: 'Barkley Ranch', type: 'neighborhood', city: 'Yuma', description: 'Suburban neighborhood development.', audience: 'Families seeking suburban living.', latitude: 32.71, longitude: -114.59 },
  { slug: 'cielo-verde', name: 'Cielo Verde', type: 'neighborhood', city: 'Yuma', description: 'Planned community in Yuma.', audience: 'Residents seeking planned community amenities.', latitude: 32.68, longitude: -114.60 },
  { slug: 'college-park', name: 'College Park', type: 'neighborhood', city: 'Yuma', description: 'Neighborhood near Yuma area.', audience: 'College students and young professionals.', latitude: 32.73, longitude: -114.63 },
  { slug: 'country-roads-neighborhood', name: 'Country Roads', type: 'neighborhood', city: 'Yuma', description: 'Suburban development community.', audience: 'Families seeking suburban lifestyle.', latitude: 32.70, longitude: -114.60 },
  { slug: 'cresta-gila-estates', name: 'Cresta Gila Estates', type: 'neighborhood', city: 'Yuma', description: 'Residential estates community.', audience: 'Homeowners seeking quality estates.', latitude: 32.67, longitude: -114.62 },
  { slug: 'desert-ridge', name: 'Desert Ridge', type: 'neighborhood', city: 'Yuma', description: 'Desert-view residential community.', audience: 'Families seeking desert living.', latitude: 32.69, longitude: -114.61 },
  { slug: 'foothills-neighborhood', name: 'Foothills', type: 'neighborhood', city: 'Yuma', description: 'Foothills area residential community.', audience: 'Residents seeking elevated living.', latitude: 32.68, longitude: -114.62 },
  { slug: 'las-barrancas', name: 'Las Barrancas', type: 'neighborhood', city: 'Yuma', description: 'Established community neighborhood.', audience: 'Diverse families and professionals.', latitude: 32.72, longitude: -114.64 },
  { slug: 'mesa-del-sol-neighborhood', name: 'Mesa Del Sol', type: 'neighborhood', city: 'Yuma', description: 'Upscale foothills development.', audience: 'Affluent families seeking premium living.', latitude: 32.68, longitude: -114.62 },
  { slug: 'ocotillo', name: 'Ocotillo', type: 'neighborhood', city: 'Yuma', description: 'Desert-themed residential area.', audience: 'Desert lifestyle enthusiasts.', latitude: 32.66, longitude: -114.60 },
  { slug: 'old-world-village', name: 'Old World Village', type: 'neighborhood', city: 'Yuma', description: 'European-inspired community.', audience: 'Residents seeking unique architecture.', latitude: 32.70, longitude: -114.61 },
  { slug: 'parkway-place', name: 'Parkway Place', type: 'neighborhood', city: 'Yuma', description: 'Urban residential neighborhood.', audience: 'Urban dwellers and professionals.', latitude: 32.74, longitude: -114.63 },
  { slug: 'picacho-village', name: 'Picacho Village', type: 'neighborhood', city: 'Yuma', description: 'Village-style residential community.', audience: 'Families seeking village ambiance.', latitude: 32.65, longitude: -114.61 },
  { slug: 'sunset-mesa', name: 'Sunset Mesa', type: 'neighborhood', city: 'Yuma', description: 'Mesa-view residential development.', audience: 'Nature-loving homeowners.', latitude: 32.67, longitude: -114.59 },
  { slug: 'vista-del-valle', name: 'Vista del Valle', type: 'neighborhood', city: 'Yuma', description: 'Valley-view residential area.', audience: 'Families seeking valley views.', latitude: 32.71, longitude: -114.62 },
  { slug: 'yuma-foothills', name: 'Yuma Foothills', type: 'neighborhood', city: 'Yuma', description: 'Foothills residential community.', audience: 'Upscale homeowners.', latitude: 32.68, longitude: -114.61 },
  { slug: 'araby-acres-neighborhood', name: 'Araby Acres', type: 'neighborhood', city: 'Yuma', description: 'Residential acres development.', audience: 'Families with acreage preference.', latitude: 32.69, longitude: -114.63 },
  { slug: 'barkley-ranch-north', name: 'Barkley Ranch North', type: 'neighborhood', city: 'Yuma', description: 'Northern Barkley Ranch development.', audience: 'Growing families.', latitude: 32.72, longitude: -114.59 },
  { slug: 'barkley-ranch-south', name: 'Barkley Ranch South', type: 'neighborhood', city: 'Yuma', description: 'Southern Barkley Ranch development.', audience: 'Residential homeowners.', latitude: 32.70, longitude: -114.59 },
  { slug: 'ceres-gardens', name: 'Ceres Gardens', type: 'neighborhood', city: 'Yuma', description: 'Garden-themed neighborhood.', audience: 'Gardening enthusiasts.', latitude: 32.71, longitude: -114.64 },
  { slug: 'chaparral-neighborhood', name: 'Chaparral', type: 'neighborhood', city: 'Yuma', description: 'Desert shrub-inspired community.', audience: 'Desert living enthusiasts.', latitude: 32.68, longitude: -114.60 },
  { slug: 'coronado-estates', name: 'Coronado Estates', type: 'neighborhood', city: 'Yuma', description: 'Spanish colonial-style estates.', audience: 'Affluent homeowners.', latitude: 32.70, longitude: -114.62 },
  { slug: 'desert-palms-neighborhood', name: 'Desert Palms', type: 'neighborhood', city: 'Yuma', description: 'Palm tree-lined community.', audience: 'Desert paradise seekers.', latitude: 32.69, longitude: -114.61 },
  { slug: 'east-yuma', name: 'East Yuma', type: 'neighborhood', city: 'Yuma', description: 'Eastern Yuma residential area.', audience: 'Convenient location seekers.', latitude: 32.73, longitude: -114.55 },
  { slug: 'fairgrounds-area', name: 'Fairgrounds Area', type: 'neighborhood', city: 'Yuma', description: 'Near fairgrounds community.', audience: 'Event-minded residents.', latitude: 32.71, longitude: -114.66 },
  { slug: 'gila-ridge', name: 'Gila Ridge', type: 'neighborhood', city: 'Yuma', description: 'Ridge-view residential community.', audience: 'Mountain view lovers.', latitude: 32.66, longitude: -114.62 },
  { slug: 'glendale-heights', name: 'Glendale Heights', type: 'neighborhood', city: 'Yuma', description: 'Heights-area neighborhood.', audience: 'Homeowners seeking elevation.', latitude: 32.75, longitude: -114.63 },
  { slug: 'granite-hills', name: 'Granite Hills', type: 'neighborhood', city: 'Yuma', description: 'Rocky hills community.', audience: 'Nature enthusiasts.', latitude: 32.67, longitude: -114.58 },
  { slug: 'heritage-estates', name: 'Heritage Estates', type: 'neighborhood', city: 'Yuma', description: 'Historic-style residential estates.', audience: 'History-conscious buyers.', latitude: 32.71, longitude: -114.61 },
  { slug: 'highland-park', name: 'Highland Park', type: 'neighborhood', city: 'Yuma', description: 'Park-area neighborhood.', audience: 'Family-oriented residents.', latitude: 32.72, longitude: -114.62 },
  { slug: 'indian-palms', name: 'Indian Palms', type: 'neighborhood', city: 'Yuma', description: 'Established residential community.', audience: 'Families seeking established neighborhoods.', latitude: 32.70, longitude: -114.60 },
  { slug: 'la-paz', name: 'La Paz', type: 'neighborhood', city: 'Yuma', description: 'Quiet residential neighborhood.', audience: 'Residents seeking peaceful living.', latitude: 32.69, longitude: -114.65 },
  { slug: 'las-quintas', name: 'Las Quintas', type: 'neighborhood', city: 'Yuma', description: 'Established residential community.', audience: 'Families and homeowners.', latitude: 32.68, longitude: -114.64 },
  { slug: 'loma-linda', name: 'Loma Linda', type: 'neighborhood', city: 'Yuma', description: 'Hillside residential community.', audience: 'Hill view enthusiasts.', latitude: 32.72, longitude: -114.65 },
  { slug: 'maven-park', name: 'Maven Park', type: 'neighborhood', city: 'Yuma', description: 'Park-centered development.', audience: 'Park-close families.', latitude: 32.71, longitude: -114.63 },
  { slug: 'mesa-verde-neighborhood', name: 'Mesa Verde', type: 'neighborhood', city: 'Yuma', description: 'Green mesa community.', audience: 'Residents seeking mature landscaping.', latitude: 32.67, longitude: -114.61 },
  { slug: 'monte-vista', name: 'Monte Vista', type: 'neighborhood', city: 'Yuma', description: 'Mountain view development.', audience: 'Vista lovers.', latitude: 32.68, longitude: -114.59 },
  { slug: 'north-frontage', name: 'North Frontage', type: 'neighborhood', city: 'Yuma', description: 'Northern frontage area.', audience: 'Commute-convenient residents.', latitude: 32.76, longitude: -114.62 },
  { slug: 'palm-shadows', name: 'Palm Shadows', type: 'neighborhood', city: 'Yuma', description: 'Shaded palm tree community.', audience: 'Shade-seeking families.', latitude: 32.70, longitude: -114.61 },
  { slug: 'parkview', name: 'Parkview', type: 'neighborhood', city: 'Yuma', description: 'Park-view residential area.', audience: 'Park access seekers.', latitude: 32.71, longitude: -114.62 },
  { slug: 'pena-blanca', name: 'Peña Blanca', type: 'neighborhood', city: 'Yuma', description: 'Established desert neighborhood.', audience: 'Residents seeking desert charm.', latitude: 32.69, longitude: -114.63 },
  { slug: 'rancho-del-sol', name: 'Rancho Del Sol', type: 'neighborhood', city: 'Yuma', description: 'Ranch-style residential development.', audience: 'Ranch lifestyle lovers.', latitude: 32.67, longitude: -114.60 },
  { slug: 'riverfront-neighborhood', name: 'Riverfront', type: 'neighborhood', city: 'Yuma', description: 'Colorado River-area community.', audience: 'Waterfront living seekers.', latitude: 32.74, longitude: -114.68 },
  { slug: 'saguaro-estates', name: 'Saguaro Estates', type: 'neighborhood', city: 'Yuma', description: 'Saguaro cactus estates.', audience: 'Desert plant enthusiasts.', latitude: 32.68, longitude: -114.62 },
  { slug: 'santa-clara', name: 'Santa Clara', type: 'neighborhood', city: 'Yuma', description: 'Established residential neighborhood.', audience: 'Families seeking a quiet setting.', latitude: 32.70, longitude: -114.64 },
  { slug: 'shady-acres-neighborhood', name: 'Shady Acres', type: 'neighborhood', city: 'Yuma', description: 'Tree-shaded residential acres.', audience: 'Tree-loving families.', latitude: 32.69, longitude: -114.61 },
  { slug: 'skyline', name: 'Skyline', type: 'neighborhood', city: 'Yuma', description: 'Skyline-view development.', audience: 'Sky-view enthusiasts.', latitude: 32.71, longitude: -114.60 },
  { slug: 'south-yuma', name: 'South Yuma', type: 'neighborhood', city: 'Yuma', description: 'Southern Yuma residential area.', audience: 'South-side residents.', latitude: 32.65, longitude: -114.63 },
  { slug: 'stoneridge', name: 'Stoneridge', type: 'neighborhood', city: 'Yuma', description: 'Stone ridge development.', audience: 'Solid construction seekers.', latitude: 32.68, longitude: -114.59 },
  { slug: 'sundown-estates', name: 'Sundown Estates', type: 'neighborhood', city: 'Yuma', description: 'Sunset-viewing estates.', audience: 'Sunset lovers.', latitude: 32.67, longitude: -114.61 },
  { slug: 'sunridge', name: 'Sunridge', type: 'neighborhood', city: 'Yuma', description: 'Sun-ridge community.', audience: 'Sunny location seekers.', latitude: 32.69, longitude: -114.62 },
  { slug: 'sunrise-park', name: 'Sunrise Park', type: 'neighborhood', city: 'Yuma', description: 'Sunrise-viewing park area.', audience: 'Early risers.', latitude: 32.72, longitude: -114.61 },
  { slug: 'tierra-del-sol', name: 'Tierra Del Sol', type: 'neighborhood', city: 'Yuma', description: 'Land of the sun development.', audience: 'Sun seekers.', latitude: 32.68, longitude: -114.61 },
  { slug: 'twin-palms', name: 'Twin Palms', type: 'neighborhood', city: 'Yuma', description: 'Double palm tree community.', audience: 'Tropical living enthusiasts.', latitude: 32.70, longitude: -114.61 },
  { slug: 'west-yuma', name: 'West Yuma', type: 'neighborhood', city: 'Yuma', description: 'Western Yuma residential area.', audience: 'West-side residents.', latitude: 32.69, longitude: -114.67 },
  { slug: 'wildwood-neighborhood', name: 'Wildwood', type: 'neighborhood', city: 'Yuma', description: 'Wooded residential community.', audience: 'Nature seekers.', latitude: 32.68, longitude: -114.60 },

  // RV Parks & Resorts
  { slug: 'adobe-village-rv-park', name: 'Adobe Village RV Park', type: 'rv-park', city: 'Yuma', description: 'Adobe-style RV community.', audience: '55+ retirees and RV enthusiasts.', latitude: 32.68, longitude: -114.61 },
  { slug: 'arizona-west-rv-park', name: 'Arizona West RV Park', type: 'rv-park', city: 'Yuma', description: '55+ retirement and senior RV resort with full amenities.', audience: '55+ retirees and seasonal snowbirds.', latitude: 32.66, longitude: -114.54 },
  { slug: 'araby-acres-rv-resort', name: 'Araby Acres RV Resort', type: 'rv-park', city: 'Yuma', description: 'Spacious acres RV resort.', audience: 'Full-hookup RV travelers.', latitude: 32.69, longitude: -114.63 },
  { slug: 'bonita-mesa-rv-resort', name: 'Bonita Mesa RV Resort', type: 'rv-park', city: 'Yuma', description: 'Beautiful mesa RV resort.', audience: 'Scenic view seekers.', latitude: 32.67, longitude: -114.61 },
  { slug: 'cactus-gardens-rv-resort', name: 'Cactus Gardens RV Resort', type: 'rv-park', city: 'Yuma', description: 'Cactus-garden RV retreat.', audience: 'Desert landscape lovers.', latitude: 32.68, longitude: -114.60 },
  { slug: 'capri-rv-resort', name: 'Capri RV Resort', type: 'rv-park', city: 'Yuma', description: 'Mediterranean-style RV resort.', audience: 'Luxury RV seekers.', latitude: 32.69, longitude: -114.62 },
  { slug: 'caravan-oasis-rv-resort', name: 'Caravan Oasis RV Resort', type: 'rv-park', city: 'Yuma', description: 'Oasis-themed RV community.', audience: 'Desert travelers.', latitude: 32.71, longitude: -114.61 },
  { slug: 'carefree-village-resort', name: 'Carefree Village Resort', type: 'rv-park', city: 'Yuma', description: 'Carefree RV lifestyle.', audience: 'Retired travelers.', latitude: 32.70, longitude: -114.62 },
  { slug: 'cocopah-bend-rv-golf', name: 'Cocopah Bend RV & Golf Resort', type: 'rv-park', city: 'Yuma', description: '55+ golf RV resort.', audience: 'Golfing retirees.', latitude: 32.67, longitude: -114.59 },
  { slug: 'country-roads', name: 'Country Roads', type: 'rv-park', city: 'Yuma', description: 'Large RV park serving active adults and seasonal snowbirds.', audience: '55+ active adults and seasonal snowbirds.', latitude: 32.70, longitude: -114.60 },
  { slug: 'del-pueblo-rv-resort', name: 'Del Pueblo RV Resort', type: 'rv-park', city: 'Yuma', description: '55+ community with RV and Park Model home options.', audience: '55+ retirees choosing between RV and park model living.', latitude: 32.60, longitude: -114.62 },
  { slug: 'desert-holiday-rv-resort', name: 'Desert Holiday RV Resort', type: 'rv-park', city: 'Yuma', description: 'Holiday-themed desert resort.', audience: 'Vacation-minded RVers.', latitude: 32.68, longitude: -114.62 },
  { slug: 'desert-paradise-rv-resort', name: 'Desert Paradise RV Resort', type: 'rv-park', city: 'Yuma', description: 'Paradise RV living.', audience: 'Winter escape seekers.', latitude: 32.70, longitude: -114.60 },
  { slug: 'foothills-village-rv-resort', name: 'Foothills Village RV Resort', type: 'rv-park', city: 'Yuma', description: 'Village-style foothills RV resort.', audience: 'Scenic RV enthusiasts.', latitude: 32.68, longitude: -114.62 },
  { slug: 'fortuna-de-oro', name: 'Fortuna de Oro', type: 'rv-park', city: 'San Luis', description: '1,200-site 55+ golf RV park and retirement community.', audience: '55+ golfers and active adults.', latitude: 32.48, longitude: -114.77 },
  { slug: 'friendly-acres-rv-park', name: 'Friendly Acres RV Park', type: 'rv-park', city: 'Yuma', description: 'Multi-use RV and mobile home facility since 1971.', audience: 'Families and RV enthusiasts.', latitude: 32.71, longitude: -114.68 },
  { slug: 'gila-mountain-rv-park', name: 'Gila Mountain RV Park', type: 'rv-park', city: 'Yuma', description: 'Mountain-view RV park.', audience: 'Nature-loving RVers.', latitude: 32.66, longitude: -114.62 },
  { slug: 'hidden-cove-rv-park', name: 'Hidden Cove RV Park', type: 'rv-park', city: 'Yuma', description: 'Secluded cove RV park.', audience: 'Privacy-seeking RVers.', latitude: 32.69, longitude: -114.61 },
  { slug: 'kofa-koop', name: 'Kofa Ko Op', type: 'rv-park', city: 'Yuma', description: 'Kofa cooperative RV park.', audience: 'Co-op community members.', latitude: 32.65, longitude: -114.58 },
  { slug: 'mesa-verde-rv-resort', name: 'Mesa Verde RV Resort', type: 'rv-park', city: 'Yuma', description: 'Green mesa RV resort.', audience: 'Eco-conscious RVers.', latitude: 32.67, longitude: -114.61 },
  { slug: 'og-rv-resort', name: 'OG RV Resort', type: 'rv-park', city: 'Yuma', description: 'Original RV resort.', audience: 'Classic RV travelers.', latitude: 32.68, longitude: -114.61 },
  { slug: 'orchard-gardens', name: 'Orchard Gardens', type: 'rv-park', city: 'Yuma', description: '126-unit shareholder-owned 55+ gated cooperative.', audience: '55+ cooperative members and retirees.', latitude: 32.73, longitude: -114.61 },
  { slug: 'rancho-rialto', name: 'Rancho Rialto', type: 'rv-park', city: 'Yuma', description: '55+ pet-friendly RV resort with walled and gated security.', audience: 'Pet-friendly 55+ retirees and active adults.', latitude: 32.62, longitude: -114.61 },
  { slug: 'riverfront-rv-park', name: 'Riverfront RV Park', type: 'rv-park', city: 'Yuma', description: 'Colorado River RV park.', audience: 'Waterfront RV seekers.', latitude: 32.74, longitude: -114.68 },
  { slug: 'rocking-k-rv-park', name: 'RocKing K RV Park', type: 'rv-park', city: 'Yuma', description: 'Relaxed-pace RV park.', audience: 'Relaxation-focused RVers.', latitude: 32.70, longitude: -114.61 },
  { slug: 'southern-mesa-rv-park', name: 'Southern Mesa RV Park', type: 'rv-park', city: 'Yuma', description: 'South mesa RV park.', audience: 'Value-conscious RVers.', latitude: 32.65, longitude: -114.61 },
  { slug: 'suni-sands-rv-resort', name: 'Suni Sands RV Resort', type: 'rv-park', city: 'Yuma', description: 'Sunny sands RV resort.', audience: 'Beach-loving RVers.', latitude: 32.68, longitude: -114.60 },
  { slug: 'the-palms-rv-resort', name: 'The Palms RV Resort', type: 'rv-park', city: 'Yuma', description: '453-lot 55+ resort with Villas, Casitas, and RV spaces.', audience: 'Active senior RVers.', latitude: 32.64, longitude: -114.63 },
  { slug: 'villa-alameda-rv-resort', name: 'Villa Alameda RV Resort', type: 'rv-park', city: 'Yuma', description: 'Villa-style RV resort.', audience: 'Luxury RV travelers.', latitude: 32.70, longitude: -114.61 },
  { slug: 'westwind-rv-golf-resort', name: 'Westwind RV & Golf Resort', type: 'rv-park', city: 'Yuma', description: 'Golf RV resort.', audience: 'Golfing RV enthusiasts.', latitude: 32.70, longitude: -114.62 },
  { slug: 'yuma-lakes-rv-resort', name: 'Yuma Lakes RV Resort', type: 'rv-park', city: 'Yuma', description: 'Lake-view RV resort.', audience: 'Water-activity RVers.', latitude: 32.72, longitude: -114.61 },

  // Mobile Home / Family Parks
  { slug: 'buckeye-trails-mhp', name: 'Buckeye Trails Mobile Home & RV Park', type: 'family-park', city: 'Yuma', description: 'Trails-themed mixed-use community.', audience: 'Families and RV owners.', latitude: 32.70, longitude: -114.62 },
  { slug: 'chaparral-mhp', name: 'Chaparral Mobile Home Park', type: 'family-park', city: 'Yuma', description: 'Desert shrub manufactured housing community.', audience: 'Affordable living seekers.', latitude: 32.68, longitude: -114.60 },
  { slug: 'country-breeze-mhp', name: 'Country Breeze Mobile Home Park', type: 'family-park', city: 'Yuma', description: 'Breeze-filled mobile home park.', audience: 'Budget-conscious families.', latitude: 32.69, longitude: -114.64 },
  { slug: 'coyote-ranch-mhc', name: 'Coyote Ranch Manufactured Home Community', type: 'family-park', city: 'Yuma', description: 'Western-themed manufactured housing community.', audience: 'Western-living families.', latitude: 32.70, longitude: -114.61 },
  { slug: 'desert-palms-mobile-estates', name: 'Desert Palms Mobile Estates', type: 'family-park', city: 'Yuma', description: 'Palm-shaded mobile home estates.', audience: 'Families seeking tropical charm.', latitude: 32.69, longitude: -114.61 },
  { slug: 'el-prado-estates', name: 'El Prado Estates', type: 'family-park', city: 'Yuma', description: 'Established mobile home estates.', audience: 'Families seeking affordable estates.', latitude: 32.69, longitude: -114.63 },
  { slug: 'foothills-mobile-estates', name: 'Foothills Mobile Estates', type: 'family-park', city: 'Yuma', description: 'Elevated mobile home estates.', audience: 'Families seeking foothills views.', latitude: 32.68, longitude: -114.62 },
  { slug: 'friendly-acres', name: 'Friendly Acres RV Resort', type: 'family-park', city: 'Yuma', description: 'Multi-use facility with 385 total spaces since 1971.', audience: 'Families and RV enthusiasts seeking mixed-use community living.', latitude: 32.71, longitude: -114.68 },
  { slug: 'glenaire-mh-rv-park', name: 'Glenaire Mobile Home & RV Park', type: 'family-park', city: 'Yuma', description: 'Mixed mobile home and RV community.', audience: 'Mixed-tenure families.', latitude: 32.70, longitude: -114.61 },
  { slug: 'lazy-k', name: 'Lazy K', type: 'family-park', city: 'Yuma', description: 'Relaxed ranch-style community.', audience: 'Laid-back families.', latitude: 32.71, longitude: -114.61 },
  { slug: 'marble-manor', name: 'Marble Manor', type: 'family-park', city: 'Yuma', description: 'Established mobile home manor community.', audience: 'Families seeking a quality manufactured home community.', latitude: 32.70, longitude: -114.62 },
  { slug: 'melody-mobile-court', name: 'Melody Mobile Court', type: 'family-park', city: 'Yuma', description: 'Established mobile home court.', audience: 'Families seeking community living.', latitude: 32.72, longitude: -114.63 },
  { slug: 'mountain-cactus-ranch', name: 'Mountain Cactus Ranch', type: 'family-park', city: 'Yuma', description: 'Mountain-view ranch community.', audience: 'Ranch lifestyle enthusiasts.', latitude: 32.67, longitude: -114.59 },
  { slug: 'shady-acres-mhc', name: 'Shady Acres Manufactured Home and RV Community', type: 'family-park', city: 'Yuma', description: 'Tree-shaded manufactured home community.', audience: 'Mixed-living families.', latitude: 32.69, longitude: -114.61 },
  { slug: 'sierra-pacific', name: 'Sierra Pacific', type: 'family-park', city: 'Yuma', description: 'Family-oriented manufactured housing community with 272 home sites since 1985.', audience: 'Families seeking affordable manufactured home living.', latitude: 32.67, longitude: -114.51 },
  { slug: 'westward-village', name: 'Westward Village', type: 'family-park', city: 'Yuma', description: 'Western-themed manufactured home village.', audience: 'Western-loving families.', latitude: 32.69, longitude: -114.67 },
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
