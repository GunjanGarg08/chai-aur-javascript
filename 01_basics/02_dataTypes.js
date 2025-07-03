"use strict"; // treat all Js code as newer version

// alert("hello")
alert( 3 + 3 ) // will give ERROR
// We are using nodejs, not browser. If we go on browser and open console there by Ctrl + Shift + i, then if there we write this then we will get the output, but not here in nodejs

console.log(3+3); console.log("Hitesh") // Without Semicolon it will give error, it may work with semicolon, but still code readibility should be high, it won't look good to write like this

// Official Documentation of javaScript - tc39.es
// Good Documentation by Mozilla - mdn

let name = "gunjan"
let age = 18
let isLoggedIn = false
// let state;
let state = null;

// number => 2 to power 53  is range
// bigint
// string => can we used with both single and double quotes, preffered one is double only
// boolean => true/false
// null => standalone value, initialized the value of the varaible as null, i.e. empty value
// undefined => variable declared but value not defined/initialized
// symbol => unique, used in figma and all


// object
console.log(typeof "gunjan");
console.log(typeof age);
console.log(typeof null); // result : object
console.log(typeof undefined); // result : undefined
