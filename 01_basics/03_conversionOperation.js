let score = 33
let score2 = "33"
let score3 = "33abc"
let score4 = null

console.log(typeof score); // number
console.log(typeof(score)); // number
console.log(typeof score2); // string

// let valueInNumber = Number(score2)
// console.log(typeof valueInNumber); // number

// let valueInNumber = Number(score3)
// console.log(typeof valueInNumber); // number, but how come "33abc" is converted to number
// console.log(valueInNumber); // this will show us that "NaN" is stored inside the variable
// above is same result for "undefined" also

let valueInNumber = Number(score4)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // this will show us that "0" is stored inside the variable

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "gunjan" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string