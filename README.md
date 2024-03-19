# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### NVM Version

```bash
nvm use v18.17.0
```

### Installation

```bash
npm install 
```

### Local Development

```bash
npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npx docusaurus build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
export USE_SSH=true
export DEPLOYMENT_BRANCH=gh-pages
npx docusaurus deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
