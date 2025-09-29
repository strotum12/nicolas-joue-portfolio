import Head from "next/head";
import Link from "next/link";

export default function StageDassaultPage() {
  return (
    <>
      <Head>
        <title>
          Projet : Stage Développeur IA chez Dassault Systèmes - Nicolas Joué
        </title>
        <meta
          name="description"
          content="Découvrez en détail mon stage de fin d'études chez Dassault Systèmes. Conception et développement d'un agent conversationnel multi-agents avec LangChain et LangGraph pour la plateforme 3DEXPERIENCE."
        />
      </Head>

      <section className="project-page-content">
        <h1>
          Stage Développeur IA : Agent Conversationnel pour la 3DEXPERIENCE
        </h1>
        <p className="project-subtitle">
          Dassault Systèmes, Vélizy-Villacoublay
        </p>

        <div className="project-key-info">
          <div>
            <strong>Rôle :</strong> Stagiaire Développeur IA (Référent IA sur le
            projet)
          </div>
          <div>
            <strong>Durée :</strong> 6 mois (Avril 2025 - Septembre 2025)
          </div>
          <div>
            <strong>Équipe :</strong> R&D ENOVIA
          </div>
          <div>
            <strong>Technologies :</strong> Python, LangChain, LangGraph, Flask,
            Pydantic, LLMs (Mistral)
          </div>
        </div>

        <h2>Contexte et Exigences Fonctionnelles</h2>
        <p>
          Ce stage s&apos;inscrit dans le programme &quot;Virtual
          Companion&quot; de Dassault Systèmes. La mission était de développer
          un agent intelligent de A à Z. Le projet reposait sur trois exigences
          fonctionnelles fondamentales :
        </p>
        <ul>
          <li>
            <strong>Comprendre :</strong> Interpréter des requêtes complexes en
            langage naturel, même si elles contiennent plusieurs intentions.
          </li>
          <li>
            <strong>Agir :</strong> Exécuter de manière fiable des actions
            concrètes et pertinentes dans l&apos;application via des web
            services.
          </li>
          <li>
            <strong>Répondre :</strong> Fournir un feedback clair et
            systématique à l&apos;utilisateur, qu&apos;il s&apos;agisse
            d&apos;un succès ou d&apos;une erreur.
          </li>
        </ul>

        <h2>Mon Rôle de Référent IA : Autonomie et Architecture</h2>
        <p>
          En tant que seul profil spécialisé en IA sur ce projet, j&apos;ai eu
          l&apos;opportunité et la responsabilité de le piloter de A à Z. Mon
          rôle a dépassé celui de simple développeur pour endosser celui de{" "}
          <strong>référent technique IA</strong>. J&apos;ai mené ce projet en
          grande autonomie, en faisant les choix d&apos;architecture, en
          sollicitant de mon propre gré les équipes expertes pour débloquer des
          situations complexes, et en assurant la montée en compétence de mon
          équipe sur ces nouvelles technologies.
        </p>

        <h4>Le Choix d&apos;une Architecture Multi-Agents</h4>
        <p>
          L&apos;un des premiers choix structurants a été de définir
          l&apos;architecture de l&apos;agent. L&apos;objectif était de créer un
          système <strong>fiable et scalable</strong>, capable de gérer un
          nombre croissant d&apos;outils. Après étude, j&apos;ai écarté
          l&apos;approche à agent unique (simple mais peu fiable avec de
          nombreux outils) pour implémenter une{" "}
          <strong>architecture multi-agents</strong>, inspirée par les
          meilleures pratiques internes. Bien que plus complexe, cette approche
          garantit la robustesse en spécialisant les tâches : un agent
          &quot;routeur&quot; analyse la requête et la délègue à des sous-agents
          experts, chacun gérant un périmètre d&apos;outils restreint.
        </p>

        <h2>Implémentation Technique : un Écosystème Complet</h2>

        <h3>Architecture Multi-Agents avec LangGraph</h3>
        <p>
          Le cœur du système est un graphe d&apos;états cyclique implémenté avec{" "}
          <strong>LangGraph</strong>. Cette boucle de raisonnement permet une
          autonomie supervisée où plusieurs composants collaborent :
        </p>
        <ul>
          <li>
            Un <strong>agent &quot;Planificateur&quot;</strong> (appel LLM) qui
            analyse la requête pour en extraire et segmenter les intentions
            (s&apos;il en existe plusieurs). Il identifie ainsi le domaine de
            chaque tâche et détermine le sous-agent expert à solliciter.
          </li>
          <li>
            Un <strong>nœud &quot;Orchestrateur&quot;</strong> (logique Python
            pure) qui suit ce plan et distribue les tâches aux agents
            compétents.
          </li>
          <li>
            Des <strong>sous-agents spécialisés</strong> (appel LLM), chacun
            équipé d&apos;outils spécifiques. Ils réalisent une tâche précise en
            utilisant la technique du <strong>Tool Calling</strong> pour décider
            quelle fonction appeler.
          </li>
          <li>
            Un <strong>nœud &quot;Synthétiseur&quot; (Joiner)</strong> qui
            agrège les résultats des outils pour formuler une réponse finale à
            l&apos;utilisateur.
          </li>
        </ul>

        <h3>Prompt Engineering et Intégration d&apos;APIs</h3>
        <p>
          La fiabilité de l&apos;agent repose sur deux piliers techniques que
          j&apos;ai mis en place : le contrôle du LLM et l&apos;intégration aux
          services de l&apos;entreprise.
        </p>
        <h4>1. Prompt Engineering et Contrôle du LLM</h4>
        <p>
          Chaque appel au LLM (Mistral, via une API interne de type OpenAI) est
          minutieusement structuré grâce à des{" "}
          <strong>chaînes de prompts</strong> (PromptTemplate). Pour garantir
          des réponses fiables et exploitables, j&apos;utilise{" "}
          <strong>Pydantic</strong> pour définir des schémas de sortie JSON
          stricts directement dans le prompt. Le modèle est ainsi contraint de
          répondre dans un format prévisible, que je peux ensuite parser et
          valider facilement.
        </p>
        <h4>2. Intégration aux Web Services et API Flask</h4>
        <p>
          L&apos;un des défis majeurs a été l&apos;intégration avec les web
          services complexes de la plateforme 3DEXPERIENCE. Cela a nécessité de
          gérer l&apos;
          <strong>
            authentification, la récupération et le rafraîchissement de jetons
            de session
          </strong>
          , et d&apos;orchestrer des appels à différents domaines. Pour
          encapsuler cette complexité et fournir une interface propre au reste
          du système, j&apos;ai développé une <strong>API Flask</strong>. Elle
          sert de pont central, permettant au front-end de communiquer avec
          l&apos;agent LangGraph, et à l&apos;agent d&apos;accéder aux
          fonctionnalités de Dassault Systèmes via des &quot;outils&quot;
          simples et sécurisés.
        </p>

        <h2>Au-delà du Code : une Démarche d&apos;Ingénieur</h2>

        <h3>Recherche, Itération et Résolution de Problèmes</h3>
        <p>
          Le projet a été une véritable démarche d&apos;ingénieur en R&D.
          J&apos;ai fait face à des <strong>impasses techniques</strong>,
          notamment sur la connexion directe aux APIs Dassault Systèmes, ce qui
          m&apos;a poussé à explorer des solutions alternatives (comme une
          connexion via le cloud) et à mener un travail de fond pour trouver des
          solutions robustes.
        </p>

        <h3>
          Focalisation sur l&apos;Expérience Utilisateur (UX) et la Transmission
        </h3>
        <p>
          Le succès d&apos;un chatbot ne réside pas que dans sa technique.
          J&apos;ai mené une réflexion sur son utilité réelle, son potentiel
          d&apos;augmentation de la productivité (actions multiples) et
          l&apos;importance de son intégration visuelle. Pour offrir une
          expérience familière et intuitive, le design du chatbot se devait
          d&apos;être{" "}
          <strong>homogène avec les autres assistants existants</strong> dans
          l&apos;écosystème de l&apos;entreprise, afin de faciliter son adoption
          par les utilisateurs. En tant que référent IA, une partie de ma
          mission a été de <strong>vulgariser ces concepts</strong> et de
          préparer la transmission du projet, pour assurer sa pérennité après
          mon départ. Le projet a abouti à la livraison de plusieurs cas
          d&apos;usage fonctionnels, présentés à d&apos;autres équipes pour
          démontrer le potentiel de la solution.
        </p>
        <p>
          Cette démarche a culminé par une{" "}
          <strong>présentation technique approfondie</strong> de mon travail en
          anglais, devant une vingtaine de personnes issues d&apos;équipes
          basées en France, aux États-Unis et en Inde. Cet exercice m&apos;a
          permis de synthétiser mes choix d&apos;architecture et de démontrer le
          potentiel de la solution à un public international.
        </p>

        <h3>Note sur la Confidentialité</h3>
        <p>
          Pour des raisons de confidentialité inhérentes à un projet de R&D, je
          ne peux partager de visuels ou d&apos;extraits de code. Les détails
          techniques décrits sur cette page représentent la limite de ce que je
          suis autorisé à communiquer publiquement et visent à illustrer la
          démarche et les concepts mis en œuvre.
        </p>

        <h2>Apprentissages et Compétences Développées</h2>
        <h4>Compétences Techniques</h4>
        <ul>
          <li>
            <strong>Prise de décision architecturale</strong> et développement
            de A à Z d&apos;un système multi-agents avec LangChain et LangGraph.
          </li>
          <li>
            <strong>Prompt Engineering avancé</strong> avec schémas de sortie
            stricts (Pydantic) pour le Tool Calling.
          </li>
          <li>
            <strong>Intégration d&apos;APIs complexes</strong> en environnement
            d&apos;entreprise (authentification, sessions).
          </li>
          <li>
            Développement d&apos;une API <strong>Flask</strong> comme pont entre
            un front-end, un agent IA et des services tiers.
          </li>
        </ul>
        <h4>Compétences Stratégiques et Humaines</h4>
        <ul>
          <li>
            <strong>Autonomie et Leadership Technique :</strong> Pilotage
            d&apos;un projet innovant en tant que référent IA.
          </li>
          <li>
            <strong>Communication et Vulgarisation :</strong> Présentation de
            concepts techniques complexes et transmission de connaissances.
          </li>
          <li>
            <strong>Communication Internationale :</strong> Collaboration
            quotidienne et présentation technique en anglais dans un contexte
            multiculturel (France, Inde, USA).
          </li>
          <li>
            <strong>Résolution de problèmes en R&D :</strong> Naviguer entre les
            contraintes techniques, les impasses et la recherche de solutions.
          </li>
          <li>
            <strong>Vision Produit :</strong> Analyse des cas d&apos;usage et de
            l&apos;expérience utilisateur pour une IA réellement utile.
          </li>
        </ul>

        <div className="project-navigation">
          <Link href="/career" className="cta-button secondary">
            ← Retour au Parcours
          </Link>
        </div>
      </section>
    </>
  );
}
