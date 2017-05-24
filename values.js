// This is the file for Values, Expressions and Statements
// This is a single line comment in Javascript
// values - What is a value?
// 3 - number
// "a" - string
// true - boolean => false - boolean
// [] - array
// {} - object

// Values and Variables
//Old school JS
//Varibale declarations
var x = 3;
var y = "a";
var z = [];

console.log(x);
console.log(y);
console.log(z);

// Constant Bindings
const taxRate = 0.065;
console.log(taxRate);
// taxRate = 300.065;
// cannot reassign a const variable

//let bindings - new to JS
let myFavoriteColor = "blue";
myFavoriteColor = "green"; //allowed because "let" allows assignment
console.log(myFavoriteColor);

// Expressions and Statements
// statements  -> ; (semicolon)
// expressions -> can be evaluated (operations with values )
// GOOD!
var k = 7;
var p = 3 * (k + 2); // this contains expressions to create a statement
console.log(p);

// BAD!
// 3 * (k + 2) = var p;
//improper order of assignment
