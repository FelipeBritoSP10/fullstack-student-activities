// Função que mostra o nome do dia da semana
function getDayName() {
  // Pega o valor digitado no input e converte para número
  let dia = Number(document.getElementById("day").value);

  // Compara o número digitado com cada caso
  switch (dia) {
    // Se for 1, mostra "domingo"
    case 1:
      alert("domingo");
      break; // sai do switch

    case 2:
      alert("segunda feira");
      break;

    case 3:
      alert("terça-feira");
      break;

    case 4:
      alert("quarta-feira");
      break;

    case 5:
      alert("quinta-feira");
      break;

    case 6:
      alert("sexta-feira");
      break;

    case 7:
      alert("sábado");
      break;

    // Se não for nenhum número de 1 a 7
    default:
      alert("Dia inválido");
  }
}
