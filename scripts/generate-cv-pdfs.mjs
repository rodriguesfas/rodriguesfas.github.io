#!/usr/bin/env node
/**
 * Gera PDFs do CV (pt-BR, en, fr) via Chrome headless.
 * Uso: node scripts/generate-cv-pdfs.mjs
 */
import { mkdirSync, writeFileSync, unlinkSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "static", "cv");
const tmpDir = join(root, ".make", "cv-pdf");

mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

const chrome =
  process.env.CHROME_PATH ||
  ["google-chrome", "chromium-browser", "chromium"].find((bin) => {
    const r = spawnSync("which", [bin], { encoding: "utf8" });
    return r.status === 0;
  });

if (!chrome) {
  console.error("Chrome/Chromium não encontrado.");
  process.exit(1);
}

const docs = {
  "pt-BR": {
    file: "Francisco-Rodrigues-CV-pt-BR.pdf",
    title: "Francisco de Assis de Souza Rodrigues — CV",
    html: `
<h1>Francisco de Assis de Souza Rodrigues</h1>
<p class="role">Cientista da Computação · Analista de Sistemas · Engenheiro de Software</p>
<p class="focus">IA, LLMs, Processamento de Linguagem Natural e engenharia de backend</p>
<p>Doutorando e Mestre em Ciência da Computação (UFPE/CIn). Co-fundador e engenheiro na <strong>Octor</strong>; advisor na NeuroEspectro; professor/coordenador NExTI (UniFAP).</p>
<p>Projeto e opero sistemas de IA em produção: pipelines LLM, decisão tipada (NLI/System One), ASR (Whisper), OCR, agentes clínicos e APIs em microsserviços. PLN acadêmico (DeepNLPF, LREC 2020).</p>
<p class="contact">franciscosouzaacer@gmail.com · linkedin.com/in/rodriguesfas · github.com/rodriguesfas · rodriguesfas.github.io/cv</p>

<h2>Competências</h2>
<p><strong>IA &amp; PLN:</strong> LLMs (vLLM), Transformers, NLI/Laya, Whisper, OCR, RAG, text mining, extração de informação</p>
<p><strong>Backend:</strong> Python, Rust (Actix), FastAPI, Redis, Docker, MySQL/PostgreSQL/SQLite, AWS, Azure, OpenAPI, CI/CD, Linux</p>

<h2>Experiência</h2>
<h3>Octor — Co-fundador, Cientista da Computação e Engenheiro de Software (atual)</h3>
<ul>
<li>Plataforma LLM clínica (Sereia): Rust + Redis + GPU (Whisper, vLLM) com tools clínicas</li>
<li>Transcrição ASR, motor de decisão tipada (platform-decide), Laya, SDR WhatsApp, OCR/extração</li>
<li>Microsserviços para agenda, prontuário, financeiro e integrações</li>
</ul>
<h3>NeuroEspectro — Advisor de Tecnologia (atual)</h3>
<p>Saúde digital, telemedicina, prontuário e estratégia tecnológica.</p>
<h3>NoVerde/Dotz — Backend Python (2023)</h3>
<p>APIs de crédito, testes, migração Ruby→Python, AWS Lambda/SQS/S3, Airflow, ELK.</p>
<h3>NeuralMind — IA/PLN (2022)</h3>
<p>NeuralSearchX: busca NLP, QA, Transformers, FastAPI, AWS/Azure.</p>
<h3>Cronos Cariri — Software (2019–2020)</h3>
<p>Coletor RFID Impinj para cronometragem de corridas.</p>

<h2>Formação</h2>
<ul>
<li><strong>Doutorado</strong> Ciência da Computação — UFPE/CIn (em andamento, CAPES)</li>
<li><strong>Mestrado</strong> Ciência da Computação — UFPE/CIn (2017–2019): DeepNLPF / LREC 2020</li>
<li><strong>MBA</strong> Docência no Ensino Superior — IDJ (2015–2016)</li>
<li><strong>ADS</strong> — UniLeão (2011–2014): DAVI (tecnologia assistiva)</li>
</ul>
`,
  },
  en: {
    file: "Francisco-Rodrigues-CV-en.pdf",
    title: "Francisco de Assis de Souza Rodrigues — CV",
    html: `
<h1>Francisco de Assis de Souza Rodrigues</h1>
<p class="role">Computer Scientist · Systems Analyst · Software Engineer</p>
<p class="focus">AI, LLMs, Natural Language Processing, and backend engineering</p>
<p>PhD candidate and MSc in Computer Science (UFPE/CIn). Co-founder and engineer at <strong>Octor</strong>; technology advisor at NeuroEspectro; professor/coordinator at NExTI (UniFAP).</p>
<p>I design and operate production AI systems: LLM pipelines, typed decisions (NLI/System One), ASR (Whisper), OCR, clinical agents, and microservice APIs. Academic NLP (DeepNLPF, LREC 2020).</p>
<p class="contact">franciscosouzaacer@gmail.com · linkedin.com/in/rodriguesfas · github.com/rodriguesfas · rodriguesfas.github.io/en/cv</p>

<h2>Skills</h2>
<p><strong>AI &amp; NLP:</strong> LLMs (vLLM), Transformers, NLI/Laya, Whisper, OCR, RAG, text mining, information extraction</p>
<p><strong>Backend:</strong> Python, Rust (Actix), FastAPI, Redis, Docker, MySQL/PostgreSQL/SQLite, AWS, Azure, OpenAPI, CI/CD, Linux</p>

<h2>Experience</h2>
<h3>Octor — Co-founder, Computer Scientist &amp; Software Engineer (present)</h3>
<ul>
<li>Clinical LLM platform (Sereia): Rust + Redis + GPU (Whisper, vLLM) with clinical tools</li>
<li>ASR transcription, typed-decision engine (platform-decide), Laya, WhatsApp SDR, OCR/extraction</li>
<li>Microservices for scheduling, EHR, billing, and integrations</li>
</ul>
<h3>NeuroEspectro — Technology Advisor (present)</h3>
<p>Digital health, telemedicine, EHR, and technology strategy.</p>
<h3>NoVerde/Dotz — Backend Python (2023)</h3>
<p>Credit APIs, tests, Ruby→Python migration, AWS Lambda/SQS/S3, Airflow, ELK.</p>
<h3>NeuralMind — AI/NLP (2022)</h3>
<p>NeuralSearchX: NLP search, QA, Transformers, FastAPI, AWS/Azure.</p>
<h3>Cronos Cariri — Software (2019–2020)</h3>
<p>Impinj RFID collector for race timing.</p>

<h2>Education</h2>
<ul>
<li><strong>PhD</strong> Computer Science — UFPE/CIn (in progress, CAPES)</li>
<li><strong>MSc</strong> Computer Science — UFPE/CIn (2017–2019): DeepNLPF / LREC 2020</li>
<li><strong>MBA</strong> Higher Education Teaching — IDJ (2015–2016)</li>
<li><strong>Systems Analysis</strong> — UniLeão (2011–2014): DAVI (assistive tech)</li>
</ul>
`,
  },
  fr: {
    file: "Francisco-Rodrigues-CV-fr.pdf",
    title: "Francisco de Assis de Souza Rodrigues — CV",
    html: `
<h1>Francisco de Assis de Souza Rodrigues</h1>
<p class="role">Informaticien · Analyste de systèmes · Ingénieur logiciel</p>
<p class="focus">IA, LLMs, traitement du langage naturel et ingénierie backend</p>
<p>Doctorant et Master en informatique (UFPE/CIn). Co-fondateur et ingénieur chez <strong>Octor</strong> ; conseiller à NeuroEspectro ; professeur/coordinateur NExTI (UniFAP).</p>
<p>Je conçois et opère des systèmes d'IA en production : pipelines LLM, décisions typées (NLI/System One), ASR (Whisper), OCR, agents cliniques et API microservices. TALN académique (DeepNLPF, LREC 2020).</p>
<p class="contact">franciscosouzaacer@gmail.com · linkedin.com/in/rodriguesfas · github.com/rodriguesfas · rodriguesfas.github.io/fr/cv</p>

<h2>Compétences</h2>
<p><strong>IA &amp; TALN :</strong> LLMs (vLLM), Transformers, NLI/Laya, Whisper, OCR, RAG, text mining, extraction d'information</p>
<p><strong>Backend :</strong> Python, Rust (Actix), FastAPI, Redis, Docker, MySQL/PostgreSQL/SQLite, AWS, Azure, OpenAPI, CI/CD, Linux</p>

<h2>Expérience</h2>
<h3>Octor — Co-fondateur, informaticien et ingénieur logiciel (actuel)</h3>
<ul>
<li>Plateforme LLM clinique (Sereia) : Rust + Redis + GPU (Whisper, vLLM) avec tools cliniques</li>
<li>Transcription ASR, moteur de décision typée (platform-decide), Laya, SDR WhatsApp, OCR</li>
<li>Microservices pour agenda, DME, finance et intégrations</li>
</ul>
<h3>NeuroEspectro — Conseiller technologique (actuel)</h3>
<p>E-santé, télémédecine, DME et stratégie technologique.</p>
<h3>NoVerde/Dotz — Backend Python (2023)</h3>
<p>API crédit, tests, migration Ruby→Python, AWS, Airflow, ELK.</p>
<h3>NeuralMind — IA/TALN (2022)</h3>
<p>NeuralSearchX : recherche NLP, QA, Transformers, FastAPI, AWS/Azure.</p>
<h3>Cronos Cariri — Logiciel (2019–2020)</h3>
<p>Collecteur RFID Impinj pour chronométrage.</p>

<h2>Formation</h2>
<ul>
<li><strong>Doctorat</strong> Informatique — UFPE/CIn (en cours, CAPES)</li>
<li><strong>Master</strong> Informatique — UFPE/CIn (2017–2019) : DeepNLPF / LREC 2020</li>
<li><strong>MBA</strong> Enseignement supérieur — IDJ (2015–2016)</li>
<li><strong>Analyse de systèmes</strong> — UniLeão (2011–2014) : DAVI</li>
</ul>
`,
  },
};

