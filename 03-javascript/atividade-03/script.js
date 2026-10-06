//variavel idade recebe o valor 18 do tipo number
//função verificarIdade verifica se a idade é maior ou igual a 18 e retorna se é maior ou menor de idade
//se a idade for maior ou igual a 18 retorna maior de idade
//senão retorna menor de idade
//console.log tras o resultado da função verificarIdade
//a função verificarIdade é chamada para ser executada


let idade = 18;

function verificarIdade() {

    if(idade>=18){

        console.log("maior de idade");
    }

    else{

        console.log("menor de idade");
    }
};

verificarIdade();


// Declara a variável "age" (idade) e guarda nela o valor 18, que é do tipo number
let age = 18;

// Cria a função "checkAge", que verifica se a idade é maior ou igual a 18
function checkAge() {
  // O ternário funciona assim: condição ? valorSeVerdadeiro : valorSeFalso
  //
  // 1. age >= 18        -> a condição que será testada
  // 2. ? "maior de idade"  -> se a condição for VERDADEIRA, usa este texto
  // 3. : "menor de idade"  -> se a condição for FALSA, usa este texto
  //
  // O console.log mostra no terminal o texto que o ternário escolheu
console.log(age >= 18 ? "maior de idade" : "menor de idade");
}

// Chama (executa) a função. Sem esta linha, nada aparece no terminal
checkAge();