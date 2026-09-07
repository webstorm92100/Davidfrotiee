import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'David Frotiée — Hypnothérapie à Besançon',
  description:
    'Une approche rationnelle et humaine pour retrouver de la liberté face au tabac, aux compulsions, au stress et aux blocages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
