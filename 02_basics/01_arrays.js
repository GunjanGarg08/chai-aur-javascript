// Arrays
// Arrays in Java are resizable

const myArr = [0, 1, 2, 3, 4, 5, true, "gunjan"];
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4); // yha square brackets dene ki zaroorat ni hooti, voh apne aap add krdete hai square brackets
console.log(myArr[0]); // 0 based indexing in arrays

// Whenever we use copy function in arrays, it makes shallow copies always
// In Shallow copy, both arrays point to the same reference, hence changes made are made in both the arrays only

// Array Methods

myArr.push(6); // Adds element to the last
myArr.push(7);
myArr.pop(); // Simply, removes the last element

myArr.unshift(9); // Adds element in the beginning
myArr.shift(); // Removes the element form the beginning
console.log(myArr);

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1, when element isn't present in the array

const newArr = myArr.join(); // changes type of array from object to string
console.log(myArr); // [0, 1, 2, 3, 4, 5]
console.log(newArr); // 0,1,2,3,4,5
console.log( typeof newArr); // string

// slice, splice : interview ques

console.log("A ", myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3); // start index included, end index excluded
console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3); // start and end index both included
console.log(myn2); // [ 1, 2, 3 ]
console.log("C ", myArr) // [ 0, 4, 5 ]

// Difference between slice and splice
// 1. slice main original array change nahi hota, (start) sa (end-1) index tak ki values slice print krr deta hai without changing the original array
// 2. splice main original array change hota hai, (start) sa (end) index tak ki values print krrdega slice and original array main sa voh values remove krrdega
// first difference is of change in original array and second difference of end index range included or not
// In interview, most important difference is of change in original array only