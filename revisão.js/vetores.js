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
