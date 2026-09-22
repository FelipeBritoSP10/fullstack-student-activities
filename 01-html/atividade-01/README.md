# 📄 Atividade 01 — HTML

## 🎯 Objetivo

Construir uma página HTML estática que represente um **perfil pessoal ou de um personagem fictício**, aplicando os principais fundamentos de estruturação de páginas web.

O foco desta atividade é a **estrutura semântica** do documento, sem se preocupar com estilização (CSS ainda não deve ser usado).

---

## 📋 Enunciado

Crie uma página `index.html` que represente uma **página de perfil**, contendo as seguintes seções obrigatórias:

### 1. Cabeçalho (`<header>`)
- Nome da pessoa/personagem
- Uma frase curta de apresentação (bio)

### 2. Sobre (`<section>`)
- Um parágrafo (`<p>`) contando um pouco sobre a pessoa/personagem
- Pelo menos uma palavra em destaque usando `<strong>` ou `<em>`

### 3. Habilidades (`<section>`)
- Uma lista (`<ul>` ou `<ol>`) com pelo menos **5 habilidades ou interesses**

### 4. Galeria (`<section>`)
- Pelo menos **2 imagens** (`<img>`) com atributo `alt` preenchido corretamente
- As imagens podem ser links de imagens públicas da internet ou arquivos locais

### 5. Contato (`<section>`)
- Uma **tabela** (`<table>`) com pelo menos 2 formas de contato (ex: e-mail, redes sociais), organizadas em linhas e colunas
- Pelo menos **1 link** (`<a>`) funcional (ex: para um perfil de rede social ou e-mail com `mailto:`)

### 6. Formulário de contato (`<form>`)
- Campo de nome (`<input type="text">`)
- Campo de e-mail (`<input type="email">`)
- Campo de mensagem (`<textarea>`)
- Botão de envio (`<button>` ou `<input type="submit">`)

> O formulário não precisa funcionar de verdade (sem back-end), mas precisa estar estruturado corretamente.

### 7. Rodapé (`<footer>`)
- Nome do desenvolvedor da página (você!)
- Ano atual

---

## ✅ Requisitos técnicos

- Utilizar **tags semânticas** (`<header>`, `<main>`, `<section>`, `<footer>`, etc.), não apenas `<div>`
- Documento com `<!DOCTYPE html>`, `<html lang="pt-br">`, `<head>` com `<meta charset="UTF-8">` e `<title>` preenchido
- Código indentado e organizado
- Sem erros no console do navegador
- Sem uso de CSS ou JavaScript nesta atividade

---

## 💡 Dicas

- Pense na página como se fosse um documento de texto bem estruturado — cada seção deve fazer sentido sozinha
- Use o inspecionar elemento do navegador para conferir se a hierarquia das tags está correta
- Teste todos os links e o `alt` das imagens

---

## 📦 Entrega

Seguir o fluxo padrão do repositório:

```bash
git checkout -b feat/html-atividade-01
```

Desenvolver dentro de `01-html/atividade-01/index.html`, testar, commitar e abrir o Pull Request conforme descrito no README principal do repositório.

---

## 🧠 O que você deve conseguir explicar na avaliação

- Por que escolheu cada tag semântica usada
- A diferença entre `<section>`, `<div>` e `<article>`
- Por que o atributo `alt` das imagens é importante
- Como o formulário foi estruturado e por quê