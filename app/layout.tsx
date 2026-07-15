import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import { SITE } from '@/lib/site';
import { organizationSchema, servicesSchema, faqSchema } from '@/lib/schema';
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
    'Professional house and office cleaning in Yuma, Arizona. Flat-rate pricing, same-week availability, 100% re-clean guarantee. Serving Yuma, Fortuna Foothills, Somerton, San Luis, Wellton, Winterhaven.',
  keywords: [
    'house cleaning Yuma AZ',
    'cleaning service Yuma Arizona',
    'maid service Yuma',
    'office cleaning Yuma',
    'deep cleaning Yuma',
    'move out cleaning Yuma',
    'professional cleaner near me',
    'residential cleaning Yuma',
    'commercial janitorial Yuma',
    'cleaning company Yuma County',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE.name,
    title: `${SITE.name} — House & Office Cleaning in Yuma, AZ`,
    description: 'Flat-rate house and office cleaning with a 100% re-clean guarantee. Professional service across Yuma County.',
    images: [
      {
        url: `${SITE.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Desert Shine Cleaning - Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Cleaning Services in Yuma, AZ`,
    description: 'Flat-rate pricing, same-week availability, 100% guarantee.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <meta httpEquiv="content-language" content="en-us" />
        <link rel="canonical" href={SITE.url} />
        <meta name="theme-color" content="#0d3b5c" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
