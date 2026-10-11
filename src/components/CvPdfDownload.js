import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

const LABELS = {
  "pt-BR": "Baixar versão PDF",
  en: "Download PDF version",
  fr: "Télécharger la version PDF",
};

const FILES = {
  "pt-BR": "Francisco-Rodrigues-CV-pt-BR.pdf",
  en: "Francisco-Rodrigues-CV-en.pdf",
  fr: "Francisco-Rodrigues-CV-fr.pdf",
};

export default function CvPdfDownload() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const file = FILES[locale] || FILES["pt-BR"];
  const label = LABELS[locale] || LABELS["pt-BR"];
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
