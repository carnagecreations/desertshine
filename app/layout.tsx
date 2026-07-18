import type { Metadata } from 'next';
import Script from 'next/script';
import { Sora, Inter } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import StickyPhoneButton from '@/components/StickyPhoneButton';
import { SITE } from '@/lib/site';
import { organizationSchema, servicesSchema, websiteSchema } from '@/lib/schema';
import './globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

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
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE.name,
    title: `${SITE.name} — House & Office Cleaning in Yuma, AZ`,
    description: 'Flat-rate house and office cleaning with a 100% re-clean guarantee. Professional service across Yuma County.',
    url: SITE.url,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Clean Convictions — House & Office Cleaning in Yuma, AZ',
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
  manifest: '/site.webmanifest',
  // NOTE: no root canonical — a layout-level canonical pointing at SITE.url
  // makes every page without its own canonical claim to BE the homepage,
  // which tells Google to ignore those pages. Each page sets its own.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <meta httpEquiv="content-language" content="en-us" />
        <meta name="geo.region" content="US-AZ" />
        <meta name="geo.placename" content="Yuma" />
        <meta name="geo.position" content="32.6927;-114.6277" />
        <meta name="ICBM" content="32.6927, -114.6277" />
        <meta name="theme-color" content="#0d3b5c" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <StickyPhoneButton />
        {/* Google Analytics (GA4) — loads after page is interactive to protect mobile speed */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE.gaId}');
          `}
        </Script>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--ink)] focus:px-5 focus:py-3 focus:text-white">
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <SmoothScroll>
            <Navigation />
            <div id="main-content" className="contents">
              {children}
            </div>
          </SmoothScroll>
        </MotionConfig>
      </body>
    </html>
  );
}
