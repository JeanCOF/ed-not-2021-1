function calculararea(forma){
    switch(forma.tipo){
        case 'Q':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura / 2
            
    }
}