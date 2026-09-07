import { ArrowRight, Check, Clock, MapPin } from 'lucide-react';
import { bookingUrl, SiteFooter, SiteHeader } from '@/components/site-chrome';

export type ServicePageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  answerTitle: string;
  answer: string;
  outcomes: string[];
  formats: Array<{
    name: string;
    duration: string;
    price: string;
    description: string;
  }>;
  questions: Array<{ question: string; answer: string }>;
};

export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <>
      <SiteHeader />
      <main className="inner-page service-page">
        <section className="inner-hero">
          <div className="inner-hero-copy">
            <nav className="breadcrumb" aria-label="Fil d’Ariane">
              <a href="/">Accueil</a><span aria-hidden="true">/</span><span>Accompagnements</span>
            </nav>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
            <div className="inner-actions">
              <a className="primary-link-cta" href={bookingUrl}>
                Prendre rendez-vous <ArrowRight aria-hidden="true" />
              </a>
              <a className="text-link" href="/tarifs-acces">
                Voir les tarifs
              </a>
            </div>
          </div>
          <aside className="service-summary" aria-label="Informations pratiques">
            <p className="eyebrow light">En bref</p>
            <div><MapPin aria-hidden="true" /><span>Cabinet à Besançon</span></div>
            <div><Clock aria-hidden="true" /><span>Séances de 60 à 90 minutes</span></div>
            <div><Check aria-hidden="true" /><span>Consultation à distance possible</span></div>
          </aside>
        </section>

        <section className="answer-section inner-section">
          <p className="eyebrow">Comprendre</p>
          <div>
            <h2>{content.answerTitle}</h2>
            <p>{content.answer}</p>
          </div>
        </section>

        <section className="outcomes-section inner-section">
          <div>
            <p className="eyebrow light">Ce que nous cherchons</p>
            <h2>Retrouver une marge de choix là où la réaction était devenue automatique.</h2>
          </div>
          <ul>
            {content.outcomes.map((outcome) => (
              <li key={outcome}><Check aria-hidden="true" />{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="formats-section inner-section">
          <div className="inner-section-heading">
            <p className="eyebrow">Formats &amp; tarifs</p>
            <h2>Choisir un cadre adapté à votre situation.</h2>
          </div>
          <div className="format-grid">
            {content.formats.map((format) => (
              <article className="format-card" key={format.name}>
                <p className="format-duration">{format.duration}</p>
                <h3>{format.name}</h3>
                <p>{format.description}</p>
                <strong>{format.price}</strong>
              </article>
            ))}
          </div>
          <p className="student-note">Tarif étudiant et apprenti : –20 % sur présentation d’un justificatif.</p>
        </section>

        <section className="service-faq inner-section">
          <div className="inner-section-heading">
            <p className="eyebrow">Réponses directes</p>
            <h2>Questions fréquentes sur cet accompagnement.</h2>
          </div>
          <div className="details-list">
            {content.questions.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="inner-final-cta">
          <p className="eyebrow light">Au cabinet ou à distance</p>
          <h2>Parlons de ce qui résiste aujourd’hui — et de ce qui pourrait changer.</h2>
          <a className="light-link-cta" href={bookingUrl}>
            Consulter les disponibilités <ArrowRight aria-hidden="true" />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
