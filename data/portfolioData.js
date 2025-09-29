import Link from "next/link";
export const projets = [
  {
    id: 1,
    type: "acad",
    titre: "Application Web de Tri 'ReTri'",
    techno: "Java (Servlets/JSP), AJAX, PostgreSQL",
    yearInfo: "5ème année",
    desc: "Développement full-stack d'une web app gamifiée pour un client, avec un focus sur la gestion de projet et l'architecture MVC.",
    extra:
      "Projet de groupe académique de 6 mois simulant des conditions professionnelles, incluant la conception (Figma/UML) et le développement de fonctionnalités complexes (classements, mode admin).",
    lien: "/project-retri",
    lienLabel: "Voir le projet en détail",
    tags: [
      "Java",
      "Développement d'Applications",
      "JavaScript",
      "Développement Web",
      "Base de Données",
      "SQL",
      "PostgreSQL",
      "Gestion de Projet",
      "AJAX",
      "Figma",
      "Git",
      "GitHub",
      "Eclipse",
      "CSS3",
      "HTML5",
      "HeidiSQL",
    ],
  },
  {
    id: 2,
    type: "acad",
    titre: "Développement d’un moteur de recherche en Python",
    techno: "Python, Pandas, NumPy, scikit-learn, TF-IDF",
    yearInfo: "5ème année",
    desc: "Développement d’un moteur de recherche capable d’indexer des documents textuels et de retrouver les documents les plus pertinents en réponse à une requête.",
    extra:
      "Projet académique réalisé sur 2 mois. Implémentation d’un vectoriseur TF-IDF personnalisé, en complément de celui de scikit-learn. Plusieurs options de prétraitement et de modes d’exécution (requêtes manuelles, test de performance).",
    lien: "/search-engine",
    lienLabel: "Voir le projet en détail",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "NLP",
      "Algorithmie",
      "IA",
      "Data Science",
      "Anaconda",
      "VS Code",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 3,
    type: "acad",
    titre: "Modélisation d’un match de tennis par chaînes de Markov",
    techno: "Matlab, Chaînes de Markov, Probabilités, Visualisation",
    yearInfo: "5ème année",
    desc: "Ce projet utilise les chaînes de Markov pour répondre à une question clé : le système de score au tennis amplifie-t-il les écarts de niveau ? J'y analyse la probabilité de victoire, la durée des matchs et l'impact de la compétence d'un joueur (p) sur l'issue finale.",
    extra: "Projet académique de 1 mois, développé en Matlab.",
    lien: "/project-markov-tennis",
    lienLabel: "Voir le projet en détail",
    tags: ["MATLAB", "Data Science", "Probabilités"],
  },
  {
    id: 4,
    type: "acad",
    titre: "Analyse PCA de Données Footballistiques",
    techno: "Python (Pandas), MATLAB, Data Science",
    yearInfo: "5ème année",
    desc: "Analyse de profils de joueurs de football via une Analyse en Composantes Principales pour visualiser et interpréter les styles de jeu.",
    extra:
      "Projet académique réalisé en 1 mois, développé en Matlab et Python (sur VSCode, pour la partie pré-traitement des Données). Le projet inclut une phase complète de pré-traitement des données en Python et une analyse/visualisation interactive en MATLAB.",
    lien: "/project-pca-football-analysis",
    lienLabel: "Voir l'analyse détaillée",
    datasetUrl:
      "https://www.kaggle.com/datasets/vivovinco/20222023-football-player-stats",
    tags: [
      "Python",
      "Pandas",
      "MATLAB",
      "Data Science",
      "Machine Learning",
      "Anaconda",
      "VS Code",
    ],
  },
  {
    id: 5,
    type: "acad",
    titre: "Segmentation d’images par clustering",
    yearInfo: "4ème année",
    techno: "Python (Jupyter Lab), HoG/HSV, K-means, DBSCAN, Dashboard",
    desc: "De la construction des descripteurs visuels jusqu’au dashboard final : préparation des images, feature engineering (HoG, moments de couleur, filtres de Gabor…), comparaison K-means / DBSCAN et évaluation (silhouette, AMI).",
    extra:
      "Projet académique réalisé en 1 mois, développé sous Jupyter Lab. Objectifs : maîtriser le pipeline IA (data → features → modèles → métriques), coder de façon modulaire et présenter les résultats dans un tableau de bord interactif.",
    lien: "/clustering-images",
    lienLabel: "Voir le projet en détail",
    tags: [
      "Python",
      "Machine Learning",
      "IA",
      "Data Science",
      "Jupyter (Lab/Notebook)",
    ],
  },
  {
    id: 6,
    type: "acad",
    titre: "Conception d’un démineur en C#",
    techno: "C#, Windows Forms",
    yearInfo: "5ème année",
    desc: "Création du jeu Démineur, gestion des grilles, et interface.",
    extra:
      "Projet académique réalisé en 1 semaine, développé sous Visual Studio.",
    lien: "/Minesweeper",
    lienLabel: "Voir le projet en détail",
    tags: [
      "C#",
      "Développement Logiciel",
      "Visual Studio",
      "Développement d'Applications",
      "Algorithmie",
    ],
  },
  {
    id: 7,
    type: "acad",
    titre: "Arbre de Vie Interactif en C#",
    yearInfo: "5ème année",
    techno: "C#, Windows Forms, Quadtree",
    desc: "Visualisation interactive d'un arbre phylogénétique de plus de 30 000 nœuds, avec zoom et navigation fluide.",
    extra: "Projet académique réalisé en 1 mois, développé sous Visual Studio",
    lien: "/TreeOfLife",
    lienLabel: "Voir le projet en détail",
    tags: [
      "C#",
      "Développement Logiciel",
      "Algorithmie",
      "Data",
      "Développement d'Applications",
      "Visual Studio",
    ],
  },
  {
    id: 8,
    type: "acad",
    titre: "Conception d'un site web (HTML/CSS)",
    techno: "HTML5, CSS3",
    yearInfo: "1ère année",
    desc: "Mon premier projet web, réalisé en 1ère année. Création d'une marque et d'un site e-commerce statique de A à Z pour découvrir les fondamentaux du développement web.",
    extra:
      "Projet académique. Mise en page avec CSS float et positionnement, structure sémantique HTML, design d'une identité visuelle complète.",
    lien: "/siteWebProjet",
    lienLabel: "Voir le projet en détail",
    tags: [
      "HTML5",
      "CSS3",
      "Développement Web & API",
      "Développement d'Applications",
    ],
  },
  {
    id: 9,
    type: "acad",
    titre: "Moteur de jeu Dominion (C++)",
    techno: "C++, POO, Pointeurs Intelligents",
    yearInfo: "4ème année",
    desc: "Implémentation en console du jeu de deck-building Dominion, incluant une IA simple et un système de sauvegarde/chargement.",
    extra:
      "Projet académique de 2 mois, développé dans un premier lieu sur CodeBlocks, puis finalisé (rendu final en console Linux).",
    lien: "/dominion",
    lienLabel: "Voir le projet en détail",
    tags: [
      "C++",
      "Développement Logiciel",
      "Algorithmie",
      "Développement d'Applications",
      "Code::Blocks",
    ],
  },
  {
    id: 10,
    type: "acad",
    titre: "Conception d’une plateforme de jeux vidéo en Java",
    techno:
      "Java (console, manipulation de fichiers, collections), Fichiers CSV et TXT",
    yearInfo: "3ème année",
    desc: "Développement d'une plateforme textuelle permettant la gestion de jeux vidéo, d'évaluations, de tests, de jetons et de modération selon le rôle de l'utilisateur (joueur, testeur, administrateur, invité).",
    lien: "/plateforme",
    lienLabel: "Voir le projet en détail",
    extra:
      "Projet académique réalisé en 1 mois, développé sous Eclipse. Les captures d’écran ont été prises via VS Code pour une meilleure lisibilité.",
    tags: [
      "Java",
      "Développement Logiciel",
      "Eclipse",
      "Développement d'Applications",
    ],
  },
  {
    id: 13,
    type: "acad",
    titre: "Jeu de gestion VR 'Sauvons Mars'",
    techno: "Unity (C#), VR, XR Interaction Toolkit",
    yearInfo: "5ème année",
    desc: "Simulation en réalité virtuelle où le joueur gère des ressources, trie des déchets et automatise une base pour rendre Mars habitable.",
    extra:
      "Projet académique réalisé en 2 mois sur Unity et Visual Studio pour le C#. Projet axé sur la conception d'interactions immersives (saisie d'objets, UI 3D) pour un jeu de gestion à visée écologique.",
    lien: "/vr-management-game",
    lienLabel: "Voir le projet en détail",
    tags: [
      "Unity",
      "C#",
      "VR",
      "Jeu Vidéo & VR",
      "Git",
      "GitHub",
      "Développement d'Applications",
      "Visual Studio",
    ],
  },
  {
    id: 11,
    type: "perso",
    titre: "Outil « Pass Map » pour le football",
    techno: "Python (pandas, matplotlib, mplsoccer), Streamlit",
    yearInfo: "2025",
    desc: "Application interactive pour visualiser les échanges de passes d’une équipe de football sur un terrain.",
    extra:
      "Utilisation des données StatsBomb (JSON) pour afficher les liens de passes entre titulaires d’un match du FC Barcelone. Affichage dynamique avec Streamlit et mplsoccer. Possibilité de filtrer par volume de passes, de consulter les stats détaillées d’un joueur et de basculer entre plusieurs modes de visualisation.",
    lien: "/pass-map",
    lienLabel: "Voir le projet en détail",
    tags: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Streamlit",
      "Data Science",
      "NumPy",
      "Anaconda",
      "VS Code",
      "Développement d'Applications",
    ],
  },
  {
    id: 12,
    type: "perso",
    titre: "Comparateur de profils de joueurs (football)",
    techno: "Python, pandas, scikit-learn, NumPy, Plotly, Streamlit",
    yearInfo: "2025",
    desc: "Exploration visuelle des profils de joueurs pour trouver ceux aux caractéristiques les plus proches grâce à l’espace PCA.",
    extra:
      "Initialement développé sous VS Code avec exécution locale via Streamlit, puis mis en ligne grâce à un hébergement sur Render. Basé sur un CSV de stats de la saison 2022-2023 (tirs, passes, tacles...), nettoyées et standardisées. L’idée est née en visualisant les joueurs dans le plan PCA — chaque point étant un joueur, il était naturel de comparer les profils par distance.",
    lien: "/football-comparator",
    lienLabel: "Voir le projet en détail",
    datasetUrl:
      "https://www.kaggle.com/datasets/vivovinco/20222023-football-player-stats",
    tags: [
      "Python",
      "Pandas",
      "scikit-learn",
      "NumPy",
      "Plotly",
      "Streamlit",
      "Matplotlib",
      "Data Science",
      "IA",
      "Anaconda",
      "VS Code",
      "Développement d'Applications",
    ],
  },
];

