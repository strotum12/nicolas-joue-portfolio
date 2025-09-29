import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { projets, timeline } from "../data/portfolioData";

function InteractiveCard({ item, isOpen, onToggle }) {
  const isProject = !!item.techno;

  let detailLink;
  if (isProject && item.lien) {
    detailLink = (
      <Link href={item.lien} className="project-detail-link" scroll={true}>
        {item.lienLabel}
      </Link>
    );
  } else if (!isProject && item.dedicatedPageLink) {
    detailLink = (
      <Link
        href={item.dedicatedPageLink}
        className="project-detail-link"
        scroll={true}
      >
        Découvrir l&apos;expérience en détail →
      </Link>
    );
  } else if (!isProject) {
    detailLink = (
      <Link
        href={`/career#timeline-item-${item.id}`}
        className="project-detail-link"
        scroll={false}
      >
        Voir sur la page Parcours
      </Link>
    );
  }

  return (
    <div
      className={`interactive-card ${isOpen ? "open" : ""}`}
      onClick={onToggle}
    >
      <div className="card-summary">
        <div className="summary-content">
          <div className="card-header-line">
            <span
              className={`project-type-badge ${
                isProject ? item.type : item.cat
              }`}
            >
              {isProject
                ? item.type === "acad"
                  ? "Académique"
                  : "Personnel"
                : item.cat === "exp"
                ? "Expérience"
                : "Formation"}
            </span>
            {item.yearInfo && (
              <span className="card-year-info">{item.yearInfo}</span>
            )}
          </div>

          <h3>{isProject ? item.titre : item.title}</h3>
          <p className="card-tech">{isProject ? item.techno : item.date}</p>
        </div>
        <span className="toggle-icon">+</span>
      </div>
      <div className="card-details">
        <p>{item.desc}</p>
        {isProject && item.extra && (
          <p>
            <strong>Contexte :</strong> {item.extra}
          </p>
        )}
        {detailLink && <p>{detailLink}</p>}
      </div>
    </div>
  );
}

export default function ProjetsPage() {
  const router = useRouter();
  const [filtreType, setFiltreType] = useState("acad");
  const [filtreAnnee, setFiltreAnnee] = useState("tous");
  const [filtreTechno, setFiltreTechno] = useState(null);
  const [openCardId, setOpenCardId] = useState(null);

  const handleToggle = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  const handleFiltreTypeChange = (type) => {
    setFiltreType(type);
    setFiltreAnnee("tous");
  };

  useEffect(() => {
    if (router.query.filtre) {
      setFiltreTechno(router.query.filtre);
      setFiltreType(null);
    } else {
      setFiltreTechno(null);
      if (!filtreType) setFiltreType("acad");
    }
  }, [router.query.filtre, filtreType]);

  const filterByTechno = (items) => {
    if (!filtreTechno) return [];
    return items.filter(
      (item) =>
        item.tags &&
        item.tags.some(
          (tag) =>
            tag.toLowerCase().replace(/\s/g, "") ===
            filtreTechno.toLowerCase().replace(/\s/g, "")
        )
    );
  };

  const anneesUniques = [
    ...new Set(projets.filter((p) => p.type === "acad").map((p) => p.yearInfo)),
  ].sort();

  const projetsFiltres = filtreTechno
    ? filterByTechno(projets)
    : projets
        .filter((p) => p.type === filtreType)
        .filter((p) => {
          if (filtreAnnee === "tous" || p.type !== "acad") {
            return true;
          }
          return p.yearInfo === filtreAnnee;
        });

  const parcoursFiltres = filterByTechno(timeline);

  return (
    <>
      <Head>
        <title>Projets & Expériences – Mon Site Personnel</title>
      </Head>

      <section>
        <h2>Projets & Expériences</h2>

        {filtreTechno ? (
          <div className="active-techno-filter">
            <span>
              Résultats pour : <strong>{filtreTechno}</strong>
            </span>
            <button
              onClick={() => router.push("/skills")}
              title="Retirer le filtre"
            >
              ×
            </button>
          </div>
        ) : (
          <>
            <p>
              Voici une sélection de mes réalisations. Cliquez sur une carte
              pour voir les détails.
            </p>
            <div className="projects-filter">
              <button
                className={filtreType === "acad" ? "active-filter" : ""}
                onClick={() => handleFiltreTypeChange("acad")}
              >
                Projets académiques
              </button>
              <button
                className={filtreType === "perso" ? "active-filter" : ""}
                onClick={() => handleFiltreTypeChange("perso")}
              >
                Projets personnels
              </button>
            </div>

            {filtreType === "acad" && (
              <div className="year-filter">
                <button
                  className={filtreAnnee === "tous" ? "active-filter" : ""}
                  onClick={() => setFiltreAnnee("tous")}
                >
                  Toutes les années
                </button>
                {anneesUniques.map((annee) => (
                  <button
                    key={annee}
                    className={filtreAnnee === annee ? "active-filter" : ""}
                    onClick={() => setFiltreAnnee(annee)}
                  >
                    {annee}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {parcoursFiltres.length > 0 && (
          <>
            <h3>Expériences & Formations Pertinentes</h3>
            <div className="projects-grid">
              {parcoursFiltres.map((item) => (
                <InteractiveCard
                  key={`exp-${item.id}`}
                  item={item}
                  isOpen={openCardId === `exp-${item.id}`}
                  onToggle={() => handleToggle(`exp-${item.id}`)}
                />
              ))}
            </div>
          </>
        )}

        {projetsFiltres.length > 0 && (
          <>
            {filtreTechno && <h3>Projets Pertinents</h3>}
            <div className="projects-grid">
              {projetsFiltres.map((proj) => (
                <InteractiveCard
                  key={proj.id}
                  item={proj}
                  isOpen={openCardId === proj.id}
                  onToggle={() => handleToggle(proj.id)}
                />
              ))}
            </div>
          </>
        )}

        {projetsFiltres.length === 0 &&
          parcoursFiltres.length === 0 &&
          filtreTechno && (
            <p className="no-projects-found">
              Aucun projet ou expérience ne correspond à votre sélection.
            </p>
          )}
      </section>
    </>
  );
}
