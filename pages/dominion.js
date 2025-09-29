import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DominionPage() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <>
      <Head>
        <title>Projet : Jeu Dominion en C++ - Nicolas Joué</title>
        <meta
          name="description"
          content="Implémentation en C++ du jeu de deck-building Dominion, avec une IA, un système de sauvegarde, et une architecture orientée objet."
        />
      </Head>

      <section className="project-page-content">
        <h1>Projet Dominion en C++</h1>
        <p className="project-subtitle">
          Projet de Développement Logiciel et d&apos;Architecture Orientée Objet
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique
          </div>
          <div>
            <strong>Technologies :</strong> C++, Pointeurs Intelligents
          </div>
          <div>
            <strong>Concepts Clés :</strong> Polymorphisme, Gestion de la
            Mémoire
          </div>
          <div>
            <strong>Focus :</strong> Architecture Logicielle (POO)
          </div>
        </div>

        <p>
          Ce projet académique est une implémentation en <strong>C++</strong> du
          célèbre jeu de deck-building <strong>Dominion</strong>.
          L&apos;objectif était d&apos;appliquer les concepts de programmation
          orientée objet (héritage, polymorphisme) et de C++ moderne (pointeurs
          intelligents) pour créer un moteur de jeu complet, jouable en console.
        </p>

        <h2>Fonctionnalités Clés</h2>
        <ul>
          <li>
            <strong>Moteur de Jeu Complet :</strong> Gestion des phases de jeu
            (Action, Achat, Ajustement), des decks, des mains et des défausses.
          </li>
          <li>
            <strong>Multijoueur (2-4 joueurs) :</strong> Le jeu est conçu pour
            être joué par 2, 3 ou 4 joueurs humains.
          </li>
          <li>
            <strong>Intelligence Artificielle (IA) :</strong> Possibilité de
            remplacer un joueur par une IA avec une stratégie de base.
          </li>
          <li>
            <strong>Système de Sauvegarde et Chargement :</strong> Les joueurs
            peuvent sauvegarder une partie et la reprendre plus tard via un
            fichier CSV.
          </li>
          <li>
            <strong>Sélection de Cartes Personnalisée :</strong> Choix des 10
            cartes &quot;Action&quot; qui composeront la réserve du jeu.
          </li>
          <li>
            <strong>Interface Console Stylisée :</strong> Utilisation de
            couleurs pour différencier les types de cartes et améliorer la
            lisibilité de l&apos;interface en terminal.
          </li>
        </ul>

        <h2>Galerie d&apos;Images</h2>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/dominion-accueil.png")}
          >
            <Image
              src="/dominion-accueil.png"
              alt="Menu d'accueil du jeu Dominion"
              width={500}
              height={375}
            />
            <figcaption>
              Menu d&apos;accueil avec les options de jeu.
            </figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/dominion-tour-de-jeu.png")}
          >
            <Image
              src="/dominion-tour-de-jeu.png"
              alt="Déroulement d'un tour de jeu"
              width={500}
              height={375}
            />
            <figcaption>
              Exemple d&apos;un tour de jeu dans la console.
            </figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/dominion-choix-cartes.png")}
          >
            <Image
              src="/dominion-choix-cartes.png"
              alt="Phase de sélection des cartes Action"
              width={500}
              height={375}
            />
            <figcaption>
              Sélection personnalisée des 10 cartes &quot;Action&quot;.
            </figcaption>
          </figure>
        </div>

        <h2>Architecture Orientée Objet et C++ Moderne</h2>
        <p>
          Le cœur du projet repose sur une architecture robuste pour modéliser
          les différentes composantes du jeu, en suivant les bonnes pratiques du
          C++.
        </p>
        <ul>
          <li>
            <strong>Séparation Interface/Implémentation (.h/.cpp) :</strong>{" "}
            Chaque classe est définie avec un fichier d&apos;en-tête (
            <code>.h</code>) pour l&apos;interface et un fichier source (
            <code>.cpp</code>) pour l&apos;implémentation, garantissant la
            modularité.
          </li>
          <li>
            <strong>Héritage et Polymorphisme (`Carte`) :</strong> Une classe de
            base <code>Carte</code> a été créée, avec des classes dérivées (
            <code>CarteTresor</code>, <code>CarteAction</code>, etc.),
            permettant de manipuler toutes les cartes de manière polymorphique.
          </li>
          <li>
            <strong>Gestion de la Mémoire (`std::shared_ptr`) :</strong> Pour
            éviter les fuites de mémoire et simplifier la gestion de la durée de
            vie des objets, j&apos;ai utilisé des pointeurs intelligents (
            <code>std::shared_ptr</code>) partout dans le projet.
          </li>
          <li>
            <strong>Classes Principales :</strong>
            <ul>
              <li>
                <code>Joueur</code> : Gère l&apos;état d&apos;un joueur (deck,
                main, défausse).
              </li>
              <li>
                <code>PlateauJeu</code> : Agit comme le contrôleur principal du
                jeu, gérant le déroulement des tours et la réserve de cartes.
              </li>
            </ul>
          </li>
        </ul>

        <h2>Extraits de Code</h2>

        <h3>1. Polymorphisme et Affichage en Console (`Carte.cpp`)</h3>
        <p>
          Cette méthode virtuelle <code>Afficher()</code> permet à chaque type
          de carte de s&apos;afficher différemment, notamment avec une couleur
          spécifique.
        </p>
        <pre>
          <code>{`// Extrait de Carte.cpp
void Carte::Afficher() const {
    const std::string RESET = "\\033[0m";
    const std::string GREEN = "\\033[92m"; // Victoire
    const std::string YELLOW = "\\033[93m"; // Trésor
    // ... autres couleurs

    std::string couleur;
    if (type == "victoire") {
        couleur = GREEN;
    } else if (type == "tresor") {
        couleur = YELLOW;
    } // ...

    std::cout << couleur << " - Nom : " << getNom() 
              << " | Prix : " << getPrix() 
              << " | Type : " << getType() << RESET;
}`}</code>
        </pre>

        <h3>2. Logique d&apos;une Carte Action (`CarteAction.cpp`)</h3>
        <p>
          Chaque carte &quot;Action&quot; possède sa propre méthode
          d&apos;exécution. Voici l&apos;exemple de la &quot;Sorcière&quot;, qui
          affecte le joueur actif et ses adversaires.
        </p>
        <pre>
          <code>{`// Extrait de CarteAction.cpp
void CarteAction::executerActionSorciere(std::shared_ptr<Joueur> j){
     std::cout << "\\n Effet Sorciere : Piochez 2 cartes...";
     for (int i=0; i<2; i++){
        j->ajouterCarteMain();
        j->retirerCarteDeck();
     }
}

void CarteAction::executerActionSorciere2(std::shared_ptr<Joueur> adversaire, PlateauJeu* pj){
    // Logique pour ajouter une carte Malédiction à l'adversaire
    // ...
}`}</code>
        </pre>

        <h2>Défis Rencontrés et Solutions</h2>
        <ul>
          <li>
            <strong>Problème : Gestion du polymorphisme et du casting.</strong>{" "}
            Le casting entre pointeurs de base et dérivés était risqué.
            <br />
            <strong>Solution :</strong> L&apos;adoption de{" "}
            <strong>
              <code>std::shared_ptr</code>
            </strong>{" "}
            et <code>std::dynamic_pointer_cast</code> a permis un casting
            sécurisé et une gestion de la mémoire automatique.
          </li>
          <li>
            <strong>Problème : Mise à jour de l&apos;état des joueurs.</strong>{" "}
            Sans pointeurs, les modifications sur un joueur n&apos;étaient pas
            répercutées partout.
            <br />
            <strong>Solution :</strong> L&apos;utilisation de{" "}
            <strong>
              <code>{"std::shared_ptr<Joueur>"}</code>
            </strong>{" "}
            a garanti que toutes les parties du code manipulaient une seule et
            même instance de chaque joueur.
          </li>
        </ul>

        <div className="github-link-box">
          <p>
            Pour consulter l&apos;intégralité du code source de ce projet,
            rendez-vous sur mon dépôt GitHub.
          </p>
          <a
            href="https://github.com/nico916/dominion-cpp"
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
