// This is the file for Values, Expressions and Statements

// Values - What is a value?
// 3 - number
// "a" - string
// true - boolean => false - boolean
// [] - array
// {} - object

// Values and Variables
// Old School Javascript
var x = 3; // I have assigned the variable x the value of 3
var y = "a"; // I have sssigned the variable y the value of a
var z = []; // I have assigned the variable z the value of an empty array
var a = {}; // I have assigned the variable z the value of an empty object

console.log(x);
console.log(y);
console.log(z);
console.log(a);

// Constant bindings
 const taxRate = 0.065;
 console.log(taxRate);
// taxRate = 54; //Cannot reassign after started in "newer" browsers

//let bindings
let myFavoriteColor = 'blue';
myFavoriteColor = 'green'; //let allows reassignment within block scope

console.log(myFavoriteColor);
