// To master JavaScript you may must know OBJECTS and BROWSER/WEB EVENTS, master them, you may get master in js as well

// On the basis of how data is kept inside memory and it is accessed, the datatypes are divided into 2 types: PRIMITIVE & NON-PRIMITIVE/REFERENCED-TYPE

// Primitive
// 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

// We do not need to tell the datatype of variable to declare that
// const score = 100;
// const scoreValue = 100.3;
// Find whether JS is Statically-Typed or Dynamically-Types Language

const isLoggedIn = false;
const outsideTemp = null; // datatype will come as object
let userEmail;

// Symbol used to create unique values
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false, because of symbol they are coming false, instead that we have same value '123'

// const bigNumber = 123456789452136;
const bigNumber = 123456789452136n // zyada bada ho gya, toh aage n laga do, voh apne aap BigInt bann jayega

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // datatype will come as object
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction); // function

// Link to Read
// https://262.ecma-international.org/5.1/#sec-11.4.3


// Memory Allocation In javaScript

// Stack (Primitive), Heap (Non-Primitive)
// Stack main krte hai toh copy milta hai and heap main original value ka reference milta hai

let myYoutubeName = "gunjangargcom"; // Stack

let anotherName = myYoutubeName
console.log(anotherName); // gunjangargcom
anotherName = "gunjan"
console.log(myYoutubeName); // gunjangargcom
console.log(anotherName); // gunjan

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "gunjan@google.com"

console.log(userOne.email); // gunjan@google.com
console.log(userTwo.email); // gunjan@google.com