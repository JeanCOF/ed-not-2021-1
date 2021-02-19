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

//função com mais e um parâmetro 
function potencia(b, e) {//b é base e E é expoente 
 return b ** e
}
console.log(potencia(2,8))

//função equivalente no formato arrow function
//quando temos mais de um parâmetro , os parenteses em volta dos 
//argumentos voltam a ser obrigatorios 
let potencia2 = (b,e) => b ** e
console.log(potencia2(2,8))

//Funçao sem parâmetro 
function MegaSena() {
    //esta função retorna um numero aleatorio entre 1 e 60 
    return Math.floor(Math.random() * 60 + 1 )
    // Math.random() retorna um numero aleatorio entre 0 e 1 (ambos inclusive)
    // * 60 ajusta a faixa de valores para entre 0 e 59 
    // + 1 ajusta a faixa de valores para entre 1 e 60 
    // Math.floor , arredonda para o menor inteiro

}
console.log(MegaSena(), MegaSena(),MegaSena(), MegaSena(),MegaSena(), MegaSena())

// quando a função nao tem argumnetos , na arrow function é necessario deixar 
// um par de parenteses vazios para marcar seu lugar 
const MegaSena2 = () => Math.floor(Math.random() * 60 + 1 )
console.log(MegaSena2(), MegaSena2(),MegaSena2(), MegaSena2(),MegaSena2(), MegaSena2())

// Função com mais de uma linha de código corpo 
function somaVet(vet) {
    let soma = 0 
    for (let n of vet) soma += n
    return soma 

}
console.log(somaVet([12, 42, -11, 20, 9, 16]))

// Quando a função tem mais de uma linha de código , a arrow function equivalente
// retornam as chaves e também a palavra return , caso ela retorne valor
const somaVet2 = vet => {
     let soma = 0 
    for (let n of vet) soma += n
    return soma 

}
console.log(somaVet2([12, 42, -11, 20, 9, 16]))

// CONCLUSÃO  arrow functions foram concebidas para facilitar a escrita de funçoes 
// de apenas uma linha , emboa também possam ser usadas para funções 
// de multiplas linhas .

