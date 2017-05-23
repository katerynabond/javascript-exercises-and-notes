// This is the file for values, expressions, and statements
// this is a single line comment in JavaScript
// Values-What is a value?
// 3 - number
// "a" - string
// true/false - boolean
// [] - array
// {} - object

// values and variables
// old school JavaScript
var x = 3; //I have assigned the variable x the value of 3
var y = "a"; //I have assigned the variable y the value of "a"
var z = []; //I have assigned the variable z the value of an empty array
var a = {}; // I have assigned the variable a the value of an empty object

console.log(x);
console.log(y);
console.log(z);
console.log(a);

// constant bindings
const taxRate = 0.065;
console.log(taxRate);
// taxRate = 300.065;--cannot do this because this is a reassignment of a constant
                      // new browsers for const

// let bindings -- new to the JavaScript language
let myFavoriteColor = "pink";
myFavoriteColor = "purple"; //this is allowed because let allows reassignment

console.log(myFavoriteColor);
