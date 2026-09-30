// Pega os elementos do HTML pelo ID
const password = document.getElementById('password');
const message = document.getElementById('message');

// Executa toda vez que o usuário digita na senha
password.addEventListener('input', function() {
  // Pega a quantidade de caracteres digitados
  const passwordLength = password.value.length;

  if (passwordLength < 6) {
    message.textContent = 'A senha deve conter no mínimo 6 caracteres';
    message.style.color = 'red'; // aviso em vermelho
  } else {
    message.textContent = 'Senha Válida';
    message.style.color = 'green'; // válido em verde
  }
});