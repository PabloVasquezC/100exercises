const lettersNumbersAndSigns = ["a","b","c","d","e","F","G","H","1","2","3","#","%","/"];
const numbers = [1,2,3,4,5,6,7,8,22,33,44,55];

// console.log(numbers.toString());


// The join() method also joins all array elements into a string.//
//It behaves just like toString(), but in addition you can specify the separator//
// console.log(lettersNumbersAndSigns.join("*"));


// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.
// This is what popping and pushing is:
// Popping items out of an array, or pushing items into an array.
//Example:
//these methods mutate the array 

const fruits = ["orange","banana","apple","mango"];
let popedOut = fruits.pop();
// console.log(popedOut);
let pushedInside = fruits.push("pineapple");
// console.log(fruits);
let shifted = fruits.shift();
// console.log(fruits);
let inShifted = fruits.unshift("melon");
// console.log(fruits);


//Concat Arrays
const concatenatedArrays = numbers.concat(lettersNumbersAndSigns);
// console.log(concatenatedArrays);


// Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
//Example
const myArr = [0,[1,2],3,[4,5],6,[7,8]];
const newArr = myArr.flat();
// console.log(newArr);


// Splicing and Slicing Arrays
// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

// JavaScript Array splice()
// The splice() method can be used to add new items to an array:
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");


// Purpose: map() is used for iterating over an array and creating a new array by transforming 
// each element based on a provided function. It's used when you want to transform the elements of an array 
// into a new array of the same length.
// map
// Return Value: map() returns a new array with the results of applying the provided function 
// to each element in the original array, in the same order.
const doubled = numbers.map((e) => e*2);
// console.log(doubled);
// Use Case: When you want to transform the elements of an array 
// into a new array based on some operation or computation.




// The forEach() method is an iterative method. It calls a provided callbackFn function once 
// for each element in an array in ascending-index order. Unlike map(), forEach() always 
// returns undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

// callbackFn is invoked only for array indexes which have assigned values. 
// It is not invoked for empty slots in sparse arrays.

// forEach() does not mutate the array on which it is called, 
// but the function provided as callbackFn can. Note, however, that the length of the array is saved before 
// the first invocation of callbackFn. Therefore:

const numbers2 = [1,2,3,4,5,6];
const raisedByTwo = numbers2.forEach((e) => e**2);
// console.log(raisedByTwo);


// The filter() method is an iterative method. It calls a provided callbackFn function 
// once for each element in an array, and constructs a new array of all the values for 
// which callbackFn returns a truthy value. Array elements which do not pass the 
// callbackFn test are not included in the new array.

// callbackFn is invoked only for array indexes which have assigned values. 
// It is not invoked for empty slots in sparse arrays.

// The filter() method is a copying method. It does not alter this but instead returns 
// a shallow copy that contains the same elements as the ones from 
// the original array (with some filtered out). However, the function provided as callbackFn 
// can mutate the array. Note, however, that the length of the array is saved before 
// the first invocation of callbackFn. Therefore:










