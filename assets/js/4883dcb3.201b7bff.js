"use strict";(self.webpackChunkrodriguesfas_github_io=self.webpackChunkrodriguesfas_github_io||[]).push([[6384],{3905:(e,o,a)=>{a.d(o,{Zo:()=>c,kt:()=>v});var n=a(7294);function i(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function t(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){i(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,n,i=function(e,o){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(i[a]=e[a]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var o=n.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):t(t({},o),e)),a},c=function(e){var o=d(e.components);return n.createElement(l.Provider,{value:o},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},p=n.forwardRef((function(e,o){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,v=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return a?n.createElement(v,t(t({ref:o},c),{},{components:a})):n.createElement(v,t({ref:o},c))}));function v(e,o){var a=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=a.length,t=new Array(r);t[0]=p;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s[m]="string"==typeof e?e:i,t[1]=s;for(var d=2;d<r;d++)t[d]=a[d];return n.createElement.apply(null,t)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7884:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={id:"champs-da-galaxia",title:"Sum\xe1rio"},t=void 0,s={unversionedId:"ebook/champs-da-galaxia",id:"ebook/champs-da-galaxia",title:"Sum\xe1rio",description:"Introdu\xe7\xe3o ao desenvolvimento de jogos com java",source:"@site/docs/ebook/champs-da-galaxia.md",sourceDirName:"ebook",slug:"/ebook/champs-da-galaxia",permalink:"/docs/ebook/champs-da-galaxia",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ebook/champs-da-galaxia.md",tags:[],version:"current",frontMatter:{id:"champs-da-galaxia",title:"Sum\xe1rio"},sidebar:"tutorialSidebar",previous:{title:"Os dois disc\xedpulos a caminho de emaus",permalink:"/docs/biblia/pregacoes/os-dois-discipulos-a-caminho-de-emaus"},next:{title:"Juvelino",permalink:"/docs/espacial/foguete"}},l={},d=[{value:"Introdu\xe7\xe3o ao desenvolvimento de jogos com java",id:"introdu\xe7\xe3o-ao-desenvolvimento-de-jogos-com-java",level:2},{value:"Objetivo",id:"objetivo",level:3},{value:"Prot\xf3tipo",id:"prot\xf3tipo",level:3},{value:"Vis\xe3o Industrial",id:"vis\xe3o-industrial",level:3},{value:"Configura\xe7\xf5es do ambiente",id:"configura\xe7\xf5es-do-ambiente",level:2},{value:"Criando a base do jogo",id:"criando-a-base-do-jogo",level:3},{value:"Desenhando o background",id:"desenhando-o-background",level:3},{value:"Sprite",id:"sprite",level:3},{value:"Criando o player",id:"criando-o-player",level:2},{value:"Desenhando o player",id:"desenhando-o-player",level:3},{value:"Movendo o player",id:"movendo-o-player",level:3},{value:"Ajustes finais do player na tela",id:"ajustes-finais-do-player-na-tela",level:3},{value:"Atirando",id:"atirando",level:3},{value:"Criando",id:"criando",level:2},{value:"Desenhando Inimigos",id:"desenhando-inimigos",level:3},{value:"Detectando Colis\xf5es",id:"detectando-colis\xf5es",level:2},{value:"Mostrando resultados e criando efeitos",id:"mostrando-resultados-e-criando-efeitos",level:3},{value:"Tela Game Over",id:"tela-game-over",level:2},{value:"Movendo o Background",id:"movendo-o-background",level:2},{value:"Conhecendo a lib Jlayer",id:"conhecendo-a-lib-jlayer",level:2},{value:"Adicionando m\xfasica",id:"adicionando-m\xfasica",level:3},{value:"Adicionar sons de efeitos",id:"adicionar-sons-de-efeitos",level:3},{value:"Criando o execut\xe1vel do jogo",id:"criando-o-execut\xe1vel-do-jogo",level:2},{value:"Desafios",id:"desafios",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2},{value:"Refer\xeancias bibliogr\xe1ficas",id:"refer\xeancias-bibliogr\xe1ficas",level:2}],c={toc:d},m="wrapper";function u(e){let{components:o,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introdu\xe7\xe3o-ao-desenvolvimento-de-jogos-com-java"},"Introdu\xe7\xe3o ao desenvolvimento de jogos com java"),(0,i.kt)("p",null,"O cl\xe1ssico Super Mario Bros, foi praticamente o primeiro jogo que joguei em meados 1996 na plataforma Nintendo, lan\xe7ado em 1985 foi o primeiro jogo com rolagem lateral, recurso conhecido como slide-scroling. O jogo \xe9 o mais vendido na hist\xf3ria dos v\xeddeos games e inspirou incont\xe1veis imita\xe7\xf5es que ajudaram a fixar esse estilo. O jogador controlava o principal protagonista da serie, Mario. O objetivo do jogo \xe9 percorrer o Reino do Cogumelo, sobreviver as for\xe7as do principal vil\xe3o Bowser, e salvar a princesa Peach e seu reino do dom\xednio dos Koop Troopas."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#"},"Figura 01")),(0,i.kt)("p",null,"Um dos meus jogos favoritos logo em seguida foi o Aero Fighters conhecido como Sonic Wings no Jap\xe3o, um jogo eletr\xf4nico de nave estilo Shot em up com rolagem vertical. Lan\xe7ado originalmente com nome \u201cSonic Wings\u201d para fliperama em 1992 que foi alterado em 1994 quando lan\xe7ado para a plataforma SNES. Nesse cl\xe1ssico voc\xea \xe9 um piloto de avi\xe3o, e com uma nave milita, tem o desafio de acabar com as bases inimigas. Detone as naves, pegue novas armas e tiros e conquiste grandes territ\xf3rios."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#"},"Figura 02")),(0,i.kt)("h3",{id:"objetivo"},"Objetivo"),(0,i.kt)("p",null,"Inspirar e motivar estudantes novatos ou at\xe9 mesmo veteranos programadores, para programa\xe7\xe3o voltada a desenvolvimento de jogos, ver que \xe9 poss\xedvel criar bons jogos com linguagem de alto n\xedvel com Java e entender a mec\xe2nica b\xe1sica de um jogo."),(0,i.kt)("h3",{id:"prot\xf3tipo"},"Prot\xf3tipo"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#"},"Figura 03")),(0,i.kt)("p",null,"Usaremos o jogo Aero Fighters como inspira\xe7\xe3o para o prot\xf3tipo que iremos desenvolver jogo chamdo Champs da Gal\xe1xia, um g\xeanero espacial, mostra uma batalha gal\xe1ctica entre diversas especeis; controle sua nave, pegue o m\xe1ximo de power-up \u201cpotencia\u201d para sua arma e destrua tudo o que vier em sua frente, voc\xea foi escolhido para a miss\xe3o de combater o exercito do General Grong, evitando assim que ele governe e crie um caos no hiperespa\xe7o."),(0,i.kt)("p",null,"A hist\xf3ria do jogo \xe9 o marco inicial, e o documento que \xe9 utilizado para projetar o jogo \xe9 conhecido como Game Designer, nele \xe9 que se escreve o projeto do jogo a ser desenvolvido, historia, personagens, cen\xe1rios, jogador, inimigos, desafios, logica do jogo, em fim tudo o que constara no seu jogo, porem n\xe3o \xe9 o foco principal desse livro e n\xe3o iremos nos aprofundar nessa documenta\xe7\xe3o."),(0,i.kt)("p",null,"N\xe3o iremos utilizar nenhum Framework para tratamento gr\xe1fico, usaremos uma class gr\xe1fica 2D que o java possu\xed e mesmo assim chegaremos a um jogo bem interessante, pois o objetivo \xe9 se familiarizar e ter conceitos b\xe1sico para desenvolvimento de games, esses conceitos sempre estar\xe3o presentes, seja em jogos simples ou avan\xe7ados."),(0,i.kt)("h3",{id:"vis\xe3o-industrial"},"Vis\xe3o Industrial"),(0,i.kt)("p",null,"Programa\xe7\xe3o \xe9 apenas uma parte do desenvolvimento de game. Empresas focadas em desenvolvimento de jogos possuem roteiristas para criar a hist\xf3ria do game, designer para definir o melhor visual do jogo, profissionais de som para trilhas sonoras e efeitos, designer de interface para definir como seria a experi\xeancia do jogador no game, entre outros. Jogos como \u201cCrisys\u201d chega ater 650 pessoas em uma equipe, todos envolvidos para se alcan\xe7ar o esperado sucesso."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#"},"Figura 04")),(0,i.kt)("h2",{id:"configura\xe7\xf5es-do-ambiente"},"Configura\xe7\xf5es do ambiente"),(0,i.kt)("p",null,"A configura\xe7\xe3o do ambiente de desenvolvimento utilizado \xe9: IDE Eclipse, pode-se ser quaisquer vers\xe3o do eclipse, ou at\xe9 mesmo se voc\xea preferir pode usar outras IDE como Netbeans ou IntelliJ Idea, JDK Java7 Run Time ou superior e o JRE."),(0,i.kt)("p",null,"Caso voc\xea ainda n\xe3o tenha instalado voc\xea pode esta adquirindo em:"),(0,i.kt)("p",null,"Baixar o Eclipse aqui. Baixar o JDK e o JRE aqui. Baixar JLayer aqui. Baixar o projeto \u201cc\xf3digo fonte\u201d e imagens do jogo e o arquivo .jar execut\xe1vel aqui:"),(0,i.kt)("h3",{id:"criando-a-base-do-jogo"},"Criando a base do jogo"),(0,i.kt)("p",null,"Com o eclipse instalado e corretamente configurado em seu computador, j\xe1 podemos come\xe7ar. Crie um projeto com o nome ChampsDaGalaxia."),(0,i.kt)("p",null,"Na pasta src crie um pacote com o nome br.com.game.app"),(0,i.kt)("p",null,"Dentro do pacote crie uma class com o nome Game."),(0,i.kt)("p",null,"Agora podemos programar nessa class que foi criada. Ela deve herdar da class JFrame, componente do pacote swing que possui todos os componentes necess\xe1rios para a constru\xe7\xe3o da janela do jogo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class Game extends JFrame {}\n")),(0,i.kt)("p",null,"Agora criaremos os seguintes m\xe9todos e o construtor da class, na class Game.java, n\xe3o citarei muitos detalhes pois o c\xf3digo est\xe1 comentado:"),(0,i.kt)("p",null,"O m\xe9todo main \xe9 o principal respons\xe1vel pela execu\xe7\xe3o da aplica\xe7\xe3o."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/**\n * M\xe9todo principal - start a aplica\xe7\xe3o.\n * @param args\n */\npublic static void main(String args[]) {\n    new Game();\n}\n")),(0,i.kt)("p",null,"Esse \xe9 o construtor da nossa class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/**\n * Construtor.\n */\nprotected Game() {\n    /* Chama o m\xe9todocomponentes */\n    componentes();\n}\n")),(0,i.kt)("p",null,"Esse m\xe9todo que configura a nossa janela."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/**\n * Configura a Janela.\n */\npublic void componentes() {\n    /* Titulo da Janela*/\n    setTitle("Champs da Gal\xe1xia");\n    /* Permite encerrar aplca\xe7\xe3o*/\n    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    /* Define tamanho da janela */\n    setSize(600, 600);\n    /* Instancia a janela no centroda tela */\n    setLocationRelativeTo(null);\n    /* Bloqueia redimensionamento da janela*/\n    setResizable(false);\n    /* Define a janela vis\xedvel*/\n    setVisible(true);\n}\n')),(0,i.kt)("p",null,"Agora execute a aplica\xe7\xe3o e teremos uma janela como essa:"),(0,i.kt)("h3",{id:"desenhando-o-background"},"Desenhando o background"),(0,i.kt)("p",null,"Podemos ver que ainda est\xe1 muito longe de termos um jogo. Com o bot\xe3o direito do mouse clique em cima do projeto New >> Folder crie uma pasta com o nome: res. Nessa pasta ficam todas as imagens e sons que utilizaremos no jogo."),(0,i.kt)("p",null,"Pegue as imagens do jogo que voc\xea j\xe1 deve ter baixado e adicione dentro dessa pasta juntamente com as subpastas. Agora no inicio da class Game.java criaremos os sequentes objetos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"O objeto time da class Timer.java componente do pacote swing utilizaremos para manipula\xe7\xe3o de threads do jogo;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"O objeto fase que usaremos para acessar a classe Fase, uma class interna que iremos implementar;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"O objeto fundo da class Image.java componente do pacote swing utilizaremos para carregar uma imagem de fundo do cen\xe1rio do jogo;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"O objeto gr\xe1fico componente do pacote swing que usaremos para manipulas as imagens 2D no jogo."),(0,i.kt)("p",{parentName:"li"},"  private Timer timer;\nprivate Fase fase;\nprivate Image fundo;\nprivate Graphics2D grafico;"))),(0,i.kt)("p",null,"Abaixo do m\xe9todo componentes(), criaremos uma class interna chamada Listener ela serve para escutar o que acontece em um objeto e avisar a outro, ela implementa ActionListener, que possibilita a Listener escutar por uma a\xe7\xe3o, ou seja, essa class \xe9 um ouvinte que informa as determinadas a\xe7\xf5es dos objetos."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private class Listener implements ActionListener {\n    public void actionPerformed(ActionEvent e) {}\n}\n")),(0,i.kt)("p",null,"Abaixo da class interna Listener, criaremos mais uma class com o nome de Fase que herda de JPanel, que \xe9 um componente do pacote swing que tem como principal fun\xe7\xe3o servir de conteiner para outros componentes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class Fase extends JPanel {\n    private static final long serialVersionUID = 1L;\n\n    /* Define as dimens\xf5es do JPanel */\n    protected static final int ALTURA = 600;\n    protected static final int LARGURA = 600;\n\n    protected Fase() {\n        setDoubleBuffered(true);\n    }\n\n    public void paint(Graphics g) {\n        grafico = (Graphics2D) g;\n        grafico.drawImage(fundo, 0, 0, null);\n        g.dispose();\n    }\n\n    /**\n    *\n    * @return\n    */\n    public int getLar() {\n        return LARGURA;\n    }\n\n    /**\n    *\n    * @return\n    */\n    public int getAlt() {\n        return ALTURA;\n    }\n\n}\n")),(0,i.kt)("p",null,"Crie um m\xe9todo inicializar inicializar(); ap\xf3s o m\xe9todo componentes()."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public void inicializar() {\n    fase = new Fase();\n    add(fase);\n    ImageIcon referencia = new ImageIcon("res/fundoFase/cenario1.jpg");\n    fundo = referencia.getImage();\n}\n')),(0,i.kt)("p",null,"Bem por fim no m\xe9todo inicializar(), adicione o seguinte trecho de c\xf3digo que \xe9 respons\xe1vel por instanciar uma thread referenciando a class interna Listener."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/*Inst\xe2ncia uma thread do jogo, com a class Listener*/\ntimer = new Timer(5, new Listener());\ntimer.start();/*inicia a thread*/\n")),(0,i.kt)("p",null,"Chama o m\xe9todo inicializar() no construtor da class Game.java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/**\n * Construtor.\n */\nprotected Game() {\n    componentes();\n    inicializar();\n}\n")),(0,i.kt)("p",null,"Dentro do m\xe9todo actionPerformed(ActionEvent e), da class Listener adicione o seguinte c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fase.repaint();\n")),(0,i.kt)("h3",{id:"sprite"},"Sprite"),(0,i.kt)("h2",{id:"criando-o-player"},"Criando o player"),(0,i.kt)("h3",{id:"desenhando-o-player"},"Desenhando o player"),(0,i.kt)("h3",{id:"movendo-o-player"},"Movendo o player"),(0,i.kt)("h3",{id:"ajustes-finais-do-player-na-tela"},"Ajustes finais do player na tela"),(0,i.kt)("h3",{id:"atirando"},"Atirando"),(0,i.kt)("h2",{id:"criando"},"Criando"),(0,i.kt)("h3",{id:"desenhando-inimigos"},"Desenhando Inimigos"),(0,i.kt)("h2",{id:"detectando-colis\xf5es"},"Detectando Colis\xf5es"),(0,i.kt)("h3",{id:"mostrando-resultados-e-criando-efeitos"},"Mostrando resultados e criando efeitos"),(0,i.kt)("h2",{id:"tela-game-over"},"Tela Game Over"),(0,i.kt)("h2",{id:"movendo-o-background"},"Movendo o Background"),(0,i.kt)("h2",{id:"conhecendo-a-lib-jlayer"},"Conhecendo a lib Jlayer"),(0,i.kt)("h3",{id:"adicionando-m\xfasica"},"Adicionando m\xfasica"),(0,i.kt)("h3",{id:"adicionar-sons-de-efeitos"},"Adicionar sons de efeitos"),(0,i.kt)("h2",{id:"criando-o-execut\xe1vel-do-jogo"},"Criando o execut\xe1vel do jogo"),(0,i.kt)("h2",{id:"desafios"},"Desafios"),(0,i.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,i.kt)("h2",{id:"refer\xeancias-bibliogr\xe1ficas"},"Refer\xeancias bibliogr\xe1ficas"))}u.isMDXComponent=!0}}]);