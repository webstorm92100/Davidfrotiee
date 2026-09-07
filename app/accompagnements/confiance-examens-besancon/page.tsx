import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { confidenceContent } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hypnose confiance, trac et examens à Besançon',
  description: 'Hypnose à Besançon pour la confiance, l’affirmation de soi, le trac, les prises de parole, les concours et les examens.',
};

export default function ConfidencePage() {
  return <ServicePage content={confidenceContent} />;
}
