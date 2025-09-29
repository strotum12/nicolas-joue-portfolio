import Head from "next/head";
import Link from "next/link";

export default function ComparateurPage() {
  return (
    <>
      <Head>
        <title>
          Projet : Comparateur de Profils de Joueurs (Streamlit) - Nicolas Joué
        </title>
        <meta
          name="description"
          content="Application web interactive développée avec Streamlit pour comparer visuellement des joueurs de football en utilisant une analyse PCA."
        />
      </Head>

      <section className="project-page-content">
        <h1>Comparateur de Profils de Joueurs (Football)</h1>
        <p className="project-subtitle">
          Projet Personnel de Data Science Interactive
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Personnel
          </div>
          <div>
            <strong>Technologies :</strong> Python, Streamlit, Pandas,
            Scikit-learn, Plotly
          </div>
          <div>
            <strong>Déploiement :</strong> Render
          </div>
          <div>
            <strong>Concepts Clés :</strong> PCA, Data App, Visualisation
            Interactive
          </div>
        </div>

        <p>
          Ce projet personnel est la continuité directe de mon{" "}
          <Link href="/project-pca-football-analysis" className="inline-link">
            analyse PCA initiale
          </Link>
          . L’objectif est de rendre cette étude interactive et exploitable
          grâce à <strong>Streamlit</strong> : comparer visuellement les joueurs
          professionnels en fonction de leurs statistiques sur la saison
          2022-2023.
        </p>

        <h2>Fonctionnalités clés</h2>
        <ul>
          <li>
            Calcul et visualisation de la variance expliquée par chaque
            composante PCA.
          </li>
          <li>
            Affichage des contributions (loadings) des variables sélectionnées
            sur PC1 et PC2.
          </li>
          <li>
            Sélection d’un joueur et affichage des 5 plus proches voisins
            statistiquement.
          </li>
          <li>
            Nuage de points interactif (PC1 vs PC2) avec annotations de zones
            conceptuelles.
          </li>
        </ul>

        <h2>Origine du projet</h2>
        <p>
          Lors de mon projet PCA, j’ai observé un nuage de points représentant
          les joueurs sur un plan 2D (PC1 vs PC2). Chaque point étant une
          représentation de leurs statistiques, j’ai eu l’idée d’utiliser la
          distance euclidienne entre deux points pour mesurer leur similarité.
          C’est ainsi qu’est né ce comparateur, qui met en lien la
          représentation statistique des joueurs et leur proximité de profil.
        </p>
        <p>
          Les statistiques sélectionnées pour cette PCA sont les suivantes :
        </p>
        <ul>
          <li>
            <strong>Shots</strong> : Total des tirs (hors penaltys)
          </li>
          <li>
            <strong>PasTotPrgDist</strong> : Distance totale des passes vers
            l’avant
          </li>
          <li>
            <strong>Assists</strong> : Passes décisives
          </li>
          <li>
            <strong>SCA</strong> : Actions menant à un tir
          </li>
          <li>
            <strong>Tkl+Int</strong> : Tacles + Interceptions
          </li>
          <li>
            <strong>ToAtt</strong> : Tentatives de dribbles
          </li>
        </ul>
        <p>
          Le projet a été développé sous <strong>VS Code</strong> en{" "}
          <strong>Python</strong> avec <strong>Streamlit</strong> pour
          l’interface. Il fonctionnait d’abord en local, mais est désormais
          hébergé en ligne grâce à <strong>Render</strong>.
        </p>

        <h2>Explorer directement le comparateur</h2>
        <div className="iframe-container">
          <iframe
            src="https://comparateur-de-profils.onrender.com"
            width="100%"
            height="800"
            style={{ border: "1px solid #ccc", borderRadius: 8 }}
            allowFullScreen
            title="Application Streamlit - Comparateur de profils"
          />
        </div>
        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          👉 Si l’aperçu ne fonctionne pas ou pour une meilleure expérience, 
          <a
            href="https://comparateur-de-profils.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            ouvrez l&apos;application dans un nouvel onglet
          </a>
          .
        </p>
        <p
          style={{
            fontSize: "0.9em",
            color: "#555",
            textAlign: "center",
            marginTop: "-0.5rem",
          }}
        >
          ⏳ L&apos;application peut mettre quelques secondes à se lancer si
          elle était en veille.
        </p>

        <h2>Possibilités d’amélioration</h2>
        <ul>
          <li>Proposer une comparaison sans passer par la PCA…</li>
          <li>Ajouter des filtres (âge, championnat…)</li>
          <li>Conserver un historique de comparaisons</li>
        </ul>

        <h2>Source des données</h2>
        <p>
          Les statistiques des joueurs proviennent du dataset{" "}
          <a
            href="https://www.kaggle.com/datasets/vivovinco/20222023-football-player-stats"
            target="_blank"
            rel="noopener noreferrer"
          >
            &quot;2022/2023 Football Player Stats&quot; sur Kaggle
          </a>
          , partagé sous licence{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY 4.0
          </a>
          . J’ai nettoyé, sélectionné et transformé ces données pour les adapter
          à mon analyse.
        </p>

        <div className="github-link-box">
          <p>Le code complet de l’application est disponible sur GitHub.</p>
          <a
            href="https://github.com/nico916/football-comparator"
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
    </>
  );
}
