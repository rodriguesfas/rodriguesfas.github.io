---
id: 000 - Fundamental
title: Fundamental
sidebar_label: 000 - Fundamental
tags: ['Processamento de Linguagem Natural', 'Fundamental']
---

Esta página resume o **núcleo linguístico** de quem trabalha com Processamento de Linguagem Natural (PLN/NLP) em português. Dominar estes tópicos facilita modelagem, anotação de dados e interpretação de erros dos sistemas.

# 1. Morfologia (estrutura das palavras) — FUNDAMENTAL

Você precisa entender como as palavras são formadas e classificadas.

## O que dominar:
### Classes gramaticais:
- Substantivo
- Verbo
- Adjetivo
- Advérbio
- Pronome
- Preposição

### Flexões:
- Gênero (menino / menina)
- Número (singular / plural)
- Pessoa (eu, tu, ele…)
- Tempo e modo verbal

## Por quê isso importa no NLP?
- Token classification
- POS tagging (Part-of-Speech)
- Lematização (ex: correndo → correr)

---

# 2. Conjugação verbal — CRÍTICO

Você já está mexendo com isso — aqui é onde o bicho pega mesmo.

## Dominar:
### Tempos:
- Presente
- Pretérito
- Futuro

### Modos:
- Indicativo
- Subjuntivo (MUITO importante)
- Imperativo

### Concordância verbal:
- “nós vamos” vs “nós vai”

## Pontos difíceis (importantes para IA):
- Verbos irregulares (ser, ir, ter, estar)

### Perífrases:
- “vou fazer”
- “estava comendo”

---

# 3. Sintaxe (estrutura da frase) — ESSENCIAL

Aqui você começa a entender o “sentido estrutural”.

## Dominar:
### Sujeito:
- Simples
- Composto
- Oculto (implícito)

### Estrutura:
- Predicado
- Objeto direto
- Objeto indireto
- Complementos

## Por quê isso importa?
- Parsing de frases
- Extração de relações
- Entendimento de intenção

---

# 4. Concordância (verbal e nominal)

## Dominar:
- “as crianças bonitas” (nominal)
- “as crianças foram” (verbal)

## Problema real em NLP:
Usuários erram MUITO isso:
- “nós vai”
- “as pessoa fala”

## Seu modelo precisa:
- Corrigir
- Ou entender mesmo com erro

---

# 5. Semântica (significado) — NÍVEL MAIS ALTO

Aqui entra inteligência de verdade.

## Dominar:
- Polissemia  
  - “banco” (financeiro vs sentar)
- Sinonímia
- Ambiguidade

## Uso em NLP:
- Embeddings
- Similaridade semântica
- Chatbots

---

# 6. Pragmática (intenção do usuário)

## Dominar:
- O que a pessoa QUER dizer, não só o que disse

## Exemplo:
- “Você pode abrir a janela?”  
  → Não é pergunta, é um pedido

## Em NLP:
- Intent detection
- Assistentes virtuais

---

# 7. Estruturas reais da fala (Português do mundo real)

Isso aqui é OURO pra você.

## Dominar:
### Português informal:
- “nós vai”
- “eu fui lá e peguei ele”

### Elipses:
- “Quer água?” (sem sujeito)

### Frases quebradas:
- “eu… tipo… fui lá”

## Por que isso importa:
- Modelos quebram aqui
- Usuários reais falam assim

---

# 8. Coisas avançadas (diferencial)

## ✔️ Regência verbal:
- “gostar de”
- “assistir a”

## ✔️ Colocação pronominal:
- “me dá”
- “dá-me” (formal)

## ✔️ Voz verbal:
- Ativa vs passiva  
  - “João comeu o bolo”  
  - “O bolo foi comido por João”