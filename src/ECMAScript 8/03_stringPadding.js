/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/
var variable = "mundo";

// PadStart
var padStartResult = variable;
while (padStartResult.length < 10) {
  padStartResult = "#" + padStartResult;
}
console.log(padStartResult);

// PadEnd
var padEndResult = variable;
while (padEndResult.length < 10) {
  padEndResult = padEndResult + "#";
}
console.log(padEndResult);


/*
|--------------------------------------------------------------------------
| ECMAScript
|--------------------------------------------------------------------------
*/

const variable="mundo"
console.log(variable.padStart(10,"#"))
console.log(variable.padEnd(10,"#"))