import { SITE } from './site';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.webp`,
  image: `${SITE.url}/logo.webp`,
  slogan: 'No Compromise. No Dust.',
  description: 'Professional house and office cleaning services in Yuma, Arizona with flat-rate pricing, flexible scheduling, and a 100% re-clean guarantee.',
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yuma',
    addressRegion: 'AZ',
    postalCode: '85364',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.6927,
    longitude: -114.6277,
  },
  areaServed: SITE.serviceAreas.map((area) => ({
    '@type': 'City',
    name: area,
  })),
  knowsAbout: [
    'house cleaning',
    'deep cleaning',
    'move-out cleaning',
    'office cleaning',
    'janitorial services',
    'recurring maid service',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00',
    closes: '21:00',
  },
  priceRange: '$$',
  // NOTE: add aggregateRating + sameAs social links only once real reviews/profiles exist.
  // Fake review schema risks a Google manual action.
};

export const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Recurring Home Cleaning',
    description: 'Weekly, bi-weekly, or monthly residential cleaning service with the same cleaner every visit.',
    provider: { '@type': 'LocalBusiness', '@id': `${SITE.url}#organization`, name: SITE.name, url: SITE.url },
    areaServed: SITE.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
    priceRange: 'from $129',
    url: `${SITE.url}/services/house-cleaning`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Deep Cleaning Service',
    description: 'Seasonal deep cleaning including baseboards, blinds, vents, grout, and inside appliances.',
    provider: { '@type': 'LocalBusiness', '@id': `${SITE.url}#organization`, name: SITE.name, url: SITE.url },
    areaServed: SITE.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
    priceRange: 'from $249',
    url: `${SITE.url}/services/deep-cleaning`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Move-In / Move-Out Cleaning',
    description: 'Landlord inspection-ready cleaning for rental turnover, deposits, and listing prep.',
    provider: { '@type': 'LocalBusiness', '@id': `${SITE.url}#organization`, name: SITE.name, url: SITE.url },
    areaServed: SITE.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
    priceRange: 'from $299',
    url: `${SITE.url}/services/move-out-cleaning`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Office Cleaning',
    description: 'After-hours janitorial service for offices, clinics, and storefronts with custom schedules.',
    provider: { '@type': 'LocalBusiness', '@id': `${SITE.url}#organization`, name: SITE.name, url: SITE.url },
    areaServed: SITE.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
    priceRange: 'Custom',
    url: `${SITE.url}/services/office-cleaning`,
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are your prices final?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "from" price covers homes up to about 1,500 sq ft with 2 bathrooms. Larger homes get an exact flat quote before we book — never a surprise after.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be home during cleaning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Most recurring clients give us a garage code or lockbox key, and we lock up when we leave.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if something isn\'t cleaned right?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tell us within 24 hours and we come back and re-clean it free. That\'s the guarantee, no fine print.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do recurring discounts work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weekly saves 20%, bi-weekly 15%, and monthly 10% off the standard rate — starting from the first recurring visit.',
      },
    },
  ],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

// Service landing page schema. Pass a specific city to scope areaServed to a
// single locality (used by the /areas/[city]/[service] matrix pages).
export const serviceSchema = (opts: {
  name: string;
  description: string;
  url: string;
  price: string;
  serviceType?: string;
  city?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  serviceType: opts.serviceType ?? 'Cleaning service',
  description: opts.description,
  url: opts.url,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}#organization`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
  },
  areaServed: opts.city
    ? { '@type': 'City', name: opts.city }
    : SITE.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: opts.price,
    availability: 'https://schema.org/InStock',
  },
});

// FAQ schema from a plain list of Q/A pairs.
export const faqSchemaFrom = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

// HowTo schema for step-by-step guides (grout, haboob cleanup, etc.) — eligible
// for HowTo rich results in Google Search.
export const howToSchema = (opts: {
  name: string;
  description: string;
  url: string;
  steps: { name: string; text: string }[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: opts.name,
  description: opts.description,
  url: opts.url,
  step: opts.steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
});
