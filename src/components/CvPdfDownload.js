import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

const LABELS = {
  short: {
    "pt-BR": "Baixar CV (PDF)",
    en: "Download CV (PDF)",
    fr: "Télécharger le CV (PDF)",
  },
  full: {
    "pt-BR": "Baixar trajetória (PDF)",
    en: "Download full CV (PDF)",
    fr: "Télécharger le parcours (PDF)",
  },
};

const FILES = {
  short: {
    "pt-BR": "Francisco-Rodrigues-CV-pt-BR.pdf",
    en: "Francisco-Rodrigues-CV-en.pdf",
    fr: "Francisco-Rodrigues-CV-fr.pdf",
  },
  full: {
    "pt-BR": "Francisco-Rodrigues-Trajetoria-pt-BR.pdf",
    en: "Francisco-Rodrigues-Trajetoria-en.pdf",
    fr: "Francisco-Rodrigues-Trajetoria-fr.pdf",
  },
};

export default function CvPdfDownload({ variant = "short" }) {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const kind = variant === "full" ? "full" : "short";
  const file = (FILES[kind][locale] || FILES[kind]["pt-BR"]);
  const label = (LABELS[kind][locale] || LABELS[kind]["pt-BR"]);
  const href = useBaseUrl(`/cv/${file}`);

  return (
    <p className="cv-pdf-download" style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
      <a
        className="button button--primary button--lg"
        href={href}
        download={file}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </p>
  );
}
