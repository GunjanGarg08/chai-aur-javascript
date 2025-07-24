// const userEmail = "gunjan@.ai"

// if (userEmail) {
//     console.log("Got user Email"); // This will come as output
// } else {
//     console.log("Don't have User Email");
// }

// String main kuch hai toh voh true ki tarah behave kaara hai
// String main kuch nahi hai, means empty string ("") hai toh voh false ki taraha behave kara hai
// Empty Array ([]) lete hai toh yeh true ki taraha behave karega...
// So, there is not particular any rule about it actually

// Falsy Values are:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN -> other than these all are true values

// Truthy Values are:
// "0",  "false", " ", [], {}, function(){}
// So, when things become string, the means changes
// Also empty array, empty string, empty object and even empty function are considered as truthy values

// const emptyArrayCheck = [];

// if (emptyArrayCheck.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyObjectCheck = {};

// if (Object.keys(emptyObjectCheck).length === 0) {
//     console.log("Object is Empty");
// }
// "Object.keys(emptyObjectCheck)", this complete statement returns the array of keys of the object... so we can apply the length property of array to it

// You can check below in console
// false == 0 -> true
// false == '' -> true
// 0 == '' -> true

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10 // Output: 5
// val1 = null ?? 10 // Output: 10
// val1 = undefined ?? 15 // Output: 15
val1 = null ?? 10 ?? 20 // Output: 10

console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("More than 80")
// More then 80