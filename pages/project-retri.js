import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RetriPage() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <>
      <Head>
        <title>Projet ReTri : Web App de Tri Gamifiée - Nicolas Joué</title>
        <meta
          name="description"
          content="Analyse détaillée du projet ReTri, une application web full-stack développée en Java (Servlets/JSP) et PostgreSQL. Un projet axé sur la gamification et la gestion de projet en conditions réelles."
        />
      </Head>

      <section className="project-page-content">
        <h1>
          Application Web &quot;ReTri&quot; : Gamification et Suivi Client
        </h1>
        <p className="project-subtitle">
          Projet Full-Stack avec Gestion de Projet et Relation Client
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique (6 mois)
          </div>
          <div>
            <strong>Client :</strong> Viveris
          </div>
          <div>
            <strong>Technologies :</strong> Java (Servlet/JSP), AJAX,
            PostgreSQL, Figma
          </div>
          <div>
            <strong>Rôle :</strong> Développeur Full-Stack
          </div>
        </div>

        <h2>Contexte et Objectifs</h2>
        <p>
          Ce projet académique de 6 mois a été mené en conditions
          professionnelles simulées pour un client, la société{" "}
          <a
            href="https://www.viveris.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Viveris</strong>
          </a>
          . L&apos;objectif était de répondre à un cahier des charges précis :
          développer une{" "}
          <strong>
            application web pour simplifier et encourager le tri des déchets
            grâce à la gamification
          </strong>
          .
        </p>
        <p>
          Structurée comme une véritable équipe de développement (cheffe de
          projet, lead dev, et quatre développeurs), notre groupe a dû appliquer
          une gestion de projet rigoureuse, tenir des réunions client régulières
          et utiliser des outils collaboratifs.
        </p>

        <h3>Démonstration Vidéo</h3>
        <div className="video-container">
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src="https://www.youtube.com/embed/2dB72cuFaEo?si=_stDR43SOsXbgMzP"
            title="YouTube video player - Démo ReTri"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <h2>Fonctionnalités Clés de l&apos;Application</h2>
        <ul>
          <li>
            <strong>Identification des déchets :</strong> Scan de code-barres
            via la caméra ou recherche manuelle.
          </li>
          <li>
            <strong>Mini-jeu de tri :</strong> Interface ludique pour choisir la
            bonne poubelle et apprendre les règles de tri.
          </li>
          <li>
            <strong>Système de Gamification :</strong> Gain de points d&apos;XP
            et de monnaie virtuelle pour monter de niveau et débloquer des
            récompenses.
          </li>
          <li>
            <strong>Classement par Coupes :</strong> Un système de ligues avec
            promotion et relégation pour maintenir l&apos;engagement.
          </li>
          <li>
            <strong>Profil Utilisateur Complet :</strong> Suivi de la
            progression, historique, favoris et personnalisation.
          </li>
        </ul>

        <h2>Environnement Technique et Architecture</h2>
        <p>
          L&apos;application est une{" "}
          <strong>Single Page Application (SPA)</strong> développée en{" "}
          <strong>Java (Servlet/JSP)</strong> avec une architecture{" "}
          <strong>MVC</strong>. Le dynamisme de l&apos;interface est assuré par{" "}
          <strong>AJAX</strong>, et les données sont gérées dans une base{" "}
          <strong>PostgreSQL</strong> via le pattern <strong>DAO</strong>.
        </p>
        <p>
          Le choix d&apos;une <strong>application web</strong>, par opposition à
          une application native, s&apos;est imposé pour garantir une
          accessibilité universelle (ordinateur et mobile) et pour répondre à la
          contrainte technique du <strong>certificat SSL (HTTPS)</strong>,
          obligatoire pour autoriser l&apos;accès à la caméra.
        </p>

        <h2>Ma Contribution en tant que Développeur Full-Stack</h2>
        <p>
          En tant que développeur full-stack, mon rôle a été polyvalent.
          J&apos;ai commencé par la conception (diagrammes UML, maquettes
          Figma), puis je me suis concentré sur le développement de trois
          modules majeurs.
        </p>

        <h3>1. Le Profil Utilisateur : un hub personnalisable</h3>
        <p>
          J&apos;ai développé l&apos;intégralité du pop-up de profil, un
          véritable tableau de bord pour l&apos;utilisateur. Il permet non
          seulement de visualiser sa progression (niveau, XP, points), mais
          aussi de :
        </p>
        <ul>
          <li>
            <strong>Personnaliser son expérience</strong> en choisissant son
            titre et son thème parmi ceux débloqués.
          </li>
          <li>
            Donner un <strong>feedback</strong> sur l&apos;application via un
            système de notes et de commentaires.
          </li>
          <li>
            Accéder aux fonctions de gestion de compte (déconnexion,
            suppression).
          </li>
          <li>
            Passer en <strong>mode administrateur</strong> si l&apos;utilisateur
            dispose des droits.
          </li>
        </ul>
        <div className="project-image-gallery gallery-ui-screenshots">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/retri-profil.png")}
          >
            <Image
              src="/retri-profil.png"
              alt="Interface du profil utilisateur"
              width={700}
              height={450}
            />
            <figcaption>
              Le pop-up de profil, centralisant la personnalisation et la
              gestion du compte.
            </figcaption>
          </figure>
        </div>

        <h3>
          2. Le Système de Classement : une logique algorithmique complexe
        </h3>
        <p>
          J&apos;ai conçu et implémenté toute la mécanique des classements, un
          des piliers de la gamification. L&apos;enjeu principal était de créer
          un système juste et motivant, capable de gérer dynamiquement les
          joueurs en fin de saison.
        </p>
        <p>
          Cela a nécessité le développement d&apos;un{" "}
          <strong>algorithme de répartition complexe</strong>. Le défi
          n&apos;était pas seulement de créer des groupes, mais de les rendre
          les plus <strong>équilibrés possible</strong>. Par exemple, pour 25
          joueurs, l&apos;algorithme évite de créer des groupes de 10, 10 et 5,
          et privilégie une répartition plus juste comme 9, 8 et 8 joueurs. Cet
          algorithme gère automatiquement :
        </p>
        <ul>
          <li>
            L&apos;<strong>attribution des récompenses</strong> (points et
            titres) aux trois premiers de chaque classement.
          </li>
          <li>
            La <strong>promotion</strong> du premier joueur de chaque groupe
            vers la coupe supérieure et la <strong>relégation</strong> du
            dernier.
          </li>
          <li>
            Le <strong>&quot;brassage&quot;</strong> des joueurs et la création
            de nouveaux classements équilibrés pour la nouvelle saison,
            garantissant que chaque joueur se retrouve face à de nouveaux
            adversaires dans un groupe de taille juste.
          </li>
        </ul>

        <h3>3. Le Mode Administratif : des outils de gestion puissants</h3>
        <p>
          J&apos;ai développé le mode d&apos;administration pour permettre une
          gestion efficace de l&apos;application, incluant la modération des
          feedbacks et une fonctionnalité essentielle d&apos;
          <strong>export de données en CSV</strong> (table par table ou en
          archive ZIP complète).
        </p>
        <div className="project-image-gallery gallery-ui-screenshots">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/retri-admin.png")}
          >
            <Image
              src="/retri-admin.png"
              alt="Interface du mode d'administration"
              width={700}
              height={450}
            />
            <figcaption>
              La page de modération des commentaires, avec filtres et options de
              suppression.
            </figcaption>
          </figure>
        </div>

        <h2>Extraits de Code (Java)</h2>

        <h3>Algorithme de Création des Classements</h3>
        <pre>
          <code>{`// Extrait de MainServlet.java
case "createClassementsForAllCups":
    // ... (Attribution des récompenses) ...
    for (Cup cup : allCups) {
        List<User> nonPlaying = userDAO.selectNonPlayingCupUsers(cup.getCup_id());
        int N = nonPlaying.size();
        if (N == 0) continue;
        // Algorithme pour diviser N joueurs en groupes de 1 à 10
        int G_min = (int) Math.ceil((double) N / 10);
        // ... (logique de répartition pour trouver la meilleure taille) ...
        Collections.shuffle(nonPlaying);
        for (int i=0; i < bestG; i++) {
            // ... (création des places pour chaque joueur) ...
        }
    }
    break;`}</code>
        </pre>

        <h3>Export de Données en CSV</h3>
        <pre>
          <code>{`// Extrait de MainServlet.java
private String buildCsvForUsers(List<User> allUsers) {
    StringBuilder sb = new StringBuilder();
    sb.append("user_id;firstname;lastname;email;level;xp;points\\n");
    for (User u : allUsers) {
        sb.append(u.getUser_id()).append(";");
        // ... (ajout des autres champs) ...
        sb.append(u.getPoints()).append("\\n");
    }
    return sb.toString();
}`}</code>
        </pre>

        <h2>Bilan et Compétences Acquises</h2>
        <p>
          Ce projet a été une expérience très formatrice. Techniquement,
          j&apos;ai consolidé mes compétences en{" "}
          <strong>
            développement web Full-Stack avec l&apos;écosystème Java
          </strong>
          . Mais surtout, j&apos;ai appris à travailler efficacement en équipe,
          à communiquer avec un client pour comprendre et traduire ses besoins,
          et à suivre une{" "}
          <strong>méthodologie de gestion de projet rigoureuse</strong> pour
          livrer un produit fonctionnel et conforme aux attentes.
        </p>

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
