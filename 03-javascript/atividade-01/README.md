# ⚙️ Atividade 01 — JavaScript

## 🎯 Objetivo

Dar interatividade à página de perfil, aplicando os fundamentos de lógica de programação, manipulação do DOM e eventos.

---

## 📋 Enunciado

Usando o `index.html` e `style.css` já criados (ou uma versão nova), crie um arquivo `script.js` e implemente as seguintes funcionalidades:

### 1. Alternar tema claro/escuro
- Criar um botão "Alternar tema"
- Ao clicar, adicionar/remover uma classe no `<body>` (ex: `.dark-mode`) que muda as cores de fundo e texto via CSS
- Usar `addEventListener` para o clique

### 2. Lista de habilidades dinâmica
- Criar um campo de texto (`<input>`) e um botão "Adicionar habilidade"
- Ao clicar, pegar o valor digitado e adicionar como um novo item na lista de habilidades (`<ul>`), usando `createElement` e `appendChild`
- O campo deve limpar depois de adicionar
- Não permitir adicionar campo vazio (validação simples com `if`)

### 3. Contador de visitas com LocalStorage
- Toda vez que a página for carregada, incrementar um contador de "visitas" salvo no `localStorage`
- Exibir esse número em algum lugar da página (ex: no rodapé: "Você visitou esta página X vezes")

### 4. Validação do formulário de contato
- Antes de "enviar" o formulário, validar com JavaScript:
  - Campo nome não pode estar vazio
  - Campo e-mail deve conter `@`
  - Campo mensagem deve ter pelo menos 10 caracteres
- Se algum campo for inválido, mostrar uma mensagem de erro na tela (sem usar `alert`) e impedir o envio (`event.preventDefault()`)
- Se tudo estiver certo, mostrar uma mensagem de sucesso

### 5. Botão "Voltar ao topo"
- Criar um botão que aparece apenas quando o usuário rola a página para baixo (usar o evento `scroll`)
- Ao clicar, rolar suavemente até o topo (`window.scrollTo` com `behavior: "smooth"`)

---

## ✅ Requisitos técnicos

- JavaScript em arquivo separado (`script.js`), nunca inline no HTML
- Sem uso de `alert()` para mensagens ao usuário — usar elementos na página
- Sem erros no console
- Código organizado em funções nomeadas (evitar tudo solto no escopo global)

---

## 💡 Dicas

- Teste cada funcionalidade separadamente antes de seguir para a próxima
- Use `console.log` para depurar enquanto desenvolve, mas remova antes de entregar
- Reveja os conceitos de seleção de elementos (`querySelector`) e eventos antes de começar

---

## 📦 Entrega

```bash
git checkout -b feat/js-atividade-01
```

Desenvolver dentro de `03-javascript/atividade-01/`, testar todas as interações no navegador, commitar e abrir o Pull Request.

---

## 🧠 O que você deve conseguir explicar na avaliação

- Como o `localStorage` funciona e por que os dados persistem entre recarregamentos
- A diferença entre `addEventListener` e colocar `onclick` direto no HTML
- Por que usou `event.preventDefault()` na validação do formulário
- Como o DOM é atualizado quando um novo item é adicionado à lista