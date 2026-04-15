import readline from "readline-sync"
let nomeDigitado
nomeDigitado =readline.question("Qual o seu nome?");
console.log("Olá"+nomeDigitado+"boa noite!");
let a = readline.question("Digite um valor de a: ");
let b = readline.question("Digite o valor de b: ");
a = Number(a);
b = Number(b);


console.log("A multiplicação de a por b é: " + (a*b));
console.log("A soma de a por b é: " + (a+b));