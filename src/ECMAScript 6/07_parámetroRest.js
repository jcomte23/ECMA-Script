/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/

function sum() {
    var numbers = Array.prototype.slice.call(arguments);
    var total = 0;

    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

console.log(sum(1, 2, 3, 4)); // 10

/*
|--------------------------------------------------------------------------
| ECMAScript 
|--------------------------------------------------------------------------
*/

function sum() {
    var numbers = Array.prototype.slice.call(arguments);
    var total = 0;

    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

console.log(sum(1, 2, 3, 4)); // 10