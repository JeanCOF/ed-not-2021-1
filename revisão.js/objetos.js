// Objetos são estruturas que permitem armarzenar diversos valores 
// em uma mesma variável , permitindo acessá-los por meio de um nome 

//Criação de um objeto vazio 
let vazio1 = {}         //forma "moderna"
let vazio2 = new Object()  //Forma "Tradicional "

//criando um objeto com dados 
let pessoa = {
    // os dados são armazenados no formato 
    // propriedades : valor 
    // ou tambem chamado de 
    // atributo: valor 

    nome : "jorgim pé de barro",
    sexo : "M",
    dataNasc: "2002-04-19",
    ocupacao: "estudante",
    //nome da propriedade pode ter espaçoes ou acento
    // nesse caso , o nome da propriedade precisa estar entre aspas 
    "cidade de origem" : "franca/SP",
    gostos: ["jogos" , " doces " , "dormir"]//vetor em posição de um objeto

}
console.log(pessoa)
console.table(pessoa)

// exibindo apenas o valor de uma propriedade 
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
// quando o nome da propriedade tem espaços ou acento, não é possivel 
// usar a sintaxe de ponto . é necessario usar a sitaxe de colchetes. 
console.log(pessoa["cidade de origem"])

// a sintaxe dos colchetes sempre funciona , mesmo se o nome da propriedade
//for uma unica palavra sem acento 
console.log(pessoa["nome"])
console.log(pessoa["gosotos"][2])// mostra o segundo valor do vetor 

// outra consequencia da sintaxe dos colchetes é a possibilidade de 
//usar nomes de propreidades que estão dentro de variveis 

let x = "sexo"
console.log(pessoa[x])
let x = "dataNasc"
console.log(pessoa[x])

// Criando uma nova propriedade para um obejto já existente 
// basta atribuir um valor a um nome de propriedade ainda não existente

pessoa.email = 'jorgim2021@gmail.com'
pessoa.celular = "(16) 9822-8422 "
console.table(pessoa)

// Criando um objeto vazio e só depois adicionando propriedades 
let carro = {}
carro.marca = "Volksvagem"
carro.modelo = "Kombi"
carro.ano = 1971
carro["combústivel"] = "gasolina"
carro.cor = 'bege'

console.table(carro)
