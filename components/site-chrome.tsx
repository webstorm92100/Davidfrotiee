import { ArrowRight, Menu as MenuIcon } from 'lucide-react';
import { CookiePreferencesButton } from '@/components/analytics-consent';

export const bookingUrl =
  'https://perfactive.fr/david-frotiee-hypnose-arret-tabac/david-frotiee/book';

export const serviceLinks = [
  {
    href: '/accompagnements/arret-tabac-besancon',
    label: 'Arrêt du tabac',
  },
  {
    href: '/accompagnements/alimentation-poids-besancon',
    label: 'Alimentation & poids',
  },
  {
    href: '/accompagnements/stress-emotions-besancon',
    label: 'Stress & émotions',
  },
  {
    href: '/accompagnements/confiance-examens-besancon',
    label: 'Confiance & examens',
  },
];

export function SiteHeader() {
  return (
    <header className="site-header site-header-inner">
      <a className="wordmark" href="/" aria-label="David Frotiée — Accueil">
        <span>David</span>
        <span>Frotiée</span>
      </a>

      <nav className="desktop-nav seo-nav" aria-label="Navigation principale">
        {serviceLinks.map((link) => (
          <a href={link.href} key={link.href}>{link.label}</a>
        ))}
        <a href="/tarifs-acces">Tarifs &amp; accès</a>
      </nav>

      <details className="mobile-menu">
        <summary aria-label="Ouvrir le menu de navigation">
          <MenuIcon aria-hidden="true" />
          <span className="sr-only">Menu</span>
        </summary>
        <nav aria-label="Navigation mobile">
          {serviceLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
          <a href="/tarifs-acces">Tarifs &amp; accès</a>
        </nav>
      </details>

      <a className="header-cta header-link-cta" href={bookingUrl}>
        <span className="header-cta-full">Prendre rendez-vous</span>
        <span className="header-cta-short">RDV</span>
        <ArrowRight aria-hidden="true" />
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <a className="wordmark footer-wordmark" href="/">
        <span>David</span>
        <span>Frotiée</span>
      </a>
      <div className="footer-address">
        <p>Cabinet d’hypnose — Pôle Santé Apoteca</p>
        <p>7 rue Madeleine Brès, 25000 Besançon</p>
        <p>
          L’hypnose est une pratique d’accompagnement complémentaire et ne se
          substitue pas à un avis ou à un traitement médical.
        </p>
      </div>
      <div className="footer-links">
        {serviceLinks.map((link) => (
          <a href={link.href} key={link.href}>{link.label}</a>
        ))}
        <a href="/tarifs-acces">Tarifs, accès &amp; contact</a>
        <a href="/mentions-legales">Mentions légales &amp; confidentialité</a>
        <CookiePreferencesButton />
      </div>
      <p className="footer-credit">
        Site réalisé par l’agence{' '}
        <a href="https://www.webstorm.fr" target="_blank" rel="noopener noreferrer">
          Webstorm
        </a>
      </p>
    </footer>
  );
}
