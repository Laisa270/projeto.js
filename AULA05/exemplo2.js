import {leitorDeNumero} from './leitorDeNumeros.js';

export function leitorDeNumero(texto) {

    let numeroA = readline.question(texto)
    //let numeroA = readline.question('Digite um numero:');
    numeroA = Number(numeroA);
    while (isNaN(numeroA)) {
        numeroA = Number(readline.question(texto));
        //numeroA = Number(numeroA);
    }
    return numeroA;
}
let soma = 0;
let numeroLidos=0;
while(soma<=100){
    let valor = leitorDeNumero("Digite valor ate somar 100 voce ja digitou "+numeroLidos +"vezes: ");
    numeroLidos++;
    soma= soma+valor;
    console.log("A soma é: "+soma);
}
let media = soma/numeroLidos;
console.log("A quantidade de numeros lidos é: "+numeroLidos);
console.log("A media é: "+media);


/*
 let valorA = leitorDeNumero();
 let valorB = leitorDeNumero();
 let resultado = valorA+valorB;
console.log(resultado); 
let valorC = leitorDeNumero();
resultado+=valorC;
console.log(resultado); */
