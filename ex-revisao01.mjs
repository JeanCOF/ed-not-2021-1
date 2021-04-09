/*
    1. Identifique o algoritmo abaixo.
    2. Comente o que faz cada uma das linhas.
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/
//Declara uma variavel que recebera a seguinte arrow function
//const a = b => {

    function selectionSort(b, fnComp){
    const c = (d, e) => {

        let f = e
//percorre o vetor
        for(let g = e + 1; g < d.length; g++) 
//se o valor na posição g for menor que a f , f recbera o valor de posição g
       // if(d[g] < d[f]) f = g
// Na passagem para função de comparação, a ordem dos
            // objetos precisa ser invertida
       if(fnComp(d[g], d[f])) f = g

        return f
    }
    //percorre o vetor até a penultima posição
    for(let h = 0; h < b.length - 1; h++) {

        let i = c(b, h + 1)

        //if(b[h] > b[i]) [b[h], b[i]] = [b[i], b[h]]
        // Parâmetros em ordem invertida
        if(fnComp(b[h], b[i])) {
            [ b[i], b[h] ] = [ b[h], b[i] ]
    }
}
}


import {candidatos} from './includes/candidatos-2018.mjs'

let candidatosOrd = selectionSort(candidatos, (obj1,obj2) => {
    if(obj1.SG_UE === obj2.SG_UE){
        //Empate de UE
        return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO

    }

    else return obj1.SG_UE > obj2.SG_UE 
})

console.log(candidatosOrd)