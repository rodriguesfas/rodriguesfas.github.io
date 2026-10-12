#!/usr/bin/env node
/**
 * Gera PDFs a partir dos .mdx:
 * - CV resumido (foco IA) → Francisco-Rodrigues-CV-*.pdf
 * - Trajetória completa → Francisco-Rodrigues-Trajetoria-*.pdf
 */
import { mkdirSync, writeFileSync, unlinkSync, readFileSync } from "node:fs";
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

const sources = [
  {
    locale: "pt-BR",
    file: "Francisco-Rodrigues-CV-pt-BR.pdf",
    mdx: join(root, "src/pages/cv.mdx"),
  },
  {
    locale: "en",
    file: "Francisco-Rodrigues-CV-en.pdf",
    mdx: join(root, "i18n/en/docusaurus-plugin-content-pages/cv.mdx"),
  },
  {
    locale: "fr",
    file: "Francisco-Rodrigues-CV-fr.pdf",
    mdx: join(root, "i18n/fr/docusaurus-plugin-content-pages/cv.mdx"),
  },
  {
    locale: "pt-BR-full",
    file: "Francisco-Rodrigues-Trajetoria-pt-BR.pdf",
    mdx: join(root, "src/pages/trajetoria.mdx"),
  },
  {
    locale: "en-full",
    file: "Francisco-Rodrigues-Trajetoria-en.pdf",
    mdx: join(root, "i18n/en/docusaurus-plugin-content-pages/trajetoria.mdx"),
  },
  {
    locale: "fr-full",
    file: "Francisco-Rodrigues-Trajetoria-fr.pdf",
    mdx: join(root, "i18n/fr/docusaurus-plugin-content-pages/trajetoria.mdx"),
  },
];

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inline(md) {
  return escapeHtml(md)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function mdxToBody(mdx) {
  let text = mdx
    .replace(/^---[\s\S]*?---\n*/, "")
    .replace(/^import\s+.+$/gm, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/<CvPdfDownload[^/]*\/>/g, "")
    .replace(/\r\n/g, "\n")
    .trim();

  // Always emit opening/closing on their own lines so the line parser
  // can handle the note (single-line <div>…</div> was escaped as text).
  text = text.replace(
    /^:::(\w+)([^\n]*)\n([\s\S]*?):::/gm,
    (_m, _kind, titlePart, body) => {
      const title = titlePart.trim();
      const head = title ? `${title}\n\n` : "";
      return `<div class="note">\n${head}${body.trim()}\n</div>\n`;
    },
  );

  const lines = text.split("\n");
  const out = [];
  let i = 0;

  const flushParagraph = (buf) => {
    const t = buf.join(" ").trim();
    if (t) out.push(`<p>${inline(t)}</p>`);
  };

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (/^---+$/.test(line.trim())) {
      out.push("<hr />");
      i += 1;
      continue;
    }
    const h = /^(#{1,3})\s+(.+)$/.exec(line);
    if (h) {
      const level = h[1].length;
      out.push(`<h${level}>${inline(h[2])}</h${level}>`);
      i += 1;
      continue;
    }
    if (/^\|/.test(line) && i + 1 < lines.length && /^\|?\s*-/.test(lines[i + 1])) {
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        if (!/^\|?\s*-/.test(lines[i])) rows.push(lines[i]);
        i += 1;
      }
      out.push("<table>");
      rows.forEach((row, idx) => {
        const cells = row
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((c) => c.trim());
        const tag = idx === 0 ? "th" : "td";
        out.push(
          `<tr>${cells.map((c) => `<${tag}>${inline(c)}</${tag}>`).join("")}</tr>`,
        );
      });
      out.push("</table>");
      continue;
    }
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i += 1;
      }
      out.push(`<blockquote><p>${inline(buf.join(" "))}</p></blockquote>`);
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      out.push("<ul>");
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        out.push(`<li>${inline(lines[i].replace(/^[-*]\s+/, ""))}</li>`);
        i += 1;
      }
      out.push("</ul>");
      continue;
    }
    if (line.trim() === '<div class="note">') {
      i += 1;
      const parts = [];
      while (i < lines.length && lines[i].trim() !== "</div>") {
        if (lines[i].trim()) parts.push(lines[i].trim());
        i += 1;
      }
      i += 1;
      const title = parts.length > 1 ? parts.shift() : null;
      const body = parts.join(" ");
      const titleHtml = title
        ? `<p class="note-title"><strong>${inline(title)}</strong></p>`
        : "";
      out.push(
        `<div class="note">${titleHtml}<p>${inline(body)}</p></div>`,
      );
      continue;
    }
    // One-line note leftover (defensive)
    const oneLineNote = /^<div class="note">([\s\S]*)<\/div>\s*$/.exec(
      line.trim(),
    );
    if (oneLineNote) {
      out.push(
        `<div class="note"><p>${inline(oneLineNote[1])}</p></div>`,
      );
      i += 1;
      continue;
    }
    const buf = [line];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,3})\s+/.test(lines[i]) &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^\|/.test(lines[i]) &&
      !/^---+$/.test(lines[i].trim()) &&
      lines[i].trim() !== '<div class="note">' &&
      !/^<\/?div\b/.test(lines[i].trim())
    ) {
      buf.push(lines[i]);
      i += 1;
    }
    flushParagraph(buf);
  }
  return out.join("\n");
}

