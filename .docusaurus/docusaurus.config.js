export default {
  "title": "Francisco Rodrigues",
  "tagline": "Apenas uma página pessoal",
  "url": "https://rodriguesfas.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "rodriguesfas",
  "projectName": "rodriguesfas.github.io",
  "themeConfig": {
    "navbar": {
      "title": "$ cd home/",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs",
          "activeBasePath": "docs",
          "label": "Conteúdos",
          "position": "left"
        },
        {
          "href": "http://clubedosgeeks.com.br/author/champs",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Eventos",
          "position": "left"
        },
        {
          "to": "docs/portfolio",
          "label": "Portfólio",
          "position": "left"
        },
        {
          "to": "docs/about",
          "label": "Sobre",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2022 My Project, Inc. Built with Docusaurus.",
      "links": []
    },
    "algolia": {
      "apiKey": "YOUR_API_KEY",
      "indexName": "YOUR_INDEX_NAME",
      "contextualSearch": true,
      "searchParameters": {},
      "appId": "BH4D9OD16A"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/fasr/Workspace/fasr/rodriguesfas.github.io/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/fasr/Workspace/fasr/rodriguesfas.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};