import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PassMapPage() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <>
      <Head>
        <title>
          Projet : Outil &quot;Pass Map&quot; Football (Streamlit) - Nicolas
          Joué
        </title>
        <meta
          name="description"
          content="Application web interactive développée avec Streamlit pour visualiser les réseaux de passes d'une équipe de football à partir de données StatsBomb."
        />
      </Head>

      <section className="project-page-content">
        <h1>Outil « Pass Map » pour le Football</h1>
        <p className="project-subtitle">
          Projet Personnel de Data Visualisation Sportive
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Personnel
          </div>
          <div>
            <strong>Technologies :</strong> Python, Streamlit, Pandas,
            Matplotlib
          </div>
          <div>
            <strong>Données :</strong> StatsBomb (JSON)
          </div>
          <div>
            <strong>Focus :</strong> Data Viz, Analyse Tactique, Application Web
          </div>
        </div>

        <p>
          Projet développé en <strong>Python</strong> avec{" "}
          <strong>Streamlit</strong>, à partir d’un fichier{" "}
          <code>event.json</code> <em>StatsBomb</em> (ici : un match du FC
          Barcelone vs Alavés — saison
          <strong> 2017-2018</strong>). Le rendu terrain s’appuie sur{" "}
          <code>mplsoccer.Pitch</code> pour dessiner un rectangle réglementaire.
          L’analyse actuelle se concentre uniquement sur le FC Barcelone.
        </p>

        <h2>Pourquoi utiliser une Pass Map ?</h2>
        <ul>
          <li>
            <strong>Vision instantanée</strong> des circuits préférentiels (qui
            sert Busquets ? où démarre Alba ?).
          </li>
          <li>
            <strong>Recrutement / scouting</strong> : comparer l’influence
            balle-au-pied d’un joueur cible avec ses homologues.
          </li>
          <li>
            <strong>Préparation de match</strong> : identifier les liens forts à
            presser (Messi ↔ Alba) ou les zones laissées libres.
          </li>
          <li>
            <strong>Communication</strong> : visuel prêt à l’emploi pour un
            staff technique ou un rapport d’analyste de données.
          </li>
        </ul>

        <h2>Fonctionnalités clés</h2>
        <ul>
          <li>
            <strong>3 modes d’analyse</strong> : Échanges totaux, Passes faites
            (➡️) et Passes reçues (⬅️).
          </li>
          <li>
            <strong>Terrain interactif</strong> dessiné avec{" "}
            <code>mplsoccer.Pitch</code> : chaque joueur est placé sur sa
            position moyenne (calcul x̄, ȳ des passes début/fin).
          </li>
          <li>
            <strong>Lecture visuelle immédiate</strong> :
            <ul>
              <li>
                Taille / couleur des nœuds → degré d’implication du joueur.
              </li>
              <li>
                Épaisseur + dégradé de couleur → volume de passes entre deux
                coéquipiers.
              </li>
            </ul>
          </li>
          <li>
            <strong>Filtre de densité</strong> : slider pour masquer les liens
            secondaires.
          </li>
          <li>
            <strong>Focus joueur</strong> (selectbox) : top 3 partenaires,
            passes totales, distance moyenne.
          </li>
        </ul>

        <h2>Pipeline de traitement</h2>
        <ol>
          <li>
            Chargement d’un fichier <code>.json</code> StatsBomb.
          </li>
          <li>
            Normalisation des données imbriquées via{" "}
            <code>pandas.json_normalize</code>.
          </li>
          <li>Filtrage des passes et des titulaires uniquement.</li>
          <li>
            Calculs statistiques (coordonnées moyennes, distance, volume, etc.).
          </li>
          <li>
            Affichage interactif sur terrain avec <code>mplsoccer.Pitch</code>.
          </li>
        </ol>
        <p>
          L’ensemble est mis en cache grâce à <code>@st.cache_data</code> pour
          assurer des temps de réponse rapides.
        </p>

        <h2>Aperçu de l&apos;Application</h2>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/PassMapEchanges.png")}
          >
            <Image
              src="/PassMapEchanges.png"
              alt="Pass Map Barcelone 2017-2018 – échanges totaux"
              width={500}
              height={375}
            />
            <figcaption>
              Mode « Passes faites » avec un filtre à ≥ 10 passes.
            </figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/StatsDetaillees.png")}
          >
            <Image
              src="/StatsDetaillees.png"
              alt="Statistiques détaillées – Messi"
              width={500}
              height={375}
            />
            <figcaption>
              Exemple de statistiques détaillées pour Messi.
            </figcaption>
          </figure>
        </div>

        <h2>Tester en ligne</h2>
        <div className="iframe-container">
          <iframe
            src="https://pass-map-football.onrender.com/"
            width="100%"
            height="800"
            style={{ border: "1px solid #ccc", borderRadius: 8 }}
            allowFullScreen
            title="Application Streamlit - Pass Map Football"
          />
        </div>
        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          👉 Si l’aperçu ne fonctionne pas ou pour une meilleure expérience, 
          <a
            href="https://pass-map-football.onrender.com"
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

        <h2>Extrait de Code : Fusion des échanges A↔B</h2>
        <pre>
          <code>{`from collections import defaultdict

undirected = defaultdict(int)   # (min(A,B), max(A,B)) -> total
for row in df_pass.itertuples():
    key = tuple(sorted((row.passeur_id, row.receveur_id)))
    undirected[key] += 1`}</code>
        </pre>

        <h2>Pistes d’amélioration</h2>
        <ul>
          <li>
            <strong>Meilleure lisibilité</strong> : espacer légèrement les
            flèches pour éviter les chevauchements.
          </li>
          <li>
            <strong>Multi-équipe</strong> : ajouter la possibilité d’afficher
            aussi l’adversaire.
          </li>
          <li>
            <strong>Filtrage temporel</strong> : visualiser les passes par
            période (0–15’, 15–30’…).
          </li>
          <li>
            <strong>Agrégation multi-matchs</strong> : comparer un même joueur
            sur plusieurs rencontres.
          </li>
          <li>
            <strong>Indicateurs tactiques avancés</strong> : calcul du{" "}
            <em>pass network centrality</em>, détection des{" "}
            <em>switches of play</em>, etc.
          </li>
          <li>
            <strong>Export PDF ou PNG</strong> personnalisé pour usage dans un
            rapport de match.
          </li>
          <li>
            <strong>Assistant IA intégré</strong> : chatbot capable de répondre
            à des questions comme « Qui est le joueur le plus central ? ».
          </li>
        </ul>

        <h2>Données utilisées</h2>
        <p>
          Le fichier <code>events.json</code> est un export{" "}
          <strong>StatsBomb</strong> brut. Données issues du dépôt open-source
          StatsBomb :{" "}
          <a
            href="https://github.com/statsbomb/open-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/statsbomb/open-data
          </a>
          .
        </p>

        <div className="github-link-box">
          <p>
            Tout le projet (Streamlit + scripts Python) est disponible sur
            GitHub.
          </p>
          <a
            href="https://github.com/nico916/pass-map-football"
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