export const timeline = [
  {
    id: 6,
    cat: "exp",
    date: "avril 2025 – Septembre 2025",
    title: "Stage Développeur IA - Agent Conversationnel",
    logo: "/LogoDassaultSystemes.png",
    url: "https://www.3ds.com/fr",
    desc: "Développement d’un agent/chatbot intelligent (Python, LangChain) pour la plateforme 3DEXPERIENCE, capable d’interpréter le langage naturel et d’exécuter des actions métier.",
    dedicatedPageLink: "/experience-dassault-systemes",
    details: (
      <>
        <p>
          Stage de fin d&apos;études au sein de l&apos;équipe R&D ENOVIA, centré
          sur la création d&apos;un compagnon virtuel pour assister les
          utilisateurs via une architecture multi-agents et des LLMs.
        </p>
        <p>
          <Link
            href="/experience-dassault-systemes"
            className="details-link"
            scroll={true}
          >
            Découvrir l&apos;expérience en détail →
          </Link>
        </p>
      </>
    ),
    tags: [
      "Python",
      "IA",
      "NLP",
      "LangChain",
      "LangGraph",
      "JavaScript",
      "Développement d'Applications",
      "Data Science",
      "Algorithmie",
      "FastAPI",
      "Flask",
      "Pydantic",
      "VSCode",
      "HTML5",
      "CSS3",
      "Anaconda",
      "VisualStudio",
    ],
  },
  {
    id: 1,
    cat: "exp",
    date: "2024 (3 mois)",
    title: "Stage Data Scientist – UTS, Sydney (Australie)",
    logo: "/LogoUTS.png",
    url: "https://www.uts.edu.au/",
    desc: "Développement d’un pipeline de deep learning (Python, PyTorch) pour la détection de maladies oculaires via la régression et la segmentation d'images.",
    dedicatedPageLink: "/experience-uts-sydney",
    details: (
      <>
        <p>
          Cette expérience de 3 mois à Sydney a été une immersion complète dans
          un projet de recherche appliquée en vision par ordinateur. Elle
          m&apos;a permis de maîtriser le cycle de vie d&apos;un projet IA et de
          m&apos;adapter à un environnement de travail international.
        </p>
        <p>
          <Link href="/experience-uts-sydney" className="details-link">
            Découvrir l&apos;expérience en détail →
          </Link>
        </p>
      </>
    ),
    tags: ["Python", "Deep Learning", "IA", "Data Science", "PyTorch"],
  },

  {
    id: 2,
    cat: "exp",
    date: "juil. 2023 (1 mois)",
    title: "Adjoint Administratif Territorial (CDD)",
    logo: "/LogoMairieNeuillySurSeine.png",
    url: "https://www.neuillysurseine.fr/",
    desc: "Poste contractuel au sein de la Mairie de Neuilly-sur-Seine, axé sur la gestion et le traitement de diverses demandes administratives.",
    details: (
      <>
        <p>Mes responsabilités principales incluaient :</p>
        <ul>
          <li>
            Le traitement et le suivi de dossiers d&apos;urbanisme, notamment
            les <strong>permis de construire</strong> et les{" "}
            <strong>permis de démolir</strong>.
          </li>
          <li>
            La <strong>gestion documentaire</strong> et la saisie de données
            pour assurer la bonne coordination des services municipaux.
          </li>
          <li>
            Le support à l&apos;équipe administrative et la participation à la
            communication interne.
          </li>
        </ul>
        <p>
          Cette expérience m&apos;a permis de développer ma rigueur, mon sens de
          l&apos;organisation et ma capacité à gérer des processus
          réglementaires complexes.
        </p>
      </>
    ),
    tags: [],
  },
  {
    id: 3,
    cat: "exp",
    date: "juin 2021 (1 mois)",
    title: "Stage d'Observation – DSI de la Mairie de Neuilly-sur-Seine",
    logo: "/LogoMairieNeuillySurSeine.png",
    url: "https://www.neuillysurseine.fr/",
    desc: "Stage d'un mois au sein de la Direction des Systèmes d'Information (DSI) pour observer et comprendre les différents rôles et responsabilités dans une administration publique.",

    details: (
      <>
        <p>
          Cette première immersion dans un environnement informatique
          professionnel m&apos;a permis de découvrir :
        </p>
        <ul>
          <li>
            Les différents métiers de la DSI :{" "}
            <strong>technicien support</strong>,{" "}
            <strong>administrateur de bases de données</strong>, chef de projet.
          </li>
          <li>
            La gestion de l&apos;<strong>infrastructure réseau</strong> et des
            services logiciels municipaux.
          </li>
          <li>
            Des domaines connexes comme les{" "}
            <strong>Systèmes d&apos;Information Géographique (SIG)</strong>{" "}
            utilisés pour la cartographie de la ville.
          </li>
        </ul>
      </>
    ),
    tags: [],
  },

  {
    id: 4,
    cat: "form",
    date: "2020 – 2025",
    title: "Diplôme d'ingénieur – Polytech Paris-Saclay",
    logo: "/LogoPolytech.png",
    url: "https://www.polytech.universite-paris-saclay.fr/",
    desc: "Cursus d'ingénieur en 5 ans (Orsay), avec une spécialisation en Informatique & Ingénierie Mathématique axée sur la Data Science et le Développement.",

    details: (
      <>
        <p>
          Cette formation de l&apos;Université Paris-Saclay est structurée en
          deux cycles distincts pour acquérir une double compétence, à la fois
          théorique et pratique.
        </p>

        <h4>Cycle Préparatoire Intégré (2 ans)</h4>
        <p>
          Acquisition d&apos;un solide socle scientifique de haut niveau en
          mathématiques, physique (mécanique, électromagnétisme), chimie et
          informatique fondamentale.
        </p>

        <h4>
          Cycle Ingénieur (3 ans) – Spécialité Informatique & Ingénierie
          Mathématique
        </h4>
        <p>
          Après le cycle préparatoire, je me suis spécialisé autour de deux
          piliers complémentaires :
        </p>
        <ul>
          <li>
            <strong>Data Science & IA :</strong> Apprentissage automatique, Deep
            Learning, Big Data et Traitement du Langage Naturel (NLP).{" "}
            <Link href="/skills" className="details-link">
              Voir les compétences
            </Link>
            .
          </li>
          <li>
            <strong>Développement :</strong> Algorithmie avancée, développement
            logiciel (Java, C#, C++), développement web (JavaScript, HTML, CSS),
            bases de données (SQL), réseaux et gestion de projet.{" "}
            <Link href="/skills" className="details-link">
              Voir les compétences
            </Link>
            .
          </li>
        </ul>

        <h4>Mise en Pratique par les Projets</h4>
        <p>
          J&apos;ai pu appliquer ces savoir-faire sur des projets concrets et
          variés, notamment :
        </p>
        <ul>
          <li>
            Développement d’un <strong>moteur de recherche</strong> en Python
            (NLP)
          </li>
          <li>
            Application web de tri gamifiée <strong>&quot;ReTri&quot;</strong>{" "}
            (Java, SQL, Web)
          </li>
          <li>
            <strong>Segmentation d’images</strong> par clustering (Machine
            Learning)
          </li>
          <li>
            Jeu de gestion en <strong>réalité virtuelle</strong> &quot;Sauvons
            Mars&quot; (Unity, C#)
          </li>
        </ul>
        <p>
          <Link href="/projects" className="details-link">
            Découvrir tous mes projets →
          </Link>
        </p>
      </>
    ),
    tags: [
      "Data Science",
      "JavaScript",
      "C#",
      "SQL",
      "HTML5",
      "CSS3",
      "MATLAB",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Spyder",
      "MySQL",
      "MongoDB",
      "Eclipse",
      "Code::Blocks",
      "NLP",
      "Développement d'Applications",
      "Data",
      "Jupyter (Lab/Notebook)",
      "IA",
      "Python",
      "C++",
      "Java",
      "Algorithmie",
      "Unity",
    ],
  },
  {
    id: 5,
    cat: "form",
    date: "2017 – 2020",
    title: "Baccalauréat scientifique – Lycée Jean-Baptiste Corot",
    logo: "/LogoLyceeCorot.png",
    url: "https://www.lyceecorot.com/",
    desc: "Obtention du Baccalauréat S (Scientifique) avec Mention Bien.",
    details: (
      <>
        <ul>
          <li>
            <strong>Formation scientifique solide</strong> en mathématiques et
            physique.
          </li>
          <li>
            <strong>Spécialité ISN</strong> en terminale : découverte de la
            programmation, des algorithmes et des réseaux.
            <br />
            Ce fut un véritable <strong>déclic</strong> : j’y ai trouvé un
            domaine qui mariait parfaitement mon{" "}
            <strong>esprit scientifique et mathématique</strong> et ma passion
            pour la <strong>résolution de problèmes</strong>, avec une forte{" "}
            <strong>dimension créative</strong>.
          </li>
          <li>
            <strong>Option Sport sur 3 ans</strong> : rigueur, persévérance et
            esprit d’équipe.
          </li>
        </ul>
      </>
    ),
    tags: [],
  },
];
