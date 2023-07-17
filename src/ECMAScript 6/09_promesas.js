/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/
function funcionBasica(valor, successCallback, errorCallback) {
    if (valor) {
        successCallback("se logro");
    } else {
        errorCallback("No se logro");
    }
}

funcionBasica(
    false,
    function (response) {
        console.log(response);
    },
    function (err) {
        console.log(err);
    }
);



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