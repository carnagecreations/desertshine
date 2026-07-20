import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const revalidate = 3600;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
