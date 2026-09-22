# 🎨 Atividade 01 — CSS

## 🎯 Objetivo

Estilizar a página de perfil criada na Atividade 01 de HTML (ou uma nova página equivalente), aplicando os fundamentos de CSS: seletores, box model, cores, tipografia, espaçamentos e Flexbox.

---

## 📋 Enunciado

Usando o `index.html` da atividade (pode reaproveitar o da Atividade 01 de HTML), crie um arquivo `style.css` e aplique as seguintes estilizações:

### 1. Reset básico
- Zerar `margin` e `padding` do `*` ou usar um reset simples
- Definir `box-sizing: border-box` globalmente

### 2. Tipografia
- Escolher uma fonte (pode usar uma fonte do sistema ou importar do Google Fonts)
- Definir tamanhos diferentes para títulos e textos
- Definir uma cor de texto principal e uma cor secundária

### 3. Cores e identidade visual
- Definir uma paleta de cores (2 a 4 cores) e aplicá-la de forma consistente no `header`, `footer` e botões

### 4. Cabeçalho com Flexbox
- Usar `display: flex` no `header` para alinhar nome e bio (ou nome e uma imagem, se houver)
- Usar `justify-content` e `align-items` para centralizar o conteúdo

### 5. Seção de habilidades
- Transformar a lista de habilidades em um conjunto de "cards" ou "tags" usando Flexbox (`display: flex; flex-wrap: wrap;`)
- Adicionar espaçamento (`gap` ou `margin`) entre os itens

### 6. Galeria de imagens
- As imagens devem ter tamanho controlado (`width`, `max-width`, `object-fit: cover`)
- Adicionar uma borda ou sombra (`box-shadow`) leve nas imagens

### 7. Formulário
- Estilizar os campos (`input`, `textarea`) com `padding`, `border` e `border-radius`
- Estilizar o botão de envio com cor de fundo, cor de texto e um efeito simples de `:hover`

### 8. Responsividade básica
- Usar pelo menos uma `media query` para ajustar o layout em telas menores (ex: empilhar o header em telas até 600px)

---

## ✅ Requisitos técnicos

- CSS em arquivo separado (`style.css`), nunca inline ou dentro de `<style>` no HTML
- Uso de classes (`class`) para estilizar, evitando estilizar `id` sempre que possível
- Nomes de classes claros e organizados (ex: `.card-habilidade`, `.botao-enviar`)
- Sem cores ou espaçamentos "chutados" sem padrão — manter consistência

---

## 💡 Dicas

- Comece estilizando de cima para baixo (header → main → footer)
- Use as ferramentas de desenvolvedor do navegador para testar valores antes de colocar no CSS
- Não se preocupe em deixar "bonito" — o foco é aplicar corretamente os conceitos

---

## 📦 Entrega

```bash
git checkout -b feat/css-atividade-01
```

Desenvolver dentro de `02-css/atividade-01/`, testar em diferentes tamanhos de tela, commitar e abrir o Pull Request.

---

## 🧠 O que você deve conseguir explicar na avaliação

- Por que escolheu Flexbox para o header e para os cards de habilidade
- A diferença entre `margin` e `padding` nos elementos que estilizou
- Como funciona o `box-sizing: border-box`
- O que a media query criada faz e por que o breakpoint escolhido faz sentido