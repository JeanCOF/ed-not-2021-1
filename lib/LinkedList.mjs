/*
ESTRUTURA DE DADOS LISTA ENCADEADA
- A lista encadeada é uma estrutura de dados formada por unidades
de informação chamadas nodos ou nós.
- Cada nodo da lista encadeada tem duas partes: uma, que armazena a
informação e outra que guarda o endereço do próximo nodo da sequência
- A qualquer momento, temos um conhecimento apenas limitado de onde
se encontram todos os nodos da lista. Sabemos apenas onde está o
primeiro e o último nodo da sequência. Os nodos intermediários precisam
ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

class Node {
    constructor(val) {      //sem # porque vou precisar acessar diretamente, serão publicos, usados em outra classe também
        this.data = val     //Armazenamento do valor
        this.next = null    //Ponteiro para o próximo nodo
    }
}

export class LinkedList {

    #head   //Nodo inicial da lista
    #tail   //Nodo final da lista
    #count  //Qtde de elemento de nodos da lista

    constructor() {
        this.#head = null   //Não tem nada no inicio
        this.#tail = null   //Não tem nada no fim
        this.#count = 0
        console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    get empty() {   //lista vazia
        return this.#count === 0
    }

    //Inserção em uma posição arbitrária
    insert(pos, val){

        //Cria nodo para abrigar o valor e o endereço do próximo nodo
        let inserted = new Node(val)

        //1º caso: inserção em lista vazia
        if(this.empty) {
            this.#head = inserted
            this.#tail = inserted
        }

        //2º caso: inserção no inicio da lista
        else if(pos === 0) {
            //O sucessor do nodo inserido é o atual head
            inserted.next = this.#head
            //O novo head passa a ser o nodo inserido
            this.#head = inserted
        }

        //3º caso: inserção no final da lista
        

        this.#count++
       
        console.log({head: this.#head, tail: this.#tail, count: this.#count})

    }

}

let lista = new LinkedList()
lista.insert(0, 76) //76 colocado na posição 0