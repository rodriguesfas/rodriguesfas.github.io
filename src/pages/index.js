import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

const paths = [
  {
    title: "Explorador",
    description:
      "Anotações, slides e tópicos de estudo — um norte pessoal, não um curso pronto.",
    to: "/docs/bem-vindo",
  },
  {
    title: "Startups",
    description:
      "Ideias que viraram produto: saúde, gestão e experimentos de empreendedorismo.",
    to: "/docs/Startups",
  },
  {
    title: "Projetos",
    description:
      "Destaques: pesquisa, assistiva, hardware, aviação e ferramentas.",
    to: "/docs/Projetos",
  },
  {
    title: "Publicações",
    description:
      "Artigos e trabalhos acadêmicos em IA, PLN, LLM e tecnologia assistiva.",
    to: "/publications",
  },
  {
    title: "CV",
    description:
      "Cientista da Computação · Engenheiro de Software — IA, LLM, PLN e backend.",
    to: "/cv",
  },
];

const social = [
  {
    label: "GitHub",
    href: "https://github.com/rodriguesfas",
    note: "Código e repositórios",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rodriguesfas/",
    note: "Trajetória profissional",
  },
  {
    label: "Lattes",
    href: "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8165664Z5",
    note: "Currículo acadêmico",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0003-4258-369X",
    note: "Identidade de pesquisa",
  },
];

function Hero() {
  const portrait = useBaseUrl("/img/profile-pic3.jpg");

  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={clsx("container", styles.heroInner)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Site pessoal</p>
          <h1 className={styles.brand}>Francisco Rodrigues</h1>
          <p className={styles.lede}>
            Cientista da Computação, analista de sistemas e engenheiro de
            software. Doutorando (UFPE/CIn) com foco em IA, LLMs, PLN e
            backend — tecnologia assistiva e produtos para saúde, no meu ritmo.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className={clsx("button button--primary button--lg", styles.ctaPrimary)}
              to="/cv"
            >
              Ver CV
            </Link>
            <Link
              className={clsx("button button--outline button--lg", styles.ctaGhost)}
              to="/docs/bem-vindo"
            >
              Explorar o site
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
        <p className={styles.sectionEyebrow}>Por onde começar</p>
        <h2 className={styles.sectionTitle}>Portas abertas</h2>
        <p className={styles.sectionLead}>
          Escolha o que combina com o que você veio buscar. O resto fica
          organizado no Explorador.
        </p>
        <div className={styles.pathGrid}>
          {paths.map((item) => (
            <Link key={item.to} className={styles.pathCard} to={item.to}>
              <h3 className={styles.pathTitle}>{item.title}</h3>
              <p className={styles.pathDesc}>{item.description}</p>
              <span className={styles.pathGo}>Abrir →</span>
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
          <p className={styles.sectionEyebrow}>Em duas linhas</p>
          <h2 className={styles.sectionTitle}>O que faço</h2>
        </div>
        <div className={styles.aboutBody}>
          <p>
            Co-fundador e engenheiro na{" "}
            <a href="https://octor.com.br/" target="_blank" rel="noreferrer">
              Octor
            </a>
            — onde levo LLM, ASR, NLI e APIs a produção em clínicas — e advisor
            de tecnologia na{" "}
            <a href="https://neuroespectro.com.br/" target="_blank" rel="noreferrer">
              NeuroEspectro
            </a>
            . Pesquiso na interseção de inteligência artificial e tecnologia
            assistiva.
          </p>
          <p>
            Publiquei em PLN (DeepNLPF / LREC), formei equipes de robótica e
            construí produtos do zero. Este site é o meu arquivo vivo — estudos,
            startups, projetos e eventos.
          </p>
          <Link className={styles.inlineLink} to="/cv">
            Currículo completo →
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
        <p className={styles.sectionEyebrow}>Presença</p>
        <h2 className={styles.sectionTitle}>Onde me encontrar</h2>
        <p className={styles.sectionLead}>
          Cada canal mostra um lado diferente. Escolha o que fizer sentido.
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
    <Layout title="Início" description={siteConfig.tagline}>
      <main>
        <Hero />
        <Paths />
        <About />
        <Follow />
      </main>
    </Layout>
  );
}
