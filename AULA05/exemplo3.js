import leitorDeNumero from './leitorDeNumeros.js';

export function mediaNotas(quantidadeDeNotas) {
    let soma = 0;
    for (let index = 0; index < quantidadeDeNotas; index++) {
        let valor = leitorDeNumero("Digite a nota:");
        soma = soma + valor;
    }
    let media = soma / quantidadeDeNotas;
    return media;
}