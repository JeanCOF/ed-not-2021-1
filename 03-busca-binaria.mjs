/*************************
 * BUSCA BINARIA
 * 
 * REQUER UM CONJUNTO DE DADOS ORDENADO
 * Atua dividindo  o vetor sucessivamnete em metades aproximadas,
 * até que o valor de busxa seha localizado, ou que o ponteiro 
 * de fim acabe antes do ponteiro de inicio. Essa ultima situação 
 * indica que o valor de budca não existe no conjunto
 */

 function buscaBinaria(vetor, valorBusca){
     let ini = 0
     let fim = vetor.lenght - 1
     let meio 
     while(fim >= ini){
         meio = Math.floor((fim + ini) / 2) // Math.floor() arredonda para baixo
         if(vetor[meio] === valorbusca) return meio // achou
         else if(valorBusca > vetor[meio]) ini = meio +1
         else fim = meio - 1
         //Recalculando o meio 
         
     }
     return - 1 // não existe
 }
 
