import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import arbreDeVieImage from "../public/ArbreDeVie.png";

export default function ArbreDeViePage() {
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
        <title>Projet : Arbre de Vie Interactif - Nicolas Joué</title>
        <meta
          name="description"
          content="Visualisation de données en C# gérant plus de 30 000 nœuds grâce à un Quadtree et des algorithmes de disposition radiale."
        />
      </Head>

      <section className="project-page-content">
        <h1>Arbre de Vie Interactif en C#</h1>
        <p className="project-subtitle">
          Projet de Développement logiciel & Visualisation de Données
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique
          </div>
          <div>
            <strong>Durée :</strong> 1 mois
          </div>
          <div>
            <strong>Technologies :</strong> C#, Windows Forms, Quadtree
          </div>
          <div>
            <strong>Défis Clés :</strong> Performance, Gestion de Données,
            Algorithmique
          </div>
        </div>

        <h2>Contexte et Objectifs</h2>
        <p>
          Ce projet académique consistait à développer une{" "}
          <strong>application logicielle</strong> de bureau pour visualiser
          l&apos;Arbre de la Vie. Le défi principal était de concevoir une
          solution capable de gérer et d&apos;afficher de manière fluide un jeu
          de données de plus de <strong>36 000 nœuds</strong>.
        </p>

        <h3>Fonctionnalités Clés</h3>
        <ul>
          <li>
            <strong>Visualisation Radiale :</strong> Affichage de l&apos;arbre
            phylogénétique dans une disposition circulaire.
          </li>
          <li>
            <strong>Navigation Fluide :</strong> Zoom dynamique et navigation
            par glisser-déposer.
          </li>
          <li>
            <strong>Gestion de Clusters :</strong> Regroupement automatique des
            nœuds denses pour garantir la lisibilité.
          </li>
          <li>
            <strong>Panneau d&apos;Informations Détaillées :</strong> Affichage
            des données de chaque nœud au survol.
          </li>
        </ul>

        <h2>Galerie d&apos;Images</h2>
        <p>Cliquez sur l&apos;image pour l&apos;afficher en plein écran.</p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen(arbreDeVieImage.src)}
          >
            <Image
              src={arbreDeVieImage}
              alt="Vue d'ensemble de l'Arbre de Vie Interactif"
              width={600}
              height={450}
            />
            <figcaption>
              Vue d&apos;ensemble de l&apos;arbre avec les branches principales.
            </figcaption>
          </figure>
        </div>

        <h2>Défis Techniques et Solutions</h2>

        <h3>1. Architecture MVC : Séparer pour mieux régner</h3>
        <p>
          Pour gérer la complexité de l&apos;application, j&apos;ai structuré le
          projet selon le patron d&apos;architecture{" "}
          <strong>Modèle-Vue-Contrôleur (MVC)</strong>. Cette séparation claire
          des responsabilités a été cruciale pour maintenir un code organisé et
          évolutif.
        </p>
        <ul>
          <li>
            <strong>Modèle (`TreeModel.cs`, `Node.cs`) :</strong> Responsable du
            chargement des données, de la construction de l&apos;arbre et de la
            logique métier, sans aucune connaissance de l&apos;affichage.
          </li>
          <li>
            <strong>Vue (`Form1.cs`) :</strong> Gère tout l&apos;affichage
            graphique (dessin des nœuds, des liens, interface) en utilisant un{" "}
            <code>DoubleBufferedPanel</code> pour un rendu fluide.
          </li>
          <li>
            <strong>Contrôleur (`ArbreDeVieController.cs`) :</strong> Le cerveau
            de l&apos;application. Il traite les entrées de l&apos;utilisateur
            (zoom, clics), fait le lien entre le Modèle et la Vue, et contient
            les algorithmes de disposition.
          </li>
        </ul>

        <h3>2. Optimisation des Performances : Le Quadtree</h3>
        <p>
          <strong>Défi :</strong> Avec 30 000 nœuds, une simple détection de
          clic était trop lente.
        </p>
        <p>
          <strong>Solution :</strong> J&apos;ai implémenté un{" "}
          <strong>Quadtree</strong>, une structure de données spatiale qui
          divise l&apos;écran en quadrants. Cela permet de retrouver un nœud
          sous le curseur en une fraction de seconde (complexité en O(log N) au
          lieu de O(N)).
        </p>
        <pre>
          <code>{`// Extrait de Quadtree.cs - Requête spatiale optimisée
public Node? Query(PointF point)
{
    if (!bounds.Contains(Point.Round(point)))
        return null;

    // Cherche uniquement dans les nœuds de ce quadrant
    foreach (var entry in nodeEntries)
    {
        if (/* le point est sur ce nœud */)
            return entry.node;
    }

    // Si le quadrant est subdivisé, on cherche dans le bon sous-quadrant
    if (quadrants != null)
    {
        // ... logique pour trouver et interroger le sous-quadrant pertinent
    }

    return null;
}`}</code>
        </pre>

        <h3>3. Algorithme de Disposition : Lisibilité des Données</h3>
        <p>
          <strong>Défi :</strong> Éviter que les branches denses de l&apos;arbre
          ne se superposent.
        </p>
        <p>
          <strong>Solution :</strong> J&apos;ai développé un algorithme qui
          alloue l&apos;espace angulaire{" "}
          <strong>proportionnellement au nombre de descendants</strong> de
          chaque branche, assurant un affichage équilibré.
        </p>
        <pre>
          <code>{`// Extrait de ArbreDeVieController.cs - Disposition proportionnelle
private void CalculateNodePositionRecursive(Node node, ..., float availableAngle)
{
    var children = model.GetChildren(node.NodeId);
    float totalDescendants = children.Sum(c => c.DescendantCount);

    float currentAngle = startAngle;
    foreach (var child in children)
    {
        // L'angle alloué à l'enfant est proportionnel à sa "taille"
        float angleForChild = (child.DescendantCount / totalDescendants) * availableAngle;
        
        // ... Calcul de la position et appel récursif
        CalculateNodePositionRecursive(child, ..., angleForChild);
        currentAngle += angleForChild;
    }
}`}</code>
        </pre>

        <div className="github-link-box">
          <p>
            Explorez l&apos;implémentation complète du Quadtree et de
            l&apos;architecture MVC sur GitHub.
          </p>
          <a
            href="https://github.com/nico916/tree-of-life-csharp"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Voir le projet sur GitHub
          </a>
        </div>

        <h2>Apprentissages et Bilan</h2>
        <h4>Compétences Clés Démontrées</h4>
        <ul>
          <li>
            <strong>Ingénierie Logicielle :</strong> Conception d&apos;une
            application robuste avec l&apos;architecture <strong>MVC</strong>.
          </li>
          <li>
            <strong>Optimisation et Algorithmique :</strong> Implémentation de
            structures de données complexes (Quadtree) pour résoudre des
            problèmes de performance.
          </li>
          <li>
            <strong>Visualisation de Données :</strong> Création
            d&apos;algorithmes de disposition pour représenter des données
            hiérarchiques.
          </li>
          <li>
            <strong>Développement C# .NET :</strong> Maîtrise de Windows Forms
            et GDI+ pour créer une interface graphique interactive.
          </li>
        </ul>

        <h4>Pistes d&apos;Amélioration Futures</h4>
        <p>
          Ce projet a posé des bases solides qui pourraient être étendues avec
          plusieurs fonctionnalités :
        </p>
        <ul>
          <li>
            Ajout d&apos;une <strong>fonction de recherche</strong> pour trouver
            rapidement une espèce par son nom.
          </li>
          <li>Amélioration du rendu des labels dans les zones très denses.</li>
          <li>
            Intégration de <strong>plus de données interactives</strong>, comme
            des images pour chaque espèce.
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
