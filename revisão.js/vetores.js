let frutas = ['maçã' , 'laranja' , 'pera' , ' uva' , 'mamão', 'banana' ]

//vetor original 
console.log(frutas)

// Retirar o ultimo elemento de um vetor 
let ultimaFruta = frutas.pop()

//vetor alterado 
console.log(frutas)
console.log(ultimaFruta)

//remoção do primeiro valor do vetor 
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// remoção de uma posição intermidiaria 
//1° parâmetro -> posição do elemento , lembrando que se inicia do 0 ( 0 , 1 , 2 , 3 , ...)
//2° parâmetro -> quantidades de elementos a ser retirados 
let terceiraFruta = frutas.splice(2,1) //SEMPRE retornara um valor de vetor 

console.log(frutas)
console.log(terceiraFruta)

// Inserindo no final do vetor 
frutas.push("amora")// pode inserir masi de um elemento por vez
//EX.
//frutas.push("amora" , "jaca")
console.log(frutas)

// Inserir no inicio do vetor 
frutas.unshift("jabuticaba")//Tambem pode inserir mais e uma ao mesmo tempo
//ex.
//frutas.unshift("jaboticaba", "mexerica")
console.log(frutas)

//inserção no meio do vetor 
// parâmetros do splice() para inserção
// 1° posição . Para inserção
// 2° posição . nº de elemnetos a serem excluidos ( para inserção se usa 0 )
// 3° posição em diante . elemento(s) a ser(em) adicionado(s)
frutas.splice(2, 0, "pessego")
// também funciona paa inserir varios elementos ao mesmo tempo 
//Ex.
//frutas.splice(2, 0, "pessego", "jaca" ," nectarina ")
console.log(frutas)

//Usando splice() para substituição
//parâmetros : 
// 1° posicção para substituição
// 2° quantidade de elementos que serão excluidos (para substituiçao 1)
// 3° o elemento que será incluido no lugar 
frutas.splice(4 , 1, " ameixa") // substituição na 5ª posição 
console.log(frutas)

// Inserção múltipla com splice()
frutas.splice(1, 0, "nectarina", "jaca")
console.table(frutas)

//______________________________________________________________________________________

console.log("------------------------------------")

// 1) Percurso com for tradicional 
// a) A contagem começa em zero ( 0 - primeiro elemento)
//b) Ocorre enquanto o contador for menor que o número de elementos do vetor
// c) É o metódo mais flexivel ppis , se necessario é possivel fazer um percurso parcial ( começar em algum elemento que não é o primeiro e terminar antes do fim)
for(let i = 0; i < frutas.lenght ; i++) {
    console.log(i, frutas[i])
}
console.log("------------------------------------")
// 2) For tradicional , inverso 
// a) o contador inicia-se em lenght - 1 
// a condição é o contador ser Maior ou IGUAL a zero 
for(let i = frutas.lenght - 1; i >= 0; i-- ){
    console.log(i , frutas[i])
}

console.log("------------------------------------")

// 3) Percurso com for ... of 
// a) sempre percorre o vetor inteiro , na ordem natural , sme necessidade de uma varialvel contadora 
// f -> varíavel que recebeá cada elemento do vetor (pode ser qualquer nome de varíavel )

for(let f of frutas) {
    console.log(f)
}
console.log("------------------------------------")

// 4) Percurso forEach()
//forEach() recebe como parâmetro uma função que recebe como parâmetro cada elemento do vetor 
// o nome do parãmetro da funÇão pode ser qualquer nome válido de identificador
frutas.forEach(function(elemento){
    console.log(elemento)
})

console.log("------------------------------------")

// o mesmo forEach() , usando uma arrow function como parâmetro

frutas.forEach(elemento => console.log(elemento))