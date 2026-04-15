import readline from 'readline-sync'

let numero1 = readline.question('Digite um numero positivo:')
let numero2 = readline.question('Digite outro numero positivo:')
numero1 = Number(numero1)
console.log(numero1)
numero2 = Number(numero2)
console.log(numero2)


  
if ((numero1 > 0 && numero2 > 0) || (numero1 < 0 && numero2 < 0)) {
    console.log("Muito bem");
    console.log("A soma dos valores é: ", numero1 + numero2);
} else {
    console.log("Valores não têm o mesmo sinal");
}



/*comentario de varias linhas
para comentar varias linhas de codigo */