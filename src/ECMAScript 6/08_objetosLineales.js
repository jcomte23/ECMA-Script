/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/

var nombre = "Andres"
var edad = 23

var objeto = {
    nombre: nombre, 
    edad: edad
}

console.log(objeto) // { nombre: 'Andres', edad: 23 }


/*
|--------------------------------------------------------------------------
| ECMAScript 
|--------------------------------------------------------------------------
*/

const nombre = "Andres"
const edad = 23

const objeto = {
    nombre, 
    edad
}

console.log(objeto) 

//combinado

function nuevoObjeto(nombre,edad,identificacion) {    
    const objeto = {
        nombre, 
        edad,
        id:identificacion
    }
    return objeto
}

console.log(nuevoObjeto("marcus",24,1095))
