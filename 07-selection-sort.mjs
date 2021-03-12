/*
Selection sort 

Trata-se de uma otimização do bubble sort, diminuindo drasticamnete o número de trocas necessarias para fazer ordenação.

isola um dos valores do vetor e procura pelo menor valor entre os restantes, promovendo a troca caso o primeiro valor seja maior que o segundo */

let trocas , comps , pass
function selectionSort(vetor){

    function encontrarMenor(inicio){
        pass = 0
        trocas = 0
        comps = 0
        
        let menor = inicio
        //esse loop vai até ultima posição 
        for(let j = inicio + 1 ; j < vetor.length ; j++ ){
            if(vetor[j] < vetor[menor]) menor = j
            comps++

        }
        return menor
    }


    //percurso do vetor até a PENULTIMA posição 
    for(let i = 0 ; i <=vetor.length - 2 ; i++){
        pass++
        let menor = encontrarMenor(i + 1)
        if(vetor[menor] < vetor[i]){
            [vetor[menor], vetor[i]] = [vetor[i] , vetor[menor]]
            trocas++
        }
        comps++

    }
}

let nums = [7,4,9,0,6,1,8,2,5,3]
selectionSort(nums)
console.log(nums)
console.log({trocas,pass,comps})

import { nomes } from './includes/100-mil-nomes.mjs'

console.time('Ordenando nomes ....')
selectionSort(nomes)
console.timeEnd('Ordenando nomes ....')
console.log('DEPOIS', nomes)
console.log({trocas,pass,comps})