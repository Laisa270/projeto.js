import readline from 'readline-sync'

export  default function leitorDeNumero(texto) {

    let numeroA = readline.question(texto)
    //let numeroA = readline.question('Digite um numero:');
    numeroA = Number(numeroA);
    while (isNaN(numeroA)) {
        numeroA = Number(readline.question(texto));
        //numeroA = Number(numeroA);
    }
    return numeroA;
}

function particular() {
}

export function  podeUsar() {
    console.log("pode usar");
}

export function podeUsar() {
    console.log("pode usar");
}