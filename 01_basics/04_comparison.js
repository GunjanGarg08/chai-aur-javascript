// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Some unpredictable conversions - these comparisons with null and undefined can anytime make you in confusion

// console.log("2" > 1); // true
// console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false.

console.log(undefined == 0); // false
console.log(undefined < 0); // false
console.log(undefined > 0); // false

// === -> checks value strictly known as strict check
console.log("2" == 2); // true, check only value
console.log("2" === 2); // false, check both value and datatype