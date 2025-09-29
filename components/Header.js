import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  const isActive = (route) => {
    if (route === "/projets" && pathname.startsWith("/projets/")) {
      return true;
    }
    return route === pathname;
  };

  return (
    <header>
      <div className="header-left">
        <Image
          src="/photo.png"
          alt="Photo de profil de Nicolas Joué"
          width={130}
          height={130}
          className="profile-pic"
          priority
        />
        <div className="header-info">
          <div className="header-top-row">
            <div className="header-title-container">
              <h1>Nicolas Joué</h1>
              <p className="header-subtitle">Ingénieur en IA & Data Science</p>
            </div>
            <Link href="/contact" className="job-status-badge">
              <span className="glowing-dot"></span>
              Disponible pour un CDI - Oct. 2025
            </Link>
          </div>

          <nav>
            <ul className="nav-list">
              <li>
                <Link href="/" className={isActive("/") ? "active" : ""}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className={isActive("/career") ? "active" : ""}
                >
                  Parcours
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={isActive("/projects") ? "active" : ""}
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className={isActive("/skills") ? "active" : ""}
                >
                  Compétences
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={isActive("/contact") ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="header-right">
        <a
          href="/CV_Nicolas_JOUE.pdf"
          download="CV_Nicolas_Joué.pdf"
          className="cv-button"
          title="Télécharger mon CV"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>CV</span>
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-joué-246569204/"
          target="_blank"
          rel="noopener noreferrer"
          title="Mon profil LinkedIn"
        >
          <Image
            src="/LI-In-Bug.png"
            alt="LinkedIn"
            width={30}
            height={30}
            className="icon"
          />
        </a>
        <a
          href="https://github.com/nico916"
          target="_blank"
          rel="noopener noreferrer"
          title="Mes projets sur GitHub"
        >
          <Image
            src="/github-mark.png"
            alt="GitHub"
            width={30}
            height={30}
            className="icon"
          />
        </a>
      </div>
    </header>
  );
}
