# ⚙️ Atividade 04 — JavaScript

## 🎯 Objetivo
Praticar **consumo de APIs**, buscando e exibindo dados externos na tela.

## 📋 Enunciado
1. Escolher uma API pública gratuita e sem necessidade de chave complexa (ex: ViaCEP, PokeAPI, ou similar)
2. Criar um campo de busca (ex: um CEP ou o nome de um Pokémon)
3. Ao clicar em "Buscar", fazer uma requisição usando `fetch()`
4. Exibir os dados retornados de forma organizada na tela (nome, imagem, informações relevantes)
5. Tratar erros: se a busca não encontrar nada ou der erro de rede, mostrar uma mensagem amigável na tela
6. Mostrar um indicador de "Carregando..." enquanto a requisição está em andamento

## ✅ Requisitos técnicos
- Uso de `fetch()` com `async/await` (ou `.then()`/`.catch()`)
- Tratamento de erro com `try/catch`
- Sem dados "chumbados" — tudo deve vir da API

## 📦 Entrega
```bash
git checkout -b feat/js-atividade-04
```
Desenvolver em `03-javascript/atividade-04/`, testar buscas válidas e inválidas, commitar e abrir o Pull Request.

## 🧠 O que você deve conseguir explicar
- Como funciona uma requisição assíncrona com `fetch`
- Diferença entre `async/await` e `.then()`
- Como tratou os casos de erro (rede, dado não encontrado)