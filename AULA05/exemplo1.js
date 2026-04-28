import readline from 'readline-sync'

let valorInicial = readline.question("Digite o valor inicial");
let valorFinal = readline.question("Digite o valor final");
valorInicial = Number(valorInicial);
valorFinal = Number(valorFinal);
/*while (valorInicial <= valorFinal) {
    console.log(valorInicial);
    valorInicial++; //valorInicial = valorInicial + 1;
}*/

for (let index=valorInicial; index<=valorFinal; index++) {
    console.log(index);
}
