import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { timeline } from "../data/portfolioData";
import AnimatedSection from "../components/AnimatedSection";

export default function ParcoursPage() {
  const [filter, setFilter] = useState("all");

  const [openIds, setOpenIds] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("openTimelineIds");
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return [];
  });

  useEffect(() => {
    sessionStorage.setItem("openTimelineIds", JSON.stringify(openIds));
  }, [openIds]);

  const filteredEvents = timeline.filter(
    (e) => filter === "all" || e.cat === filter
  );

  const toggle = (id) => {
    setOpenIds((prevOpenIds) => {
      if (prevOpenIds.includes(id)) {
        return prevOpenIds.filter((item) => item !== id);
      } else {
        return [...prevOpenIds, id];
      }
    });
  };

  return (
    <>
      <Head>
        <title>Parcours – Mon Site Personnel</title>
        <meta
          name="description"
          content="Explorez le parcours de Nicolas Joué : formation d'ingénieur à Polytech Paris-Saclay et expériences professionnelles en IA chez Dassault Systèmes et en Deep Learning en Australie."
        />
      </Head>

      <section>
        <h2>Mon Parcours</h2>
        <p>
          Ingénieur diplômé de <strong>Polytech Paris-Saclay</strong>{" "}
          (Université Paris-Saclay), j&apos;ai suivi un cursus en Informatique
          qui m&apos;a permis de me spécialiser en <strong>Data Science</strong>{" "}
          et <strong>Intelligence Artificielle</strong>, avec un intérêt
          particulier pour le{" "}
          <strong>Traitement du Langage Naturel (NLP)</strong>.
        </p>
        <p>
          J&apos;ai consolidé cette expertise à travers des{" "}
          <strong>expériences professionnelles</strong> ainsi que des{" "}
          <strong>projets académiques et personnels</strong> variés. Ce parcours
          m&apos;a également permis de bâtir de solides compétences
          complémentaires en <strong>développement web et logiciel</strong>.
        </p>
        <div className="timeline-intro-hint">
          <p>
            Explorez les étapes clés de mon parcours ci-dessous. 💡 Pour
            afficher les détails,{" "}
            <strong>cliquez sur un titre ou sur son point</strong> dans la frise
            chronologique.
          </p>
        </div>

        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active-filter" : ""}
            onClick={() => setFilter("all")}
          >
            Tout
          </button>
          <button
            className={filter === "exp" ? "active-filter" : ""}
            onClick={() => setFilter("exp")}
          >
            Expériences Pro
          </button>
          <button
            className={filter === "form" ? "active-filter" : ""}
            onClick={() => setFilter("form")}
          >
            Formations
          </button>
        </div>

        <div className="timeline" id="timeline-exp">
          {filteredEvents.some((e) => e.cat === "exp") && (
            <div className="timeline-section-title">
              Expériences Professionnelles
            </div>
          )}
          {filteredEvents
            .filter((e) => e.cat === "exp")
            .map((ev) => (
              <TimelineBlock
                key={ev.id}
                ev={ev}
                open={openIds.includes(ev.id)}
                toggle={toggle}
              />
            ))}
        </div>

        <div className="timeline" id="timeline-form">
          {filteredEvents.some((e) => e.cat === "form") && (
            <div className="timeline-section-title">Formations</div>
          )}
          {filteredEvents
            .filter((e) => e.cat === "form")
            .map((ev) => (
              <TimelineBlock
                key={ev.id}
                ev={ev}
                open={openIds.includes(ev.id)}
                toggle={toggle}
              />
            ))}
        </div>
      </section>
    </>
  );
}

function TimelineBlock({ ev, open, toggle }) {
  const handleLogoClick = (e) => {
    e.stopPropagation();
  };

  let logoWidth = 100;
  let logoHeight = 100;

  if (ev.logo === "/LogoDassaultSystemes.png") {
    logoWidth = 1200;
    logoHeight = 367;
  }

  let logoClassName = "timeline-logo";
  if (
    ev.logo === "/LogoUTS.png" ||
    ev.logo === "/LogoMairieNeuillySurSeine.png"
  ) {
    logoClassName += " timeline-logo-tall";
  }

  return (
    <div
      id={`timeline-item-${ev.id}`}
      className={`timeline-block ${open ? "open" : ""}`}
    >
      <div className="timeline-dot" onClick={() => toggle(ev.id)} />
      <div className="timeline-date">{ev.date}</div>
      <div className="timeline-content">
        <h3 className="timeline-title" onClick={() => toggle(ev.id)}>
          <span className="title-text">
            {ev.title}
            <span className="arrow" />
          </span>
          <a
            href={ev.url}
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-logo-link"
            onClick={handleLogoClick}
          >
            <Image
              src={ev.logo}
              alt={`Logo ${ev.title}`}
              width={logoWidth}
              height={logoHeight}
              className={logoClassName}
            />
          </a>
        </h3>
        <p>{ev.desc}</p>
        <div className="timeline-hidden-details">{ev.details}</div>
      </div>
    </div>
  );
}
