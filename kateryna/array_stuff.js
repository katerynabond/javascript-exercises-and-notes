//All about arrays

//How do I create an array?
//Empty?
const empty = [];

//Numbers?
const numbers = [1,2,3];

//Strings
const strings = ['a','b','c'];

//Array of objects
const objects = [{},{},{}];

//Array of arrays
const arrays = [[], [], []];

//The above are examples of creating arrays using the array literal syntax

//How many elements are in the array?
const emptyLength = empty.length;
console.log('Empty Length:', emptyLength);
const numbersLength = numbers.length;
console.log('Numbers Length:', numbersLength);

//How can I access an element of an array?
const firstString = strings[0];
console.log('First string from Strings Array:', firstString);
const thirdObject = strings[2];
console.log('The third object from objects', thirdObject);
console.log ('Use an index that is greater than the length', objects[3]);

//How can I change an element of an array?
numbers[2] = 4;
console.log('Numbers after changing 3 to 4:', numbers);

// How can I add elements to array on the right hand side
console.log('strings before the push:', strings);
strings.push('f');
console.log('strings after the push:', strings);

//How can I combine two arrays?
const combined = numbers.concat(strings);
console.log ('combined arrays of numbers and strings:',combined);

//How can I find the position of the element in the array?
//Warning:Numbers and Strings work like you think they shoud.
//Objects and Arrays can do wired things
const positionOfB = strings.indexOf('b');
console.log('Position of B:',positionOfB);
const positionOfK = strings.indexOf('k');
console.log('Position of K:',positionOfK);
//Warning: If the element appears more than once, you will only get the first index not all


//What if I want a piece of an array
const lastTwoNumbers = numbers.slice(numbers.length - 2);
console.log('The last two numbers of numbers', lastTwoNumbers);


//forEach - I want to iterate throught array
const resultOfForEach = numbers.forEach(function logger(number, index){
  console.log('Numbers:', number, index);
});
console.log('resultsOfForEach', resultOfForEach);
//forEach challenge
const x =[4,5,6,7,8,9];
//write a foreach statement that prints out each of the elements and its position for the array x
//
//const result1 = x.forEach(function elementAndIndex(number, index){
//console.log('resultsOfForEach', resul);
x.forEach(function logger(element,index){
  console.log('x:',element,index);
});





//map - I want to get a new array with changes to each element of the original
const stringLengths = strings.map(function lengthGetter(string, index){
  return string.length; // return means spit out
});
console.log('stringLengths:',stringLengths);

// Map task
const y = ['I','like','cheese','?'];
const yLengths = y.map(function getLengths(string, index){
  return string.length;
});
console.log('Lengths:', yLengths);

/////////
//filter  - I want only certain elements of an array that pass a test
const lengthOfOneStrings = y.filter(function test(string,index){
  return string.length === 1;
});
console.log('lengthOfOneStrings:',lengthOfOneStrings);
//////


const stringsWithLengthBiggerThanOne = y.filter(function test(string,index){
  return string.length > 1;
});
console.log('stringsWithLengthBiggerThanOne:',stringsWithLengthBiggerThanOne);



//reduce - I want to take an array to something simpler
const sumOfNumbers = numbers.reduce(function adder(acc, next){
  console.log('acc:', acc, 'next:', next);
  return acc + next;

}, 0);
console.log('sumOfNumbers:',sumOfNumbers);


















////
