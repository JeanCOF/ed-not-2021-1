//Fatorial de um númeeo

// 5! = 5 * 4 * 3 * 2 * 1

// funçãp de cálculo do fatorial , pelo método iterativo
function fatorial(n){
    let res = 1 
    for(let i = n ; i > 1 ; i--) res *= i 
    return res
}

console.log(fatorial(5))
console.log(fatorial(4))

// 5! = 5 * 4! 
// 5! = 5 * (5 - 1)!
// n! = n * (n - 1)!
// 1! = 1
// 0! = 1 

//função de cálculo de fatorial , pelo método recursivo 
function fatorial2(n){
    if(n <= 1) return 1   // condição de saida 
    else return n * fatorial2(n - 1 )
}

console.log(fatorial2(5))
console.log(fatorial2(4))