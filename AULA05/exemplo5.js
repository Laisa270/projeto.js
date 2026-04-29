import leitor from 'readline-sync'

/*let objeto= {nome:"Laisa", email:"teste@teste.com", telefone:"5100000"}; 
objeto.nome;
objeto.email;
let objeto= {nome:"", email:"", }; 
console.log(objeto.nome)
console.log(objeto.email)
console.log(objeto.telefone)*/

function lerDadosContatos() {
    let contato={}
    contato.nome = leitor.question("Digite o nome");
    contato.email = leitor.question("Digite o e-mail: ");
    contato.telefone = leitor.question("Digite o telefone: ");
     
     return contato;
}
let contato = lerDadosContatos();
console.log(contato);