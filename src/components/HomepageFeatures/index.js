import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Sobre mim",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Você encontrará uma breve biografia e detalhes sobre minha formação
        acadêmica ou trajetória profissional. Sinta-se à vontade para conhecer
        mais sobre minhas habilidades e conquistas.
      </>
    ),
  },
  {
    title: "Portfólio",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Você poderá explorar alguns dos meus trabalhos. Meu portfólio reflete
        minha dedicação e comprometimento com o que faço.
      </>
    ),
  },
  {
    title: "Blog",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Onde compartilho meus insights, reflexões e experiências. Acredito na
        importância de aprender e crescer constantemente, e meu blog é um canal
        onde posso dividir minhas ideias e conhecimentos com você.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
