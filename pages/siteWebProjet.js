import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteWebProjetPage() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (src) => {
    setFullscreenImage(src);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <Head>
        <title>
          Projet : Site E-commerce Statique (HTML/CSS) - Nicolas Joué
        </title>
        <meta
          name="description"
          content="Création d'un site e-commerce statique pour une marque fictive, réalisé en HTML et CSS dans le cadre d'un projet de première année."
        />
      </Head>

      <section className="project-page-content">
        <h1>Site E-commerce &quot;Ambition Foot&quot;</h1>
        <p className="project-subtitle">
          Projet Fondamental de Développement Web
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique (1ère année)
          </div>
          <div>
            <strong>Technologies :</strong> HTML5, CSS3
          </div>
          <div>
            <strong>Objectif :</strong> Maîtriser les bases du développement web
            front-end.
          </div>
          <div>
            <strong>Focus :</strong> Structure sémantique, mise en page CSS
            classique.
          </div>
        </div>

        <h2>Contexte et Objectifs</h2>
        <p>
          Ce projet a été ma toute première incursion dans le développement web.
          L&apos;objectif était de construire un site complet de A à Z en
          utilisant uniquement HTML et CSS, afin de comprendre en profondeur les
          mécanismes de base de la structuration de contenu et de la mise en
          page. J&apos;ai créé une marque fictive, &quot;Ambition Foot&quot;, et
          développé son site e-commerce statique.
        </p>

        <h3>Fonctionnalités du Site</h3>
        <ul>
          <li>
            <strong>Identité de Marque Complète :</strong> Création du nom
            &quot;Ambition Foot&quot; et d&apos;un logo.
          </li>
          <li>
            <strong>Catalogue de Produits :</strong> Pages dédiées pour les
            maillots et les posters, présentés en grille.
          </li>
          <li>
            <strong>Navigation Multi-pages :</strong> Structure complète avec
            pages d&apos;accueil, produits, promotions et contact.
          </li>
          <li>
            <strong>Page Contact :</strong> Inclut une carte Google Maps
            intégrée et des informations de contact.
          </li>
          <li>
            <strong>Éléments Interactifs (Design) :</strong> Intégration
            d&apos;un module de feedback et d&apos;une simulation de processus
            de paiement.
          </li>
        </ul>

        <h2>Galerie d&apos;Images</h2>
        <p>Cliquez sur les images pour les afficher en plein écran.</p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/ambition-foot-accueil.png")}
          >
            <Image
              src="/ambition-foot-accueil.png"
              alt="Page d'accueil du site"
              width={500}
              height={375}
            />
            <figcaption>Page d&apos;accueil</figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/ambition-foot-maillots.png")}
          >
            <Image
              src="/ambition-foot-maillots.png"
              alt="Page catalogue des maillots"
              width={500}
              height={375}
            />
            <figcaption>Page catalogue (Maillots)</figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/ambition-foot-posters.png")}
          >
            <Image
              src="/ambition-foot-posters.png"
              alt="Page catalogue des posters"
              width={500}
              height={375}
            />
            <figcaption>Page catalogue (Posters)</figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/ambition-foot-contact.png")}
          >
            <Image
              src="/ambition-foot-contact.png"
              alt="Page de contact"
              width={500}
              height={375}
            />
            <figcaption>Page de contact</figcaption>
          </figure>
        </div>

        <h2>Approche Technique : HTML & CSS Purs</h2>
        <p>
          Ce projet a été entièrement réalisé en <strong>HTML5</strong> et{" "}
          <strong>CSS3</strong>, sans aucun framework ni JavaScript, afin de me
          concentrer sur les fondamentaux.
        </p>

        <h3>Structure HTML Sémantique</h3>
        <p>
          J&apos;ai utilisé une structure sémantique avec des balises comme{" "}
          <code>{"<header>"}</code>, <code>{"<nav>"}</code>, et{" "}
          <code>{"<footer>"}</code> pour organiser le contenu. La navigation et
          le pied de page sont reproduits sur toutes les pages pour garantir une
          expérience utilisateur unifiée et cohérente.
        </p>
        <pre>
          <code>{`<!-- Extrait de la structure de index.html -->
<body>
  <div id="conteneur">
    <header>
      {/* Logo et icônes panier/profil */}
    </header>
    <nav>
      {/* Menu de navigation principal */}
    </nav>
    <hr />
    <section class="premier_bloc">
      {/* Contenu principal de la page */}
    </section>
    {/* ... autres sections ... */}
    <footer>
      {/* Liens, réseaux sociaux et copyright */}
    </footer>
  </div>
</body>`}</code>
        </pre>

        <h3>Styling CSS Classique</h3>
        <p>
          La mise en page a été réalisée avec des techniques CSS fondamentales
          comme <code>float</code> pour la disposition en colonnes et le{" "}
          <strong>positionnement absolu</strong> pour placer précisément
          certains éléments.
        </p>

        <h2>Défis et Apprentissages</h2>
        <ul>
          <li>
            <strong>La Mise en Page en CSS :</strong> Le plus grand défi a été
            de maîtriser le modèle de boîtes (box model), les flottants et le
            positionnement pour créer une mise en page complexe et cohérente
            sans les outils modernes comme Flexbox ou Grid. C&apos;était un
            excellent exercice pour comprendre le fonctionnement fondamental du
            CSS.
          </li>
          <li>
            <strong>Cohérence entre les Pages :</strong> Assurer que le header,
            la navigation et le footer soient identiques sur toutes les pages
            m&apos;a appris l&apos;importance de la réutilisation du code et
            d&apos;une structure de projet bien organisée.
          </li>
          <li>
            <strong>Design et Expérience Utilisateur :</strong> Au-delà du code,
            ce projet m&apos;a initié à la réflexion sur l&apos;expérience
            utilisateur : comment guider le visiteur, où placer les appels à
            l&apos;action, et comment créer une identité visuelle qui a du sens.
          </li>
        </ul>

        <h2>Potentielles Améliorations (avec mes compétences actuelles)</h2>
        <ul>
          <li>
            <strong>Responsive Design :</strong> La priorité serait de le rendre
            entièrement adaptatif avec <strong>Flexbox</strong> et{" "}
            <strong>CSS Grid</strong>.
          </li>
          <li>
            <strong>Interactivité :</strong> J&apos;ajouterais du{" "}
            <strong>JavaScript</strong> pour rendre les filtres et le panier
            fonctionnels.
          </li>
          <li>
            <strong>Architecture Moderne :</strong> Je le reconstruirais avec un
            framework comme <strong>React/Next.js</strong> pour une gestion
            dynamique du contenu.
          </li>
        </ul>

        <div className="project-navigation">
          <Link href="/projects" className="cta-button secondary">
            ← Retour à la liste des projets
          </Link>
        </div>
      </section>

      {fullscreenImage && (
        <div className="fullscreenOverlay" onClick={closeFullscreen}>
          <Image
            src={fullscreenImage}
            alt="Vue plein écran"
            className="fullscreenContent"
            width={1200}
            height={800}
          />
        </div>
      )}
    </>
  );
}
