function buscaSequencial(vetor, fnComp) {
    for(let i = 0; i < vetor.length; i++) {
        // Em vez de fazer a comparação dentro da função de busca,
        // "terceirizamos" essa comparação chamando uma função externa
        if(fnComp(vetor[i],)) return i // Retorna a posição onde foi encontrado
    }
    return -1   // Valor de busca não encontrado
}

 /*function comparaNome(objNome, valorBusca) {
     return objNome.first_name === valorBusca
 }*/

 //const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
//const comparaGrupo = (obj, valorBusca) => objNome.group_name === valorBusca
import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time("Buscando LAMARA")
 console.log(buscaSequencial(objNomes, obj => obj.first_name === "LAMARA"))
 console.timeEnd("bsucando LAMARA")

 console.time("Buscando ZOZIMO")
 console.log(buscaSequencial(objNomes, obj => obj.first_name === "ZOZIMO"))
 console.timeEnd("bsucando ZOZIMO")

 console.log(buscaSequencial(objNomes, obj => obj.first_name === "JEAN"))
 console.log(buscaSequencial(objNomes, obj => obj.first_name === "JOAO"))

 //Primeiro nome da lista que tem mais de 1000 pessoas refistradas com ele

 let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000)

 console.log(objNomes[pos])

 //primeiro nome masculino da lista com mais de 10000 pessoas registradas

  pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification === "m")

 console.log(objNomes[pos])