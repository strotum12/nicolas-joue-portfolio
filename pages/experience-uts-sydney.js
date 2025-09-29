import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import imageIllustration from "../public/ImageIllustration.jpg";
import binaryMasksIllustration from "../public/BinaryMasksIllustration.jpg";
import segmentationResult from "../public/segmentation_result.png";

export default function StageUtsPage() {
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
        <title>Projet : Stage Data Scientist à Sydney - Nicolas Joué</title>
        <meta
          name="description"
          content="Analyse de mon projet de deep learning pour l'imagerie médicale à l'UTS. Utilisation de PyTorch, ResNet, et U-Net pour la détection de maladies oculaires."
        />
      </Head>

      <section className="project-page-content">
        <h1>
          Stage Data Scientist : Deep Learning pour l&apos;Imagerie Médicale
        </h1>
        <p className="project-subtitle">
          Université de Technologie de Sydney (UTS), Australie
        </p>

        <div className="project-key-info">
          <div>
            <strong>Rôle :</strong> Stagiaire Data Scientist
          </div>
          <div>
            <strong>Durée :</strong> 3 mois (Mai - Août 2024)
          </div>
          <div>
            <strong>Lieu :</strong> Sydney, Australie
          </div>
          <div>
            <strong>Technologies :</strong> Python, PyTorch, ResNet, ViT, U-Net,
            Pandas, ImageJ, iHPC
          </div>
        </div>

        <div className="project-bridge">
          <h3>Principales Réalisations</h3>
          <ul>
            <li>
              <strong>Succès en Régression :</strong> J&apos;ai entraîné avec
              succès un Vision Transformer (ViT) pour prédire la complexité des
              vaisseaux sanguins avec une{" "}
              <strong>précision de 95% (R²=0.95)</strong>.
            </li>
            <li>
              <strong>Expertise en Segmentation :</strong> J&apos;ai implémenté
              un modèle U-Net et exploré de manière itérative des techniques
              avancées (CLAHE, Data Augmentation) pour résoudre un problème
              complexe de segmentation d&apos;images médicales.
            </li>
            <li>
              <strong>Maîtrise de l&apos;Environnement de Recherche :</strong>{" "}
              J&apos;ai géré le pipeline IA de A à Z, de la préparation des
              données sur ImageJ à l&apos;entraînement des modèles sur un
              cluster de calcul haute performance (iHPC).
            </li>
          </ul>
        </div>

        <h2>Ma Mission : Le Pipeline d&apos;un Projet IA</h2>

        <h3>1. Collecte et Préparation des Données</h3>
        <p>
          La première étape a été de construire un dataset de 1270 images. À
          l&apos;aide du logiciel ImageJ, j&apos;ai calculé la &quot;dimension
          fractale&quot; de chaque masque rétinien, une mesure clé qui quantifie
          la complexité des vaisseaux sanguins et qui est un indicateur de
          certaines maladies oculaires. Cela a permis de créer une cible
          numérique pour le premier modèle.
        </p>

        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen(imageIllustration.src)}
          >
            <Image
              src={imageIllustration}
              alt="Image d'une rétine"
              width={300}
              height={300}
            />
            <figcaption>Exemple d&apos;image de rétine (entrée)</figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen(binaryMasksIllustration.src)}
          >
            <Image
              src={binaryMasksIllustration}
              alt="Masque binaire des vaisseaux sanguins"
              width={300}
              height={300}
            />
            <figcaption>
              Masque binaire des vaisseaux (vérité terrain)
            </figcaption>
          </figure>
        </div>

        <h3>2. Feature Engineering : Préparer les Images pour le Modèle</h3>
        <p>
          Pour que les modèles de deep learning puissent interpréter
          correctement les images, une étape de pré-traitement et de
          transformation est essentielle. J&apos;ai mis en place un pipeline de
          transformations avec PyTorch pour garantir que les données soient dans
          un format optimal :
        </p>
        <ul>
          <li>
            <strong>Redimensionnement (Resize) :</strong> Les images ont été
            redimensionnées à <strong>224x224 pixels</strong> pour correspondre
            à la taille d&apos;entrée attendue par les modèles comme ResNet.
          </li>
          <li>
            <strong>Conversion en Tenseurs (ToTensor) :</strong> Les images ont
            été converties en tenseurs PyTorch, le format de données fondamental
            pour les calculs sur GPU.
          </li>
          <li>
            <strong>Duplication des Canaux :</strong> Les modèles pré-entraînés
            attendent des images en couleur (3 canaux RGB). Les masques étant en
            niveaux de gris (1 canal), j&apos;ai dupliqué ce canal unique trois
            fois pour assurer la compatibilité.
          </li>
          <li>
            <strong>Normalisation (Normalize) :</strong> Les valeurs des pixels
            ont été normalisées (moyenne et écart-type de 0.5) pour stabiliser
            et accélérer la convergence des modèles.
          </li>
        </ul>
        <p>
          Ces transformations ont été appliquées de manière cohérente aux
          ensembles d&apos;entraînement et de test pour garantir la validité des
          résultats.
        </p>

        <h3>3. Partie 1 : Prédire la Complexité Vasculaire (Régression)</h3>
        <p>
          Le premier défi était de prédire la dimension fractale (une valeur
          continue) à partir d&apos;un masque binaire.
        </p>

        <h4>Méthodologie et Métriques</h4>
        <ul>
          <li>
            <strong>Données :</strong> Le modèle prenait en entrée un{" "}
            <strong>masque binaire</strong> et devait prédire en sortie la{" "}
            <strong>valeur de sa dimension fractale</strong>.
          </li>
          <li>
            <strong>Séparation des données :</strong> Le dataset a été divisé en
            80% pour l&apos;entraînement et 20% pour le test, en s&apos;assurant
            que les images d&apos;un même patient ne soient pas réparties entre
            les deux ensembles pour éviter les fuites de données.
          </li>
          <li>
            <strong>Optimiseur :</strong> J&apos;ai utilisé l&apos;optimiseur{" "}
            <strong>Adam</strong>, qui ajuste dynamiquement le taux
            d&apos;apprentissage.
          </li>
          <li>
            <strong>Métriques d&apos;évaluation :</strong> Pour juger la
            performance, j&apos;ai suivi la <strong>MSE</strong> (Mean Squared
            Error), la <strong>MAE</strong> (Mean Absolute Error) et le score{" "}
            <strong>R²</strong> (coefficient de détermination).
          </li>
        </ul>

        <h4>Résultats et Modèles</h4>
        <p>
          Le premier modèle, un <strong>ResNet-18</strong>, a rapidement obtenu
          d&apos;excellents résultats avec un score{" "}
          <span className="metric-highlight">R² d&apos;environ 0.8</span> sur
          l&apos;ensemble de test. Pour aller plus loin, j&apos;ai implémenté un{" "}
          <strong>Vision Transformer (ViT)</strong>, qui a encore amélioré la
          performance, atteignant un{" "}
          <span className="metric-highlight">R² de 0.95</span>, confirmant ainsi
          l&apos;efficacité de l&apos;approche.
        </p>

        <h3>4. Partie 2 : Isoler les Vaisseaux Sanguins (Segmentation)</h3>
        <p>
          Le second objectif était plus complexe : entraîner un modèle à{" "}
          <strong>prédire pour chaque pixel</strong> de l&apos;image de rétine
          s&apos;il appartient à un vaisseau sanguin (pixel blanc) ou à
          l&apos;arrière-plan (pixel noir).
        </p>

        <h4>Méthodologie et Métriques</h4>
        <ul>
          <li>
            <strong>Données :</strong> Le modèle prenait en entrée une{" "}
            <strong>image de rétine</strong> et devait prédire en sortie un{" "}
            <strong>masque binaire</strong> des vaisseaux sanguins.
          </li>
          <li>
            <strong>Modèle :</strong> L&apos;architecture <strong>U-Net</strong>
            , une référence pour la segmentation médicale.
          </li>
          <li>
            <strong>Métriques d&apos;évaluation :</strong> Le succès était
            mesuré par le score <strong>IoU (Intersection over Union)</strong>{" "}
            et le <strong>F1-Score (Dice)</strong>, qui évaluent la
            superposition entre le masque prédit et la vérité terrain.
          </li>
        </ul>

        <h4>Démarche d&apos;Ingénieur face à un Problème Complexe</h4>
        <p>
          Cette tâche a présenté des défis significatifs. La principale
          difficulté résidait dans la{" "}
          <strong>détection des vaisseaux les plus fins</strong>. Face à des
          résultats modestes, j&apos;ai appliqué une démarche itérative de
          résolution de problèmes en explorant de nombreuses pistes
          d&apos;amélioration : data augmentation, égalisation
          d&apos;histogramme (CLAHE), ajustement des hyperparamètres, etc. Ce
          processus, bien que n&apos;ayant pas atteint la perfection, a été
          extrêmement formateur sur la manière d&apos;aborder un problème de
          vision par ordinateur difficile.
        </p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen(segmentationResult.src)}
          >
            <Image
              src={segmentationResult}
              alt="Exemple de masque prédit par le modèle U-Net"
              width={300}
              height={300}
            />
            <figcaption>Exemple de prédiction du modèle U-Net</figcaption>
          </figure>
        </div>

        <h2>Apprentissages et Compétences Développées</h2>
        <p>
          Au-delà des résultats techniques, ce stage a été une expérience
          fondatrice.
        </p>
        <h4>Apprentissages Techniques</h4>
        <ul>
          <li>
            Maîtrise du <strong>pipeline de deep learning de A à Z</strong> : de
            la collecte de données au feature engineering et à l&apos;évaluation
            finale.
          </li>
          <li>
            Implémentation et fine-tuning de modèles de pointe :{" "}
            <strong>CNN (ResNet)</strong>, <strong>Transformers (ViT)</strong>{" "}
            et <strong>U-Net</strong>.
          </li>
          <li>
            Gestion des défis concrets de la{" "}
            <strong>segmentation d&apos;images médicales</strong> et des
            techniques d&apos;amélioration (data augmentation, pré-traitement).
          </li>
          <li>
            Utilisation d&apos;un environnement de calcul haute performance
            (iHPC) pour accélérer les entraînements.
          </li>
        </ul>
        <h4>Apprentissages Personnels et Culturels</h4>
        <ul>
          <li>
            <strong>Adaptation et Communication :</strong> Travailler et
            communiquer quotidiennement en anglais dans un environnement de
            recherche international.
          </li>
          <li>
            <strong>Autonomie et Rigueur :</strong> Gérer mon projet de manière
            autonome, planifier les tâches et présenter mes résultats chaque
            semaine.
          </li>
          <li>
            <strong>Immersion Culturelle :</strong> Découvrir et m&apos;adapter
            à la culture de travail et de vie en Australie, une expérience
            humaine inestimable.
          </li>
        </ul>
        <div className="project-navigation">
          <Link href="/career" className="cta-button secondary">
            ← Retour au Parcours
          </Link>
        </div>
      </section>

      {fullscreenImage && (
        <div className="fullscreenOverlay" onClick={closeFullscreen}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={fullscreenImage}
            alt="Vue plein écran"
            className="fullscreenContent"
          />
        </div>
      )}
    </>
  );
}
