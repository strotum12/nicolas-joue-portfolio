import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess("Copié !");
      setTimeout(() => setCopySuccess(""), 3000);
    } catch (err) {
      setCopySuccess("Erreur lors de la copie");
    }
  };

  return (
    <>
      <Head>
        <title>Contact – Mon Site Personnel</title>
        <meta
          name="description"
          content="Contactez Nicolas Joué pour toute opportunité de CDI en IA / Data Science. Retrouvez mes email, LinkedIn, GitHub et téléchargez mon CV."
        />
      </Head>

      <section>
        <h2>Me Contacter</h2>
        <p className="contact-intro">
          Une question, une proposition de collaboration ou simplement envie de
          discuter ? N&apos;hésitez pas à utiliser l&apos;un des moyens
          ci-dessous.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <svg
              className="svg-icon"
              width={50}
              height={50}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2
                     2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2
                     2 0 002 2z"
              />
            </svg>
            <h3>Par Email</h3>
            <p>Le moyen le plus direct pour me joindre.</p>
            <div className="email-container">
              <a href="mailto:nicolasjoue916@gmail.com" className="email-link">
                nicolasjoue916@gmail.com
              </a>
              <button
                onClick={() => handleCopy("nicolasjoue916@gmail.com")}
                className="copy-button"
              >
                Copier
              </button>
            </div>
            {copySuccess && (
              <span className="copy-feedback">{copySuccess}</span>
            )}
          </div>

          <div className="contact-card">
            <Image
              src="/LI-In-Bug.png"
              alt="LinkedIn"
              width={50}
              height={50}
              className="contact-icon"
            />
            <h3>LinkedIn</h3>
            <p>Pour un contact professionnel et pour suivre mon parcours.</p>
            <a
              href="https://www.linkedin.com/in/nicolas-joué-246569204/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Voir mon profil
            </a>
          </div>

          <div className="contact-card">
            <Image
              src="/github-mark.png"
              alt="GitHub"
              width={50}
              height={50}
              className="contact-icon"
            />
            <h3>GitHub</h3>
            <p>Pour explorer mes projets et contributions de plus près.</p>
            <a
              href="https://github.com/nico916"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Explorer mes dépôts
            </a>
          </div>

          <div className="contact-card">
            <svg
              className="svg-icon"
              width={50}
              height={50}
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
            <h3>Mon CV</h3>
            <p>
              Pour un résumé complet de mon expérience et de mes compétences.
            </p>
            <a
              href="/CV_Nicolas_JOUE.pdf"
              download="CV_Nicolas_Joué.pdf"
              className="contact-link"
            >
              Télécharger le CV
            </a>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
