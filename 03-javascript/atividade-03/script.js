// Função que mostra o produto e o preço de acordo com o código digitado
function handleProductCodeClick() {
  // Pega o valor do campo "codigo" e converte para número
  let codigo = parseInt(document.getElementById("codigo").value);

  switch (codigo) {
    case 1:
      alert("expresso R$ 5,00"); // Código 1
      break;

    case 2:
      alert("cappuccino R$ 8,00"); // Código 2
      break;

    case 3:
      alert("chá R$ 4,00"); // Código 3
      break;

    // Se o código não for 1, 2 ou 3
    default:
      alert("Código inválido");
  }
}