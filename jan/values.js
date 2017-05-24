// This is the file for Values, Expressions and Statements
// this is a single line comment in JavvaScript
// values - What is a value?
//  3 - number
// "a" - string
// true - boolean false - - boolean
// [] - array
// {} - object

// Values and Variables
//Old School JavvaScript
var x = 3; // I have assigned the variable x the value of 3
var y = "a"; // I have assigned the variable y the value of 'a';
var z = []; //I have assigned the variable z the value of an empty array
var a = {}; //I have assigned the variable a the value of an empty object

console.log(x);
console.log(y);
console.log(z);
console.log(a);

//constant bindings
const  taxRate = 0.065; //camelcase
console.log (taxRate);
//taxRate = 300.065; //cannot do this because this is a reassignment of a constant
                    // new browswers for constant

//let bindings - new to the JavaScript
let myFavoriteColor = 'blue';
myFavoriteColor = 'green'; //this is allowed because let alow reassignment
console.log(myFavoriteColor);

//expressions and Statements
// statments -> ; (semicolon)
// expessions -> cna be evaluated (operations with values)
//GOOD!
var k = 7;
var p = 3* (k+2); //this contains expressions to contain a Statements
console.log(p);
//BAD!!!
//3*(k+2)= var p; //this is BAD!!DON"T DO IT! IT"S BROKE!!
