import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PcaFootballPage() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <>
      <Head>
        <title>
          Projet Data Science : Analyse PCA de Données Footballistiques -
          Nicolas Joué
        </title>
        <meta
          name="description"
          content="Analyse de profils de joueurs de football via une PCA en MATLAB, précédée d'un pré-traitement complet des données en Python."
        />
      </Head>

      <section className="project-page-content">
        <h1>Analyse PCA de Données Footballistiques</h1>
        <p className="project-subtitle">
          Projet de Data Science et de Réduction de Dimension
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique
          </div>
          <div>
            <strong>Technologies :</strong> Python (Pandas), MATLAB
          </div>
          <div>
            <strong>Concepts Clés :</strong> PCA, Feature Selection, Data
            Preprocessing
          </div>
          <div>
            <strong>Workflow :</strong> Pré-traitement (Python) → Analyse
            (MATLAB)
          </div>
        </div>

        <p>
          Ce projet académique est une exploration de l&apos;
          <strong>Analyse en Composantes Principales (PCA)</strong> appliquée à
          des statistiques de joueurs de football. Il constitue l&apos;analyse
          fondamentale qui a{" "}
          <strong>
            inspiré la création de mon projet personnel, le comparateur de
            profils de joueurs
          </strong>
          .
        </p>
        <p>
          Le projet s&apos;est déroulé en deux phases distinctes : un
          pré-traitement approfondi des données avec{" "}
          <strong>Python (Pandas)</strong>, suivi de l&apos;analyse et de la
          visualisation avec <strong>MATLAB</strong>.
        </p>

        <h2>Les Données : Radiographie Statistique d&apos;un Joueur</h2>
        <p>
          Pour cette analyse, j&apos;ai utilisé un dataset riche contenant les
          performances de joueurs de football. Chaque ligne représente un joueur
          unique (ex: Lionel Messi) et est associée à plus de 100 colonnes de
          statistiques décrivant son profil.
        </p>
        <h4>Exemples de variables clés utilisées :</h4>
        <ul>
          <li>
            <strong>Informations générales :</strong> Nom, club, pays, âge,
            position.
          </li>
          <li>
            <strong>Statistiques offensives :</strong> Buts, tirs, tirs cadrés,
            actions créatrices de tir (SCA).
          </li>
          <li>
            <strong>Statistiques de passes :</strong> Passes tentées, passes
            réussies, passes clés, passes progressives.
          </li>
          <li>
            <strong>Statistiques défensives :</strong> Tacles, interceptions,
            blocages, duels aériens gagnés.
          </li>
        </ul>
        <p>
          J&apos;ai choisi un dataset de statistiques détaillées de joueurs de
          football pour plusieurs raisons :
        </p>
        <ul>
          <li>
            <strong>Richesse et Complexité :</strong> Les données sont
            multi-dimensionnelles (plus de 100 variables), un cas d&apos;usage
            parfait pour la PCA.
          </li>
          <li>
            <strong>Interprétabilité Intuitive :</strong> Les résultats sont
            faciles à interpréter, permettant d&apos;identifier des profils de
            joueurs connus.
          </li>
          <li>
            <strong>Objectif de l&apos;Analyse :</strong> Mon but était de voir
            si la PCA pouvait, à partir de données brutes, retrouver et
            quantifier ces profils de joueurs.
          </li>
        </ul>

        <h2>Le Workflow en Deux Étapes</h2>
        <h3>1. Pré-traitement des Données (Python & Pandas)</h3>
        <p>
          Partant d&apos;un jeu de données de plus de 100 statistiques, une
          phase de nettoyage et de préparation était essentielle. J&apos;ai
          utilisé Python pour :
        </p>
        <ul>
          <li>
            <strong>Filtrer les données :</strong> Ne conserver que les joueurs
            de champ avec un temps de jeu significatif.
          </li>
          <li>
            <strong>Gérer les transferts :</strong> Agréger les statistiques des
            joueurs ayant changé de club.
          </li>
          <li>
            <strong>Recatégoriser les postes :</strong> Simplifier les positions
            en trois grands rôles (FW, MF, DF).
          </li>
          <li>
            <strong>
              Sélectionner les variables pertinentes (Feature Selection) :
            </strong>{" "}
            Éliminer les statistiques redondantes.
          </li>
        </ul>

        <h3>2. Analyse en Composantes Principales (MATLAB)</h3>
        <p>
          Une fois les données propres, j&apos;ai utilisé MATLAB pour réaliser
          la PCA et la visualisation.
        </p>

        <h2>Visualisation et Interactivité</h2>
        <p>
          Le résultat principal est une projection des joueurs sur un plan
          factoriel, où chaque axe a une signification conceptuelle.
        </p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/pca-football-plot.png")}
          >
            <Image
              src="/pca-football-plot.png"
              alt="Graphique de l'Analyse en Composantes Principales"
              width={700}
              height={500}
              layout="responsive"
            />
            <figcaption>
              Projection des joueurs sur les deux premières composantes
              principales.
            </figcaption>
          </figure>
        </div>

        <h2>Analyse des Composantes et Interprétation</h2>
        <p>
          Pour comprendre la signification des axes, il est essentiel
          d&apos;analyser les &quot;loadings&quot; (contributions des
          variables).
        </p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/pca-contributions.png")}
          >
            <Image
              src="/pca-contributions.png"
              alt="Contributions des variables aux composantes principales"
              width={700}
              height={500}
              layout="responsive"
            />
            <figcaption>Heatmap des contributions (loadings).</figcaption>
          </figure>
        </div>
        <h4>Interprétation des axes :</h4>
        <ul>
          <li>
            <strong>
              Axe PC1 (Horizontal - L&apos;axe Offensif/Défensif) :
            </strong>{" "}
            Pour rendre le graphique plus intuitif (offensif à droite),{" "}
            <strong>j&apos;ai inversé cet axe</strong>. Par conséquent, un score
            élevé sur le graphique (vers la droite) est fortement lié aux
            statistiques offensives (<code>Shots</code>, <code>SCA</code>),
            tandis qu&apos;un score faible (vers la gauche) est lié aux actions
            défensives (<code>Tkl+Int</code>).
          </li>
          <li>
            <strong>Axe PC2 (Vertical - L&apos;axe Créatif/Direct) :</strong> De
            la même manière, <strong>j&apos;ai inversé cet axe</strong> pour que
            les joueurs les plus créatifs apparaissent en haut. Un score élevé
            sur le graphique (vers le haut) est donc lié à des statistiques de
            création (<code>Assists</code>, <code>SCA</code>), tandis qu&apos;un
            score faible (vers le bas) est associé à des joueurs plus directs ou
            moins impliqués dans la construction.
          </li>
        </ul>

        <h2>Résultat Final : Identification de 4 Profils de Joueurs</h2>
        <p>
          La combinaison de ces deux axes a permis de faire émerger quatre
          quadrants distincts, chacun représentant un profil de joueur clair et
          cohérent, validant ainsi la pertinence de l&apos;analyse.
        </p>
        <div className="compact-table">
          <table>
            <thead>
              <tr>
                <th>Quadrant</th>
                <th>Profil</th>
                <th>Exemples de Joueurs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Haut-Droite</strong>
                </td>
                <td>
                  <strong>Offensifs Créatifs :</strong> Joueurs très impliqués
                  dans l&apos;attaque, à la fois par la passe et par le tir.
                </td>
                <td>Lionel Messi, Neymar, Kevin De Bruyne, Rayan Cherki</td>
              </tr>
              <tr>
                <td>
                  <strong>Bas-Droite</strong>
                </td>
                <td>
                  <strong>Finisseurs Purs :</strong> Attaquants plus directs,
                  focalisés sur la finition des actions.
                </td>
                <td>Cristiano Ronaldo, Erling Haaland, Robert Lewandowski</td>
              </tr>
              <tr>
                <td>
                  <strong>Haut-Gauche</strong>
                </td>
                <td>
                  <strong>Créateurs Défensifs :</strong> Milieux relayeurs,
                  latéraux et défenseurs centraux très propres à la relance.
                </td>
                <td>
                  Marco Verratti, Toni Kroos, Thiago Silva, Trent
                  Alexander-Arnold
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Bas-Gauche</strong>
                </td>
                <td>
                  <strong>Défenseurs Rugueux :</strong> Joueurs principalement
                  axés sur les tâches défensives pures, avec moins d&apos;apport
                  créatif.
                </td>
                <td>Simon Kjær, Kurt Zouma</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>De l&apos;Analyse à la Création : Le Comparateur de Joueurs</h2>
        <div className="project-bridge">
          <p>
            &quot;Lors de mon projet PCA, j’ai observé un nuage de points
            représentant les joueurs. Chaque point étant une représentation de
            leurs statistiques, j’ai eu l’idée d’utiliser la distance
            euclidienne entre deux points pour mesurer leur similarité. C’est
            ainsi qu’est né ce comparateur.&quot;
          </p>
          <Link href="/football-comparator" className="bridge-link">
            Découvrir le projet personnel qui en a découlé →
          </Link>
        </div>

        <h2>Réflexions Techniques et Leçons Apprises</h2>
        <ul>
          <li>
            <strong>
              Défi : De la fonction à la compréhension mathématique.
            </strong>{" "}
            Mon implémentation initiale s&apos;appuyait fortement sur des
            fonctions pré-existantes.
            <br />
            <strong>Leçon apprise :</strong> La véritable maîtrise d&apos;un
            algorithme vient de la capacité à l&apos;implémenter à partir de ses
            fondements mathématiques.
          </li>
          <li>
            <strong>Défi : La rigueur dans la visualisation.</strong> Le
            graphique produit était informatif, mais il lui manquait des
            éléments standards pour une analyse rigoureuse, comme le cercle de
            corrélation.
            <br />
            <strong>Leçon apprise :</strong> Une visualisation de données
            n&apos;est pas qu&apos;une illustration, c&apos;est un outil
            d&apos;analyse. Sa justesse mathématique est primordiale.
          </li>
        </ul>

        <h2>Source des Données</h2>
        <p>
          Les statistiques proviennent du dataset{" "}
          <a
            href="https://www.kaggle.com/datasets/vivovinco/20222023-football-player-stats"
            target="_blank"
            rel="noopener noreferrer"
          >
            &quot;2022/2023 Football Player Stats&quot; sur Kaggle
          </a>
          .
        </p>

        <div className="github-link-box">
          <p>
            Le code source, incluant le script de pré-traitement Python et le
            script d&apos;analyse MATLAB, est disponible sur GitHub.
          </p>
          <a
            href="https://github.com/nico916/pca-football-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Voir le projet sur GitHub
          </a>
        </div>

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
