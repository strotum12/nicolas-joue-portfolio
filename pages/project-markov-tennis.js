import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjetTennisPage() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <>
      <Head>
        <title>
          Projet Data Science : Modélisation d&apos;un match de Tennis - Nicolas
          Joué
        </title>
        <meta
          name="description"
          content="Analyse du système de score au tennis via la modélisation par chaînes de Markov en MATLAB, confrontée à des données réelles de l'ATP."
        />
      </Head>

      <section className="project-page-content">
        <h1>Modélisation d&apos;un match de Tennis par Chaînes de Markov</h1>
        <p className="project-subtitle">
          Projet de Data Science et d&apos;Analyse Statistique
        </p>

        <div className="project-key-info">
          <div>
            <strong>Type :</strong> Projet Académique
          </div>
          <div>
            <strong>Technologies :</strong> MATLAB
          </div>
          <div>
            <strong>Concepts Clés :</strong> Chaînes de Markov, Data Science,
            Probabilités
          </div>
          <div>
            <strong>Objectif :</strong> Analyser l&apos;impact du système de
            score sur l&apos;issue d&apos;un match.
          </div>
        </div>

        <h2>Contexte et Problématique</h2>
        <p>
          Ce projet explore une question fondamentale du tennis à travers le
          prisme de la science des données :{" "}
          <strong>
            le système de score amplifie-t-il ou diminue-t-il la différence de
            compétence entre deux joueurs ?
          </strong>{" "}
          Pour y répondre, j&apos;ai modélisé un match de tennis (jeu, set et
          match) à l&apos;aide de <strong>chaînes de Markov</strong> en{" "}
          <strong>MATLAB</strong>, avant de confronter mon modèle aux
          statistiques réelles de joueurs professionnels.
        </p>

        <h2>Aperçu rapide</h2>
        <ul>
          <li>
            Probabilité de victoire (jeu / set / match) en fonction de{" "}
            <em>p</em>
          </li>
          <li>
            <em>dP/dp</em> : l’« effet amplificateur » du système de score
          </li>
          <li>Durée moyenne (nombre de points, de jeux, de sets)</li>
          <li>
            Validation empirique sur +13 000 points ATP (Nadal, Simon, Moutet)
          </li>
        </ul>

        <h2>
          Partie 1 : La Modélisation - Traduire le Tennis en Mathématiques
        </h2>
        <p>
          La première étape, et la plus fondamentale, était de construire un
          modèle mathématique fiable du jeu, du set et du match.
        </p>

        <h3>1.1 - Le Jeu : La Brique Élémentaire</h3>
        <h4>Pourquoi une Chaîne de Markov ?</h4>
        <p>
          Un jeu de tennis est une séquence de scores où le prochain état ne
          dépend que du score actuel. Cela correspond parfaitement à un{" "}
          <strong>processus de Markov</strong>, ce qui m&apos;a permis de
          modéliser le jeu avec une seule variable : <em>p</em>, la probabilité
          qu&apos;un joueur gagne un point.
        </p>
        <h4>La Construction du Modèle</h4>
        <p>
          J&apos;ai défini 18 états de transition (les scores) et 2 états
          d&apos;absorption (Victoire/Défaite), formalisés dans une{" "}
          <strong>matrice de transition de 20x20</strong>.
        </p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/tennis-markov-chain-game.jpg")}
          >
            <Image
              src="/tennis-markov-chain-game.jpg"
              alt="Schéma de la chaîne de Markov pour un jeu"
              width={500}
              height={375}
            />
            <figcaption>Mon schéma initial de la chaîne de Markov</figcaption>
          </figure>
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/tennis-game-matrix.jpg")}
          >
            <Image
              src="/tennis-game-matrix.jpg"
              alt="Matrice de transition 20x20 pour un jeu"
              width={500}
              height={375}
            />
            <figcaption>
              Sa représentation matricielle, cœur du modèle
            </figcaption>
          </figure>
        </div>

        <h3>1.2 - Le Set et le Match : La Montée en Échelle</h3>
        <p>
          J&apos;ai appliqué la même logique au <strong>set</strong> (41 états)
          et au <strong>match</strong> (11 états). La création manuelle étant
          impossible, j&apos;ai développé des scripts en MATLAB pour générer ces
          matrices de transition automatiquement.
        </p>

        <h2>Partie 2 : L&apos;Analyse Théorique - Ce que Disent les Modèles</h2>

        <h3>2.1 - Probabilité de Victoire : Une Première Hiérarchie</h3>
        <h4>Pourquoi cette analyse ?</h4>
        <p>
          En traçant la probabilité de gagner un jeu, un set et un match en
          fonction de <em>p</em>, on observe que ces probabilités augmentent
          naturellement avec la compétence (<em>p</em>). Dans ce modèle,{" "}
          <em>p</em> représente la probabilité de gagner l&apos;unité de base :
          le point pour le jeu, le jeu pour le set, et le set pour le match.
          Cependant, plus la courbe est raide autour de <strong>p = 0.5</strong>
          , plus le système de score agit comme un{" "}
          <strong>amplificateur</strong> : une petite différence de niveau entre
          deux joueurs se traduit par un écart important dans la probabilité de
          victoire.
        </p>

        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() =>
              openFullscreen("/tennis-win-probability-comparison.png")
            }
          >
            <Image
              src="/tennis-win-probability-comparison.png"
              alt="Graphique comparant les probabilités de victoire"
              width={500}
              height={375}
            />
            <figcaption>Probabilités de victoire</figcaption>
          </figure>
        </div>
        <p>
          <em>
            La courbe du <strong>set</strong> est la plus raide, suivie de celle
            du <strong>jeu</strong>, puis du <strong>match</strong> (dans ce
            modèle simplifié). Cela suggère que le set est le niveau où les
            petites différences de compétence ont le plus d&apos;impact.
          </em>
        </p>

        <h3>
          2.2 - L&apos;Effet Amplificateur : La Dérivée comme Mesure
          d&apos;Impact
        </h3>
        <h4>Pourquoi cette analyse ?</h4>
        <p>
          Pour quantifier précisément cette &quot;raideur&quot;, j&apos;ai
          calculé la <strong>dérivée</strong> de chaque courbe. Cette valeur
          représente l&apos;effet amplificateur : de combien les chances de
          gagner augmentent pour une petite amélioration de <em>p</em>.
        </p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/tennis-amplifier-comparison.png")}
          >
            <Image
              src="/tennis-amplifier-comparison.png"
              alt="Graphique comparant les probabilités de victoire"
              width={500}
              height={375}
            />
            <figcaption>Probabilités de victoire</figcaption>
          </figure>
        </div>

        <p>
          <em>
            L&apos;effet amplificateur est maximal à <strong>p=0.5</strong> pour
            tous les niveaux. Le set est le plus grand amplificateur pour les
            joueurs de niveau très proche. Fait intéressant, les courbes se
            croisent vers p≈0.65, indiquant une dynamique plus complexe pour les
            joueurs ayant déjà un avantage.
          </em>
        </p>

        <p>
          <strong>Conclusion :</strong> Le set est le plus grand amplificateur
          pour les joueurs de niveau très proche.
        </p>

        <h3>
          2.3 - Durée de Vie et Situations d&apos;Égalité : Les Mécanismes de
          l&apos;Amplification
        </h3>
        <h4>Pourquoi cette analyse ?</h4>
        <p>
          L’amplification est d’autant plus marquée que la rencontre est longue
          : plus il y a de points joués, plus une petite différence de niveau (
          <em>p</em>) entre les joueurs peut s’accumuler et influer
          significativement sur l’issue. C’est pourquoi j’ai analysé la{" "}
          <strong>durée moyenne</strong> d’un jeu, d’un set et d’un match, ainsi
          que la <strong>fréquence des situations d’égalité</strong> (comme le
          score 40–40), où la pression est maximale.
        </p>
        <h4>Comment je l&apos;ai fait ?</h4>
        <p>
          La durée de vie a été calculée via la{" "}
          <strong>matrice fondamentale N = (I - Q)⁻¹</strong>. Pour les
          égalités, j&apos;ai simulé des milliers de parties.
        </p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/tennis-lifespan-graph.png")}
          >
            <Image
              src="/tennis-lifespan-graph.png"
              alt="Durée de vie des différentes structures"
              width={500}
              height={375}
            />
            <figcaption>
              Les rencontres sont les plus longues à p=0.5.
            </figcaption>
          </figure>
        </div>

        <h4>Focus sur le &quot;Deuce&quot; (40-40)</h4>
        <p>
          La règle du &quot;deuce&quot; (gagner par deux points d&apos;écart)
          est un mécanisme d&apos;amplification en soi. Mon analyse a montré que
          même en partant de 40-40, l&apos;effet amplificateur reste maximal à
          p=0.5, confirmant son rôle crucial. (Voir l&apos;analyse complète avec
          rapport + codes sur mon{" "}
          <a
            href="https://github.com/nico916/markov-tennis-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            dépôt GitHub)
          </a>
        </p>

        <h4>Focus sur les Scores d&apos;un Set : La Simulation par Heatmap</h4>
        <p>
          Pour visualiser concrètement comment un léger avantage se traduit dans
          un set, j&apos;ai réalisé une simulation de 10 000 sets en considérant
          un <strong>Joueur A</strong> avec une probabilité <em>p</em>= 0.55 de
          gagner chaque jeu. Le résultat est une <strong>heatmap</strong> (carte
          de chaleur) qui montre les scores finaux les plus probables.
        </p>
        <div className="project-image-gallery">
          <figure
            className="image-item clickable-image-container"
            onClick={() => openFullscreen("/tennis-heatmap-set-p055.png")}
          >
            <Image
              src="/tennis-heatmap-set-p055.png"
              alt="Heatmap des scores finaux d'un set pour p=0.55"
              width={500}
              height={375}
            />
            <figcaption>
              Heatmap pour p=0.55 pour le Joueur A et p=0.45 pour le Joueur B
            </figcaption>
          </figure>
        </div>
        <p>
          <em>
            Heatmap pour un <strong>Joueur A</strong> avec une probabilité de
            gagner un jeu de p=0.55. On voit clairement que le score le plus
            fréquent est <strong>6-3</strong>. Cela illustre parfaitement
            comment un avantage de seulement 5% se transforme en une victoire de
            set avec une marge confortable.
          </em>
        </p>

        <h2>Partie 3 : Le Verdict - Confrontation avec la Réalité</h2>
        <p>
          J&apos;ai testé le modèle sur les statistiques de carrière de{" "}
          <strong>Rafael Nadal</strong>, <strong>Gilles Simon</strong> et{" "}
          <strong>Corentin Moutet</strong>, en comparant les prédictions du
          modèle à leurs résultats réels (données de{" "}
          <a
            href="https://www.tennisabstract.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tennis Abstract
          </a>
          ).
        </p>
        <p>
          Pour chaque joueur, j&apos;ai pris son % de points gagnés comme{" "}
          <em>p</em> et j&apos;ai comparé la prédiction de mon modèle à son % de
          jeux/sets/matchs gagnés réel.
        </p>
        <div className="table-wrapper">
          <table className="results-table-tennis">
            <thead>
              <tr>
                <th>Niveau du joueur</th>
                <th>Joueur</th>
                <th>Prédiction</th>
                <th>Réalité</th>
                <th>Écart</th>
              </tr>
            </thead>
            <tbody>
              <tr className="level-row">
                <td colSpan="5">Jeu</td>
              </tr>
              <tr>
                <td>Exceptionnel</td>
                <td>Nadal</td>
                <td>60.9 %</td>
                <td>59.7 %</td>
                <td className="good">+1.2 %</td>
              </tr>
              <tr>
                <td>Bon</td>
                <td>Simon</td>
                <td>51.8 %</td>
                <td>51.3 %</td>
                <td className="excellent">+0.5 %</td>
              </tr>
              <tr>
                <td>Moyen</td>
                <td>Moutet</td>
                <td>46.5 %</td>
                <td>47.1 %</td>
                <td className="excellent">−0.6 %</td>
              </tr>
              <tr className="level-row">
                <td colSpan="5">Set</td>
              </tr>
              <tr>
                <td>Exceptionnel</td>
                <td>Nadal</td>
                <td>75.6 %</td>
                <td>77.1 %</td>
                <td className="good">−1.5 %</td>
              </tr>
              <tr>
                <td>Bon</td>
                <td>Simon</td>
                <td>53.7 %</td>
                <td>53.6 %</td>
                <td className="excellent">+0.1 %</td>
              </tr>
              <tr>
                <td>Moyen</td>
                <td>Moutet</td>
                <td>41.8 %</td>
                <td>43.2 %</td>
                <td className="good">−1.4 %</td>
              </tr>
              <tr className="level-row">
                <td colSpan="5">Match (Grand Chelem)</td>
              </tr>
              <tr>
                <td>Exceptionnel</td>
                <td>Nadal</td>
                <td>94.7 %</td>
                <td>87.3 %</td>
                <td className="warn">+7.4 %</td>
              </tr>
              <tr>
                <td>Bon</td>
                <td>Simon</td>
                <td>60.6 %</td>
                <td>59.9 %</td>
                <td className="excellent">+0.7 %</td>
              </tr>
              <tr>
                <td>Moyen</td>
                <td>Moutet</td>
                <td>43.1 %</td>
                <td>47.1 %</td>
                <td className="good">−4.0 %</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Les prédictions pour le <strong>jeu</strong> et le{" "}
          <strong>set</strong> sont remarquablement précises, validant fortement
          le modèle. Pour le <strong>match</strong>, les écarts augmentent, ce
          qui s&apos;explique par les limites du modèle, notamment
          l&apos;hypothèse de <em>p</em> constant et le filtrage des
          statistiques (uniquement les Grands Chelems).
        </p>

        <h2>Conclusion Finale et Limites du Modèle</h2>
        <p>
          <strong>
            Oui, le système de score au tennis est un puissant amplificateur de
            compétence <u>lorsque les joueurs sont de niveau proche</u>, mais
            cet effet s’atténue fortement en cas de grand écart entre eux.
          </strong>{" "}
          Mon analyse, de la modélisation à la validation, le confirme. Chaque{" "}
          <strong>palier du système de score</strong> (point → jeu → set →
          match) est conçu pour accentuer les petites différences de niveau.
        </p>

        <h3>Limites et Perspectives</h3>
        <p>Ce modèle est une simplification. Les principales limites sont :</p>
        <ul>
          <li>
            <strong>
              Probabilité <em>p</em> constante :
            </strong>{" "}
            Ne prend pas en compte la fatigue, la pression ou la surface.
          </li>
          <li>
            <strong>Absence de distinction service/retour :</strong> Le service
            est un avantage majeur non modélisé ici.
          </li>
          <li>
            <strong>Hiérarchie non dynamique :</strong> Chaque niveau (jeu, set,
            match) est modélisé indépendamment avec une nouvelle valeur de{" "}
            <em>p</em>, sans héritage des niveaux inférieurs. Cela conduit à une
            conclusion trompeuse : le <strong>match</strong> semble amplifier
            moins que le set, alors qu’en réalité il cumule les effets du set et
            du jeu. Un modèle hiérarchique complet montrerait qu’il est au
            contraire l’amplificateur ultime.
          </li>
        </ul>
        <p>
          Intégrer ces éléments serait une suite logique passionnante pour
          rendre le modèle encore plus fidèle à la réalité complexe du tennis
          professionnel.
        </p>

        <div className="github-link-box">
          <p>
            Le code MATLAB et le rapport d&apos;analyse complet sont disponibles
            sur GitHub.
          </p>
          <a
            href="https://github.com/nico916/markov-tennis-analysis"
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
