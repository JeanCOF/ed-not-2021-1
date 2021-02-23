//Números 
let a = 10 , b= 8 , c = 10
console.log(a > b )
console.log (a < b)
console.log( a == c)
console.log( a != c)

console.log("-------------------------")

//Strings 
a = "catifunda"
b = "felisbino"
c = "catifunda"

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log( a != c)

console.log("-------------------------")

// Boleanos
a = true
b= false 
c= true
console.log(a > b)
console.log(a < b)
console.log( a == c)
console.log( a != c)

console.log("-------------------------")

//vetores
a = [10 , 20 , 30 , 40, 50]
b = [- 3 , -2 , -1]
c = [10 , 20 , 30 , 40, 50]
console.log(a > b)
console.log(a < b)
console.log( a == c)
console.log( a != c)

//comparções diretas de vetores dão resuktados incossistentes 
// não é possivel comparar diretamnete dois vetores

//objetos 
a = { marca : "fiat" , modelo : '147' , ano : 1979}
b = { marca : "chevrolet" , modelo:" Chevette" , ano : 1982}
a = { marca : "fiat" , modelo : '147' , ano : 1979}
console.log(a > b)
console.log(a < b)
console.log( a == c)
console.log( a != c)

//objetos tambem não podem ser diretamnete comparados entre si 

// conclusão : apenas os seguintges tipos de dados são diretamnetes comparaveis entre si 
// number
// string 
// boolean 
