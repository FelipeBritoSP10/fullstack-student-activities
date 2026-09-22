# ⚙️ Atividade 02 — JavaScript

## 🎯 Objetivo
Criar uma **lista de tarefas (To-Do List)** funcional, com persistência de dados usando `localStorage`.

## 📋 Enunciado
1. Campo de texto + botão "Adicionar tarefa"
2. Cada tarefa deve ter: texto, checkbox para marcar como concluída e botão de excluir
3. Ao marcar como concluída, o texto deve ficar riscado (`text-decoration: line-through`)
4. As tarefas devem ser salvas no `localStorage` e recarregadas automaticamente ao abrir a página
5. Um contador mostrando "X de Y tarefas concluídas"
6. Um botão "Limpar concluídas" que remove só as tarefas marcadas

## ✅ Requisitos técnicos
- Dados armazenados como JSON no `localStorage` (`JSON.stringify`/`JSON.parse`)
- Sem duplicar tarefas ao recarregar a página
- Funções organizadas (ex: `adicionarTarefa()`, `renderizarTarefas()`, `salvarTarefas()`)
- Sem `alert()`

## 📦 Entrega
```bash
git checkout -b feat/js-atividade-02
```
Desenvolver em `03-javascript/atividade-02/`, testar recarregando a página várias vezes, commitar e abrir o Pull Request.

## 🧠 O que você deve conseguir explicar
- Por que os dados precisam ser convertidos com `JSON.stringify`/`JSON.parse`
- Como a lista é "redesenhada" na tela a cada mudança
- Como evitou duplicar tarefas ao recarregar