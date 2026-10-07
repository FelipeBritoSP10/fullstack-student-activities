// ---- Elementos do visor ----
const resultado = document.querySelector('.resultado');
const historico = document.querySelector('.historico');

// ---- Estado da calculadora ----
let valorAtual = '0';      // número que está sendo digitado
let valorAnterior = null;  // primeiro número da conta
let operacao = null;       // operador escolhido (+, -, *, /)
let reiniciar = false;     // true logo após apertar "="

// Símbolos bonitos para mostrar no visor
const simbolos = { '+': '+', '-': '−', '*': '×', '/': '÷' };

// Atualiza o que aparece na tela (troca ponto por vírgula)
function atualizarVisor() {
  resultado.textContent = valorAtual.replace('.', ',');
  historico.textContent =
    valorAnterior !== null && operacao
      ? `${String(valorAnterior).replace('.', ',')} ${simbolos[operacao]}`
      : '';
}

// Adiciona um dígito ao número atual
function adicionarDigito(digito) {
  // Depois do "=", começa um número novo
  if (reiniciar) {
    valorAtual = '0';
    reiniciar = false;
  }
  // Se for "0", substitui; senão, concatena
  valorAtual = valorAtual === '0' ? digito : valorAtual + digito;
  atualizarVisor();
}

// Adiciona a vírgula (ponto decimal), só uma vez
function adicionarDecimal() {
  if (reiniciar) {
    valorAtual = '0';
    reiniciar = false;
  }
  if (!valorAtual.includes('.')) valorAtual += '.';
  atualizarVisor();
}

// Faz a conta entre dois números
function calcular(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? null : a / b; // null = divisão por zero
  }
}

// Arredonda para evitar erros como 0.1 + 0.2 = 0.30000000000000004
function formatar(numero) {
  return String(parseFloat(numero.toFixed(10)));
}

// Chamada ao apertar +, −, × ou ÷
function definirOperador(operador) {
  reiniciar = false;

  if (valorAnterior === null) {
    // Primeiro operador: guarda o número e limpa para o próximo
    valorAnterior = valorAtual;
    valorAtual = '0';
  } else if (valorAtual !== '0' || operacao === null) {
    // Já havia uma conta pendente: calcula o resultado parcial
    const res = calcular(valorAnterior, valorAtual, operacao);
    if (res === null) return erroDivisaoPorZero();
    valorAnterior = formatar(res);
    valorAtual = '0';
  }
  // Se não digitou nada novo, só troca o operador

  operacao = operador;
  atualizarVisor();
}

// Chamada ao apertar "="
function igual() {
  // Sem conta pendente, não faz nada
  if (valorAnterior === null || operacao === null) return;
  const res = calcular(valorAnterior, valorAtual, operacao);
  if (res === null) return erroDivisaoPorZero();

  // Mostra a conta completa no histórico
  historico.textContent =
    `${String(valorAnterior).replace('.', ',')} ${simbolos[operacao]} ${valorAtual.replace('.', ',')} =`;
  valorAtual = formatar(res);
  valorAnterior = null;
  operacao = null;
  reiniciar = true; // próximo dígito começa número novo
  resultado.textContent = valorAtual.replace('.', ',');
}

// Mostra "Erro" quando divide por zero
function erroDivisaoPorZero() {
  limpar();
  resultado.textContent = 'Erro';
  reiniciar = true;
}

// Botão C: zera tudo
function limpar() {
  valorAtual = '0';
  valorAnterior = null;
  operacao = null;
  reiniciar = false;
  atualizarVisor();
}

// Botão ⌫: apaga o último dígito
function apagar() {
  if (reiniciar) return;
  valorAtual = valorAtual.length > 1 ? valorAtual.slice(0, -1) : '0';
  atualizarVisor();
}

// Botão %: divide o número atual por 100
function porcentagem() {
  valorAtual = formatar(parseFloat(valorAtual) / 100);
  atualizarVisor();
}

// ---- Ligando os botões às funções ----

// Botões de 0 a 9
for (let i = 0; i <= 9; i++) {
  document.getElementById(`digit${i}`)
    .addEventListener('click', () => adicionarDigito(String(i)));
}

// Demais botões
document.getElementById('decimal').addEventListener('click', adicionarDecimal);
document.getElementById('add').addEventListener('click', () => definirOperador('+'));
document.getElementById('subtract').addEventListener('click', () => definirOperador('-'));
document.getElementById('multiply').addEventListener('click', () => definirOperador('*'));
document.getElementById('divide').addEventListener('click', () => definirOperador('/'));
document.getElementById('equals').addEventListener('click', igual);
document.getElementById('clear').addEventListener('click', limpar);
document.getElementById('backspace').addEventListener('click', apagar);
document.getElementById('percent').addEventListener('click', porcentagem);

// Mostra o visor inicial ("0")
atualizarVisor();
//variavel name do tipo string
const name = "Lucas";
//variavel age do tipo number
const age = 22;
//variavel isonLine do tipo boolean
const isonLine = true;

//console.log trás o tipo da variavel
console.log(typeof name);
console.log(typeof age);
console.log(typeof isonLine);
