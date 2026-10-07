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
const products = [
  { id: 1, name: "Teclado", price: 200, category: "Tech", inStock: true },
  { id: 2, name: "Monitor", price: 1000, category: "Tech", inStock: false },
  { id: 3, name: "Cadeira", price: 800, category: "Móveis", inStock: true }
];


// map: cria um novo array com o nome de cada produto
const productsName = products.map((product) => {
  return product.name;
});
console.log(productsName); // ["Teclado", "Monitor", "Cadeira"]


// filter: cria um novo array só com os produtos em estoque
const productsInstock = products.filter((product) => {
  return product.inStock;
});
console.log(productsInstock); // produtos com inStock: true


// find: retorna o primeiro produto que bate com a condição
const productId = products.find((product) => {
  return product.id === 2;
});
console.log(productId); // objeto do produto com id 2


// some: retorna true se PELO MENOS UM produto atender a condição
const productSome = products.some((product) => {
  return product.price >= 900;
});
console.log(productSome); // true (Monitor custa 1000)


// every: retorna true só se TODOS os produtos atenderem a condição
const productEvery = products.every((product) => {
  return product.inStock == true;
});
console.log(productEvery); // false (Monitor está fora de estoque)


// reduce: acumula um valor único a partir do array (aqui, soma os preços)
const productReduce = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log(productReduce); // 2000
