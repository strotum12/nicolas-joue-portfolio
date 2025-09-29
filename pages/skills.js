import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function CompetencesPage() {
  const domaines = [
    {
      main: "Intelligence Artificielle & Deep Learning",
      sub: "PyTorch, Scikit-learn, NLP (LangChain)",
      isCore: true,
      tag: "IA",
    },
    {
      main: "Data Science & Machine Learning",
      sub: "Analyse de données, modélisation, visualisation (Pandas, Matplotlib)",
      isCore: true,
      tag: "Data Science",
    },
    {
      main: "Traitement Automatique du Langage (NLP)",
      sub: "Analyse de texte, modèles de langage",
      isCore: true,
      tag: "NLP",
    },
    {
      main: "Développement d'Applications",
      sub: "Web Full-Stack (Next.js, Flask), Logiciel (C++, C#), VR (Unity)",
      isCore: false,
      tag: "Développement d'Applications",
    },
    {
      main: "Gestion de Données & Systèmes à Grande Échelle",
      sub: "Big Data (Spark), Cloud Computing, BDD (SQL, NoSQL), HPC",
      isCore: false,
      tag: "Data",
    },
    {
      main: "Algorithmie & Structures de Données",
      sub: "Fondations théoriques de l'informatique",
      isCore: false,
      tag: "Algorithmie",
    },
  ];
  const langages = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C#",
    "SQL",
    "HTML5",
    "CSS3",
    "MATLAB",
  ];
  const outilsEtFrameworks = {
    "Data Science & IA": [
      "PyTorch",
      "LangChain",
      "LangGraph",
      "Pydantic",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Streamlit",
      "Anaconda",
      "Jupyter (Lab/Notebook)",
    ],
    "Développement Web & API": ["Next.js", "React", "Flask", "AJAX"],
    "Design & Prototypage": ["Figma"],
    "Bases de Données": ["MySQL", "PostgreSQL", "MongoDB", "HeidiSQL"],
    "Développement Logiciel & IDE": [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Eclipse",
      "Code::Blocks",
      "Spyder",
    ],
    "Jeu Vidéo & VR": ["Unity"],
    "Bureautique & Autres": ["Excel", "Word"],
  };
  const softSkills = [
    {
      skill: "Adaptabilité & Collaboration Multiculturelle",
      desc: "Capacité à m'intégrer et à performer dans des environnements très variés (laboratoire de recherche, grande entreprise) et au sein d'équipes internationales (stages en Australie et avec une équipe en Inde).",
    },
    {
      skill: "Autonomie & Curiosité Proactive",
      desc: "Habitué à prendre des initiatives, que ce soit en menant des projets personnels ou en allant chercher l'information auprès d'autres équipes. Je maintiens une veille technologique active sur l'IA via des newsletters et des réseaux professionnels.",
    },
    {
      skill: "Résolution de Problèmes",
      desc: "Approche analytique pour décomposer des problèmes complexes et proposer des solutions techniques créatives et efficaces.",
    },
    {
      skill: "Esprit d'Équipe",
      desc: "Aptitude à collaborer de manière constructive, à communiquer clairement mes idées et à contribuer activement à un objectif commun.",
    },
  ];
  const certifications = [
    {
      name: "Certification Dassault Systèmes : Be a SwYmer",
      logo: "/BADGECORPORATELEVEL1.png",
    },
    {
      name: "Formation LinkedIn Learning : Code Clinic: JavaScript",
      logo: "/LI-In-Bug.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Compétences – Mon Site Personnel</title>
        <meta
          name="description"
          content="Liste des compétences techniques de Nicolas Joué : IA (PyTorch, LangChain), Data Science (PCA, ML), développement (Python, JavaScript) et plus encore."
        />
      </Head>

      <section>
        <h2>Mes Compétences</h2>
        <p className="skills-intro">
          Spécialisé en <strong>Intelligence Artificielle</strong> et{" "}
          <strong>Data Science</strong>, je possède également de solides
          compétences en développement.{" "}
          <strong>
            Cliquez sur une compétence pour explorer les projets et expériences
            associés.
          </strong>
        </p>

        <div className="skills-layout-grid">
          <div className="skills-section" id="domaines">
            <h3>Domaines d&apos;Expertise</h3>
            <div className="skills-group core-group">
              <h4>Domaines de Prédilection</h4>
              <ul className="skills-list-detailed">
                {domaines
                  .filter((d) => d.isCore)
                  .map((domaine) => (
                    <li key={domaine.main}>
                      <Link
                        href={`/projects?filtre=${encodeURIComponent(
                          domaine.tag || domaine.main
                        )}`}
                        className="skill-link"
                      >
                        <strong>{domaine.main}</strong>
                        <small>{domaine.sub}</small>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="skills-group">
              <h4>Compétences Solides</h4>
              <ul className="skills-list-detailed">
                {domaines
                  .filter((d) => !d.isCore)
                  .map((domaine) => (
                    <li key={domaine.main}>
                      <Link
                        href={`/projects?filtre=${encodeURIComponent(
                          domaine.tag || domaine.main
                        )}`}
                        className="skill-link"
                      >
                        <strong>{domaine.main}</strong>
                        <small>{domaine.sub}</small>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="skills-section" id="langages-outils">
            <h3>Langages & Outils</h3>
            <h4>Langages de Programmation</h4>
            <ul className="skills-list-inline">
              {langages.map((l) => (
                <li key={l}>
                  <Link href={`/projects?filtre=${encodeURIComponent(l)}`}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
            {Object.entries(outilsEtFrameworks).map(([categorie, items]) => (
              <div key={categorie} className="skills-category">
                <h4>{categorie}</h4>
                <ul className="skills-list-inline">
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/projects?filtre=${encodeURIComponent(item)}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="skills-section" id="soft-skills">
            <h3>Qualités & Soft Skills</h3>
            <ul className="soft-skills-list">
              {softSkills.map((s) => (
                <li key={s.skill}>
                  <strong>{s.skill}</strong>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-section" id="certifications">
            <h3>Certifications</h3>
            <ul className="cert-badges">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <Image
                        src={cert.logo}
                        alt={`${cert.name} badge`}
                        width={40}
                        height={40}
                      />
                      <span>{cert.name}</span>
                    </a>
                  ) : (
                    <div className="cert-link no-url">
                      <Image
                        src={cert.logo}
                        alt={`${cert.name} badge`}
                        width={40}
                        height={40}
                      />
                      <span>{cert.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
