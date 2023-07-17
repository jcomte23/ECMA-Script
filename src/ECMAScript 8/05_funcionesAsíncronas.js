/*
|--------------------------------------------------------------------------
| ECMAScript
|--------------------------------------------------------------------------
*/

const funcionAsincrona = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ("AsynC!!"), 2000)
        : reject(new Error("Error"));
    });
}

const otraFuncion = async () => {
    const somethig = await funcionAsincrona();
    console.log(somethig);
    console.log("Hello");
}

console.log("before");
otraFuncion();
console.log("After");