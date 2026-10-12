// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const { GlobExcludeDefault } = require("@docusaurus/utils");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// Docs excluídos do build: ver docsExcludePatterns abaixo (GlobExcludeDefault =
// ficheiros e pastas cujo nome começa por _ , entre outros).
const docsExcludePatterns = [
  ...GlobExcludeDefault,
  // Exemplo: pasta só no repositório, nunca no site (descomente se usar)
  // "**/rascunhos/**",
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Francisco Rodrigues",
  tagline:
    "Cientista da Computação, analista de sistemas e engenheiro de software — IA, LLMs, PLN e backend. Doutorando UFPE/CIn; produtos para saúde e pesquisa em tecnologia assistiva.",
  favicon: "img/favicon.ico",

  // URL canônica (use https para hreflang e troca de idioma em produção)
  url: "https://rodriguesfas.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rodriguesfas", // Usually your GitHub org/user name.
  projectName: "rodriguesfas.github.io", // Usually your repo name.
  onBrokenLinks: "ignore",
  onBrokenAnchors: "ignore",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en", "fr"],
    localeConfigs: {
      "pt-BR": {
        label: "Português (Brasil)",
        htmlLang: "pt-BR",
        direction: "ltr",
      },
      en: {
        label: "English",
        htmlLang: "en",
        direction: "ltr",
      },
      fr: {
        label: "Français",
        htmlLang: "fr",
        direction: "ltr",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/rodriguesfas/rodriguesfas.github.io/tree/main/",
          exclude: docsExcludePatterns,
        },
        blog: {
          showReadingTime: true,
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
          editUrl:
            "https://github.com/rodriguesfas/rodriguesfas.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/profile-pic3.jpg",
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Francisco Rodrigues",
        logo: {
          alt: "Francisco Rodrigues",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs/bem-vindo",
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Explorador",
          },
          { to: "/blog", label: "Eventos", position: "left" },
          { to: "/docs/Startups", label: "Startups", position: "left" },
          { to: "/docs/Projetos", label: "Projetos", position: "left" },
          { to: "/publications", label: "Publicações", position: "left" },
          { to: "/cv", label: "CV", position: "left" },
          { to: "/trajetoria", label: "Trajetória", position: "left" },
          {
            href: "https://github.com/rodriguesfas",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Explorar",
            items: [
              { label: "Bem-vindo", to: "/docs/bem-vindo" },
              { label: "Startups", to: "/docs/Startups" },
              { label: "Projetos", to: "/docs/Projetos" },
              { label: "Eventos", to: "/blog" },
            ],
          },
          {
            title: "Acadêmico",
            items: [
              { label: "CV", to: "/cv" },
              { label: "Trajetória", to: "/trajetoria" },
              { label: "Publicações", to: "/publications" },
              { label: "Cursos", to: "/courses" },
              { label: "Honras e prêmios", to: "/honras-e-premios" },
            ],
          },
          {
            title: "Na rede",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/rodriguesfas",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/rodriguesfas/",
              },
              {
                label: "ORCID",
                href: "https://orcid.org/0000-0003-4258-369X",
              },
              {
                label: "Email",
                href: "mailto:franciscosouzaacer@gmail.com",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Francisco Rodrigues. Arquivo pessoal — aberto e em construção.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
