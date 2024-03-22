---
id: champs-da-galaxia
title: Sumário
---

## Introdução ao desenvolvimento de jogos com java

O clássico Super Mario Bros, foi praticamente o primeiro jogo que joguei em meados 1996 na plataforma Nintendo, lançado em 1985 foi o primeiro jogo com rolagem lateral, recurso conhecido como slide-scroling. O jogo é o mais vendido na história dos vídeos games e inspirou incontáveis imitações que ajudaram a fixar esse estilo. O jogador controlava o principal protagonista da serie, Mario. O objetivo do jogo é percorrer o Reino do Cogumelo, sobreviver as forças do principal vilão Bowser, e salvar a princesa Peach e seu reino do domínio dos Koop Troopas.

[Figura 01](#)

Um dos meus jogos favoritos logo em seguida foi o Aero Fighters conhecido como Sonic Wings no Japão, um jogo eletrônico de nave estilo Shot em up com rolagem vertical. Lançado originalmente com nome “Sonic Wings” para fliperama em 1992 que foi alterado em 1994 quando lançado para a plataforma SNES. Nesse clássico você é um piloto de avião, e com uma nave milita, tem o desafio de acabar com as bases inimigas. Detone as naves, pegue novas armas e tiros e conquiste grandes territórios.

[Figura 02](#)

### Objetivo

Inspirar e motivar estudantes novatos ou até mesmo veteranos programadores, para programação voltada a desenvolvimento de jogos, ver que é possível criar bons jogos com linguagem de alto nível com Java e entender a mecânica básica de um jogo.

### Protótipo

[Figura 03](#)

Usaremos o jogo Aero Fighters como inspiração para o protótipo que iremos desenvolver jogo chamdo Champs da Galáxia, um gênero espacial, mostra uma batalha galáctica entre diversas especeis; controle sua nave, pegue o máximo de power-up “potencia” para sua arma e destrua tudo o que vier em sua frente, você foi escolhido para a missão de combater o exercito do General Grong, evitando assim que ele governe e crie um caos no hiperespaço.

A história do jogo é o marco inicial, e o documento que é utilizado para projetar o jogo é conhecido como Game Designer, nele é que se escreve o projeto do jogo a ser desenvolvido, historia, personagens, cenários, jogador, inimigos, desafios, logica do jogo, em fim tudo o que constara no seu jogo, porem não é o foco principal desse livro e não iremos nos aprofundar nessa documentação.

Não iremos utilizar nenhum Framework para tratamento gráfico, usaremos uma class gráfica 2D que o java possuí e mesmo assim chegaremos a um jogo bem interessante, pois o objetivo é se familiarizar e ter conceitos básico para desenvolvimento de games, esses conceitos sempre estarão presentes, seja em jogos simples ou avançados.

### Visão Industrial

Programação é apenas uma parte do desenvolvimento de game. Empresas focadas em desenvolvimento de jogos possuem roteiristas para criar a história do game, designer para definir o melhor visual do jogo, profissionais de som para trilhas sonoras e efeitos, designer de interface para definir como seria a experiência do jogador no game, entre outros. Jogos como “Crisys” chega ater 650 pessoas em uma equipe, todos envolvidos para se alcançar o esperado sucesso.

[Figura 04](#)

## Configurações do ambiente

A configuração do ambiente de desenvolvimento utilizado é: IDE Eclipse, pode-se ser quaisquer versão do eclipse, ou até mesmo se você preferir pode usar outras IDE como Netbeans ou IntelliJ Idea, JDK Java7 Run Time ou superior e o JRE.

Caso você ainda não tenha instalado você pode esta adquirindo em:

Baixar o Eclipse aqui. Baixar o JDK e o JRE aqui. Baixar JLayer aqui. Baixar o projeto “código fonte” e imagens do jogo e o arquivo .jar executável aqui:

### Criando a base do jogo

Com o eclipse instalado e corretamente configurado em seu computador, já podemos começar. Crie um projeto com o nome ChampsDaGalaxia.

Na pasta src crie um pacote com o nome br.com.game.app

Dentro do pacote crie uma class com o nome Game.

Agora podemos programar nessa class que foi criada. Ela deve herdar da class JFrame, componente do pacote swing que possui todos os componentes necessários para a construção da janela do jogo.

    public class Game extends JFrame {}

Agora criaremos os seguintes métodos e o construtor da class, na class Game.java, não citarei muitos detalhes pois o código está comentado:

O método main é o principal responsável pela execução da aplicação.

    /**
     * Método principal - start a aplicação.
     * @param args
     */
    public static void main(String args[]) {
        new Game();
    }

Esse é o construtor da nossa class.

    /**
     * Construtor.
     */
    protected Game() {
        /* Chama o métodocomponentes */
        componentes();
    }

Esse método que configura a nossa janela.

    /**
     * Configura a Janela.
     */
    public void componentes() {
        /* Titulo da Janela*/
        setTitle("Champs da Galáxia");
        /* Permite encerrar aplcação*/
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        /* Define tamanho da janela */
        setSize(600, 600);
        /* Instancia a janela no centroda tela */
        setLocationRelativeTo(null);
        /* Bloqueia redimensionamento da janela*/
        setResizable(false);
        /* Define a janela visível*/
        setVisible(true);
    }

Agora execute a aplicação e teremos uma janela como essa:

### Desenhando o background

Podemos ver que ainda está muito longe de termos um jogo. Com o botão direito do mouse clique em cima do projeto New >> Folder crie uma pasta com o nome: res. Nessa pasta ficam todas as imagens e sons que utilizaremos no jogo.

Pegue as imagens do jogo que você já deve ter baixado e adicione dentro dessa pasta juntamente com as subpastas. Agora no inicio da class Game.java criaremos os sequentes objetos:

- O objeto time da class Timer.java componente do pacote swing utilizaremos para manipulação de threads do jogo;

- O objeto fase que usaremos para acessar a classe Fase, uma class interna que iremos implementar;

- O objeto fundo da class Image.java componente do pacote swing utilizaremos para carregar uma imagem de fundo do cenário do jogo;

- O objeto gráfico componente do pacote swing que usaremos para manipulas as imagens 2D no jogo.

    private Timer timer; 
    private Fase fase; 
    private Image fundo; 
    private Graphics2D grafico;

Abaixo do método componentes(), criaremos uma class interna chamada Listener ela serve para escutar o que acontece em um objeto e avisar a outro, ela implementa ActionListener, que possibilita a Listener escutar por uma ação, ou seja, essa class é um ouvinte que informa as determinadas ações dos objetos.

    private class Listener implements ActionListener {
        public void actionPerformed(ActionEvent e) {}
    }

Abaixo da class interna Listener, criaremos mais uma class com o nome de Fase que herda de JPanel, que é um componente do pacote swing que tem como principal função servir de conteiner para outros componentes.

    public class Fase extends JPanel {
        private static final long serialVersionUID = 1L;
    
        /* Define as dimensões do JPanel */
        protected static final int ALTURA = 600;
        protected static final int LARGURA = 600;
    
        protected Fase() {
            setDoubleBuffered(true);
        }

        public void paint(Graphics g) {
            grafico = (Graphics2D) g;
            grafico.drawImage(fundo, 0, 0, null);
            g.dispose();
        }

        /**
        *
        * @return
        */
        public int getLar() {
            return LARGURA;
        }

        /**
        *
        * @return
        */
        public int getAlt() {
            return ALTURA;
        }
    
    }

Crie um método inicializar inicializar(); após o método componentes().

    public void inicializar() {
        fase = new Fase();
        add(fase);
        ImageIcon referencia = new ImageIcon("res/fundoFase/cenario1.jpg");
        fundo = referencia.getImage();
    }

Bem por fim no método inicializar(), adicione o seguinte trecho de código que é responsável por instanciar uma thread referenciando a class interna Listener.

    /*Instância uma thread do jogo, com a class Listener*/
    timer = new Timer(5, new Listener());
    timer.start();/*inicia a thread*/

Chama o método inicializar() no construtor da class Game.java

    /**
     * Construtor.
     */
    protected Game() {
        componentes();
        inicializar();
    }

Dentro do método actionPerformed(ActionEvent e), da class Listener adicione o seguinte código:

    fase.repaint();

### Sprite

## Criando o player
### Desenhando o player
### Movendo o player
### Ajustes finais do player na tela
### Atirando

## Criando 
### Desenhando Inimigos

## Detectando Colisões
### Mostrando resultados e criando efeitos

## Tela Game Over

## Movendo o Background

## Conhecendo a lib Jlayer
### Adicionando música
### Adicionar sons de efeitos

## Criando o executável do jogo

## Desafios

## Conclusão

## Referências bibliográficas


