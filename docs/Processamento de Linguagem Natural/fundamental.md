---
id: 000 - Fundamental
title: Fundamental
sidebar_label: 000 - Fundamental
tags: ['Processamento de Linguagem Natural', 'Fundamental']
---

**Caderno de resumo**: em cada bloco há **definição** + **exemplos**, no estilo de quem já estudou gramática e PLN e quer revisar rápido. O núcleo é o que costuma aparecer em **Processamento de Linguagem Natural (PLN/NLP)** em português.

## Aprenda rápido — resumo

Use este bloco para **revisar em poucos minutos** ou **consultar na hora**; as seções numeradas abaixo são a **versão de caderno** (mais completa).

| # | Tema | Em uma frase | No NLP |
| --- | --- | --- | --- |
| 1 | Morfologia | Como as palavras se formam e que “tipo” são (classes e flexões). | POS tagging, lematização, classificação de tokens. |
| 2 | Conjugação verbal | Tempos, modos e concordância com o sujeito. | Gerar/analisar formas verbais, corrigir *nós vai*. |
| 3 | Sintaxe | Quem faz o quê na frase (sujeito, objeto, complementos). | Parsing, dependências, extração de relações. |
| 4 | Concordância | Nominal e verbal batem entre si (gênero, número, pessoa). | Robustez a erros comuns de escrita. |
| 5 | Semântica | Sentido das palavras e frases; ambiguidade e sinonímia. | Embeddings, similaridade, desambiguação. |
| 6 | Pragmática | O que o enunciado *faz* no contexto (pedido, ironia…). | Intent detection, diálogo, assistentes. |
| 7 | Fala real | Informal, elipse, hesitação — não só a norma culta. | Dados reais de chat, ASR, robustez. |
| 8 | Avançado | Regência, colocação pronominal, voz ativa/passiva. | Análise fina, formalidade, reformulação. |

### Classes gramaticais (memorização rápida)

- **Substantivo** → nomeia (*casa*, *ideia*).
- **Verbo** → ação/estado (*correu*, *é*).
- **Adjetivo** → qualifica o nome (*rápida*, *verdes*).
- **Advérbio** → circunstancia (*bem*, *hoje*, *muito*).
- **Pronome** → substitui ou determina (*eu*, *aquilo*, *seu*).
- **Preposição** → liga termos (*de*, *em*, *para*).

---

# 1. Morfologia (estrutura das palavras) — FUNDAMENTAL

**Definição (caderno):** morfologia estuda **como a palavra se forma** (radical + afixos) e **de que classe** ela é — base para etiquetar cada token corretamente.

## Classes gramaticais (definição + exemplos)

- **Substantivo** — palavra que **nomeia** seres, objetos, lugares, ideias ou fenômenos (costuma responder a “quê?” / “quem?”). *Exemplos:* *livro*, *professor*, *internet*, *Brasil*, *coragem*.
- **Verbo** — palavra que **indica ação, estado ou fenômeno**; flexiona em **tempo, modo, pessoa e número**. *Exemplos:* *correr*, *ser*, *chover*, *temos*, *fosse*.
- **Adjetivo** — palavra que **caracteriza** o substantivo (qualidade, tamanho, forma etc.); concorda em **gênero e número**. *Exemplos:* *alto*, *bonita*, *verdes*, *rápido*.
- **Advérbio** — palavra que **modifica** verbo, adjetivo ou outro advérbio (modo, tempo, lugar, intensidade…). *Exemplos:* *bem*, *hoje*, *aqui*, *muito*, *devagar*.
- **Pronome** — palavra que **substitui** ou **acompanha** o substantivo, evitando repetição ou indicando pessoa/coisa. *Exemplos:* *eu*, *ela*, *isso*, *cujo*, *nossos*.
- **Preposição** — palavra **invariável** que **liga** termos (tempo, lugar, modo, posse etc.). *Exemplos:* *de*, *em*, *para*, *com*, *sobre*.

