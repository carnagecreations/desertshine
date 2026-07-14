import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import { SITE } from '@/lib/site';
import './globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-display' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — House & Office Cleaning in Yuma, AZ`,
    template: `%s — ${SITE.name}`,
  },
  description:
    'Licensed, insured house and office cleaning in Yuma, Arizona. Flat-rate pricing, same-week availability, and a 100% re-clean guarantee. Get a free quote in 60 seconds.',
  keywords: [
    'house cleaning Yuma AZ', 'maid service Yuma', 'office cleaning Yuma',
    'deep cleaning Yuma Arizona', 'move out cleaning Yuma', 'cleaning service near me',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE.name,
    title: `${SITE.name} — House & Office Cleaning in Yuma, AZ`,
    description: 'Flat-rate cleaning with a 100% re-clean guarantee. Serving Yuma, Fortuna Foothills, Somerton, and the surrounding valley.',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HouseCleaningService' as const,
  name: SITE.name,
  telephone: SITE.phone,
  email: SITE.email,
  url: SITE.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yuma',
    addressRegion: 'AZ',
    postalCode: '85364',
    addressCountry: 'US',
  },
  areaServed: SITE.serviceAreas.map((a) => ({ '@type': 'City', name: `${a}, AZ` })),
  openingHours: 'Mo-Sa 07:00-18:00',
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <SmoothScroll>
            <Navigation />
            {children}
          </SmoothScroll>
        </MotionConfig>
      </body>
    </html>
  );
}
