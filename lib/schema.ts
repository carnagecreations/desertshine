import { SITE } from './site';
import { REVIEWS, aggregateRating } from './reviews';

const rating = aggregateRating();
const sameAs = Object.values(SITE.social).filter(Boolean);

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/clean-conviction-logo.webp`,
  image: `${SITE.url}/opengraph-image`,
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
  priceRange: 'From $89',
  ...(sameAs.length ? { sameAs } : {}),
  // aggregateRating + review are emitted ONLY when lib/reviews.ts has real
  // entries — never fabricated (fake review markup risks a manual action).
  ...(rating
    ? {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: rating.ratingValue,
          reviewCount: rating.reviewCount,
        },
        review: REVIEWS.map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.name },
          reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
          reviewBody: r.quote,
          datePublished: r.date,
        })),
      }
    : {}),
};

// WebSite schema — helps Google display the site name correctly in results.
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { '@id': `${SITE.url}#organization` },
};

export const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Recurring Home Cleaning',
    description: 'Weekly, bi-weekly, or monthly residential cleaning service with the same cleaner every visit.',
    provider: { '@type': 'LocalBusiness', '@id': `${SITE.url}#organization`, name: SITE.name, url: SITE.url },
    areaServed: SITE.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
    priceRange: 'from $89',
    url: `${SITE.url}/services/house-cleaning`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Deep Cleaning Service',
    description: 'Seasonal deep cleaning including baseboards, blinds, vents, grout, and inside appliances.',
    provider: { '@type': 'LocalBusiness', '@id': `${SITE.url}#organization`, name: SITE.name, url: SITE.url },
    areaServed: SITE.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
    priceRange: 'from $179',
    url: `${SITE.url}/services/deep-cleaning`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Move-In / Move-Out Cleaning',
    description: 'Landlord inspection-ready cleaning for rental turnover, deposits, and listing prep.',
    provider: { '@type': 'LocalBusiness', '@id': `${SITE.url}#organization`, name: SITE.name, url: SITE.url },
    areaServed: SITE.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
    priceRange: 'from $199',
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

// Shared homepage FAQ content — rendered visibly on the homepage AND used to build
// the FAQPage schema, so structured data always matches on-page content.
export const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does cleaning cost in Yuma?',
    a: 'Recurring house cleaning starts at $89 per visit for compact homes, with a typical 1,500 sq ft home around $129. Deep cleaning starts at $179 and move-out cleaning at $199. Every home gets an exact flat quote before we book — never a surprise after.',
  },
  {
    q: 'Do you clean on evenings or weekends?',
    a: 'Yes. We schedule around you — mornings, evenings, or weekends — so cleaning never disrupts your day or your business.',
  },
  {
    q: 'Do I need to be home during cleaning?',
    a: 'No. Most recurring clients give us a garage code or lockbox key, and we lock up when we leave.',
  },
  {
    q: 'Do you bring your own supplies?',
    a: 'Yes — all cleaning supplies and equipment are included. Prefer a specific product for your home? Leave it out and we\'ll use it.',
  },
  {
    q: 'What if something isn\'t cleaned right?',
    a: 'Tell us within 24 hours and we come back and re-clean it free. That\'s the guarantee, no fine print.',
  },
  {
    q: 'How do recurring discounts work?',
    a: 'Weekly saves 20%, bi-weekly 15%, and monthly 10% off the standard rate — starting from the first recurring visit.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'All of Yuma County at the same flat rates, with no travel fee: Yuma, Fortuna Foothills, Somerton, San Luis, Wellton, and Winterhaven.',
  },
  {
    q: 'Are your cleaning products safe for pets?',
    a: 'Yes — we offer pet-safe cleaning with zero-VOC, non-toxic products. We\'re experienced with all animals, from horses to reptiles, and we\'ll tell you exactly which products we use in your home.',
  },
  {
    q: 'Do you offer a military discount?',
    a: 'Yes. Active duty and veterans get 10% off every cleaning — we just ask to verify at the time of cleaning.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
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
