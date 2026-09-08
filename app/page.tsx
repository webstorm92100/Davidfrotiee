'use client';

import {
  ArrowDownRight,
  ArrowRight,
  Check,
  MapPin,
  Minus,
  Monitor,
  Quote,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { bookingUrl, SiteFooter, SiteHeader } from '@/components/site-chrome';

const needs = [
  {
    number: '01',
    title: 'Je veux arrêter de fumer',
    description:
      'Ne plus organiser mes journées autour d’une cigarette — sans vivre chaque envie comme un combat.',
    href: '/accompagnements/arret-tabac-besancon',
  },
  {
    number: '02',
    title: 'Je veux apaiser mon rapport à l’alimentation',
    description:
      'Sortir du cycle envie, contrôle et culpabilité pour retrouver une relation plus simple avec mon corps.',
    href: '/accompagnements/alimentation-poids-besancon',
  },
  {
    number: '03',
    title: 'Je veux retrouver mon calme',
    description:
      'Ne plus laisser la charge mentale ou le stress prendre toute la place, même quand la pression monte.',
    href: '/accompagnements/stress-emotions-besancon',
  },
  {
    number: '04',
    title: 'Je veux avancer avec plus d’assurance',
    description:
      'Pouvoir parler, décider et agir sans être retenu par le trac, le doute ou d’anciens réflexes.',
    href: '/accompagnements/confiance-examens-besancon',
  },
];

const supports = [
  {
    label: 'Tabac & dépendances',
    title: 'Retrouver une vie où ne pas fumer redevient naturel.',
    detail: 'Séance intensive ou accompagnement renforcé selon votre besoin.',
    href: '/accompagnements/arret-tabac-besancon',
  },
  {
    label: 'Alimentation & poids émotionnel',
    title: 'Pouvoir écouter votre corps sans négocier avec vous-même toute la journée.',
    detail: 'Compulsions, sucre, satiété et comportements de compensation.',
    href: '/accompagnements/alimentation-poids-besancon',
  },
  {
    label: 'Stress & émotions',
    title: 'Retrouver du calme lorsque tout semble demander trop d’énergie.',
    detail: 'Charge mentale, surmenage et réactions émotionnelles envahissantes.',
    href: '/accompagnements/stress-emotions-besancon',
  },
  {
    label: 'Confiance & situations à enjeu',
    title: 'Faire ce que vous savez faire, sans que la pression décide à votre place.',
    detail: 'Prise de parole, examens, concours et affirmation de soi.',
    href: '/accompagnements/confiance-examens-besancon',
  },
];

const faqItems = [
  {
    question: 'Est-ce que je vais perdre le contrôle ?',
    answer:
      'Non. L’accompagnement se déroule dans l’échange et le respect de votre rythme. Vous restez présent, libre de parler et d’interrompre à tout moment.',
  },
  {
    question: 'Est-ce adapté si je suis plutôt sceptique ?',
    answer:
      'L’approche ne vous demande pas de “croire” à l’hypnose. David explique ce qu’il propose, répond à vos questions et construit la séance avec vous, de manière concrète.',
  },
  {
    question: 'Combien de séances faut-il prévoir ?',
    answer:
      'Le format dépend de votre situation. Certaines demandes peuvent faire l’objet d’une séance ciblée de 1 h 30 ; d’autres sont proposées sous forme d’un programme de trois séances.',
  },
  {
    question: 'Puis-je consulter à distance ?',
    answer:
      'Oui. Les accompagnements sont proposés au cabinet du Pôle Santé Apoteca à Besançon ou en téléconsultation.',
  },
];

const googleReviewsUrl =
  'https://www.google.com/search?q=David+Froti%C3%A9e+hypnoth%C3%A9rapeute+Besan%C3%A7on&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_5hwkuSnvqAoQbZlqMWedEBmZmWQib2FEGoCGxGu9wfUfJJWNFXgywfwbIifZ073I_NhVeg%3D';

const googleReviews = [
  {
    author: 'Adrien T.',
    date: 'Mars 2025',
    rating: 5,
    text: 'Très bonne expérience, avec de bons résultats et des changements dès la première séance. Encore merci.',
  },
  {
    author: 'Frédérique D.',
    date: 'Février 2025',
    rating: 5,
    text: 'Un excellent professionnel, avec un contact parfait comme ses séances. Je recommande à 100 %.',
  },
  {
    author: 'Christine P.',
    date: 'Février 2025',
    rating: 5,
    text: 'Une séance en douceur, très relaxante, avec des résultats positifs dès la première séance.',
  },
  {
    author: 'Jean-Philippe L.',
    date: 'Novembre 2024',
    rating: 5,
    text: 'Très professionnel et à l’écoute, avec un accompagnement calme et serein vers l’arrêt de cette addiction.',
  },
  {
    author: 'Olivier M.',
    date: 'Octobre 2024',
    rating: 5,
    text: 'Un grand merci à David.',
  },
].filter((review) => review.rating >= 4);

export default function Home() {
  const goToBooking = () => {
    window.location.href = bookingUrl;
  };

  const goTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Hypnothérapeute à Besançon · au cabinet &amp; à distance</p>
          <h1>
            Vous savez ce que vous voulez changer.
            <em> Pourtant, quelque chose résiste.</em>
          </h1>
          <p className="hero-intro">
            Tabac, alimentation, stress, confiance… Je vous accompagne pour
            retrouver une liberté de choix, sans vous battre davantage contre
            vous-même.
          </p>

          <div className="hero-actions">
            <Button className="primary-cta" onClick={goToBooking}>
              Prendre rendez-vous
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              className="secondary-cta"
              onClick={() => goTo('#approche')}
            >
              Découvrir mon approche
              <ArrowDownRight aria-hidden="true" />
            </Button>
          </div>

          <p className="assurance">
            Une approche rationnelle, humaine et sans mystification.
          </p>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src="/david-frotiee-portrait.png"
              alt="David Frotiée, hypnothérapeute à Besançon"
            />
          </div>
          <div className="portrait-note">
            <span>David Frotiée</span>
            <p>Hypnothérapeute</p>
          </div>
        </div>

        <a className="scroll-cue" href="#besoins">
          Se reconnaître
          <ArrowDownRight aria-hidden="true" />
        </a>
      </section>

      <section className="recognition section" id="besoins">
        <div className="section-heading two-column-heading">
          <div>
            <p className="eyebrow">Peut-être vous reconnaîtrez-vous ici</p>
            <h2>Quand la volonté ne suffit plus.</h2>
          </div>
          <p className="heading-aside">
            Vous avez probablement déjà essayé de vous raisonner, de vous
            contrôler ou de faire autrement. Le problème n’est pas toujours de
            savoir quoi faire. C’est de réussir à ne plus reproduire ce que vous
            ne voulez plus.
          </p>
        </div>

        <div className="needs-list">
          {needs.map((need) => (
            <a className="need-row" href={need.href} key={need.number}>
              <span className="need-number">{need.number}</span>
              <h3>{need.title}</h3>
              <p>{need.description}</p>
              <ArrowDownRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="philosophy" id="approche">
        <div className="philosophy-index" aria-hidden="true">I</div>
        <div className="philosophy-copy">
          <p className="eyebrow light">Une autre manière d’envisager le changement</p>
          <h2>Changer ne signifie pas forcément se battre davantage contre soi.</h2>
          <div className="philosophy-body">
            <p>
              Un comportement peut avoir eu une utilité, devenir automatique,
              puis ne plus nous convenir. Ce n’est ni une faiblesse ni un manque
              de volonté.
            </p>
            <p>
              Le travail consiste alors à comprendre ce qui entretient la
              situation et à retrouver de la liberté — plutôt qu’à exercer encore
              plus de contrôle.
            </p>
          </div>
          <div className="signature-line">
            <Minus aria-hidden="true" />
            <span>David Frotiée</span>
          </div>
        </div>
        <blockquote>
          « L’hypnose est un outil. Ce que nous cherchons ensemble, c’est votre
          capacité à choisir à nouveau. »
        </blockquote>
      </section>

      <section className="supports section" id="accompagnements">
        <div className="section-heading two-column-heading">
          <div>
            <p className="eyebrow">Les accompagnements</p>
            <h2>Hypnose à Besançon : quatre accompagnements ciblés.</h2>
          </div>
          <p className="heading-aside">
            Quatre portes d’entrée concrètes, une même intention : rendre le
            changement plus naturel et vous permettre de retrouver de
            l’autonomie.
          </p>
        </div>

        <div className="support-grid">
          {supports.map((support, index) => (
            <article className="support-card" key={support.label}>
              <span className="support-index">0{index + 1}</span>
              <p className="support-label">{support.label}</p>
              <h3>{support.title}</h3>
              <p className="support-detail">{support.detail}</p>
              <a className="support-link" href={support.href}>
                Découvrir cet accompagnement <ArrowRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="method section">
        <div className="method-intro">
          <p className="eyebrow">Ce qui se passe réellement</p>
          <h2>Comment se déroule un accompagnement en hypnose&nbsp;?</h2>
          <p>
            La technique reste présente, mais elle vient soutenir votre parcours
            — elle ne vous demande pas d’en devenir l’expert.
          </p>
        </div>

        <ol className="method-steps">
          <li>
            <span>01</span>
            <div>
              <h3>Comprendre ce qui se passe pour vous</h3>
              <p>
                Nous partons de votre expérience, de vos déclencheurs et de ce
                que vous souhaitez réellement voir changer.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Travailler sur ce qui entretient la situation</h3>
              <p>
                L’hypnose permet d’aborder autrement les automatismes et les
                réactions devenus trop présents.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Retrouver votre autonomie</h3>
              <p>
                Le changement vise à devenir plus simple à vivre, avec moins de
                lutte et davantage de choix au quotidien.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="reviews section" aria-labelledby="reviews-title">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">Avis Google</p>
            <h2 id="reviews-title">Leur expérience, avec leurs mots.</h2>
          </div>
          <div className="reviews-summary" aria-label="Note de 5 sur 5">
            <strong>5,0</strong>
            <div>
              <div className="review-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} />
                ))}
              </div>
              <span>5 avis Google</span>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {googleReviews.map((review) => (
            <article className="review-card" key={`${review.author}-${review.date}`}>
              <div className="review-card-top">
                <Quote aria-hidden="true" />
                <div className="review-stars" aria-label={`${review.rating} étoiles sur 5`}>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} aria-hidden="true" />
                  ))}
                </div>
              </div>
              <blockquote>« {review.text} »</blockquote>
              <footer>
                <strong>{review.author}</strong>
                <span>{review.date} · Avis Google</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="reviews-actions">
          <a
            className="reviews-link"
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Consulter tous les avis sur Google
            <ArrowRight aria-hidden="true" />
          </a>
          <Button variant="outline" className="secondary-cta" onClick={goToBooking}>
            Voir si cet accompagnement me correspond
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </section>

      <section className="about" id="david">
        <div className="about-image">
          <img
            src="/cabinet-david-frotiee.jpg"
            alt="Le cabinet de David Frotiée au Pôle Santé Apoteca à Besançon"
          />
          <div className="location-card">
            <MapPin aria-hidden="true" />
            <div>
              <span>Au cabinet</span>
              <p>Pôle Santé Apoteca · Besançon</p>
            </div>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">David Frotiée</p>
          <h2>David Frotiée, hypnothérapeute à Besançon.</h2>
          <p className="about-lead">
            Je conçois l’accompagnement comme un espace de travail calme,
            précis et profondément humain.
          </p>
          <p>
            Vous n’avez rien à prouver et aucune performance à réussir. Mon rôle
            est d’écouter ce qui se joue pour vous, de l’expliquer clairement et
            de vous proposer un chemin adapté — au cabinet comme à distance.
          </p>

          <ul>
            <li><Check aria-hidden="true" /> Une approche collaborative et sans jugement</li>
            <li><Check aria-hidden="true" /> Des explications accessibles à chaque étape</li>
            <li><Check aria-hidden="true" /> Un accompagnement centré sur votre autonomie</li>
          </ul>

          <Button variant="outline" className="secondary-cta" onClick={() => goTo('#rendez-vous')}>
            Découvrir le cadre des séances
            <ArrowDownRight aria-hidden="true" />
          </Button>
        </div>
      </section>

      <section className="faq section">
        <div className="faq-heading">
          <p className="eyebrow">Questions fréquentes</p>
          <h2>Questions fréquentes sur l’hypnose et les séances.</h2>
          <p>
            Quelques réponses simples pour vous permettre de décider sereinement.
          </p>
        </div>

        <Accordion className="faq-list">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={item.question}>
              <AccordionTrigger className="faq-trigger">
                <span>0{index + 1}</span>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="faq-content">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="final-cta" id="rendez-vous">
        <div className="final-cta-copy">
          <p className="eyebrow light">Faire un premier pas</p>
          <h2>Vous souhaitez voir si cet accompagnement correspond à votre situation ?</h2>
          <p>
            Au cabinet à Besançon ou en téléconsultation. Choisissez le format
            qui vous convient et consultez les disponibilités.
          </p>
          <Button className="light-cta" onClick={goToBooking}>
            Prendre rendez-vous
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>

        <div className="final-cta-details">
          <div>
            <MapPin aria-hidden="true" />
            <span>Cabinet</span>
            <p>Pôle Santé Apoteca<br />Besançon</p>
          </div>
          <div>
            <Monitor aria-hidden="true" />
            <span>À distance</span>
            <p>Téléconsultation<br />depuis chez vous</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
