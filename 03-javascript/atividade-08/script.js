// Pega os elementos do HTML pelo ID
const username = document.getElementById('username');
const toSend = document.getElementById('btn-toSend');
const message = document.getElementById('message');

// Executa quando o botão é clicado
toSend.addEventListener('click', (event) => {
  event.preventDefault(); // evita recarregar a página

  // Verifica se o campo está vazio
  const isEmpty = username.value === "";

  if (isEmpty) {
    message.textContent = 'Por favor, digite seu nome!'; // campo vazio
  } else {
    message.textContent = `Olá, ${username.value}!`; // mostra o nome digitado
  }
});