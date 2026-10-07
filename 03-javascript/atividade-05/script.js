// Função que mostra os detalhes de acesso conforme o tipo escolhido
function showAccessDetails() {
  // Pega o valor selecionado no campo com id "tipoAcesso"
  let tipo = document.getElementById("tipoAcesso").value;

  // Verifica qual é o tipo de acesso
  switch (tipo) {
    case "admin":
      alert("Acesso total"); // Administrador
      break;
    case "user":
      alert("Acesso padrão"); // Usuário comum
      break;
    case "guest":
      alert("Apenas leitura"); // Visitante
      break;
    default:
      // Se nenhuma opção válida foi escolhida
      alert("Selecione um tipo de acesso");
  }
}