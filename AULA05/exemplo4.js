import { leitorDeNumeros } from './leitorDeNumeros.js';


function leExibe(quantidade) {
    let lista = [];
for (let index=0; index<quantidade;index++){
    let numero= leitorDeNumeros("Digite um número:");
lista.push(numero)
}
for (let index=0; index<quantidade;index++){
    console.log(lista[index]);
}
leExibe(3);
}