import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { foodContent } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hypnose et perte de poids à Besançon',
  description: 'Hypnose à Besançon pour travailler les compulsions alimentaires, le sucre, la satiété et le poids émotionnel, sans régime imposé.',
  alternates: { canonical: '/accompagnements/alimentation-poids-besancon/' },
  openGraph: {
    title: 'Hypnose et perte de poids à Besançon',
    description: 'Hypnose à Besançon pour travailler les compulsions alimentaires, le sucre, la satiété et le poids émotionnel, sans régime imposé.',
    url: '/accompagnements/alimentation-poids-besancon/',
  },
};

export default function FoodPage() {
  return <ServicePage content={foodContent} />;
}
