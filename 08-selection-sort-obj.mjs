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
