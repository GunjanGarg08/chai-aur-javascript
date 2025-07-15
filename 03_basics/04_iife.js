// Immediately Invoked Function Expressions (IIFE)

// To reasons to create this function - INTERVIEW main yeh dono reasons dene hai aur first vala priority par rakhna hai
// Gobal Scope se Pollution nahi chahiye, toh hum hamara ek alag scope bana lete hai
// Immediately voh execute ho jaay vhi pa

// function chai() {
//     console.log("DB CONNECTED");
// }
// chai(); // DB CONNECTED


// (function chai() {
//     console.log("DB CONNECTED");
// })() // DB CONNECTED

// (Function Definition)(Function Execution)

// Toh yeh arrow function ki form main bhi likh saktein thee
// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )()

// ( function aurcode() {
//     console.log(`DB CONNECTED TWO`);
// } )()
// Toh ye aise error denge... 

// IMPORTANT-INTERVIEW: Toh jab two IIFE ek saath likhte hai toh yeh aise SEMI COLON lagane padhte hai
// Toh bass iske liye haame last main SEMI COLON lagana padhta hai
// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })(); // DB CONNECTED

// (() => {
//     console.log(`DB CONNECTED TWO`);
// })() // DB CONNECTED TWO

// toh yeh joh error aata hai voh problem function ya arrow function ki nahi thi... voh semi colon ki problem thi...

// Parameters passed
// ( (name) => {
//     // unnamed IIFE
//     console.log(`DB CONNECTED TWO ${name}`);
// })('gunjan') // DB CONNECTED TWO gunjan