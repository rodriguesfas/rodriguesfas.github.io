import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    img: require("@site/static/img/profile-pic3.jpg").default,
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--12")}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt="Profile" />
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
