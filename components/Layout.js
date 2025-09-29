import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicolas Joué",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/nicolas-joué-246569204/",
      "https://github.com/nico916",
    ],
    jobTitle: "Ingénieur en Intelligence Artificielle & Data Science",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Polytech Paris-Saclay, Université Paris-Saclay",
    },
    knowsAbout: [
      "Intelligence Artificielle",
      "Data Science",
      "NLP",
      "Deep Learning",
      "LangChain",
      "Python",
      "Développement Web",
    ],
  };

  return (
    <>
      <Head>
        <meta name="author" content="Nicolas Joué" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#34495e" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Nicolas Joué - Portfolio IA & Data Science"
        />
        <meta
          property="og:description"
          content="Découvrez le portfolio de Nicolas Joué, Ingénieur en Intelligence Artificielle et Data Science."
        />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />
      <main>{isHomePage ? children : <div id="content">{children}</div>}</main>
      <Footer />
    </>
  );
}
