import readline from 'readline-sync'

let resposta=readline.question('A terra e redonda?')
console.log("A sua resposta foi: " +resposta);
if(resposta =='sim' || resposta =='SIM'){
    console.log("Você acertou!");
} 
else {

    console.log("Você errou!");
    console.log("Mais sorte na próxima!");
}





console.log(2>3);
console.log(2<3);
console.log(3>=3);
console.log(3<=3);
console.log(2==3);
console.log(3!=3);

    console.log("Fim do questionário!");