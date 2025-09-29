import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PlateformePage() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <>
      <Head>
        <title>Projet : Plateforme de Jeux Vidéo en Java - Nicolas Joué</title>
        <meta
          name="description"
          content="Développement d'une application console en Java pour la gestion de jeux vidéo, d'utilisateurs et d'évaluations, avec un système de rôles."
        />
      </Head>

      <section className="project-page-content">
        <h1>Conception d’une plateforme de jeux vidéo en Java</h1>
        <p className="project-subtitle">
          Projet de Développement Logiciel en Java
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique
          </div>
          <div>
            <strong>Durée :</strong> 1 mois
          </div>
          <div>
            <strong>Technologies :</strong> Java, Eclipse
          </div>
          <div>
            <strong>Concepts Clés :</strong> POO, Gestion de Fichiers (CSV/TXT),
            Collections
          </div>
        </div>

        <p>
          Ce projet est une application console permettant la gestion de jeux
          vidéo, d’utilisateurs et d’évaluations. Réalisé dans un cadre
          académique, il propose différentes actions selon le rôle de
          l’utilisateur (joueur, testeur, administrateur, invité).
        </p>

        <h2>Fonctionnalités Clés</h2>
        <ul>
          <li>Gestion des rôles : Joueur, Testeur, Administrateur, Invité</li>
          <li>
            Fonctionnalités d&apos;inscription, de connexion et de persistance
            des données
          </li>
          <li>Ajout de jeux, système d’évaluation (likes/dislikes), tests</li>
          <li>
            Modération : signalements, blocage d’utilisateurs, suppression
          </li>
          <li>
            Utilisation de <code>membres.txt</code> et{" "}
            <code>ListeJeux.csv</code>
          </li>
          <li>
            Sauvegarde des membres dans un fichier <code>membres.txt</code> et
            chargement dynamique des données
          </li>
        </ul>

        <h2>Contexte du Projet</h2>
        <p>
          Projet réalisé en <strong>Java</strong>, en <em>1 mois</em>, avec une
          structure orientée objet. Il utilise des <code>HashMap</code> et{" "}
          <code>ArrayList</code> pour gérer les données. Développé sous{" "}
          <em>Eclipse</em>, avec des captures prises depuis <em>VS Code</em>{" "}
          pour une meilleure lisibilité.
        </p>

        <h2>Galerie d&apos;Images</h2>
        <p>
          Quelques captures d&apos;écran montrant l’interface utilisateur
          console :
        </p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/inscription_et_choix.png")}
          >
            <Image
              src="/inscription_et_choix.png"
              alt="Écran d'inscription et menu"
              width={500}
              height={375}
            />
            <figcaption>
              Écran d’inscription et menu des actions selon le rôle.
            </figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/connexion.png")}
          >
            <Image
              src="/connexion.png"
              alt="Connexion utilisateur"
              width={500}
              height={375}
            />
            <figcaption>
              Connexion à la plateforme avec rôle détecté automatiquement.
            </figcaption>
          </figure>
        </div>

        <h2>Extraits de code</h2>
        <p>
          <strong>
            Classe <code>Plateforme</code> (extrait) :
          </strong>
        </p>
        <pre>
          <code>{`public class Plateforme {
    private HashMap<String, Membre> membres = new HashMap<>();
    private List<Jeu> jeux = new ArrayList<>();

    public Plateforme() {
        // Chargement des jeux depuis ListeJeux.csv
        chargerJeux("ListeJeux.csv");
    }

    public void ajouterJeu(Jeu jeu) {
        jeux.add(jeu);
        // ... autres traitements ...
    }

    // ... autres méthodes ...
}`}</code>
        </pre>

        <p>
          <strong>
            Classe <code>Evaluation</code> (extrait) :
          </strong>
        </p>
        <pre>
          <code>{`public class Evaluation {
    private Membre auteur;
    private Jeu jeu;
    private String commentaire;
    private boolean avisPositif;

    public Evaluation(Membre auteur, Jeu jeu, String commentaire, boolean avisPositif) {
        this.auteur = auteur;
        this.jeu = jeu;
        this.commentaire = commentaire;
        this.avisPositif = avisPositif;
    }

    // ... getters et setters ...
}`}</code>
        </pre>

        <p>
          <strong>
            Classe <code>FichierMembre</code> (extrait) :
          </strong>
        </p>
        <pre>
          <code>{`public class FichierMembre {
    public static void sauvegarderMembres(Collection<Membre> membres) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("membres.txt"))) {
            for (Membre m : membres) {
                writer.write(m.toCsv());
                writer.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // ... méthode de chargement des membres ...
}`}</code>
        </pre>

        <h2>Potentielles Améliorations</h2>
        <ul>
          <li>Passage à une interface graphique (JavaFX ou Swing)</li>
          <li>Séparation stricte MVC (Modèle – Vue – Contrôleur)</li>
          <li>Utilisation d’une base de données relationnelle</li>
          <li>Ajout de mini-jeux intégrés et jouables dans la plateforme</li>
        </ul>

        <div className="github-link-box">
          <p>Le code complet est disponible sur mon dépôt GitHub.</p>
          <a
            href="https://github.com/nico916/java-console-game-platform"
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
