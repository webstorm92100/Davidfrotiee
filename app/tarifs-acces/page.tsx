import type { Metadata } from 'next';
import {
  ArrowRight,
  CalendarDays,
  Car,
  Clock,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  UsersRound,
} from 'lucide-react';
import { bookingUrl, SiteFooter, SiteHeader } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'Tarifs hypnose à Besançon',
  description:
    'Tarifs des séances d’hypnose de David Frotiée, adresse du cabinet au Pôle Santé Apoteca à Besançon, horaires, accès PMR et réservation.',
  alternates: { canonical: '/tarifs-acces/' },
  openGraph: {
    title: 'Tarifs hypnose à Besançon',
    description: 'Tarifs des séances d’hypnose de David Frotiée, adresse du cabinet au Pôle Santé Apoteca à Besançon, horaires, accès PMR et réservation.',
    url: '/tarifs-acces/',
  },
};

const rates = [
  ['Protocole renforcé tabac', '2 × 90 min + 1 h offerte', '250 €', '—', '200 €'],
  ['Programme équilibre & poids', '90 min + 2 × 60 min', '250 €', '—', '200 €'],
  ['Programme stress & émotions', '90 min + 2 × 60 min', '250 €', '—', '200 €'],
  ['Programme confiance & posture', '90 min + 2 × 60 min', '250 €', '—', '200 €'],
  ['Programme concours & examens', '90 min + 2 × 60 min', '250 €', '—', '200 €'],
  ['Séance directe ciblée', '1 × 90 min', '150 €', '100 €', '120 €'],
  ['Récupération & relaxation', '1 × 60 min', '80 €', '60 €', '64 €'],
];

export default function RatesPage() {
  const pageUrl = 'https://davidfrotiee.com/tarifs-acces/';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://davidfrotiee.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tarifs et accès au cabinet',
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main className="inner-page rates-page">
        <section className="rates-hero inner-hero">
          <div className="inner-hero-copy">
            <nav className="breadcrumb" aria-label="Fil d’Ariane">
              <a href="/">Accueil</a><span aria-hidden="true">/</span><span>Tarifs &amp; accès</span>
            </nav>
            <p className="eyebrow">Informations pratiques</p>
            <h1>Tarifs d’hypnose à Besançon et accès au cabinet.</h1>
            <p>
              Prix, formats, horaires et accès : tout ce qu’il vous faut pour
              organiser votre première séance sereinement.
            </p>
            <a className="primary-link-cta" href={bookingUrl}>
              Réserver une consultation <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <aside className="service-summary" aria-label="Coordonnées du cabinet">
            <p className="eyebrow light">Contact direct</p>
            <a href="tel:+33651279286"><Phone aria-hidden="true" /><span>06 51 27 92 86</span></a>
            <a href="mailto:davidfrotiee@gmail.com"><Mail aria-hidden="true" /><span>davidfrotiee@gmail.com</span></a>
            <div><MapPin aria-hidden="true" /><span>7 rue Madeleine Brès, Besançon</span></div>
          </aside>
        </section>

        <section className="rates-section inner-section">
          <div className="inner-section-heading rates-heading">
            <p className="eyebrow">Grille tarifaire</p>
            <h2>Des formats lisibles, annoncés avant la séance.</h2>
            <p>Les tarifs ci-dessous correspondent aux prestations actuellement proposées.</p>
          </div>

          <div className="rates-table-wrap">
            <table className="rates-table">
              <caption className="sr-only">Tarifs des séances d’hypnose de David Frotiée</caption>
              <thead>
                <tr>
                  <th scope="col">Prestation</th>
                  <th scope="col">Format</th>
                  <th scope="col">Individuel</th>
                  <th scope="col">Duo / pers.</th>
                  <th scope="col">Étudiant</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((rate) => (
                  <tr key={rate[0]}>
                    <th scope="row">{rate[0]}</th>
                    <td>{rate[1]}</td>
                    <td>{rate[2]}</td>
                    <td>{rate[3]}</td>
                    <td>{rate[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="payment-grid">
            <article>
              <ReceiptText aria-hidden="true" />
              <h3>Paiement en deux fois</h3>
              <p>Pour les programmes à 250 € : 150 € à la première séance, puis 100 € à la deuxième, sans frais.</p>
            </article>
            <article>
              <UsersRound aria-hidden="true" />
              <h3>Tarif étudiant</h3>
              <p>Réduction de 20 % pour les étudiants et apprentis sur présentation d’un justificatif.</p>
            </article>
            <article>
              <CalendarDays aria-hidden="true" />
              <h3>Facture nominative</h3>
              <p>Une facture peut être remise pour une éventuelle prise en charge selon votre forfait de mutuelle.</p>
            </article>
          </div>
        </section>

        <section className="access-section">
          <div className="access-image">
            <img
              src="/cabinet-jeune-homme.webp"
              alt="Jeune homme installé dans le fauteuil du cabinet de David Frotiée à Besançon"
              width="1195"
              height="896"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="access-copy">
            <p className="eyebrow">Adresse &amp; accès</p>
            <h2>Cabinet d’hypnose au Pôle Santé Apoteca.</h2>
            <address>
              7 rue Madeleine Brès<br />
              25000 Besançon
            </address>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=7+rue+Madeleine+Br%C3%A8s+25000+Besan%C3%A7on">
              Ouvrir l’itinéraire <ArrowRight aria-hidden="true" />
            </a>

            <div className="access-list">
              <div><Car aria-hidden="true" /><span>Parking gratuit au pied du bâtiment</span></div>
              <div><UsersRound aria-hidden="true" /><span>Accès PMR et ascenseur</span></div>
              <div><Clock aria-hidden="true" /><span>Espaces climatisés</span></div>
            </div>
          </div>
        </section>

        <section className="hours-section inner-section">
          <div>
            <p className="eyebrow">Horaires d’accueil</p>
            <h2>Des créneaux en journée, le midi et le samedi.</h2>
          </div>
          <dl>
            <div><dt>Du lundi au vendredi</dt><dd>9 h 30 – 19 h 00</dd></div>
            <div><dt>Samedi</dt><dd>9 h 30 – 17 h 00</dd></div>
            <div><dt>Téléconsultation</dt><dd>Selon les disponibilités</dd></div>
          </dl>
        </section>

        <section className="inner-final-cta">
          <p className="eyebrow light">Réserver</p>
          <h2>Choisissez votre accompagnement et consultez les prochains créneaux.</h2>
          <a className="light-link-cta" href={bookingUrl}>
            Prendre rendez-vous <ArrowRight aria-hidden="true" />
          </a>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
