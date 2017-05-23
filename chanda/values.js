//This is the file for values, expressions and statements
//This is a signle line comment in JavaScript
//values-What is a value?
 //3-number
 //"a"- string
//true -boolean => false -boolean
//[] -array
//{} -object

// values and variables
// Old School JavaScript
var x=3; // I have assigned the variable x the value of 3
var y = "a"; // I have assgined the variable y the value of a;
var z = []; // I have assigned the variable z the value of empty array;
var a ={}; // I have assigned the variable a the value of empty object;

console.log(x);
console.log(y);
console.log(z);
console.log(a);

// constant bindings
const taxRate =0.065;
console.log(taxRate);
//taxRate =300.065;
//taxRate= 300.065; //cannot do this because this is a
                  // new broswers for const
//let bindings -new to the JavaScript
let myFavoriteColor ='blue';
myFavoriteColor = 'green' ; // this is allowed because
                            //let allows reassignmenet
console.log(myFavoriteColor);
