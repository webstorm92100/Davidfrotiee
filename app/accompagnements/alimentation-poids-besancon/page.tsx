import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { foodContent } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hypnose, compulsions alimentaires et poids à Besançon',
  description: 'Hypnose à Besançon pour travailler les compulsions alimentaires, le sucre, la satiété et le poids émotionnel, sans régime imposé.',
};

export default function FoodPage() {
  return <ServicePage content={foodContent} />;
}
