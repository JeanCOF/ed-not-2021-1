//função que eleva um numero ao quadrado
//Se precisar disso em situção real , use math.pow() ou operador ** 

function quadrado(n) {
    return n * n
}

console.log(quadrado(9))

//caracteristicas da function acima ~
// 1 apenas um parâmetro 
// 2 apenas uma linha de codigo , com return 
// 3  CANDIDATA PERFEITA PARA VIRAR ARROW FUNCTION 

// Transformando em arrow function
//a ) Nao precisa de parênteses envolvendo o parãmetro 
// b) A palavra function é substitutiva pelo sinal => , depois do parâmetro 
// c) não são necessarias as chaves nem a palavras return

const quadrado2 = n => n * n 
console.log(quadrado2(9))
