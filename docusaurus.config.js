module.exports = {
    title: 'Francisco Rodrigues',
    tagline: 'Bem-vindo à minha página pessoal!', // Aqui você encontrará informações sobre mim, meus interesses e experiências. Sou um entusiasta da tecnologia, apaixonado por programação e sempre em busca de aprendizado e crescimento. Esta página serve como um espaço para compartilhar meus projetos, conquistas e ideias. Sinta-se à vontade para explorar e conhecer mais sobre mim.
    url: 'https://rodriguesfas.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'rodriguesfas', // Usually your GitHub org/user name.
    projectName: 'rodriguesfas.github.io', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: '$ cd home/',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [{
                    to: 'docs',
                    activeBasePath: 'docs',
                    label: 'Conteúdos',
                    position: 'left',
                },
                {
                    href: 'http://clubedosgeeks.com.br/author/champs',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    to: 'blog',
                    label: 'Eventos',
                    position: 'left'
                },
                {
                    to: 'docs/portfolio',
                    label: 'Portfólio',
                    position: 'left',
                },
                {
                    to: 'docs/about',
                    label: 'Sobre',
                    position: 'left',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        algolia: {
            apiKey: 'YOUR_API_KEY',
            indexName: 'YOUR_INDEX_NAME',

            // Optional: see doc section bellow
            contextualSearch: true,

            // Optional: Algolia search parameters
            searchParameters: {},

            //... other Algolia params
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};