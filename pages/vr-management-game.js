import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SauvonsMarsPage() {
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
          Projet VR : &quot;Sauvons Mars&quot; en Unity/C# - Nicolas Joué
        </title>
        <meta
          name="description"
          content="Développement d'un jeu de gestion et de simulation en réalité virtuelle (VR) pour sensibiliser aux enjeux écologiques, avec un focus sur l'interaction et l'UI 3D."
        />
      </Head>

      <section className="project-page-content">
        <h1>
          Projet VR &quot;Sauvons Mars&quot; : L&apos;Interaction au service de
          la Simulation
        </h1>
        <p className="project-subtitle">
          Jeu de Gestion et de Simulation en Réalité Virtuelle
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique
          </div>
          <div>
            <strong>Durée :</strong> 2 mois
          </div>
          <div>
            <strong>Technologies :</strong> Unity, C#, XR Interaction Toolkit
          </div>
          <div>
            <strong>Focus :</strong> Gameplay VR, UI 3D, Game Logic
          </div>
        </div>

        <h2>Contexte du Projet</h2>
        <p>
          <strong>Scénario :</strong> En 2137, la Terre est submergée par ses
          propres déchets. Dans un acte désespéré, le gouvernement planétaire
          les envoie sur Mars. Cinquante ans plus tard, l&apos;humanité a quitté
          sa planète d&apos;origine et votre mission est de réparer les erreurs
          du passé : nettoyer Mars pour en faire le nouveau berceau de
          l&apos;humanité.
        </p>
        <p>
          &quot;Sauvons Mars&quot; est un jeu qui utilise ce scénario pour
          sensibiliser aux enjeux écologiques. L&apos;objectif était
          d&apos;exploiter les forces de la VR — l&apos;immersion et
          l&apos;interaction directe — pour créer une expérience où le joueur
          devient acteur de la dépollution.
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
            src="https://www.youtube.com/embed/nRCwTypL9NA?si=88Zn2xYU9_ICkUc5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          <em>
            <small>
              Note : La capture vidéo peut présenter quelques saccades dues à la
              charge de l&apos;enregistrement, non présentes dans
              l&apos;expérience de jeu réelle.
            </small>
          </em>
        </p>

        <h2>Un Gameplay Bâti sur l&apos;Interaction VR</h2>
        <p>
          Plutôt que de reposer sur des clics de souris, le gameplay a été
          entièrement pensé autour d&apos;interactions physiques et intuitives.
        </p>
        <ul>
          <li>
            <strong>Interaction Physique Directe :</strong> Le cœur du jeu est
            la manipulation. Le joueur doit :
            <ul>
              <li>
                Activer les machines en appuyant physiquement sur des boutons
                3D.
              </li>
              <li>
                Saisir les déchets qui défilent avec ses mains virtuelles (
                <i>XR Grab Interactable</i>).
              </li>
              <li>
                Trier activement en jetant chaque déchet dans la bonne poubelle.
              </li>
            </ul>
          </li>
          <li>
            <strong>Gestion Stratégique via Interface Diégétique :</strong> La
            complexité du jeu est gérée via un grand écran de contrôle intégré à
            l&apos;environnement, où le joueur peut consulter son inventaire,
            acheter des machines et améliorer ses équipements.
          </li>
          <li>
            <strong>Un Monde Réactif et Guidé :</strong> Le feedback est
            essentiel. Des sons immersifs, des jingles de succès et des
            indicateurs visuels clairs (boutons qui changent de couleur) guident
            et récompensent le joueur.
          </li>
        </ul>

        <h2>Galerie d&apos;Images</h2>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/sauvons-mars-ui-unlocked.png")}
          >
            <Image
              src="/sauvons-mars-ui-unlocked.png"
              alt="Écran de contrôle principal"
              width={500}
              height={375}
            />
            <figcaption>
              L&apos;écran de contrôle, hub central de la gestion
            </figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/sauvons-mars-tapis.png")}
          >
            <Image
              src="/sauvons-mars-tapis.png"
              alt="Tapis roulant et bouton d'interaction"
              width={500}
              height={375}
            />
            <figcaption>Le tapis roulant, une des interactions clés</figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/sauvons-mars-dome.png")}
          >
            <Image
              src="/sauvons-mars-dome.png"
              alt="Dôme de protection sur l'environnement martien"
              width={500}
              height={375}
            />
            <figcaption>Le dôme qui délimite l&apos;aire de jeu</figcaption>
          </figure>
        </div>

        <h2>Ma Contribution : Architecture de l&apos;UI et Logique de Jeu</h2>
        <p>
          Mon rôle s&apos;est articulé autour de l&apos;
          <strong>
            architecture complète de l&apos;interface utilisateur et de la
            logique de jeu sous-jacente
          </strong>
          . J&apos;ai conçu l&apos;écran de contrôle non pas comme un menu, mais
          comme une pièce maîtresse interactive.
        </p>
        <p>
          Techniquement, j&apos;ai résolu le défi de la lisibilité en VR en
          adoptant <strong>TextMeshPro</strong>. Une étape cruciale fut la
          résolution d&apos;un bug d&apos;interaction : une première version de
          l&apos;UI bloquait le `raycast` du contrôleur. J&apos;ai pris la
          décision de retirer les `UI Panels` problématiques pour garantir une
          fonctionnalité parfaite, un arbitrage essentiel en développement.
          Cette expérience a souligné l&apos;importance de construire l&apos;UI
          sur un <strong>&quot;XR UI Canvas&quot;</strong> avec un{" "}
          <strong>Tracked Device Graphic Raycaster</strong>.
        </p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/sauvons-mars-panel-issue.png")}
          >
            <Image
              src="/sauvons-mars-panel-issue.png"
              alt="Tentative d'utilisation de Panels pour l'UI"
              width={500}
              height={375}
            />
            <figcaption>
              Visuel de l&apos;interface avec les panels qui posaient problème
            </figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/sauvons-mars-hierarchy.png")}
          >
            <Image
              src="/sauvons-mars-hierarchy.png"
              alt="Hiérarchie des GameObjects de l'écran dans Unity"
              width={500}
              height={375}
            />
            <figcaption>
              Structure de la hiérarchie Unity pour l&apos;écran de contrôle
            </figcaption>
          </figure>
        </div>

        <h2>Extraits de Code C#</h2>

        <h3>1. Gestion de la Progression Exponentielle</h3>
        <p>
          Pour rendre les améliorations significatives, leur coût et leur
          rendement suivent une progression exponentielle.
        </p>
        <pre>
          <code>{`// Dans Ecran.cs
private int ProductionAmount(int level)
{
    // La production double à chaque niveau : 1, 2, 4, 8...
    return (int)Mathf.Pow(2, level - 1);
}

private int MachineEnergyConsumption(int level)
{
    // La consommation suit la même courbe
    return 5 * (int)Mathf.Pow(2, level - 1);
}`}</code>
        </pre>

        <h3>2. Production Asynchrone avec les Coroutines</h3>
        <p>
          Chaque machine produit des ressources de manière asynchrone sans
          bloquer le jeu, grâce à une coroutine.
        </p>
        <pre>
          <code>{`// Dans Ecran.cs - Méthode d'amélioration
private void UpgradeMachine1()
{
    // ... (vérification des ressources)

    // Redémarrer la coroutine est crucial pour mettre à jour la vitesse
    if (produceMachine1Coroutine != null)
        StopCoroutine(produceMachine1Coroutine);
    produceMachine1Coroutine = StartCoroutine(ProducePlastic());
}`}</code>
        </pre>

        <h2>Potentielles Améliorations</h2>
        <ul>
          <li>
            Intégrer un système de <strong>feedback haptique</strong> pour
            sentir les interactions.
          </li>
          <li>
            Développer des interactions plus complexes pour les machines, avec
            des mini-jeux de maintenance.
          </li>
          <li>
            Ajouter des effets de particules lors du recyclage pour un meilleur
            feedback visuel.
          </li>
          <li>
            Implémenter un système de sauvegarde de la progression du joueur.
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
