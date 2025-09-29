import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DemineurPage() {
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
        <title>Projet : Démineur en C# - Nicolas Joué</title>
        <meta
          name="description"
          content="Développement d'un jeu de Démineur en C# avec Windows Forms, en suivant une architecture MVC."
        />
      </Head>

      <section className="project-page-content">
        <h1>Jeu du Démineur en C#</h1>
        <p className="project-subtitle">Projet de Développement Logiciel</p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique
          </div>
          <div>
            <strong>Durée :</strong> 1 semaine
          </div>
          <div>
            <strong>Technologies :</strong> C#, Windows Forms, Visual Studio
          </div>
          <div>
            <strong>Architecture :</strong> MVC (Modèle-Vue-Contrôleur)
          </div>
        </div>

        <h2>Contexte et Objectifs</h2>
        <p>
          Ce projet, réalisé en une semaine, avait pour objectif de mettre en
          pratique les fondamentaux du développement logiciel en C# et de
          l&apos;architecture MVC. Le défi était de recréer le jeu classique du
          Démineur en développant une application de bureau fonctionnelle avec
          une logique de jeu robuste.
        </p>

        <h3>Fonctionnalités Clés</h3>
        <ul>
          <li>
            Interface graphique intuitive développée avec{" "}
            <strong>Windows Forms</strong>.
          </li>
          <li>Plusieurs niveaux de difficulté (Facile, Moyen, Difficile).</li>
          <li>
            Placement de drapeaux pour marquer les emplacements de bombes
            suspectées.
          </li>
          <li>
            Génération aléatoire des bombes qui{" "}
            <strong>évite la zone du premier clic</strong>.
          </li>
          <li>Affichage clair des bombes adjacentes pour guider le joueur.</li>
        </ul>

        <h2>Galerie d&apos;Images</h2>
        <p>Cliquez sur les images pour les afficher en plein écran.</p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/Demineur_Menu.png")}
          >
            <Image
              src="/Demineur_Menu.png"
              alt="Menu principal du Démineur"
              width={400}
              height={300}
            />
            <figcaption>Menu principal pour choisir la difficulté</figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/Demineur_Jeu.png")}
          >
            <Image
              src="/Demineur_Jeu.png"
              alt="Partie de Démineur en cours"
              width={400}
              height={300}
            />
            <figcaption>
              Plateau de jeu en difficulté &quot;Difficile&quot;
            </figcaption>
          </figure>
        </div>

        <h2>Défis Techniques et Solutions</h2>
        <p>
          Le principal défi était de bien séparer les responsabilités pour
          maintenir un code propre et évolutif, même dans un projet rapide.
        </p>

        <h3>Architecture MVC</h3>
        <p>
          Pour éviter un code monolithique, j&apos;ai adopté le pattern{" "}
          <strong>Modèle-Vue-Contrôleur</strong> :
        </p>
        <ul>
          <li>
            <strong>Modèle :</strong> Gère toute la logique du jeu (la grille,
            l&apos;emplacement des bombes, l&apos;état des cellules).
          </li>
          <li>
            <strong>Vue (Windows Forms) :</strong> Responsable de
            l&apos;affichage de la grille et des boutons.
          </li>
          <li>
            <strong>Contrôleur :</strong> Fait le lien entre le Modèle et la
            Vue, en gérant les clics et en orchestrant les mises à jour.
          </li>
        </ul>

        <h3>Extraits de Code Illustratifs</h3>
        <p>
          Voici quelques extraits montrant la logique d&apos;implémentation de
          la Vue et du Contrôleur.
        </p>

        <h4>
          1) <code>GameView.cs</code> – Affichage de la grille
        </h4>
        <pre>
          <code>{`// Extrait de GameView.cs
public class GameView : Form
{
    public List<Button> Buttons { get; private set; }
    // ...
    private void InitializeGameBoard(int gridSize, int cellSize)
    {
        TablePanel = new TableLayoutPanel { /* ... */ };

        for (int i = 0; i < gridSize; i++)
        {
            for (int j = 0; j < gridSize; j++)
            {
                CustomButton btn = new CustomButton { /* ... */ };
                Buttons.Add(btn);
                TablePanel.Controls.Add(btn, j, i);
            }
        }
        this.Controls.Add(TablePanel);
    }
}`}</code>
        </pre>

        <h4>
          2) <code>MenuForm.cs</code> – Lancement du jeu
        </h4>
        <pre>
          <code>{`// Extrait de MenuForm.cs (Contrôleur initial)
private void DémarrerJeu(int gridSize, int numberOfBombs)
{
    this.Hide();
    Form1 gameForm = new Form1(gridSize, numberOfBombs);
    gameForm.ShowDialog();
    this.Close();
}`}</code>
        </pre>

        <div className="github-link-box">
          <p>
            L&apos;architecture complète et l&apos;intégralité du code source
            sont disponibles sur GitHub.
          </p>
          <a
            href="https://github.com/nico916/Minesweeper-CSharp"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Voir le projet sur GitHub
          </a>
        </div>

        <h2>Apprentissages et Bilan</h2>
        <h4>Compétences Acquises</h4>
        <ul>
          <li>
            Mise en pratique du pattern d&apos;architecture <strong>MVC</strong>
            .
          </li>
          <li>
            Gestion des <strong>événements UI</strong> dans un environnement
            Windows Forms.
          </li>
          <li>
            Maîtrise des bases de la <strong>programmation C#</strong> et de
            l&apos;environnement Visual Studio.
          </li>
          <li>
            Développement d&apos;une <strong>logique algorithmique</strong> pour
            la récursivité (révélation des cases vides adjacentes).
          </li>
        </ul>

        <h4>Pistes d&apos;Amélioration Futures</h4>
        <p>
          Avec plus de temps, plusieurs fonctionnalités pourraient enrichir
          l&apos;expérience :
        </p>
        <ul>
          <li>
            Ajout d&apos;un <strong>chronomètre</strong> pour mesurer le temps
            de jeu.
          </li>
          <li>
            Mise en place d&apos;un système de{" "}
            <strong>sauvegarde des meilleurs scores</strong>.
          </li>
          <li>
            Création de thèmes visuels pour personnaliser l&apos;apparence du
            plateau.
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
