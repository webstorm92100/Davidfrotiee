import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { confidenceContent } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hypnose confiance et examens à Besançon',
  description: 'Hypnose à Besançon pour la confiance, l’affirmation de soi, le trac, les prises de parole, les concours et les examens.',
  alternates: { canonical: '/accompagnements/confiance-examens-besancon/' },
  openGraph: {
    title: 'Hypnose confiance et examens à Besançon',
    description: 'Hypnose à Besançon pour la confiance, l’affirmation de soi, le trac, les prises de parole, les concours et les examens.',
    url: '/accompagnements/confiance-examens-besancon/',
  },
};

export default function ConfidencePage() {
  return <ServicePage content={confidenceContent} />;
}
