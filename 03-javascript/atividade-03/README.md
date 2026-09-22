# ⚙️ Atividade 03 — JavaScript

## 🎯 Objetivo
Criar uma **calculadora funcional**, praticando manipulação de eventos, operadores e lógica condicional.

## 📋 Enunciado
1. Interface com display e botões: números de 0 a 9, `+`, `-`, `*`, `/`, `=`, `C` (limpar) e `.` (decimal)
2. Cada botão deve atualizar o display ao ser clicado
3. Implementar a lógica das 4 operações básicas
4. Tratar erros: não deixar dividir por zero (mostrar "Erro" no display)
5. O botão `C` deve limpar todo o cálculo atual

## ✅ Requisitos técnicos
- Toda a lógica de cálculo implementada em JavaScript puro (sem usar `eval()`)
- Funções separadas por responsabilidade (ex: `somar()`, `subtrair()`, `atualizarDisplay()`)
- Sem erros no console em nenhum cenário testado

## 📦 Entrega
```bash
git checkout -b feat/js-atividade-03
```
Desenvolver em `03-javascript/atividade-03/`, testar todas as operações e casos de erro, commitar e abrir o Pull Request.

## 🧠 O que você deve conseguir explicar
- Por que não deve usar `eval()` para calcular expressões
- Como a calculadora guarda o "estado" do cálculo atual
- Como tratou o caso de divisão por zero