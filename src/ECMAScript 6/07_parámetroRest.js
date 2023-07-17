/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/

var person = {
    nombre: "marcus",
    edad: 15
};

var ubicacion = {
    ciudad: "antioquia",
    direccion: "medellin"
};

var mergedObject = {};

// Copiar las propiedades del objeto "person"
for (var key in person) {
    if (person.hasOwnProperty(key)) {
        mergedObject[key] = person[key];
    }
}

// Copiar las propiedades del objeto "direccion"
for (var key in ubicacion) {
    if (ubicacion.hasOwnProperty(key)) {
        mergedObject[key] = ubicacion[key];
    }
}

// Agregar información adicional
mergedObject.extra = "Información adicional";

console.log(mergedObject);
/*
{
  nombre: "marcus",
  edad: 15,
  ciudad: "medellin",
  direccion: "medellin",
  extra: "Información adicional"
}
*/

/*
|--------------------------------------------------------------------------
| ECMAScript 
|--------------------------------------------------------------------------
*/

var person = {
    nombre: "marcus",
    edad: 15
};

var ubicacion = {
    ciudad: "antioquia",
    direccion: "medellin"
};

var mergedObject = { ...person, ...ubicacion, ...{ extra: "Información adicional" } };

console.log(mergedObject);
/*
{
  nombre: "marcus",
  edad: 15,
  ciudad: "medellin",
  direccion: "medellin",
  extra: "Información adicional"
}
*/