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

