// if

// "condition" should be "true" then only if statement will work, otherwise if it will be "false" then it will not work
// if (condition) {

// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {

// }

// Comparison Operators
// <, >, <=, >=, == (just checks value), === (checks both value and datatype), !=, !==

if ( 2 == "2" ) {
    console.log("executed");
} // executed

if ( 2 === "2" ) {
    console.log("executed");
} // here, nothing will be displayed as the condition becomes false because of different datatypes

// const temperature  = 41;

// if( temperature < 50 ) {
//     console.log("less than 50");
// }
// console.log("temperature is greater then 50")
// so, here both the console statements will be printed
// so, here we will use else statement

// const temperature = 41;

// if( temperature === 41 ) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");
// less than 50, Execute

// Important
// const score = 200;
// if (score > 100) {
//     const power = "fly";
//     console.log(`User Power: ${power}`); // User Power: fly
// }

// console.log(`User Power: ${power}`); // inside "if" toh koi problem nahi aaygi... but outside main ERROR aayega... because "power" variable ki scope sirf "if" statements ka andar hi valid hai... bhar nahi


// Short-hand Notation
const balance = 1000;
// if (balance > 500) console.log("Test"); // Implicit Scope, yeh ek hi line main execute hota hai and last main "semicolon" phr mandatory ho jata hai

// if(balance > 500) console.log("Test"),
// console.log("Test2"); // but yeh bht hi unreadable code hai... koi sense nahi hai iski... very immature code, not a good practice

// To check multiple conditions
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less then 1200"); // This will be executed
// }

// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }