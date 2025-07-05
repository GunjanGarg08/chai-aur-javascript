// In console on web browser
// "Hello" + " World" -> 'Hello World'

console.log("hello"); // hello

// const gameName = new String('gunjan');
// gameName
// -> String {'gunjan'}
// and when you open it using the arrow, it comes in key value pair
// key is the index number and value is each character of the string
// also shows length of the string
// hence this method provides many string manipulation methods including length etc.
// don't confuse ki yeh array hai, string is the object only

// -------------------------------- //

const name = "gunjan"
const repoCount = 50

// console.log(name + repoCount + " Value"); // Outdated Method... use below mentioned modern method now

// String Interpolation - using backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc'); // provides more functions to apply on string to manipulate them

console.log(gameName[0]); // h
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 9
console.log(gameName.toUpperCase()); // Doesn't change the original value
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2

// To see all methods of the strings refer to the console part.... there all the string methods are visible

const newString = gameName.substring(0, 4) // yha negative values di toh yeh by default usse 0 se start krrdega,,, (-8, 4) -> (0, 4)
// end value is not included, here 4
// displays the string from 0 to 3
console.log(newString); // hite

const anotherString = gameName.lastIndexOf(-8, 4) // In slice we ca give negative values as well, it starts from the back
console.log(anotherString); // ite

const newStringOne = "   hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // so it trims starting and ending space
// Trim works on whitespcaces plus line terminators (slash etc.)
// Read about it in documentation

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); //https://hitesh.com/hitesh-choudhary
// Where it is used mainly
// Like if by mistake someone types the url as "https://hitesh.com/hitesh choudhary"
// %20 ki jagaha usme space da diya... toh browser space nahi samajhta... toh voh vha apne aap %20 daal dega
// toh usko agar aise replace karna ho... toh replace method sa krr saktein hai

console.log(url.includes('hitesh')) // true

const gameName1 = new String('hitesh-hc-com');
console.log(gameName1.split('-')); // [ 'hitesh', 'hc', 'com' ]

// Read about strings from console and documentation