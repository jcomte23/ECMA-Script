/*
|--------------------------------------------------------------------------
| ECMAScript
|--------------------------------------------------------------------------
*/

const funcionBasica = (valor) => {
    return new Promise((resolve, reject) => {
        if (valor) {
            resolve("se logro")
        } else {
            reject("No se logro")
        }
    })
}

funcionBasica(false)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=>console.log("finalizo la promesa"))