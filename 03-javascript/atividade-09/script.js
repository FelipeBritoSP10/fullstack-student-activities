const names = [
  "Felipe",
  "Lucas",
  "Nicolas",
  "Amanda",
  "Beatriz"
];

// Pega os elementos do HTML pelo ID
const search = document.getElementById('search');
const results = document.getElementById('results');

// Executa toda vez que o usuário digita algo no campo
search.addEventListener('input', () => {
  // Pega o valor digitado e deixa em minúsculo
  const term = search.value.toLowerCase();

  // Filtra os nomes que contêm o termo digitado
  const filteredNames = names.filter((name) => {
    return name.toLowerCase().includes(term.toLowerCase());
  });

  // Mostra os nomes filtrados na tela, um por linha
  results.innerHTML = filteredNames.join("<br>");
});