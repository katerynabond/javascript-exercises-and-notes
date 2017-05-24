// This is the files for Values, Expressions, and Statements
// This is a single line comment in JavaScript
// values - What is a value?
// 3 - number
// 'a' - string
// true/false - boolean
// [] - array
// {} - object

// Values and Variables
// Old School JavaScript
var x = 3;// I have assigned the variable x the value of 3
var y = "a";// I have assigned the variable y the value of a
var z = [];// I have assigned the variable z the value of an empty array
var a = {};// I have assigned the variable a the value of an empty object

console.log(x);
console.log(y);
console.log(z);
console.log(a);

// constant bindings
const taxRate = 0.065;
console.log(taxRate);
// taxRate = 300.065; // error because reassignment of constant

//let bindings <-- new to js
let myFavoriteColor = 'blue';
myFavoriteColor = 'green';// This is allowed because let allows reassignment
console.log(myFavoriteColor);


// Expressions and Statements
// Statements -> ; (semicolon)
// Expressions -> can be evaluated (operations with values)
var k = 7;
var p = 3*(k+2);// This contains Expressions to create a Statement
console.log(p);