function wrap(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${title}</title>
<style>
  @page { margin: 14mm 16mm; size: A4; }
  body {
    font-family: "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.35;
    color: #152028;
    margin: 0;
  }
  h1 { font-size: 18pt; margin: 0 0 4pt; letter-spacing: -0.02em; }
  h2 { font-size: 12pt; margin: 14pt 0 6pt; border-bottom: 1px solid #1f7a66; padding-bottom: 2pt; color: #145244; }
  h3 { font-size: 10.5pt; margin: 8pt 0 3pt; }
  p { margin: 0 0 6pt; }
  ul { margin: 0 0 8pt 16pt; padding: 0; }
  li { margin-bottom: 2pt; }
  .role { font-weight: 700; margin-bottom: 2pt; }
  .focus { color: #1f7a66; font-weight: 600; margin-bottom: 8pt; }
  .contact { font-size: 9.5pt; color: #334; }
</style>
</head>
<body>${body}</body>
</html>`;
}

for (const [locale, doc] of Object.entries(docs)) {
  const htmlPath = join(tmpDir, `${locale}.html`);
  const pdfPath = join(outDir, doc.file);
  writeFileSync(htmlPath, wrap(doc.title, doc.html), "utf8");
  const result = spawnSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      `file://${htmlPath}`,
    ],
    { encoding: "utf8" },
  );
  if (result.status !== 0) {
    console.error(result.stderr || result.stdout);
    process.exit(result.status ?? 1);
  }
  console.log(`OK ${locale} → ${pdfPath}`);
  try {
    unlinkSync(htmlPath);
  } catch {
    /* ignore */
  }
}

console.log("PDFs gerados em static/cv/");