## Flexões (o que muda na palavra)

- **Gênero** — distinção **masculino / feminino** quando a língua marca isso (artigo, adjetivo, muitos substantivos). *Exemplos:* *o menino* / *a menina*; *livro novo* / *casa nova*.
- **Número** — **singular** (um) vs **plural** (mais de um). *Exemplos:* *casa* / *casas*; *ele estuda* / *eles estudam*.
- **Pessoa** — quem fala / com quem se fala / sobre quem se fala (**1ª, 2ª, 3ª**). *Exemplos:* *eu falo*, *tu falas*, *ele fala* (verbos); *nós*, *vós*, *eles* (pronomes).
- **Tempo e modo verbal** — **quando** e **como** o evento é visto (ver seção 2). *Exemplo:* *falo* (presente indicativo) vs *falasse* (pretérito subjuntivo).

## Morfologia e NLP

- **Classificação de tokens** — cada palavra recebe uma **classe** (ou várias em caso ambíguo); isso alimenta regras e modelos.
- **POS tagging (Part-of-Speech)** — etiqueta automática de classe gramatical (*livro* → NOUN, *correu* → VERB).
- **Lematização** — reduzir à **forma de dicionário**: *correndo* → *correr*, *boas* → *bom* (com regras de gênero/número na análise).

---

# 2. Conjugação verbal — CRÍTICO

**Definição (caderno):** conjugação é **mudar o verbo** conforme **tempo**, **modo**, **pessoa** e **número** — essencial para análise e geração de texto em português.

## Tempos verbais (ideia + exemplos)

- **Presente** — situação **agora** ou **habitual**. *Exemplos:* *Eu estudo todo dia.* *Eles moram aqui.*
- **Pretérito** — evento **passado** (vários subtipos: perfeito, imperfeito, mais-que-perfeito…). *Exemplos:* *Fui à escola.* *Estudava à noite.* *Já tinha lido.*
- **Futuro** — evento **depois** ou **suposição**. *Exemplos:* *Estudarei amanhã.* *Deve chover.*

## Modos verbais (ideia + exemplos)

- **Indicativo** — o falante apresenta o processo como **real, certo ou provável**. *Exemplos:* *Ela trabalha.* *Choveu.*
- **Subjuntivo** — **dúvida, desejo, condição, emoção, negação** (muito frequente em português). *Exemplos:* *Talvez ele venha.* *É importante que estudes.* *Não acho que seja fácil.*
- **Imperativo** — **ordem, conselho, pedido**. *Exemplos:* *Fecha a porta.* *Olhem para o quadro.*

## Concordância verbal (regra + exemplos)

**Definição:** o verbo **flexiona** para combinar com o **número e a pessoa** do sujeito.

- *Correto:* **Nós vamos.** *Errado (muito comum na fala):* *Nós vai.*
- *Correto:* **As crianças brincam.** *Errado:* *As crianças brinca.*

## Verbos irregulares (por que doem)

**Definição:** não seguem o padrão previsível de sufixos; cada um tem mudanças próprias na raiz ou terminação.

- *Exemplos de alta frequência:* **ser** (*sou*, *foi*, *sejam*), **ir** (*vou*, *forem*), **ter** (*tem*, *tiveram*), **estar** (*está*, *estivemos*).

## Perífrases verbais (definição + exemplos)

**Definição:** construção com **verbo auxiliar** + **outro verbo** (gerúndio, infinitivo ou particípio) para expressar tempo/aspecto.

- *Exemplos:* **vou fazer** (futuro próximo); **estava comendo** (progressivo no passado); **tenho feito** (resultado até o presente); **deve sair** (dedução).

## Conjugação e NLP

Corretores, conjugadores, chatbots e anotadores precisam **prever a forma certa** ou **reconhecer erro** (*nós vai*, *eles foi*) em dados reais.

---

# 3. Sintaxe (estrutura da frase) — ESSENCIAL

