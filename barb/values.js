// This is the file for values, expressions and statements

//values --what is a value?
// 3 - number
// "a" - string
// true - boolean => false
// [] - array
// {} - object

//values and variables
// Old School Javascript

var x = 3; // i have assigned the variable x the value of 3

// = is assign  == is equality

var y = "a"; // i have assigned the variable y the value of a

var z = []; // i have assigned the variable z the value of an empty array

var a = {}; // i have assigned the variable a the value of an empty object

console.log(x);
console.log(y);
console.log(z);
console.log(a);

//constatnt bindings
const taxRate = 0.065;
console.log(taxRate);
//taxRate = 300.065; --cannot do this because this is a reassignment of a constant. new browsers for constant


//let bindings -- new to the Javascript language.
let myFavoriteColor = 'blue';
myFavoriteColor = 'green'; //this is allowed because 'let' allows reassignment

console.log(myFavoriteColor);


//expressions and statements
// statements -> ; (semicolon)
// expressions -> can be evaluaged (operations with values)
var k = 7;
var p = 3 * (k + 2); //this contains expressions to create a statements
console.log(p);
