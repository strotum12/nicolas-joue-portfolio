import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Non Trouvée | Nicolas Joué</title>
        <meta
          name="description"
          content="La page que vous cherchez n'a pas été trouvée sur le portfolio de Nicolas Joué."
        />
      </Head>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "4rem 2rem",
          minHeight: "calc(100vh - 300px)",
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--blue-main)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: "2rem", opacity: "0.6" }}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>

        <h1
          style={{
            fontSize: "2.5rem",
            color: "var(--blue-main)",
            marginBottom: "1rem",
          }}
        >
          Oups, page introuvable !
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#555",
            maxWidth: "500px",
            lineHeight: "1.7",
            marginBottom: "2.5rem",
          }}
        >
          Il semble que le lien que vous avez suivi soit cassé ou que la page
          ait été déplacée. Pas d&apos;inquiétude, voici quelques liens utiles
          pour vous remettre sur la bonne voie.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="cta-button primary">
            Retour à l&apos;accueil
          </Link>
          <Link href="/projects" className="cta-button secondary">
            Voir mes projets
          </Link>
          <Link href="/contact" className="cta-button secondary">
            Me contacter
          </Link>
        </div>
      </div>
    </>
  );
}
