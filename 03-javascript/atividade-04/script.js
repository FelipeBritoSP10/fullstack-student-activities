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