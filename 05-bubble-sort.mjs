/*
BUBLLE SORT

Percorre o conjunto de dados, comparando o elemneto atual com o seu sucessor e promovendo
a troca entre eles caso o primeiro seja maior que o segundo 

faz isso em varías passadas , até , que , na ultima delas , nehuma troca tenha sido realizada 
*/

let totTrocas , pass , comps

function bubblesort(vetor){
    totTrocas = 0 , pass= 0 , comps = 0
let trocas 

do{
    trocas = 0  // Iniciando uma nova passada
    pass++
    //Percuros do vetor , da primeira até a PENÚlTIMA posição
    for(let i = 0 ; i <= vetor.length - 2 ; i++){
        if(vetor[i] > vetor[i + 1]) {
            //Troca direta em JS via deconstrução de vetor
            [vetor[i], vetor[ i + 1]] = [vetor[i + 1] , vetor[i]] 
            trocas++
        }
        comps++
    }
    totTrocas += trocas

}while( trocas > 0)

}

let nums = [7,8,6,4,5,9,3,1,2]

console.log ('Antes', nums)
bubblesort(nums)
console.log('depois ', nums)
console.log({totTrocas, pass , comps})

import {nomes} from './includes/100-mil-nomes.mjs'

console.log ('Antes', nomes)
console.time('Ordenando nomes ....')
bubblesort(nomes)
console.timeEnd('Ordenando nomes ....')
console.log('depois ', nomes)
console.log({totTrocas, pass , comps})