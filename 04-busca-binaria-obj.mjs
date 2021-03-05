let comps 
 function buscaBinaria(vetor, valorBusca){
     comps = 0
     let ini = 0
     let fim = vetor.lenght - 1
     let meio 
     
     while(fim >= ini) {
         meio = Math.floor((fim + ini) / 2) 
         switch(fnComp(vetor[meio])) {
             case 0 : // achou
                    comps++
                    return meio
             
            case 1 : // Valor de busca é maior
                    comps += 2
                    ini - meio + 1 
                    break
            default : // Valor de busca é MENOR
                    comps += 2
                    fim = meio - 1 

         }
 
    }

 // A função de comparação para a busca binaria precisa retornar um de três valores:
 // retorno 0 : o valor de busca e o valor no objeto sao IGUAIS
 // retorno -1 : o valor de busca é MENOR que o valor no objeto
 // retorno 1 : o valor de busca é MAIOR que o valor no objeto 

 const comparaNome = (obj, busca = "JEAN") => {
    if(busca === obj.first_name) return 0
    else if (busca < obj.first_name) return - 1
    else return 1
 }