function wrap(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<style>
  @page { margin: 12mm 14mm; size: A4; }
  body {
    font-family: "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 9.8pt;
    line-height: 1.38;
    color: #152028;
    margin: 0;
  }
  h1 { font-size: 16.5pt; margin: 0 0 6pt; letter-spacing: -0.02em; }
  h2 {
    font-size: 11.5pt;
    margin: 16pt 0 6pt;
    border-bottom: 1.5px solid #1f7a66;
    padding-bottom: 2pt;
    color: #145244;
    page-break-after: avoid;
  }
  h3 { font-size: 10.2pt; margin: 10pt 0 4pt; page-break-after: avoid; }
  p { margin: 0 0 6pt; }
  ul { margin: 0 0 8pt 16pt; padding: 0; }
  li { margin-bottom: 3pt; }
  blockquote {
    margin: 6pt 0 10pt;
    padding: 4pt 10pt;
    border-left: 3px solid #1f7a66;
    background: #f3f8f6;
  }
  blockquote p { margin: 0; }
  table { width: 100%; border-collapse: collapse; margin: 0 0 10pt; font-size: 9.2pt; }
  th, td { border: 1px solid #c5d4ce; padding: 4pt 6pt; text-align: left; vertical-align: top; }
  th { background: #eaf0ee; }
  a { color: #1a6b59; text-decoration: none; }
  .note {
    margin: 8pt 0 12pt;
    padding: 8pt 10pt;
    background: #eef5f2;
    border: 1px solid #c5d4ce;
    border-radius: 4pt;
    font-size: 9pt;
  }
  .note p { margin: 0; }
  .note-title { margin: 0 0 4pt !important; color: #145244; }
  hr { border: none; border-top: 1px solid #c5d4ce; margin: 12pt 0; }
</style>
</head>
<body>${body}</body>
</html>`;
}

for (const src of sources) {
  const mdx = readFileSync(src.mdx, "utf8");
  const body = mdxToBody(mdx);
  const htmlPath = join(tmpDir, `${src.locale}.html`);
  const pdfPath = join(outDir, src.file);
  writeFileSync(htmlPath, wrap(`Francisco Rodrigues — ${src.file}`, body), "utf8");
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
  console.log(`OK → ${src.file} (${readFileSync(pdfPath).length} bytes)`);
  try {
    unlinkSync(htmlPath);
  } catch {
    /* ignore */
  }
}

console.log("PDFs em static/cv/ (CV resumido + Trajetória completa)");
