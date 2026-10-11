# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Requisitos

- **Node.js 18+** (Docusaurus 3; o projeto declara `engines.node >= 18`).

### NVM (exemplo)

### Installation

```bash
npm install 
```

### Local Development

```bash
nvm use v20
npm start
```

Most changes are reflected live without having to restart the server.

### Idiomas (i18n)

O seletor de idioma na navbar funciona no **build completo** (GitHub Pages e `npm run preview`). Traduções de UI + home + CV estão em `i18n/en` e `i18n/fr`.

#### Por que `http://localhost:3000/en/` dá “Página não encontrada” com `npm start`?

Com **`npm start`**, o modo desenvolvimento só carrega **um** locale: o padrão (**pt-BR**). As rotas **`/en/`** e **`/fr/` simplesmente não existem** nesse modo (limitação do Docusaurus, [explicação oficial](https://docusaurus.io/docs/i18n/tutorial#start-your-localized-site)).

- **Trabalhar no site em inglês:** `npm run start:en` (base `/en/`).
- **Trabalhar em francês:** `npm run start:fr` (base `/fr/`).
- **Testar os três idiomas + seletor** (como em produção):

```bash
npm run preview
```

Seletor: **`/`** = Português (Brasil), **`/en/`** = English, **`/fr/`** = Français.

### CV em PDF

```bash
make cv-pdf   # ou: npm run cv:pdf
```

Gera `static/cv/Francisco-Rodrigues-CV-{pt-BR,en,fr}.pdf`. O botão no final da página `/cv` baixa o PDF do idioma atual.

### Build

```bash
npx docusaurus build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
npx docusaurus build
export USE_SSH=true
export DEPLOYMENT_BRANCH=gh-pages
npx docusaurus deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
