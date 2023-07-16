/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/
//destructuracion en arrays
var array = [1, 2, 3];
var a = array[0];
var b = array[1];
var c = array[2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


//destructuracion en objetos

var usuario = {
    nombre: "Andres",
    edad: 23,
    plataforma: "Platzi"
}

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'

/*
|--------------------------------------------------------------------------
| ECMAScript 
|--------------------------------------------------------------------------
*/

//destructuracion en arrays
const array = [1, 2, 3];
const [a, b, c] = array;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


//destructuracion en objetos

const usuario = {
    nombre: "Andres",
    edad: 23,
    plataforma: "Platzi"
}

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'