**Definição (caderno):** sintaxe estuda **como palavras se organizam** na frase — quem é o “sujeito” da ação, o que é complemento, etc.

## Sujeito (tipos + exemplos)

- **Sujeito simples** — **um núcleo** (um substantivo ou pronome). *Exemplo:* **O gato** dormiu.
- **Sujeito composto** — **dois ou mais núcleos** ligados. *Exemplo:* **Pedro e Maria** viajaram.
- **Sujeito oculto (elíptico)** — não aparece, mas **se entende** pelo verbo ou contexto. *Exemplo:* ***Corre*** muito rápido. (entende-se *ele/ela*); *Vamos?* → sujeito *nós*.

## Predicado (definição + exemplos)

**Definição:** tudo que se declara **sobre o sujeito** — em especial o **verbo** e seus complementos.

- *Exemplo:* *Os alunos **fizeram a prova com calma**.* — núcleo verbal *fizeram* + complementos.

## Objeto direto e indireto (definição + exemplos)

- **Objeto direto (OD)** — **quem** ou **o quê** sofre a ação **sem preposição** obrigatória (em português, muitas vezes com *a/o/as/os*). *Exemplo:* *Comi **o bolo**.* / *Vi **ela**.* (registro informal)
- **Objeto indireto (OI)** — complemento **ligado por preposição** (frequentemente *a*). *Exemplo:* *Obedeço **ao professor**.* *Dou **presente à mãe**.*

## Complementos e adjuntos (ideia + exemplos)

- **Complemento nominal** — completa **nome** (substantivo, adjetivo); costuma vir com **preposição**. *Exemplo:* *medo **de altura***, *útil **para o trabalho***.
- **Adjunto adverbial** — informa **circunstância** (lugar, tempo, modo…). *Exemplo:* *Cheguei **ontem**.* *Estudei **em casa**.*

## Sintaxe e NLP

**Parsing** (árvore sintática ou dependências), **extração de relações** (quem fez o quê a quem) e **intenção** costumam usar **papéis sintáticos** (sujeito, objeto).

---

# 4. Concordância (verbal e nominal)

**Definição (caderno):** concordância é **harmonizar** palavras na frase (mesmo gênero, número, pessoa) segundo a norma.

## Concordância nominal (definição + exemplos)

**Definição:** substantivo e **palavras que o acompanham** (artigo, adjetivo, pronome…) concordam em **gênero** e **número**.

- *Exemplo:* *As **crianças bonitas** sorriram.* (*as*, *bonitas* ↔ *crianças*)

## Concordância verbal (definição + exemplos)

**Definição:** o verbo concorda com o **sujeito** em **número** e **pessoa**.

- *Exemplo:* *As crianças **foram** ao parque.* (*foram* ↔ *crianças*)

## Problema real em NLP (erros típicos)

Quem escreve rápido ou fala informal erra muito — e o sistema precisa **lidar com isso**:

- *Errado:* *Nós **vai**.* / *As pessoa **fala**.*
- *Correto:* *Nós **vamos**.* / *As pessoas **falam**.*

## O que o modelo pode fazer

- **Corrigir** (corretor ortográfico / gramatical).
- **Entender mesmo com erro** (classificador robusto, busca tolerante a falha).

---

# 5. Semântica (significado) — NÍVEL MAIS ALTO

**Definição (caderno):** semântica trata do **significado** — o que palavras e frases **representam** no mundo ou na cabeça das pessoas.

## Polissemia (definição + exemplos)

**Definição:** **mesma palavra**, **vários sentidos** relacionados ou não.

- *Exemplo:* *banco* = instituição financeira **ou** assento; *cabeça* = parte do corpo **ou** líder de equipe (gíria).

## Sinonímia (definição + exemplos)

**Definição:** duas ou mais palavras com **sentido parecido** (nunca 100% idêntico em todos os contextos).

- *Exemplo:* *casa* / *lar* / *residência*; *bonito* / *lindo*.

## Ambiguidade (definição + exemplos)

