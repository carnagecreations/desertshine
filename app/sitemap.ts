import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { GUIDES } from '@/lib/guides';
import { SERVICES } from '@/lib/services';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/neighborhoods`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE.url}/services/breakdown`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/blog/professional-house-cleaning-checklist`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/book`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/pet-safe-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/community-care`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
  const neighborhoods: MetadataRoute.Sitemap = NEIGHBORHOODS.map((neighborhood) => ({
    url: `${SITE.url}/neighborhoods/${neighborhood.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));
  const blogs: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${SITE.url}/blog/${guide.slug}`,
    lastModified: new Date(guide.published),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  return [...core, ...services, ...neighborhoods, ...blogs];
}
