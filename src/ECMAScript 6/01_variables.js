/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/
var nombre = "Jcomte"
console.log(nombre)

/*
|--------------------------------------------------------------------------
| ECMAScript
|--------------------------------------------------------------------------
*/

var variable01 = "Jcomte"
const variable02 = "Jcomte" //las constantes no de pueden reasignar y tienen un scope de bloque
let variable03 = "Jcomte" //las let tienen un scope de bloque

if (true) {
    variable01 = "alfa"
    variable02 = "bravo" //data error ya que no se le puede cambiar el valor
    variable03 = "charlie"

    console.log(variable01)
    console.log(variable02) 
    console.log(variable03)
}

// --------------------------------------
// SCOPE {var continúa con el scopé global pero const y tiene scope de bloque}
// --------------------------------------

if (true) {
    var variable04 = "Delta"
    const variable05 = "Eco" 
    let variable06 = "Foxtrot"
}

console.log(variable04)
console.log(variable05) // Dará error ya que el alcance de esta variable NO sobrepasa el bloque padre
console.log(variable06) // Dará error ya que el alcance de esta variable NO sobrepasa el bloque padre


