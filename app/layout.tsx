import type { Metadata } from 'next';
import { AnalyticsConsent } from '@/components/analytics-consent';
import './globals.css';

const siteUrl = 'https://davidfrotiee.com';
const siteDescription =
  'Hypnothérapie à Besançon et à distance pour l’arrêt du tabac, les compulsions alimentaires, le stress, les émotions, la confiance et les examens.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'David Frotiée — Hypnothérapeute à Besançon',
  title: {
    default: 'Hypnothérapeute à Besançon | David Frotiée',
    template: '%s | David Frotiée',
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'David Frotiée — Hypnothérapeute à Besançon',
    title: 'Hypnothérapeute à Besançon | David Frotiée',
    description: siteDescription,
  },
  twitter: {
    card: 'summary',
    title: 'Hypnothérapeute à Besançon | David Frotiée',
    description: siteDescription,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'David Frotiée — Hypnothérapeute à Besançon',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#cabinet`,
      name: 'David Frotiée — Hypnothérapeute à Besançon',
      description: siteDescription,
      url: siteUrl,
      image: `${siteUrl}/david-frotiee-portrait.webp`,
      telephone: '+33651279286',
      email: 'davidfrotiee@gmail.com',
      priceRange: '80 € – 250 €',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7 rue Madeleine Brès',
        postalCode: '25000',
        addressLocality: 'Besançon',
        addressCountry: 'FR',
      },
      areaServed: {
        '@type': 'City',
        name: 'Besançon',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:30',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:30',
          closes: '17:00',
        },
      ],
      knowsAbout: [
        'Hypnose pour l’arrêt du tabac',
        'Hypnose et compulsions alimentaires',
        'Gestion du stress et des émotions',
        'Confiance en soi, trac et examens',
      ],
      founder: {
        '@id': `${siteUrl}/#david-frotiee`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#david-frotiee`,
      name: 'David Frotiée',
      jobTitle: 'Hypnothérapeute',
      image: `${siteUrl}/david-frotiee-portrait.webp`,
      url: siteUrl,
      worksFor: {
        '@id': `${siteUrl}/#cabinet`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <AnalyticsConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  );
}
