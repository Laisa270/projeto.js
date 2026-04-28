const readline = require('readline-sync');

let num1 = NaN
while (isNaN(num1)) {
    num1 = Number(readline.question('Digite o primeiro número: '));
    if (isNaN(num1)) {
        console.log('Por favor, digite um número válido.');
    }

}
let num2 = NaN
while (isNaN(num2)) {
    num2 = Number(readline.question('Digite o segundo número: '));
    if (isNaN(num2)) {
        console.log('Por favor, digite um número válido.');
    } else if (num2 <= num1) {
        console.log('O segundo número deve ser maior que o primeiro número.');
    }
}
console.log('\nNúmero entre ' + num1 + ' e ' + num2 + ':');
if (num2 - num1 > 1) {
    console.log('Não existe nenhum número entre eles.');
} else {
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i)

    }
}



