# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

# Required 

- Nodejs v.16.14

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console

GIT_USER=<Your GitHub username> 
USE_SSH=true 

# YES
export  GIT_USERNAME=
export  GIT_USER=
export  GIT_PASSWORD=
export  USE_SSH=true 

npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

git add -f build

git commit -m ""

git subtree push --prefix build origin gh-pages

git push origin gh-pages

GIT_USER=rodriguesfas CURRENT_BRANCH=main npm run publish-gh-pages
