// ---------- //
// Sample Data - Create your own sample data to test your functions.
// jsDocs - Create a jsDoc comment for each function.
// ---------- //

// 1. Define a function in JavaScript that takes in two numbers as arguments and returns their sum.
function calculateSum(num1, num2) {
  return num1 + num2
}

// 2. Define a function in JavaScript that takes in a string as an argument and returns the number of vowels in that string.
function getNumberOfVowels(str) {
  let count = 0;

  if(str.includes('a')){
    count++;
  }
  if(str.includes('e')){
    count++;
  }
  if(str.includes('i')){
    count++;
  }
  if(str.includes('o')){
    count++;
  }
  if(str.includes('u')){
    count++;
  }

  return count;
}

// 3. Define a function in JavaScript that takes in an array as an argument and returns the largest number in that array.
function getLargestNumber(array) {
  let currentNumber = array[0];

  for(let i = 1; i < array.length; i++){
    if(array[i] > currentNumber){
      currentNumber = array[i];
    }
  }

  return currentNumber;
}

// 4. Define a function in JavaScript that takes in an object as an argument and returns the key-value pair with the largest value.
function getLargestKeyValuePair(obj) {

  let highestValue = obj['a'];
  let highestKey = null;

for(key in obj){
  
  if(obj[key] > highestValue){
      highestValue = obj[key];
      highestKey = key;
  }
  
}

let obj2 = {};

obj2[highestKey] = highestValue;

return obj2;
}

// 5. Define a function in JavaScript that takes in an array of strings as an argument and returns a new array with all the strings converted to uppercase.
function convertToUppercase(array) {
  let newArray = [];

  for(let i = 0; i < array.length; i++){
    let upperCaseValue = array[i].toString().toUpperCase()
    newArray.push(upperCaseValue);
  }

  return newArray;
}

// 6. Define a function in JavaScript that takes in a number as an argument and returns "even" if the number is even and "odd" if the number is odd.
function isOddOrEven(number) {
  
  if(!Number.isInteger(number)){
   return "Input must be an integer"
  }
  
  if(number % 2 === 0){
    return 'even'
  }
  else{
    return 'odd';
  }
}

// 7. Define a function in JavaScript that takes in a string as an argument and returns the string reversed.
function reverseString(string){
  if(typeof string !== 'string'){
      return "Input must be a string";
  }
  
  let stringArray = string.split("")
  
  let secondStringArray = [];
  
  for(let i = stringArray.length - 1; i >= 0; i--){
      secondStringArray.push(stringArray[i]);
  }
  
  secondString = secondStringArray.join("");
  
  return secondString;
}

// 8. Define a function in JavaScript that takes in an array of numbers as an argument and returns the average of the numbers in that array.
function calculateAverage(array) {
  if(array.length === 0){
    return 'Array is empty';
  }
  
  let total = 0;

  for(let i = 0; i < array.length; i++){
    total += array[i];
  }

  total = (total / array.length);

  return total
}

// 9. Define a function in JavaScript that takes in a string as an argument and returns a new string with the first and last letter of the original string switched.
function switchFirstAndLastLetter(string) {
  if(string.length < 2){
      return 'String must have at least 2 characters';
  }
  
  if(typeof string !== 'string'){
      return "Input must be a string"
  }
  
  let stringArray = string.split("");
  
  const firstLetter = stringArray[0];
  const lastLetter = stringArray[stringArray.length - 1];
  
  stringArray.pop();
  stringArray.shift();
  
  stringArray.push(firstLetter);
  stringArray.unshift(lastLetter);
  
  return stringArray.join("");
}

// 10. Define a function in JavaScript that takes in an array of strings as an argument and returns a new array with all duplicates removed.
function removeDuplicates(array) {
  
  let newArray = [...new Set(array)];

  return newArray;
}

module.exports = {
  calculateSum,
  getNumberOfVowels,
  getLargestNumber,
  getLargestKeyValuePair,
  convertToUppercase,
  isOddOrEven,
  reverseString,
  calculateAverage,
  switchFirstAndLastLetter,
  removeDuplicates,
};
