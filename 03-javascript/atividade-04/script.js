// Constantes a e b, com valores 10 e 5
const a = 10;
const b = 5;

// Função tradicional: recebe dois números e retorna a multiplicação
function multiply(a, b) {
  return a * b;
}

// Chama a função com a e b e mostra o resultado (50)
console.log(multiply(a, b));

// Variáveis c e d, com valores 10 e 5
let c = 10;
let d = 5;

// Arrow function: mesma ideia, escrita de forma mais curta (o return é implícito)
const multiplicacao = (a, b) => a * b;

// Chama a arrow function com c e d e mostra o resultado (50)
console.log(multiplicacao(c, d));