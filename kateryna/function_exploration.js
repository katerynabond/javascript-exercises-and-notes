/*jshint esversion: 6 */
// Let's talk about functions

//So what about functions?
//It is a way of bundling a piece of repetetive code into a reusable


//Named function declarations - available anywhere in this file
function launchTheMissiles(){
  console.log('Launching The Missiles');
}


// Our first functions
function square(num){
  //launchTheMissiles();// this is bad!
  return num*num;
}

const squareOfTwo = square(2);
//console.log(num); // doesn't exist outside of the function
console.log('squareOfTwo',squareOfTwo);



//console.log('Cube of 2 before:', cube(2));//BROKE!! Variable not defined here
//assign function to Variables
const cube = function cube(num){
  return num * num * num;
};

// const cubeFatError = (num) => {
//   return num * num * num;
// };
//Alternatively
const cubeFatError = num => num * num * num;
;


console.log('Cube of 2 after:', cube(2));
console.log('CubeFatError of 2:', cubeFatError(2));
