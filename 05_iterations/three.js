// Array-specific Loops

// ["", "", ""] -> Array of Strings
// [{}, {}, {}] -> Array of Objects

const arr = [1, 2, 3, 4, 5]

// for-of loop
// Basic Syntax:
// for (const element of object) {
    
// }

for (const num of arr) {
    console.log(num); // Will print the elements of array line by line... one element in one line
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps -> similar to arrays
// It's an object that holds key-value pair and remember original order of insertion order of the keys
// It can contain only unique values... no repeated items can be stored in this

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('Fr', "France");
// map.set('IN', "India"); // This won't be stored again in the map, as it's the repeated value

console.log(map);