import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { tobaccoContent } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hypnose pour arrêter de fumer à Besançon',
  description: 'Accompagnement par l’hypnose pour l’arrêt du tabac à Besançon ou à distance : séance ciblée, programme renforcé et tarifs.',
  alternates: { canonical: '/accompagnements/arret-tabac-besancon/' },
  openGraph: {
    title: 'Hypnose pour arrêter de fumer à Besançon',
    description: 'Accompagnement par l’hypnose pour l’arrêt du tabac à Besançon ou à distance : séance ciblée, programme renforcé et tarifs.',
    url: '/accompagnements/arret-tabac-besancon/',
  },
};

export default function TobaccoPage() {
  return <ServicePage content={tobaccoContent} />;
}
