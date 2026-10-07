// Função que mostra a estação do ano de acordo com o mês escolhido
function getSeasonByMonth() {
  // Pega o valor do campo "month" e converte para número
  let month = parseInt(document.getElementById("month").value);

  switch (month) {
    // Dezembro, janeiro e fevereiro
    case 12:
    case 1:
    case 2:
      alert("Verão");
      break;

    // Março, abril e maio
    case 3:
    case 4:
    case 5:
      alert("Outono");
      break;

    // Junho, julho e agosto
    case 6:
    case 7:
    case 8:
      alert("Inverno");
      break;

    // Setembro, outubro e novembro
    case 9:
    case 10:
    case 11:
      alert("Primavera");
      break;

    // Se o mês não estiver entre 1 e 12
    default:
      alert("Mês inválido");
  }
}
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
