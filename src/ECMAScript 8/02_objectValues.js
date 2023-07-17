/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/

var paises = { MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru' };

// Obtener los valores del objeto
var values = [];
for (var key in paises) {
  if (paises.hasOwnProperty(key)) {
    values.push(paises[key]);
  }
}

console.log(values);

/*
|--------------------------------------------------------------------------
| ECMAScript
|--------------------------------------------------------------------------
*/

const paises = { MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};

console.log( Object.values(paises) ); 