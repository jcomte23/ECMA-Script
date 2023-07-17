/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/

var paises = { MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru' };

// Obtener las entradas del objeto
var entries = [];
for (var key in paises) {
  if (paises.hasOwnProperty(key)) {
    entries.push([key, paises[key]]);
  }
}
console.log(entries);

// Obtener las claves del objeto
var keys = [];
for (var key in paises) {
  if (paises.hasOwnProperty(key)) {
    keys.push(key);
  }
}
console.log(keys);

/*
|--------------------------------------------------------------------------
| ECMAScript
|--------------------------------------------------------------------------
*/

const paises = { MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};

console.log( Object.entries(paises) ); 
console.log( Object.keys(paises) ); 
