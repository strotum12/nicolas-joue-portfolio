import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Accueil - Nicolas Joué | Ingénieur IA & Data Science</title>
        <meta
          name="description"
          content="Portfolio de Nicolas Joué, Ingénieur en Intelligence Artificielle (IA) et Data Science. Découvrez mes projets, mon parcours et mes compétences en Python, LangChain et Deep Learning."
        />
      </Head>

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.leftColumn}>
            <h1 className={styles.heroTitle}>Nicolas Joué</h1>
            <div className={styles.animatedLine}></div>
            <p className={styles.heroSubtitle}>
              Ingénieur en Intelligence Artificielle & Data Science
            </p>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.infoCardsContainer}>
              <Link
                href="/experience-dassault-systemes"
                className={styles.cardLink}
              >
                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m7 11 2-2-2-2"></path>
                      <path d="M11 13h4"></path>
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardTitleWrapper}>
                      <h3>Dernière Expérience</h3>
                      <span className={styles.arrowIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </div>
                    <div className="status-item">
                      <Image
                        src="/LogoDassaultSystemes.png"
                        alt="Logo Dassault Systèmes"
                        width={80}
                        height={25}
                        className="company-logo"
                      />
                      <p>
                        Développeur IA chez <strong>Dassault Systèmes</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className={`${styles.infoCard} ${styles.highlightCard}`}>
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <h3>Objectif</h3>
                  <p>
                    En recherche active d&apos;un{" "}
                    <strong>CDI en IA / Data Science</strong> pour Octobre 2025.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <Link href="/projects" className="cta-button primary">
                Découvrir mes projets
              </Link>
              <Link href="/career" className="cta-button secondary">
                Consulter mon parcours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
