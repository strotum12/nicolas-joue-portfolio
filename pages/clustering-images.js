import Head from "next/head";
import Link from "next/link";

export default function ClusteringImagesPage() {
  return (
    <>
      <Head>
        <title>
          Projet : Segmentation d&apos;Images par Clustering - Nicolas Joué
        </title>
        <meta
          name="description"
          content="Projet de Machine Learning non supervisé comparant K-means et DBSCAN pour la segmentation d'images, avec une analyse approfondie des descripteurs visuels."
        />
      </Head>

      <section className="project-page-content">
        <h1>Segmentation d&apos;Images par Clustering</h1>
        <p className="project-subtitle">
          Projet de Machine Learning Non Supervisé
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique
          </div>
          <div>
            <strong>Technologies :</strong> Python, JupyterLab, Scikit-learn,
            Pandas
          </div>
          <div>
            <strong>Concepts Clés :</strong> Clustering, Feature Engineering,
            K-means, DBSCAN
          </div>
          <div>
            <strong>Objectif :</strong> Maîtriser le pipeline complet d&apos;un
            projet IA.
          </div>
        </div>

        <h2>Contexte et Objectifs</h2>
        <p>
          Ce projet, mené sur JupyterLab, consistait à segmenter un jeu de 200
          images réparties en 20 catégories alimentaires. L&apos;objectif était
          de maîtriser le pipeline complet d&apos;un projet de Machine Learning
          : du pré-traitement des données à l&apos;évaluation des modèles, en
          passant par l&apos;étape cruciale du feature engineering.
        </p>

        <h2>Approche Méthodologique</h2>
        <p>
          La performance du clustering dépend fortement de la manière dont les
          images sont représentées numériquement (les descripteurs) et de
          l&apos;algorithme choisi. J&apos;ai donc mené une analyse comparative
          sur ces deux axes.
        </p>

        <h3>1. Comparaison des Descripteurs Visuels</h3>
        <p>
          Le choix du descripteur est crucial car il détermine
          l&apos;information que le modèle utilisera pour regrouper les images.
        </p>
        <div className="table-wrapper">
          <table className="compact-table">
            <thead>
              <tr>
                <th>Descripteur</th>
                <th>Ce qu&apos;il capture</th>
                <th>Atouts & Limites</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>HoG</strong>
                </td>
                <td>Formes & textures via les gradients</td>
                <td>
                  Robuste aux variations de couleur, mais sensible à la
                  rotation.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Histogramme HSV</strong>
                </td>
                <td>Distribution des couleurs</td>
                <td>
                  Indépendant de la luminosité, mais perd l&apos;information
                  spatiale.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Filtres de Gabor</strong>
                </td>
                <td>Textures à différentes fréquences</td>
                <td>
                  Très précis pour les textures, mais génère des vecteurs longs.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>2. Comparaison des Modèles de Clustering</h3>
        <p>
          J&apos;ai implémenté deux algorithmes aux logiques fondamentalement
          différentes.
        </p>
        <div className="table-wrapper">
          <table className="compact-table">
            <thead>
              <tr>
                <th>Critère</th>
                <th>K-means</th>
                <th>DBSCAN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Principe</strong>
                </td>
                <td>Minimiser la variance intra-cluster (centroïdes)</td>
                <td>Regrouper les points par densité (voisinage)</td>
              </tr>
              <tr>
                <td>
                  <strong>Forme des clusters</strong>
                </td>
                <td>Suppose des formes sphériques</td>
                <td>Peut trouver des formes arbitraires</td>
              </tr>
              <tr>
                <td>
                  <strong>Gestion du bruit</strong>
                </td>
                <td>Assigne tous les points à un cluster</td>
                <td>Capable d&apos;identifier les outliers (bruit)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>3. Métriques d&apos;Évaluation</h3>
        <p>
          Pour évaluer la qualité des clusters de manière non supervisée,
          j&apos;ai utilisé plusieurs métriques :
        </p>
        <ul>
          <li>
            <strong>Score de Silhouette :</strong> Mesure à quel point un point
            est similaire à son propre cluster par rapport aux autres clusters.
          </li>
          <li>
            <strong>AMI (Adjusted Mutual Information) :</strong> Compare les
            clusters trouvés aux vraies catégories (quand elles sont connues) en
            corrigeant le hasard.
          </li>
          <li>
            <strong>Méthode du coude :</strong> Une heuristique visuelle pour
            estimer le nombre optimal de clusters (K) pour K-means.
          </li>
        </ul>

        <h2>Résultats et Analyse des Expériences</h2>
        <p>
          Le tableau suivant résume les résultats des principales expériences
          menées.
        </p>

        <div className="table-wrapper">
          <table className="compact-table results-table">
            <thead>
              <tr>
                <th>Expérience</th>
                <th>Modèle</th>
                <th>Descripteurs</th>
                <th>Métriques Clés</th>
                <th>Interprétation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Couleur pure</td>
                <td>K-means (K=20)</td>
                <td>HSV</td>
                <td>Silh. 0,28</td>
                <td>Sépare bien les fruits, mais confond les pâtisseries.</td>
              </tr>
              <tr>
                <td>Forme pure</td>
                <td>K-means (K=20)</td>
                <td>HoG</td>
                <td>Silh. 0,33</td>
                <td>
                  Regroupe les gâteaux par leurs contours, mais mélange les
                  fruits.
                </td>
              </tr>
              <tr className="best-result">
                <td>
                  <strong>Meilleur compromis</strong>
                </td>
                <td>
                  <strong>K-means (K=20)</strong>
                </td>
                <td>
                  <strong>HoG + HSV</strong>
                </td>
                <td>
                  <strong>Silh. 0,48 • AMI 0,72</strong>
                </td>
                <td>
                  <strong>
                    19/20 catégories bien regroupées. Le coude était net à K=20.
                  </strong>
                </td>
              </tr>
              <tr>
                <td>Détection de densité</td>
                <td>DBSCAN</td>
                <td>HoG + HSV</td>
                <td>4% d&apos;outliers</td>
                <td>
                  Isole un micro-cluster de &quot;biscuits chocolatés&quot; et
                  gère bien le bruit.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Bilan et Apprentissages</h2>
        <p>
          Ce projet a confirmé que pour un problème de classification avec un
          nombre de catégories connu, la combinaison{" "}
          <strong>HoG + HSV + K-means</strong> offre un excellent équilibre
          performance/simplicité. Pour des problèmes plus exploratoires où le
          nombre de groupes est inconnu ou en présence de bruit,{" "}
          <strong>DBSCAN</strong> est une alternative plus robuste.
        </p>

        <div className="project-navigation">
          <Link href="/projects" className="cta-button secondary">
            ← Retour à la liste des projets
          </Link>
        </div>
      </section>
    </>
  );
}
