/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/
var numbers = [1, 3, 4, 6, 7, 8];
var searchNumber = 4;
var found = false;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === searchNumber) {
    found = true;
    break;
  }
}

console.log(found); // true

var list = ["oscar", "David", "Ana"];
var searchName = "Oscar";
var foundName = false;

for (var j = 0; j < list.length; j++) {
  if (list[j] === searchName) {
    foundName = true;
    break;
  }
}

console.log(foundName); // return FALSE(por que la 'O' esta en mayuscula)

/*
|--------------------------------------------------------------------------
| ECMAScript
|--------------------------------------------------------------------------
*/

let numbers = [1, 3, 4, 6, 7, 8] //return TRUE
console.log(numbers.includes(4))

const list = ["oscar", "David", "Ana"] // return FALSE(por que la 'O' esta en mayuscula)
console.log(list.includes("Oscar"))