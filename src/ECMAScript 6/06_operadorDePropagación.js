/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/
//arrays
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var union = array1.concat(array2);

console.log(union); // [1, 2, 3, 4, 5, 6]

//objetos
var person={
    nombre:"marcus",
    edad:15
}

var direccion={
    departamento:"antioquia",
    ciudad:"medellin"
}

var mergedObject = Object.assign(person, direccion);

console.log(mergedObject);

/*
|--------------------------------------------------------------------------
| ECMAScript 
|--------------------------------------------------------------------------
*/

//arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const union = [...array1, ...array2];

console.log(union); // [1, 2, 3, 4, 5, 6]

//objetos
var person={
    nombre:"marcus",
    edad:15
}

var direccion={
    departamento:"antioquia",
    ciudad:"medellin"
}

var mergedObject = {...person, ...direccion};

console.log(mergedObject);

  