**Definição:** uma frase (ou palavra) admite **mais de uma interpretação** sem mais contexto.

- *Exemplo:* *Vi o menino com o telescópio* — quem tinha o telescópio?

## Uso em NLP

- **Embeddings** — vetores que capturam proximidade de sentido.
- **Similaridade semântica** — medir se dois textos “querem dizer” coisas parecidas.
- **Chatbots e busca** — precisam de **contexto** para desambiguar (polissemia, correferência).

---

# 6. Pragmática (intenção do usuário)

**Definição (caderno):** pragmática estuda **o uso** da linguagem em situação real — **o que o enunciado faz** (pedir, prometer, ironizar), não só o significado literal.

## Ato de fala (ideia + exemplos)

**Definição:** além do sentido das palavras, o falante **realiza uma ação** com a fala.

- *Exemplo clássico:* *Você pode fechar a janela?* — em contexto, **não é “pergunta de informação”**, é **pedido** ou **ordem educada**.

## Outros exemplos rápidos

- *Tá bom, genial…* — pode ser **elogio** ou **ironia** (depende do tom e contexto).
- *Se você abrir esse e-mail…* — pode ser **ameaça** ou **condição** em manual.

## Em NLP

- **Intent detection** — classificar **intenção** (comprar, reclamar, agendar).
- **Assistentes virtuais** — precisam da **intenção**, não só das palavras soltas.

---

# 7. Estruturas reais da fala (português do mundo real)

**Definição (caderno):** fora do livro didático, o português vem com **variação**, **corte** de palavras e **ruído** — quem faz PLN com dados reais precisa **esperar isso**.

## Português informal (exemplos + nota)

- *Exemplos:* *nós vai*; *tu vai* (em regiões); *mó legal*; *pra* em vez de *para*.
- **Nota:** pode ser **marca social/regional**, não só “erro” — depende do produto (corrigir vs. respeitar).

## Elipse (definição + exemplos)

**Definição:** **omitir** termo que o ouvinte **preenche** mentalmente.

- *Exemplo:* *Quer água?* — sujeito *você* omitido; *Indo pra casa.* — sujeito + verbo omitidos (*Estou indo…*).

## Frases quebradas e hesitações (exemplos)

- *Exemplos:* *Eu… tipo… não sei.* — pausas e marcadores discursivos (*tipo*, *né*, *sabe*).
- **Efeito no NLP:** transcrições (ASR) e chats trazem **fragmentação**; modelos “de livro” falham mais aqui.

## Por que isso importa?

- **Modelos treinados só em texto formal** quebram em **WhatsApp**, **Twitter**, **fala espontânea**.
- **Usuários reais** falam e escrevem assim — o pipeline precisa de **robustez** ou **normalização** consciente.

---

# 8. Coisas avançadas (diferencial)

**Definição (caderno):** tópicos que aparecem em **análise fina**, redação formal e em sistemas que **reformulam** ou **explicam** a frase.

## Regência verbal (definição + exemplos)

**Definição:** certos verbos **exigem preposição** específica antes do complemento.

- *Exemplos:* *gostar **de*** algo; *assistir **a*** um filme; *pensar **em*** alguém; *obedecer **à** regra*.

## Colocação pronominal (definição + exemplos)

**Definição:** onde o **pronome átono** (*me, te, se, o, a, nos…*) aparece em relação ao verbo — regras diferentes no **falado** e no **formal**.

- *Exemplos (informal / oral):* *Me dá um copo d’água?*
- *Exemplos (formal / enclise):* *Dá-me a mão.* / *Fiz-lhe um favor.* (menos usual no BR coloquial)

## Voz verbal (definição + exemplos)

**Definição:** **ativa** — o sujeito **pratica** a ação; **passiva** — o sujeito **sofre** a ação.

- *Ativa:* *João **comeu** o bolo.*
- *Passiva analítica:* *O bolo **foi comido** por João.*
- *Uso em NLP:* reformulação, simplificação de texto, extração de “quem fez o quê”.
