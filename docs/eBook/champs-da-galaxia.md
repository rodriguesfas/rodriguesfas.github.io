---
id: champs-da-galaxia
title: Champs da Galáxia - Introdução ao Desenvolvimento de Jogos com Java
---

# Champs da Galáxia - Introdução ao Desenvolvimento de Jogos com Java

**Autor:** Francisco A. S. Rodrigues  
**Licença:** Creative Commons (CC) - Alguns Direitos Reservados  
**Local/Data:** Juazeiro do Norte – CE, BRA, Julho de 2014  
**Site:** http://www.clubedosgeeks.com.br

## Agradecimentos

Quero agradecer a Deus por tudo o que tens feito em minha vida.

Este livro é dedicado a toda a minha família e amigos que estiveram comigo e me apoiaram, e principalmente à Tamires, por ter dado todo o amor. Ela é uma pessoa muito especial em minha vida e sempre esteve ao meu lado me apoiando e me compreendendo em todos os momentos. Te amo.

## Sobre o Autor

Francisco de Assis de Souza Rodrigues, servo de Deus, Tecnólogo em Análise e Desenvolvimento de Sistemas – FALS, graduando em Tecnologia em Automação Industrial - IFCE, pós-graduando em Docência do Ensino Superior – IDJ/UVA, fundador do site Clube dos Geeks, sócio e Back-End Developer com ênfase em JavaEE, JavaSE, Java Android, Arduino, Robótica, C/C++, entusiasta de Linux e toca violão nas horas vagas.

## Sumário

