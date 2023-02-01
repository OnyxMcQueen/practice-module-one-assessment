// Sample Data - Feel free to create your own too!
const sampleArray1 = [1, 2, 3, 4, 5];
const sampleArray2 = ["apple", "banana", "orange", "kiwi", "mango"];

/**
 * Creates an array of the specified size
 * @param {number} size - The size of the array to be created
 * @returns {array} - The newly created array
 */
function createArray(size) {
  // code to create array

  let array = new Array(size);

  for(let i = 0; i < array.length; i++){
    array[i] = null;
  }

  return array;
}

/**
 * Adds an element to the end of the given array
 * @param {array} arr - The array to which the element will be added
 * @param {*} element - The element to be added
 * @returns {number} - The new length of the array
 */
function addElement(arr, element) {
  // code to add element

  arr.push(element);
  
  return arr.length;
}

/**
 * Removes an element from the given array at the specified index
 * @param {array} arr - The array from which the element will be removed
 * @param {number} index - The index of the element to be removed
 * @returns {boolean} - True if the element was removed successfully, false otherwise
 */
function removeElement(arr, index) {
  // code to remove element
  
  if(arr.length === 0){
    return 'Error: The array is empty.'
  }

  if(index < arr.length){
    let spliced = arr.splice(index, 1);
      if(spliced){
        return true
      }
      return false;
  }

  return 'Error: Index out of bounds.'


}

/**
 * Returns the element at the specified index in the given array
 * @param {array} arr - The array whose element will be returned
 * @param {number} index - The index of the element to be returned
 * @returns {*} - The element at the specified index
 */
function getElement(arr, index) {
  // code to return element

  if(index < 0 || index >= arr.length){
    return 'Error: Index out of bounds';
  }
  
  for(let i = 0; i < arr.length; i++){
    if(i === index){
      return arr[i];
    }
  }
}

/**
 * Returns the number of elements in the given array
 * @param {array} arr - The array whose length will be returned
 * @returns {number} - The number of elements in the array
 */
function getArrayLength(arr) {
  // code to return array length

  if(typeof arr !== 'object'){
    return 'Error: Input is not an array.'
  }
  
  let number = arr.length;

  return number;
}

/**
 * Finds the index of the first occurrence of a specified element in the given array
 * @param {array} arr - The array to be searched
 * @param {*} element - The element to be searched for
 * @returns {number} - The index of the first occurrence of the element, -1 if the element is not found
 */
function findElement(arr, element) {
  // code to find element

  if(typeof arr !== 'object'){
    return 'Error: Input is not an array.'
  }

  if(element === undefined){
    return 'Error: Second argument is not provided'
  }
  
  index = arr.indexOf(element);

  if(index === -1){
    return -1
  }
  return index; 
}

/**
 * Reverses the order of the elements in the given array
 * @param {array} arr - The array to be reversed
 * @returns {array} - The reversed array
 */
function reverseArray(arr) {
  // code to reverse array
if(arr.length === 0){
  return 'Error: Array is empty.'
}

if(typeof arr !== 'object'){
  return 'Error: Input is not an array.'
}

let array = [];

for(let i = arr.length - 1; i >= 0; i--){
    array.push(arr[i]);
}


return array;
}

/**
 * Sorts the elements in the given array in ascending order
 * @param {array} arr - The array to be sorted
 * @returns {array} - The sorted array
 */
function sortArray(arr) {
  // code to sort array
  if(typeof arr !== 'object'){
    return 'Error: Input is not an array'
  }

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'number'){
      return "Error: Array must only contain numeric elements"
    }
  }

  arr.sort();

  return arr;
}

/**
 * Removes duplicate elements from the given array
 * @param {array} arr - The array from which duplicates will be removed
 * @returns {array} - The array with duplicate elements removed
 */
function removeDuplicates(arr) {
  // code to remove duplicates
  if(typeof arr !== 'object'){
    return 'Error: Input is not an array'
  }
  
  let array = [...new Set(arr)];

  return array;
}

/**
 * Returns a new array that contains a specified number of elements from the given array
 * @param {array} arr - The array from which elements will be selected
 * @param {number} n - The number of elements to be selected
 * @returns {array} - The new array that contains the selected elements
 */
function selectElements(arr, n) {
  // code to select elements
  if(typeof arr !== 'object'){
    return 'Error: Input is not an array'
  }

  if(typeof n !== 'number'){
    return 'Error: n is not an integer'
  }

  let array = [];

  for(let i = 0; i < n; i++){
    array.push(arr[i]);
  }

  return array;
}

module.exports = {
  createArray,
  addElement,
  removeElement,
  getElement,
  getArrayLength,
  findElement,
  reverseArray,
  sortArray,
  removeDuplicates,
  selectElements,
};
