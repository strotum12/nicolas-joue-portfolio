// components/Footer.js
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-nav">
          <Link href="/">Accueil</Link>
          <Link href="/career">Parcours</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/skills">Compétences</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/nicolas-joué-246569204/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/LI-In-Bug.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="icon"
            />
          </a>
          <a
            href="https://github.com/nico916"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github-mark.png"
              alt="GitHub"
              width={24}
              height={24}
              className="icon"
            />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nicolas Joué. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
