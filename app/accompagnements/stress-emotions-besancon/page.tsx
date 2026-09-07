import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { stressContent } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hypnose pour le stress et les émotions à Besançon',
  description: 'Accompagnement par l’hypnose à Besançon ou en téléconsultation pour le stress, la charge mentale et les émotions envahissantes.',
};

export default function StressPage() {
  return <ServicePage content={stressContent} />;
}
