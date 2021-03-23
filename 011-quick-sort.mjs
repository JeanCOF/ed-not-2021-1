/*
QUICK SORT 
Escolhe um dos elementos do vetor para ser o pivô e , na primeira passada , divide o vetor, a partir da posição final do vetor ,em um subvetor à direita, que contém apenas valores maiores que o pivô 


em seguida recursivamente, repete o preocesso em cada um dos subvetores até que todo vetor esteja ordenado
*/ 
let trocas,comps,pass 
trocas = 0
pass = 0
comps = 0

function quickSort(vetor, ini = 0, fim = vetor.length -1 ){
    if(fim > ini){
        pass++
    const pivot = fim 
    let div = ini -1 
    //loop for vai até a PENÙLTIMA posição 
    for(let i = ini ; i < fim; i++){
        if(vetor[i] < vetor[pivot]){
            comps++
            div++
            if(i !== div ){
                [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i]]
                trocas++
            }
        }
    }
    div++
    //colocamos o pivô no seu lugar definitivo
    if(vetor[pivot] < vetor[div]){
        [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
        trocas++
    }
    comps++

    //Ordena o subvetor à esquerda do pivô 
    quickSort(vetor , ini , div -1 )
    quickSort(vetor , div + 1, fim )
}
    

}

//let nums = [7,4,9,0,6,1,8,2,5,3]
let nums = [1,2,3,4,5,6,7,8,9]
quickSort(nums)
console.log(nums)
console.log({trocas, comps, pass})

import { nomes } from './includes/100-mil-nomes.mjs'

console.time('Ordenando nomes ....')
quickSort(nomes)
console.timeEnd('Ordenando nomes ....')
console.log('DEPOIS', nomes)
console.log({trocas,pass,comps})