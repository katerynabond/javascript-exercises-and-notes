// This is all about strings

const aString = "The quick brown fox jumped over the moon";

// What is the length of the string?

const stringLength = aString.length; //this is property access
console.log('String length:', stringLength);

//What is the first letter in the string?
const firstChar = aString.charAt(0);
console.log('The first letter:', firstChar);

//What is another way to find the first letter in the string

const firstCharAnotherWay = aString[0];
console.log('The first letter another way:', firstCharAnotherWay);

//What is the seventh letter of the string?
const seventhChar = aString[6];
console.log('The seventh letter:', seventhChar);

//How do I put strings together? (concatenation)
const stringsTogether = aString.concat('!');
const stringsTogetherAgain = aString + '!';
console.log("String Together:",stringsTogether);
console.log("String Together Again:",stringsTogetherAgain);
console.log('aString',aString);

//Strings are immutable. You can get new ones, but you can modify existing ones

//I want part of a string
const stringPart = aString.slice(0,5); // endIndex is not included for first 5 characters
console.log('The part of the string is:', stringPart);

//How do I split the sentence into the words?
const words = aString.split(' ');
console.log('Words:', words);

//What are the number of words in a string?
const numberOfWords = aString.split(' ').length;
console.log('Number of words', numberOfWords);

//How many spaces are in a string?
//const numberOfSpaces = numberOfSpaces - 1;
//console.log('Number of spaces:', numberOfSpaces);

//What is the longest word in a string?
const startingWords = aString.split('');
const lengthOfWords = startingWords.map(word => word.length);
const maximumWordLength = max(lengthOfWords);
const whereIsTheMax = lengthOfWords.indexOf(maximumWordLength);

function max(listOfNums){
  let maximum = listOfNums[0];
  for (let num in listOfNums){
    if (num>maximum){
      maximum = num;
    }
  }
  return maximum;
}


//How do I reverse a string?
const reverseString = aString.split('').reverse().join('');
console.log('Reversed string', reverseString);













//
