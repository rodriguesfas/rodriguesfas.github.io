import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "@site/src/pages/index.module.css";

const paths = [
  {
    title: "Explorer",
    description:
      "Notes, slides, and study topics — a personal compass, not a ready-made course.",
    to: "/docs/bem-vindo",
  },
  {
    title: "Startups",
    description:
      "Ideas that became product: health, operations, and entrepreneurship experiments.",
    to: "/docs/Startups",
  },
  {
    title: "Projects",
    description:
      "Highlights: research, assistive tech, hardware, aviation, and tools.",
    to: "/docs/Projetos",
  },
  {
    title: "Publications",
    description:
      "Academic work in AI, NLP, LLMs, and assistive technology.",
    to: "/publications",
  },
  {
    title: "CV",
    description:
      "Computer Scientist · Software Engineer — AI, LLM, NLP, and backend.",
    to: "/cv",
  },
];

const social = [
  {
    label: "GitHub",
    href: "https://github.com/rodriguesfas",
    note: "Code and repositories",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rodriguesfas/",
    note: "Professional path",
  },
  {
    label: "Lattes",
    href: "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8165664Z5",
    note: "Academic CV",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0003-4258-369X",
    note: "Research identity",
  },
];

function Hero() {
  const portrait = useBaseUrl("/img/profile-pic3.jpg");

  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={clsx("container", styles.heroInner)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Personal site</p>
          <h1 className={styles.brand}>Francisco Rodrigues</h1>
          <p className={styles.lede}>
            Computer scientist, systems analyst, and software engineer. PhD
            candidate (UFPE/CIn) focused on AI, LLMs, NLP, and backend —
            assistive technology and health products, at my own pace.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className={clsx("button button--primary button--lg", styles.ctaPrimary)}
              to="/cv"
            >
              View CV
            </Link>
            <Link
              className={clsx("button button--outline button--lg", styles.ctaGhost)}
              to="/docs/bem-vindo"
            >
              Explore the site
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
        <p className={styles.sectionEyebrow}>Where to start</p>
        <h2 className={styles.sectionTitle}>Open doors</h2>
        <p className={styles.sectionLead}>
          Pick what matches why you came. Everything else lives in the Explorer.
        </p>
        <div className={styles.pathGrid}>
          {paths.map((item) => (
            <Link key={item.to} className={styles.pathCard} to={item.to}>
              <h3 className={styles.pathTitle}>{item.title}</h3>
              <p className={styles.pathDesc}>{item.description}</p>
              <span className={styles.pathGo}>Open →</span>
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
          <p className={styles.sectionEyebrow}>In two lines</p>
          <h2 className={styles.sectionTitle}>What I do</h2>
        </div>
        <div className={styles.aboutBody}>
          <p>
            Co-founder and engineer at{" "}
            <a href="https://octor.com.br/" target="_blank" rel="noreferrer">
              Octor
            </a>
            — shipping LLM, ASR, NLI, and APIs for clinics — and technology
            advisor at{" "}
            <a href="https://neuroespectro.com.br/" target="_blank" rel="noreferrer">
              NeuroEspectro
            </a>
            . I research at the intersection of AI and assistive technology.
          </p>
          <p>
            I published in NLP (DeepNLPF / LREC), coached robotics teams, and
            built products from scratch. This site is my living archive.
          </p>
          <Link className={styles.inlineLink} to="/cv">
            Full CV →
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
        <p className={styles.sectionEyebrow}>Presence</p>
        <h2 className={styles.sectionTitle}>Where to find me</h2>
        <p className={styles.sectionLead}>
          Each channel shows a different side. Choose what fits.
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
    <Layout title="Home" description={siteConfig.tagline}>
      <main>
        <Hero />
        <Paths />
        <About />
        <Follow />
      </main>
    </Layout>
  );
}
