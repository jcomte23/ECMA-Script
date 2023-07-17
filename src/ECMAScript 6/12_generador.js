/*
|--------------------------------------------------------------------------
| ECMAScript 
|--------------------------------------------------------------------------
*/

const numeros = [5, 4, 3, 2, 1]

function* interaccion(array) {
    for(let value of array) { yield value}
}

const prueba=interaccion(numeros)
console.log(prueba.next().value)
console.log(prueba.next().value)

