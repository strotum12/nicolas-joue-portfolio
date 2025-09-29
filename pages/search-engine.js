import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SearchEnginePage() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <>
      <Head>
        <title>
          Projet : Moteur de Recherche (NLP) en Python - Nicolas Joué
        </title>
        <meta
          name="description"
          content="Développement d'un moteur de recherche from scratch en Python, avec implémentation de TF-IDF, pré-traitement NLP et évaluation de performance."
        />
      </Head>

      <section className="project-page-content">
        <h1>Développement d’un Moteur de Recherche en Python</h1>
        <p className="project-subtitle">
          Projet de Traitement du Langage Naturel (NLP)
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique (2 mois)
          </div>
          <div>
            <strong>Technologies :</strong> Python, Scikit-learn, NLTK, SpaCy
          </div>
          <div>
            <strong>Concepts Clés :</strong> TF-IDF, NLP, Cosine Similarity,
            Vectorisation
          </div>
          <div>
            <strong>Objectif :</strong> Implémenter un moteur de recherche
            complet, from scratch.
          </div>
        </div>

        <h2>Fonctionnalités Clés</h2>
        <ul>
          <li>
            Vectorisation <strong>TF-IDF</strong> via <code>scikit-learn</code>{" "}
            ou via une implémentation personnalisée.
          </li>
          <li>
            Pré-traitement NLP avancé : stop-words (NLTK), et comparaison entre{" "}
            <strong>lemmatisation</strong> (SpaCy) et <strong>stemming</strong>.
          </li>
          <li>
            Deux modes d’exécution : <code>query</code> (requêtes manuelles) et{" "}
            <code>test</code> (évaluation automatique).
          </li>
          <li>
            Mesure de similarité par <strong>similarité cosinus</strong>.
          </li>
          <li>
            Statistiques : accuracy <strong>« Top 1 »</strong> (le bon document
            est en première position) et <strong>« Top 5 »</strong> (le bon
            document est parmi les 5 premiers résultats), avec une verbosité
            réglable (<code>--verbosity 0|1|2</code>).
          </li>
        </ul>

        <h2>Approche Technique Détaillée</h2>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/PipelineMoteurDeRecherche.jpg")}
          >
            <Image
              src="/PipelineMoteurDeRecherche.jpg"
              alt="Diagramme du pipeline du projet"
              width={800}
              height={400}
              layout="responsive"
            />
            <figcaption>Figure 1 : Diagramme du pipeline du projet</figcaption>
          </figure>
        </div>

        <h3>1. Indexation (Phase de &quot;Build&quot;)</h3>
        <h4>a) Pré-traitement des documents</h4>
        <ol>
          <li>
            <strong>Lowercasing</strong> : tout en minuscules.
          </li>
          <li>
            <strong>Tokenisation</strong> via regex <code>\b\w[\w\-]+\b</code>{" "}
            (gère les mots composés).
          </li>
          <li>
            <strong>Filtrage des Stop-words</strong> : Suppression des mots
            courants (ex: &quot;le&quot;, &quot;de&quot;) avec NLTK.
          </li>
          <li>
            <strong>Lemmatisation</strong> (<code>spaCy</code>) <em>ou</em>{" "}
            <strong>stemming</strong> (<code>SnowballStemmer</code>).
            <br />
            → spaCy intègre la tokenisation ; le stemming ré-utilise la regex.
            <br />
            <em>
              <strong>Remarque :</strong> ⚠️ Certains lemmes (ex. « être », «
              avoir ») restent hors de la liste stop-words.
            </em>
          </li>
          <li>
            <strong>Sortie</strong> :<br />• <em>sk-learn</em> → chaîne «
            bag-of-words »<br />• <em>custom</em> → liste de tokens (contrôle
            intégral TF / IDF)
          </li>
          <li>
            <strong>Gain attendu</strong> : vocabulaire réduit, matrice moins
            clairsemée et regroupement morphologique.
          </li>
        </ol>

        <h4>b) Construction de la matrice TF-IDF</h4>
        <table className="compact-table">
          <thead>
            <tr>
              <th>Scikit-learn</th>
              <th>
                Custom (<code>TFIDF_Vectorizer</code>)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Matrice <code>scipy.sparse</code> optimisée
              </td>
              <td>Matrice NumPy dense</td>
            </tr>
            <tr>
              <td>IDF lissé par défaut</td>
              <td>
                IDF classique : <code>log((N+1)/(df+1))</code>
              </td>
            </tr>
            <tr>
              <td>Production-ready, très rapide</td>
              <td>Pédagogique, inspectable, personnalisable</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Recherche & Évaluation (Phase de &quot;Run&quot;)</h3>
        <h4>a) Pré-traitement d’une requête</h4>
        <p>
          Identique aux documents (lowercasing, tokenisation, stop-words,
          lemmatisation/stemming) pour garantir la cohérence des features.
        </p>
        <h4>b) Vectorisation & similarité</h4>
        <p>
          <code>vectorizer.transform([tokens])</code> projette la requête
          pré-traitée dans l’espace TF-IDF :
        </p>
        <ul>
          <li>
            Entrée : liste de <i>tokens</i> (ou bag-of-words){" "}
            <code>[w₁, …, wₙ]</code>.
          </li>
          <li>
            Sortie : vecteur ligne <strong>q</strong> de dimension 1 ×
            |Vocabulaire| (même dimension que chaque vecteur document).
          </li>
        </ul>
        <p>
          On calcule ensuite la similarité cosinus entre la requête{" "}
          <strong>q</strong> et chaque document <strong>d</strong> :
        </p>
        <pre>
          <code>cos(q, d) = (q · d) / (‖q‖ · ‖d‖)</code>
        </pre>
        <ul>
          <li>
            <strong>q</strong> : vecteur TF-IDF de la requête (1 × V).
          </li>
          <li>
            <strong>d</strong> : vecteur TF-IDF d’un document (1 × V).
          </li>
          <li>
            <code>q · d</code> : produit scalaire (similarité brute).
          </li>
          <li>
            <code>‖q‖</code> et <code>‖d‖</code> : normes L2 (mise à l’échelle).
          </li>
        </ul>
        <p>
          Les scores sont ensuite triés par ordre décroissant pour obtenir le
          ranking final des documents pertinents.
        </p>

        <h4>c) Modes d’exécution</h4>
        <ul>
          <li>
            <strong>
              Mode <code>query</code>
            </strong>{" "}
            : l’utilisateur tape sa requête et l’article le plus pertinent est
            affiché.
          </li>
          <li>
            <strong>
              Mode <code>test</code>
            </strong>{" "}
            : 100 requêtes sont évaluées automatiquement pour calculer
            l’accuracy Top 1 / Top 5.
          </li>
        </ul>
        <h5>Exemples de requêtes (mode test)</h5>
        <pre>
          <code>{`"langue roumain"      → wiki_066072.txt
"énergie marine"      → wiki_090261.txt
"où est tianjin"      → wiki_013117.txt`}</code>
        </pre>

        <h2>Résultats et Analyse</h2>
        <table className="compact-table results-table">
          <thead>
            <tr>
              <th>Scénario</th>
              <th>Accuracy Top 1</th>
              <th>Accuracy Top 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A : Scikit-learn + Lemmatisation</td>
              <td>
                <span className="metric-badge orange">82%</span>
              </td>
              <td>
                <span className="metric-badge green">97%</span>
              </td>
            </tr>
            <tr>
              <td>B : Scikit-learn + Stemming</td>
              <td>
                <span className="metric-badge green">85%</span>
              </td>
              <td>
                <span className="metric-badge green">97%</span>
              </td>
            </tr>
            <tr>
              <td>C : Custom + Lemmatisation</td>
              <td>
                <span className="metric-badge orange">81%</span>
              </td>
              <td>
                <span className="metric-badge green">97%</span>
              </td>
            </tr>
            <tr>
              <td>D : Custom + Stemming</td>
              <td>
                <span className="metric-badge green">85%</span>
              </td>
              <td>
                <span className="metric-badge green">97%</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Tous les scénarios atteignent une{" "}
          <strong>accuracy Top 5 de 97%</strong>. Les échecs systématiques (ex:{" "}
          <em>&quot;Elizabeth Ière&quot;</em> vs{" "}
          <em>&quot;Élisabeth Ire&quot;</em>) sont dus à des différences
          orthographiques ou sémantiques, montrant les limites d&apos;une
          approche purement lexicale.
        </p>
        <h4>1. Différences Stemming vs. Lemmatisation</h4>
        <p>
          Le stemming a amélioré certains cas (ex:{" "}
          <code>&quot;24 heures du Mans&quot;</code>), tandis que la
          lemmatisation a parfois conservé des stop-words (<em>être</em>,{" "}
          <em>avoir</em>) qui ont nui à la pertinence.
        </p>
        <h4>2. Comparaison des Vectoriseurs</h4>
        <p>
          Notre implémentation &quot;custom&quot; était transparente mais moins
          rapide et a échoué sur certaines requêtes où <code>scikit-learn</code>{" "}
          réussissait, suggérant des différences subtiles dans les optimisations
          d&apos;IDF.
        </p>

        <h2>Potentielles Améliorations</h2>
        <ul>
          <li>Recherche sémantique (SBERT, word embeddings).</li>
          <li>Détection et correction d’orthographe sur la requête.</li>
          <li>Index inversé persistant (SQLite, Whoosh, FAISS).</li>
          <li>
            Tokenisation par sous-mot pour mieux gérer les variantes lexicales.
          </li>
        </ul>

        <h2>Extrait de la Boucle Principale</h2>
        <pre>
          <code>{`# search_engine.py
if __name__ == "__main__":
    args = parser.parse_args()
    engine = SearchEngine(...)
    engine.create_vector_space()
    if args.mode == "query":
        while True:
            query = input("Tapez votre requête > ")
            # ...
            engine.search(query)
    else:
        engine.test_queries()`}</code>
        </pre>

        <div className="github-link-box">
          <p>
            Le code complet, incluant l&apos;implémentation du vectoriseur
            TF-IDF custom, est disponible sur GitHub.
          </p>
          <a
            href="https://github.com/nico916/best_search_engine-"
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
