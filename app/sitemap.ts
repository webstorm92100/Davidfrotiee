import type { MetadataRoute } from 'next';

const siteUrl = 'https://davidfrotiee.com';
const lastModified = new Date('2026-09-09');

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/accompagnements/arret-tabac-besancon/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/accompagnements/alimentation-poids-besancon/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/accompagnements/stress-emotions-besancon/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/accompagnements/confiance-examens-besancon/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tarifs-acces/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/mentions-legales/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