- [Champs da Galáxia - Introdução ao Desenvolvimento de Jogos com Java](#champs-da-galáxia---introdução-ao-desenvolvimento-de-jogos-com-java)
  - [Agradecimentos](#agradecimentos)
  - [Sobre o Autor](#sobre-o-autor)
  - [Sumário](#sumário)
  - [1. Introdução ao Desenvolvimento de Jogos com Java](#1-introdução-ao-desenvolvimento-de-jogos-com-java)
    - [1.1 Objetivo](#11-objetivo)
    - [1.2 Protótipo](#12-protótipo)
    - [1.3 Visão Industrial](#13-visão-industrial)
  - [2. Configurações do Ambiente](#2-configurações-do-ambiente)
    - [Requisitos mínimos:](#requisitos-mínimos)
    - [Links úteis:](#links-úteis)
    - [2.1 Criando a Base do Jogo](#21-criando-a-base-do-jogo)
    - [2.2 Desenhando o Background](#22-desenhando-o-background)
    - [2.3 Sprite](#23-sprite)
  - [3. Criando o Player](#3-criando-o-player)
    - [3.1 Desenhando o Player](#31-desenhando-o-player)
    - [3.2 Movendo o Player](#32-movendo-o-player)
    - [3.3 Ajustes Finais do Player](#33-ajustes-finais-do-player)
    - [3.4 Atirando](#34-atirando)
  - [4. Criando Inimigos](#4-criando-inimigos)
    - [Adicionando inimigos no Game.java](#adicionando-inimigos-no-gamejava)
    - [Desenhando inimigos](#desenhando-inimigos)
  - [5. Detectando Colisões](#5-detectando-colisões)
  - [6. Tela Game Over](#6-tela-game-over)
    - [Reiniciar o jogo](#reiniciar-o-jogo)
  - [7. Movendo o Background](#7-movendo-o-background)
  - [8. Conhecendo a lib JLayer](#8-conhecendo-a-lib-jlayer)
    - [8.1 Adicionando Música](#81-adicionando-música)
    - [8.2 Adicionando Sons de Efeito](#82-adicionando-sons-de-efeito)
  - [9. Criando o Executável do Jogo](#9-criando-o-executável-do-jogo)
    - [Passo a passo no Eclipse:](#passo-a-passo-no-eclipse)
  - [10. Desafios](#10-desafios)
  - [11. Conclusão](#11-conclusão)
  - [12. Referências Bibliográficas](#12-referências-bibliográficas)
  - [Sinopse](#sinopse)

## 1. Introdução ao Desenvolvimento de Jogos com Java

O clássico Super Mario Bros foi praticamente o primeiro jogo que joguei, por volta de 1996, na plataforma Nintendo. Lançado em 1985, foi o primeiro jogo com rolagem lateral — recurso conhecido como slide-scrolling. O jogo é o mais vendido da história dos videogames e inspirou incontáveis imitações que ajudaram a fixar esse estilo.

O jogador controlava o protagonista da série, Mario. O objetivo do jogo é percorrer o Reino do Cogumelo, sobreviver às forças do vilão Bowser e salvar a princesa Peach e seu reino do domínio dos Koop Troopas.

Outro dos meus jogos favoritos foi Aero Fighters, conhecido como Sonic Wings no Japão — um jogo de nave estilo shoot 'em up com rolagem vertical. Lançado originalmente para fliperama em 1992, teve seu nome alterado em 1994 ao ser lançado para SNES. Nele, você pilota uma nave militar e precisa eliminar bases inimigas, conquistar territórios e adquirir novas armas.

### 1.1 Objetivo

Inspirar e motivar estudantes — sejam novatos ou veteranos — a explorarem a programação voltada ao desenvolvimento de jogos. Mostrar que é possível criar bons jogos com uma linguagem de alto nível como Java e apresentar a mecânica básica de um jogo.

### 1.2 Protótipo

Usaremos Aero Fighters como inspiração para o protótipo que desenvolveremos: Champs da Galáxia.

Trata-se de um jogo espacial com batalhas galácticas entre espécies. O jogador controla uma nave, coleta power-ups e destrói inimigos. A missão é combater o exército do General Grong e impedir que ele cause caos no hiperespaço.

> **Nota:** O documento que contém a história, personagens, cenários, desafios e lógica do jogo é conhecido como Game Design Document (GDD). Não será nosso foco neste livro.

### 1.3 Visão Industrial

Programar é apenas uma parte do desenvolvimento de um jogo. Estúdios profissionais contam com roteiristas, designers, engenheiros de som, especialistas em interface e experiência do usuário, entre outros.

Por exemplo, o jogo Crysis chegou a ter mais de 650 pessoas envolvidas em sua produção.

## 2. Configurações do Ambiente

O ambiente de desenvolvimento utilizado será o Eclipse IDE, mas você pode usar NetBeans, IntelliJ IDEA ou outra de sua preferência.

### Requisitos mínimos:
- JDK 7 (ou superior)
- JRE
- Biblioteca JLayer

### Links úteis:
- [Download do JDK/JRE - Oracle](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Download da JLayer](https://www.javazoom.net/javalayer/javalayer.html)
- [Código-fonte, imagens e .jar do jogo](https://github.com/rodriguesfas/champs-da-galaxia)

### 2.1 Criando a Base do Jogo

Com o Eclipse instalado, crie um novo projeto Java chamado: `ChampsDaGalaxia`

Na pasta `src`, crie o pacote: `br.com.game.app`

Dentro desse pacote, crie a classe `Game.java`:

```java
public class Game extends JFrame {
    public static void main(String[] args) {
        new Game();
    }

    protected Game() {
        componentes();
    }

    public void componentes() {
        setTitle("Champs da Galáxia");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(600, 600);
        setLocationRelativeTo(null);
        setResizable(false);
        setVisible(true);
    }
}
```

Ao executar a aplicação, uma janela vazia será exibida.

### 2.2 Desenhando o Background

Crie uma pasta no projeto chamada `res` e insira nela as imagens do jogo.

Adicione os seguintes atributos na classe `Game`:

```java
private Timer timer;
private Fase fase;
private Image fundo;
private Graphics2D grafico;
```

Criando a classe interna `Listener`:

```java
private class Listener implements ActionListener {
    public void actionPerformed(ActionEvent e) {
        fase.repaint();
    }
}
```

Criando a classe interna `Fase`:

```java
public class Fase extends JPanel {
    private static final long serialVersionUID = 1L;
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

    public int getLar() {
        return LARGURA;
    }

    public int getAlt() {
        return ALTURA;
    }
}
```

Método `inicializar()`:

```java
public void inicializar() {
    fase = new Fase();
    add(fase);

    ImageIcon referencia = new ImageIcon("res/fundoFase/cenario1.jpg");
    fundo = referencia.getImage();

    timer = new Timer(5, new Listener());
    timer.start();
}
```

Atualizando o construtor para chamar `inicializar()`:

```java
protected Game() {
    componentes();
    inicializar();
}
```

### 2.3 Sprite

Sprites são imagens bidimensionais ou animações usadas em jogos, como blocos de movimento.

Por exemplo, se tivermos uma imagem com 7 naves lado a lado (364x62 pixels), podemos dividir horizontalmente e usar índices para alternar o sprite de acordo com a movimentação do jogador.

## 3. Criando o Player

Crie um novo pacote:

```
br.com.game.app.player
```

Dentro dele, crie a classe `Nave.java`:

```java
public class Nave {
    private int x, y;
    private int dx, dy;
    private int pos;
    private Image imagem;
    private boolean isVisivel;

    private static final int LARGURA = 52;
    private static final int ALTURA = 62;

    public Nave() {
        ImageIcon referencia = new ImageIcon("res/player/nave.png");
        imagem = referencia.getImage();

        pos = 0;
        x = 300;
        y = 500;
        isVisivel = true;
    }

    public void mover() {
        x += dx;
        y += dy;

        // Impede que a nave saia da tela
        if (x < 1) x = 1;
        if (x > 560) x = 560;
        if (y < 30) y = 30;
        if (y > 480) y = 480;
    }

    // Métodos getters e setters
    public void setDx(int dx) { this.dx = dx; }
    public void setDy(int dy) { this.dy = dy; }
    public int getX() { return x; }
    public int getY() { return y; }
    public Image getImagem() { return imagem; }
    public int getPos() { return pos; }
    public void setPos(int pos) { this.pos = pos; }
    public int getAlt() { return ALTURA; }
    public int getLar() { return LARGURA; }
    public boolean isVisivel() { return isVisivel; }
    public void setVisivel(boolean visivel) { isVisivel = visivel; }
}
```

### 3.1 Desenhando o Player

Na classe `Game`, adicione:

```java
private Nave nave;
```

No método `inicializar()`:

```java
nave = new Nave();
```

No método `paint(Graphics g)` da classe `Fase`, antes de `g.dispose()`:

```java
grafico.drawImage(
    nave.getImagem(), nave.getX(), nave.getY(),
    nave.getX() + nave.getLar(), nave.getY() + nave.getAlt(),
    1 + (nave.getPos() * nave.getLar()), 1,
    1 + (nave.getPos() * nave.getLar()) + nave.getLar(),
    nave.getAlt() + 1, null
);
```

### 3.2 Movendo o Player

Na classe `Game`, crie uma classe interna `Controle`:

```java
private class Controle extends KeyAdapter {
    public void keyPressed(KeyEvent tecla) {
        int codigo = tecla.getKeyCode();

        if (codigo == KeyEvent.VK_LEFT) {
            nave.setPos(4);
            nave.setDx(-1);
        }

        if (codigo == KeyEvent.VK_RIGHT) {
            nave.setPos(1);
            nave.setDx(1);
        }

        if (codigo == KeyEvent.VK_UP) {
            nave.setDy(-1);
        }

        if (codigo == KeyEvent.VK_DOWN) {
            nave.setDy(1);
        }
    }

    public void keyReleased(KeyEvent tecla) {
        int codigo = tecla.getKeyCode();

        if (codigo == KeyEvent.VK_LEFT || codigo == KeyEvent.VK_RIGHT) {
            nave.setPos(0);
            nave.setDx(0);
        }

        if (codigo == KeyEvent.VK_UP || codigo == KeyEvent.VK_DOWN) {
            nave.setDy(0);
        }
    }
}
```

No construtor da classe `Game`, adicione:

```java
addKeyListener(new Controle());
setFocusable(true);
```

Na classe `Listener`, adicione:

```java
nave.mover();
```

### 3.3 Ajustes Finais do Player

Já foram feitos no método `mover()` da classe `Nave`, limitando os eixos x e y.

### 3.4 Atirando

Crie um pacote:

```
br.com.game.app.armas
```

Crie a classe `Laiser.java`:

```java
public class Laiser {
    private int x, y;
    private Image imagem;
    private boolean isVisivel;

    private static final int VELOCIDADE = 2;
    private static final int ALTURA = 50;
    private static final int LARGURA = 20;

    public Laiser(int x, int y) {
        this.x = x;
        this.y = y;
        ImageIcon referencia = new ImageIcon("res/armas/laiser.png");
        imagem = referencia.getImage();
        isVisivel = true;
    }

    public void mover() {
        y -= VELOCIDADE;
    }

    public int getX() { return x; }
    public int getY() { return y; }
    public int getAlt() { return ALTURA; }
    public int getLar() { return LARGURA; }
    public boolean isVisivel() { return isVisivel; }
    public void setVisivel(boolean visivel) { isVisivel = visivel; }
    public Image getImagem() { return imagem; }
}
```

Na classe `Game`, adicione:

```java
private List<Laiser> laiser;
```

No `inicializar()`:

```java
laiser = new ArrayList<>();
```

No método `paint(Graphics g)` da `Fase`:

```java
for (Laiser l : laiser) {
    grafico.drawImage(
        l.getImagem(), l.getX(), l.getY(),
        l.getX() + l.getLar(), l.getY() + l.getAlt(),
        1, 1, l.getLar() + 1, l.getAlt() + 1, null
    );
}
```

No método `keyPressed` da classe `Controle`:

```java
if (codigo == KeyEvent.VK_SPACE) {
    laiser.add(new Laiser(nave.getX() + 20, nave.getY() - 25));
}
```

Na classe `Listener`, antes de `nave.mover();`:

```java
for (int i = 0; i < laiser.size(); i++) {
    Laiser l = laiser.get(i);
    if (l.getY() > -10) {
        l.mover();
    } else {
        laiser.remove(i);
    }
}
```

## 4. Criando Inimigos

Crie o pacote:

```
br.com.game.app.inimigo
```

Dentro dele, crie a classe `Inimigo.java`:

```java
public class Inimigo {
    private double x, y;
    private Image imagem;
    private boolean isVisivel;

    private static final int LARGURA = 50;
    private static final int ALTURA = 52;
    private static final double VELOCIDADE = 0.5;

    private static int contador = 0;

    public Inimigo(int x, int y) {
        this.x = x;
        this.y = y;

        ImageIcon referencia;
        if (contador++ % 2 == 0) {
            referencia = new ImageIcon("res/inimigos/asteroid32.png");
        } else if (contador % 3 == 0) {
            referencia = new ImageIcon("res/inimigos/DeathFighter1.png");
        } else if (contador % 4 == 1) {
            referencia = new ImageIcon("res/inimigos/spikeyenemy.png");
        } else {
            referencia = new ImageIcon("res/inimigos/wings.png");
        }

        imagem = referencia.getImage();
        isVisivel = true;
    }

    public void mover() {
        y += VELOCIDADE;
    }

    public double getX() { return x; }
    public double getY() { return y; }
    public void setY(double y) { this.y = y; }
    public Image getImagem() { return imagem; }
    public boolean isVisivel() { return isVisivel; }
    public void setVisivel(boolean visivel) { isVisivel = visivel; }
    public int getAlt() { return ALTURA; }
    public int getLar() { return LARGURA; }
}
```

### Adicionando inimigos no Game.java

Na classe `Game`, adicione:

```java
private List<Inimigo> inimigos;
private Timer novosInimigos;
```

No método `inicializar()`:

```java
inimigos = new ArrayList<>();
novosInimigos = new Timer(900, new NovoInimigo());
novosInimigos.start();
```

Crie a classe interna `NovoInimigo`:

```java
private class NovoInimigo implements ActionListener {
    public void actionPerformed(ActionEvent e) {
        inimigos.add(new Inimigo(1 + (int)(550 * Math.random()), -80));
    }
}
```

### Desenhando inimigos

No método `paint(Graphics g)` da `Fase`:

```java
for (Inimigo ini : inimigos) {
    grafico.drawImage(
        ini.getImagem(), (int) ini.getX(), (int) ini.getY(),
        (int) ini.getX() + ini.getLar(), (int) ini.getY() + ini.getAlt(),
        1, 1, ini.getLar() + 1, ini.getAlt() + 1, null
    );
}
```

Na classe `Listener`:

```java
for (Inimigo ini : inimigos) {
    if (ini.getY() < fase.getAlt()) {
        ini.mover();
    } else {
        ini.setY(-ini.getAlt());
    }
}
```

## 5. Detectando Colisões

Na classe `Game`, adicione:

```java
private int sx1, sx2, sy1, sy2;
private int dx1, dx2, dy1, dy2;
```

Método `ColisaoNave()`:

```java
private void ColisaoNave() {
    sx1 = nave.getX();
    sx2 = nave.getX() + nave.getLar();
    sy1 = nave.getY();
    sy2 = nave.getY() + nave.getAlt();

    for (int i = 0; i < inimigos.size(); i++) {
        Inimigo ini = inimigos.get(i);
        dx1 = (int) ini.getX();
        dx2 = dx1 + ini.getLar();
        dy1 = (int) ini.getY();
        dy2 = dy1 + ini.getAlt();

        if (sx1 < dx2 && sx2 > dx1 && sy1 < dy2 && sy2 > dy1) {
            nave.setVisivel(false);
            inimigos.remove(i);
        }
    }
}
```

Método `ColisaoLaiser()`:

```java
private void ColisaoLaiser() {
    for (int i = 0; i < inimigos.size(); i++) {
        Inimigo ini = inimigos.get(i);
        dx1 = (int) ini.getX();
        dx2 = dx1 + ini.getLar();
        dy1 = (int) ini.getY();
        dy2 = dy1 + ini.getAlt();

        for (int j = 0; j < laiser.size(); j++) {
            Laiser tiro = laiser.get(j);
            sx1 = tiro.getX();
            sx2 = sx1 + tiro.getLar();
            sy1 = tiro.getY();
            sy2 = sy1 + tiro.getAlt();

            if (sx1 < dx2 && sx2 > dx1 && sy1 < dy2 && sy2 > dy1) {
                laiser.remove(j);
                inimigos.remove(i);
                break;
            }
        }
    }
}
```

Chamando os métodos de colisão no `actionPerformed` da `Listener`:

```java
ColisaoNave();
ColisaoLaiser();
```

## 6. Tela Game Over

Na classe `Fase`, adicione:

```java
private Image gameover;
```

No construtor da `Fase`:

```java
ImageIcon referencia = new ImageIcon("res/gameOver/fimJogo.jpg");
gameover = referencia.getImage();
```

No método `paint(Graphics g)` da `Fase`, modifique:

```java
if (nave.isVisivel()) {
    // jogo em andamento...
    grafico.drawImage(fundo, 0, 0, null);
    // (todos os outros desenhos: nave, tiros, inimigos, explosões)
} else {
    // GAME OVER
    grafico.drawImage(gameover, 150, 150, null);
    grafico.setColor(Color.WHITE);
    grafico.drawString("ENTER PARA NOVO JOGO.", 220, 430);
    timer.stop();
}
```

### Reiniciar o jogo

Na classe `Game`, adicione:

```java
private void ReiniciarInimigos() {
    inimigos.clear();
}

private void ReiniciarLaiser() {
    laiser.clear();
}
```

Na classe `Controle` (`keyPressed()`), adicione:

```java
if (codigo == KeyEvent.VK_ENTER) {
    nave.setVisivel(true);
    ReiniciarInimigos();
    ReiniciarLaiser();
    timer.start();
}
```

## 7. Movendo o Background

Para dar um efeito visual mais dinâmico, faremos o fundo se mover verticalmente, simulando deslocamento da nave.

Na classe `Fase`, adicione:

```java
private int fundoEsp = 0;
```

Crie a classe interna `Velocidade` dentro de `Fase`:

```java
private class Velocidade implements ActionListener {
    public void actionPerformed(ActionEvent e) {
        if (fundoEsp < 600)
            fundoEsp++;
        else
            fundoEsp = 0;
    }
}
```

No `paint(Graphics g)` (dentro da condição `nave.isVisivel()`), substitua:

```java
grafico.drawImage(fundo, 0, 0, null);
```

por:

```java
grafico.drawImage(fundo, 0, fundoEsp, null);
grafico.drawImage(fundo, 0, fundoEsp - 600, null);
```

Instancie o Timer no construtor de `Fase`:

```java
Timer velocidade = new Timer(18, new Velocidade());
velocidade.start();
```

## 8. Conhecendo a lib JLayer

Para adicionar música e efeitos sonoros (em .mp3), utilizaremos a biblioteca JLayer da JZoom. Coloque o arquivo `jl1.0.1.jar` dentro de uma pasta `lib` no seu projeto e configure-a como biblioteca no classpath.

### 8.1 Adicionando Música

Crie o pacote:

```
br.com.game.app.efeitos.sonoro
```

Crie a classe `Musica.java`:

```java
public class Musica {
    private static boolean loop;

    public boolean getLoop() { return loop; }
    public void setLoop(boolean l) { loop = l; }

    public void main(String[] args) {
        String path = "res/sons/cenario/musica.mp3";
        File mp3File = new File(path);

        MP3MusicaCenario musica = new MP3MusicaCenario();
        musica.tocarMusicaCenario(mp3File);
        musica.start();
    }

    public static class MP3MusicaCenario extends Thread {
        private File mp3;
        private Player player;

        public void tocarMusicaCenario(File mp3) {
            this.mp3 = mp3;
        }

        public void run() {
            try {
                do {
                    FileInputStream fis = new FileInputStream(mp3);
                    BufferedInputStream bis = new BufferedInputStream(fis);
                    this.player = new Player(bis);
                    this.player.play();
                } while (loop);
            } catch (Exception e) {
                JOptionPane.showMessageDialog(null, "Problema ao tocar música do cenário!");
                e.printStackTrace();
            }
        }

        public void close() {
            loop = false;
            player.close();
            this.interrupt();
        }
    }
}
```

Na classe `Game`, adicione:

```java
private Musica musica;
```

E em `inicializar()`:

```java
musica = new Musica();
musica.main(null);
musica.setLoop(true);
```

### 8.2 Adicionando Sons de Efeito

Crie as seguintes classes no mesmo pacote:

`EfDisparoLaiser.java`:

```java
public class EfDisparoLaiser {
    public void main(String[] args) {
        String path = "res/sons/disparo/shoot.mp3";
        tocar(path);
    }

    private void tocar(String path) {
        try {
            FileInputStream fis = new FileInputStream(new File(path));
            BufferedInputStream bis = new BufferedInputStream(fis);
            Player player = new Player(bis);
            player.play();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

`EfGameOver.java`:

```java
public class EfGameOver {
    public void main(String[] args) {
        new EfDisparoLaiser().main(new String[] { "res/sons/missao/falida/fimJogo.mp3" });
    }
}
```

`EfExplosao.java`:

```java
public class EfExplosao {
    public void main(String[] args) {
        new EfDisparoLaiser().main(new String[] { "res/sons/explosao/asteroid_explosion.mp3" });
    }
}
```

Chamando os efeitos nos lugares certos:

No disparo (`keyPressed`) da classe `Controle`:

```java
EfDisparoLaiser somDisparo = new EfDisparoLaiser();
somDisparo.main(null);
```

Na colisão do laiser (`ColisaoLaiser`):

```java
EfExplosao somExplosao = new EfExplosao();
somExplosao.main(null);
```

Na colisão com a nave (`ColisaoNave`):

```java
EfGameOver somGameOver = new EfGameOver();
somGameOver.main(null);
```

## 9. Criando o Executável do Jogo

Depois de concluir seu jogo, você pode exportá-lo como um arquivo .jar para compartilhar com outras pessoas.

### Passo a passo no Eclipse:

1. Clique com o botão direito sobre o projeto
2. Selecione Exportar
3. Escolha a opção Java > Runnable JAR file e clique em Avançar
4. Na tela seguinte:
   - Em Launch Configuration, selecione Game (a classe com o método main())
   - Em Export Destination, escolha onde salvar o .jar
   - Em Library Handling, selecione: "Package required libraries into generated JAR"
5. Clique em Finalizar

O seu arquivo executável .jar estará pronto para ser distribuído.

## 10. Desafios

Aqui estão alguns desafios para você aprimorar seu jogo:

- Adicione um placar de pontuação
- Adicione vidas extras ao jogador
- Implemente itens de recuperação de vida
- Adicione novas armas
- Implemente a coleta de armas
- Crie uma opção para ativar/desativar o som
- Adicione tiros inimigos
- Implemente um modo multiplayer

## 11. Conclusão

Neste livro, vimos e compreendemos conceitos básicos da construção de um jogo digital.

Existem muitas ferramentas e padrões de projeto usados na indústria, como engines e frameworks, que facilitam o desenvolvimento e aumentam a qualidade dos jogos. Ainda assim, construir um jogo "do zero" nos ensina muito sobre lógica, organização e paixão pelo desenvolvimento.

Se você chegou até aqui, parabéns! Espero que tenha gostado da jornada e que ela sirva como inspiração para novos projetos.

## 12. Referências Bibliográficas

- Super Mario Bros. Disponível em: pt.wikipedia.org/wiki/Super_Mario_Bros
- Aero Fighters. Disponível em: pt.wikipedia.org/wiki/Aero_Fighters
- Developing Games in Java – David Brackeen: brackeen.com/javagamebook
- PontoV – Programação de Jogos Profissionais: pontov.com.br
- Killer Game Programming in Java – Andrew Davison: fivedots.coe.psu.ac.th/~ad/jg/
- Abrindo o Jogo: abrindoojogo.com.br
- Sprite Database: spritedatabase.net
- The Spriters Resource: spriters-resource.com
- Game Maker Brasil: gmbr.forumeiros.com
- Clube dos Geeks: clubedosgeeks.com.br

## Sinopse

Este livro é destinado a inspirar e motivar estudantes — novatos ou veteranos — a mergulharem na programação de jogos usando Java. Você aprenderá, passo a passo, como construir um jogo de nave, o Champs da Galáxia, incluindo:

- Criação do jogador
- Tiros e colisões
- Inimigos dinâmicos
- Música de fundo e efeitos sonoros
- Movimento de cenário
- E mais...

No final, você terá desafios extras para expandir seu projeto. Se aventure!

[Download do PDF do livro](assets/champs-da-galaxia.pdf)
