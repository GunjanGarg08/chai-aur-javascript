// While Loop

// Basic Syntax
// while (condition) {
    
// }

let index = 0;
while (index <= 10) {
    console.log(`Value of Index is ${index}`);
    index = index + 2;
}

let myArray = ['flash', 'batman', 'superman'];
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

// do-while loop

// Basic Syntax
// do {
    
// } while (condition);

// It will execute atleast once
// It first prints to the console and then checks the condition


let score = 1
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);