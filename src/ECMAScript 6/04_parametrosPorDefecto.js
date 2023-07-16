/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/

function sumar(number1, number2) {
    var _number1 = number1 || 0
    var _number2 = number2 || 0

    return _number1 + _number2
}

console.log(sumar(3, 4)) // 7
console.log(sumar(3))   // 3
console.log(sumar())    // 0

/*
|--------------------------------------------------------------------------
| ECMAScript 
|--------------------------------------------------------------------------
*/

function sumar(number1 = 0, number2 = 0) {
    return number1 + number2
}

console.log(sumar(3, 4)) // 7
console.log(sumar(3))   // 3
console.log(sumar())    // 0