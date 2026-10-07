
const user = {};

// Evita erro se "profile" não existir
console.log(user.profile?.avatar); // undefined


const count = 0;

// Só usa 10 se count for null ou undefined (0 não é)
const result = count ?? 10;

console.log(result); // 0

// Define um parâmetro padrão: se "name" não for passado, usa "Visitante"
function greet(name = "Visitante") {
  return 'Olá, ' + name;
}

console.log(greet()); // "Olá, Visitante" (nenhum argumento passado, usa o padrão)