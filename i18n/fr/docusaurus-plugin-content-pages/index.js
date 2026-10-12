import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "@site/src/pages/index.module.css";

const paths = [
  {
    title: "Explorateur",
    description:
      "Notes, diapositives et sujets d'étude — une boussole personnelle, pas un cours prêt à l'emploi.",
    to: "/docs/bem-vindo",
  },
  {
    title: "Startups",
    description:
      "Idées devenues produits : santé, gestion et expérimentations entrepreneuriales.",
    to: "/docs/Startups",
  },
  {
    title: "Projets",
    description:
      "Points forts : recherche, assistance, matériel, aviation et outils.",
    to: "/docs/Projetos",
  },
  {
    title: "Publications",
    description:
      "Travaux académiques en IA, TALN, LLM et technologie d'assistance.",
    to: "/publications",
  },
  {
    title: "CV",
    description:
      "Résumé axé sur l'IA, les LLM, le TALN et le backend.",
    to: "/cv",
  },
  {
    title: "Parcours",
    description:
      "Curriculum complet : expérience, formation, enseignement et startups.",
    to: "/trajetoria",
  },
];

const social = [
  {
    label: "GitHub",
    href: "https://github.com/rodriguesfas",
    note: "Code et dépôts",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rodriguesfas/",
    note: "Parcours professionnel",
  },
  {
    label: "Lattes",
    href: "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8165664Z5",
    note: "CV académique",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0003-4258-369X",
    note: "Identité de recherche",
  },
];

function Hero() {
  const portrait = useBaseUrl("/img/profile-pic3.jpg");

  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={clsx("container", styles.heroInner)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Site personnel</p>
          <h1 className={styles.brand}>Francisco Rodrigues</h1>
          <p className={styles.lede}>
            Informaticien, analyste de systèmes et ingénieur logiciel.
            Doctorant (UFPE/CIn) axé sur l'IA, les LLMs, le TALN et le
            backend — technologie d'assistance et produits de santé, à mon rythme.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className={clsx("button button--primary button--lg", styles.ctaPrimary)}
              to="/cv"
            >
              Voir le CV
            </Link>
            <Link
              className={clsx("button button--outline button--lg", styles.ctaGhost)}
              to="/trajetoria"
            >
              Parcours
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img
            src={portrait}
            alt="Francisco Rodrigues"
            className={styles.portrait}
            width={480}
            height={480}
          />
        </div>
      </div>
    </header>
  );
}

function Paths() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.sectionEyebrow}>Par où commencer</p>
        <h2 className={styles.sectionTitle}>Portes ouvertes</h2>
        <p className={styles.sectionLead}>
          Choisissez ce qui correspond à votre visite. Le reste est dans
          l'Explorateur.
        </p>
        <div className={styles.pathGrid}>
          {paths.map((item) => (
            <Link key={item.to} className={styles.pathCard} to={item.to}>
              <h3 className={styles.pathTitle}>{item.title}</h3>
              <p className={styles.pathDesc}>{item.description}</p>
              <span className={styles.pathGo}>Ouvrir →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={clsx("container", styles.aboutGrid)}>
        <div>
          <p className={styles.sectionEyebrow}>En deux lignes</p>
          <h2 className={styles.sectionTitle}>Ce que je fais</h2>
        </div>
        <div className={styles.aboutBody}>
          <p>
            Co-fondateur et ingénieur chez{" "}
            <a href="https://octor.com.br/" target="_blank" rel="noreferrer">
              Octor
            </a>
            — où j'amène LLM, ASR, NLI et API en production pour les cliniques —
            et conseiller technologique à la{" "}
            <a href="https://neuroespectro.com.br/" target="_blank" rel="noreferrer">
              NeuroEspectro
            </a>
            . Je recherche à l'intersection de l'IA et de la technologie
            d'assistance.
          </p>
          <p>
            J'ai publié en TALN (DeepNLPF / LREC), formé des équipes de
            robotique et construit des produits de zéro. Ce site est mon archive
            vivante.
          </p>
          <Link className={styles.inlineLink} to="/trajetoria">
            Parcours complet →
          </Link>
          {" · "}
          <Link className={styles.inlineLink} to="/cv">
            CV (résumé IA) →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Follow() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.sectionEyebrow}>Présence</p>
        <h2 className={styles.sectionTitle}>Où me trouver</h2>
        <p className={styles.sectionLead}>
          Chaque canal montre un côté différent. Choisissez ce qui convient.
        </p>
        <ul className={styles.socialList}>
          {social.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialItem}
              >
                <span className={styles.socialLabel}>{item.label}</span>
                <span className={styles.socialNote}>{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Accueil" description={siteConfig.tagline}>
      <main>
        <Hero />
        <Paths />
        <About />
        <Follow />
      </main>
    </Layout>
  );
}
