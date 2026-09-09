import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://davidfrotiee.com'),
  title: {
    default: 'Hypnothérapeute à Besançon | David Frotiée',
    template: '%s | David Frotiée',
  },
  description:
    'Hypnothérapie à Besançon et à distance pour le tabac, les compulsions alimentaires, le stress, les émotions, la confiance et les examens.',
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'David Frotiée — Hypnothérapeute',
  url: 'https://davidfrotiee.com',
  telephone: '+33651279286',
  email: 'davidfrotiee@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 rue Madeleine Brès',
    postalCode: '25000',
    addressLocality: 'Besançon',
    addressCountry: 'FR',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6SQT165TYX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6SQT165TYX');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  );
}
