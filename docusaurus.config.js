// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Olá! Eu sou Francisco Rodrigues",
  tagline:
    "Bem-vindo ao meu site pessoal! Aqui, você encontrará informações sobre mim e minhas paixões. Permita-me compartilhar um pouco sobre quem sou e o que me motiva.",
  favicon: "img/logo.ico",

  // Set the production url of your site here
  url: "http://rodriguesfas.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rodriguesfas", // Usually your GitHub org/user name.
  projectName: "rodriguesfas.github.io", // Usually your repo name.
  onBrokenLinks: "ignore", // throw
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "fr"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Francisco Rodrigues",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/bem-vindo",
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Explorador",
          },
          { to: "/blog", label: "Eventos", position: "left" },
          { to: "/docs/Startups", label: "Startups", position: "left" },
          {
            to: "/docs/Projetos",
            label: "Projetos",
            position: "left",
          },
          { to: "/publications", label: "Publicações", position: "left" },
          { to: "/cv", label: "CV", position: "left" },
          {
            href: "http://github.com/rodriguesfas",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
