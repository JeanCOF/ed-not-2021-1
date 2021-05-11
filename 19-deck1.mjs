import { Deque } from './lib/Deque.mjs'
import { Deque as Deque2} from './lib/Deque2.mjs'


let deque = new Deque2()

deque.insertBack('Margarida')
deque.insertBack('Pateta')
deque.insertBack('Gastão')
deque.insertBack('Donald')

///console.log(deque.print())
console.log('-x-x-x-x-x-x-x-x-')

deque.insertFront('Tio Patinhas')
console.log(deque.print())
console.log('-x-x-x-x-x-x-x-x-')

deque.insertFront('Minnie')
console.log(deque.print())
console.log('-x-x-x-x-x-x-x-x-')

let primeiro = deque.peekFront()
let ultimo = deque.peekBack()

console.log({primeiro, ultimo})
console.log(deque.print())
console.log('-x-x-x-x-x-x-x-x-')

let atendido = deque.removeFront()
console.log({atendido})
console.log(deque.print())
console.log('-x-x-x-x-x-x-x-x-')

let desistente = deque.removeBack()
console.log({desistente})
console.log(deque.print())
console.log('-x-x-x-x-x-x-x-x-')

deque.insertBack('Mickey')
console.log(deque.print())
console.log('-x-x-x-x-x-x-x-x-')