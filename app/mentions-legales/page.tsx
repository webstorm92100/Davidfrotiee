import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'Mentions légales et politique de confidentialité',
  description:
    'Mentions légales, politique de confidentialité et gestion des cookies du site de David Frotiée, hypnothérapeute à Besançon.',
  alternates: { canonical: '/mentions-legales/' },
  openGraph: {
    title: 'Mentions légales et politique de confidentialité',
    description:
      'Informations sur l’éditeur, l’hébergement, la confidentialité et les cookies du site davidfrotiee.com.',
    url: '/mentions-legales/',
  },
};

export default function LegalPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page legal-page">
        <header className="legal-hero">
          <nav className="breadcrumb" aria-label="Fil d’Ariane">
            <a href="/">Accueil</a><span aria-hidden="true">/</span><span>Mentions légales</span>
          </nav>
          <p className="eyebrow">Informations légales</p>
          <h1>Mentions légales et politique de confidentialité.</h1>
          <p>Dernière mise à jour : 9 septembre 2026.</p>
        </header>

        <div className="legal-content">
          <section>
            <h2>Définitions</h2>
            <p><strong>Éditeur :</strong> personne qui édite les services de communication au public en ligne.</p>
            <p><strong>Site :</strong> le site accessible à l’adresse <a href="https://davidfrotiee.com">davidfrotiee.com</a>.</p>
            <p><strong>Utilisateur :</strong> toute personne consultant le Site.</p>
          </section>

          <section>
            <h2>Éditeur et directeur de la publication</h2>
            <p>
              Le Site est édité par <strong>David Frotiée</strong>, domicilié au 32 rue Principale, 25410 Berthelange, France. SIREN : 909 151 821.
            </p>
            <p>
              Téléphone : <a href="tel:+33651279286">06 51 27 92 86</a><br />
              Courriel : <a href="mailto:davidfrotiee@gmail.com">davidfrotiee@gmail.com</a>
            </p>
            <p>Le directeur de la publication est David Frotiée.</p>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>
              Le Site est hébergé par <strong>o2switch</strong>, SAS au capital de 100 000 €, Chemin des Pardiaux, 63000 Clermont-Ferrand, France, immatriculée au RCS de Clermont-Ferrand sous le numéro 510 909 807. Téléphone : 04 44 44 60 40.
            </p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>
            <p>
              Les textes, photographies, illustrations, éléments graphiques, sons et autres contenus présents sur le Site sont protégés par le droit de la propriété intellectuelle. Ils appartiennent à l’Éditeur ou sont utilisés avec l’autorisation de leurs titulaires, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, adaptation ou utilisation, totale ou partielle, sans autorisation écrite préalable est interdite, hors exceptions prévues par la loi et usage strictement privé.
            </p>
          </section>

          <section>
            <h2>Liens et services tiers</h2>
            <p>
              Le Site contient des liens vers des services gérés par des tiers. La prise de rendez-vous s’effectue notamment sur le site externe Perfactive : les informations saisies après avoir quitté davidfrotiee.com sont traitées par ce service selon ses propres conditions et sa propre politique de confidentialité.
            </p>
            <p>L’Éditeur ne peut être tenu responsable du contenu ou du fonctionnement des sites tiers.</p>
          </section>

          <section>
            <h2>Politique de confidentialité</h2>
            <h3>Données directement collectées</h3>
            <p>
              Le Site ne comporte ni formulaire de contact, ni création de compte, ni inscription à une lettre d’information. Il ne demande donc directement aucun nom, adresse électronique, numéro de téléphone ou information de santé.
            </p>
            <p>
              Si vous contactez volontairement David Frotiée par téléphone ou courriel, les informations que vous transmettez sont utilisées uniquement pour répondre à votre demande et gérer la relation correspondante. Elles ne sont pas collectées par le Site lui-même.
            </p>

            <h3>Données techniques d’hébergement</h3>
            <p>
              Comme tout service web, l’hébergeur peut traiter des journaux techniques nécessaires à la sécurité, au diagnostic et au bon fonctionnement du Site, tels que l’adresse IP, la date de connexion et les ressources consultées. Ces traitements relèvent des obligations techniques et légales de l’hébergeur.
            </p>

            <h3 id="cookies">Google Analytics et cookies de mesure d’audience</h3>
            <p>
              Avec votre consentement, le Site utilise Google Analytics 4, identifiant de mesure <strong>G-6SQT165TYX</strong>, afin d’obtenir des statistiques de fréquentation : pages consultées, durée et contexte technique de la visite, type d’appareil, navigateur et zone géographique approximative.
            </p>
            <p>
              Google Analytics n’est chargé qu’après un choix positif. Le refus n’empêche aucune fonctionnalité du Site. Les signaux Google et la personnalisation publicitaire sont désactivés dans la configuration du Site. Le traitement repose sur votre consentement, que vous pouvez retirer à tout moment avec le lien « Gérer les cookies » présent dans le pied de page.
            </p>
            <p>
              Votre choix, acceptation ou refus, est conservé pendant six mois. Les données associées à Google Analytics peuvent être conservées jusqu’à quatorze mois selon le paramétrage de la propriété. Google peut traiter certaines informations hors de l’Espace économique européen dans le cadre de ses garanties juridiques. Consultez les <a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">règles de confidentialité de Google</a>.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Selon la situation, vous disposez de droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité, ainsi que du droit de retirer votre consentement à tout moment.
            </p>
            <p>
              Pour exercer vos droits : <a href="mailto:davidfrotiee@gmail.com">davidfrotiee@gmail.com</a>. Une preuve d’identité pourra être demandée uniquement lorsque cela est nécessaire pour éviter une divulgation à un tiers.
            </p>
            <p>
              Vous pouvez également adresser une réclamation à la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">Commission nationale de l’informatique et des libertés (CNIL)</a>.
            </p>
          </section>

          <section>
            <h2>Modification de cette politique</h2>
            <p>
              Cette page peut être actualisée pour tenir compte d’une évolution du Site, des outils utilisés ou des obligations applicables. La date de mise à jour affichée en haut de page permet d’identifier la version en vigueur.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
