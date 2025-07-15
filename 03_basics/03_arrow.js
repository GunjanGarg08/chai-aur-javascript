const user = {
    username: "gunjan",
    price: "999",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // abb yha direct "username" nahi likh sakte, "username", "user" variable ka andar bana hai, toh usko access krne ka liye "this" keyword ka use krna padhta hai
        console.log(this); // yeh current context ki baat krta hai. toh yeh json format main username, price and welcomeMessage display krrdega
    } // So, this refers the current context
}

// user.welcomeMessage // kuch bhi nahi show hoga, bass normally code run ho jayega without errors
// user.welcomeMessage() // gunjan , welcome to website

// user.username = "sam"
// user.welcomeMessage() // sam , welcome to website

console.log(this) // {}, abb yha current context empty ho jayega, kyunki hum node environment ka andar hai, so abhi yha "this" joh hai voh refer krra hai ek empty object ko, kyunki abhi koi global ka andar context hi nahi hai

// INTERVIEW QUESTION
// toh abb browser main jakar console par "console.log(this)" likho and enter click karo
// So you will see, toh you will see "window", but yha par haame empty parenthesis dikahyi dere thee... toh yeh aa kyun rha hai
// The thing is ki pehle ka tym main, javascript ko execute krne ka ek hi method hota tha browser ka andar... joh javascript ka joh engine hai joh javascript ko execute krta tha voh sirf ek hi jagaha paya jata tha that's inside browser
// Toh abhi humne unn engine ko nikala and usko alag alag naam diye, like node, dino, bunn etc... so now that engine runs as standalone.. toh browser ka andar joh engine work krta hai voh sabse zyada global object hai voh Windows Object hai
// SO, THE GLOBAL OBJECT INSIDE BROWSER IS "WINDOW" OBJECT

// function chai() {
//     console.log(this);
// }

// chai() // toh yha par hamare pass bht saari values aayngi
// toh abhi pehle jab humne bahar run kiya tha toh empty object aaya tha, but jab hum "this" ko function ka andar run krte hai toh bhout saari values aati hai...

// function chai() {
//     let username = "gunjan"
//     console.log(this);
// }

// chai() // abb bhi same itni saari values show hongi output main... but when we change it to...

// function chai() {
//     let username = "gunjan"
//     console.log(this.username); // toh yeh "this" sirf object ka andar ki kaam karr rha hai, aise runctions ka andar we are not able to use "this"
// }

// chai() // "undefined" print hoga

// const chai = function () {
//     let username = "gunjan"
//     console.log(this.username);
// }

// chai() // "undefined" ; so, if we write function like this by storing it in variable, then also the same undefined comes in output

// ARROW FUNCTION

const chai = () => {
    let username = "gunjan"
    console.log(this.username); // undefined
    console.log(this); // {} ; "Empty Curly Braces"
}

chai()

// So, INTERVIEWER asked difference between Normal Function and Arrow Function
// Toh log kehte hai ki Arrow Function main aap "this" use nahi karr saktein aur yeh Normal Function main krr saktein hai... kyunki arrow function main output main empty curly braces aate hai and normal function main bhout saari values... toh yeh galat hai... yeh interviewer nahi sunna chahta

// PURE/CORE ARROW FUNCTION
// SYNTAX
// () => {}; // toh isko ek variable main bhi hold karr saktein hai
// Parenthesis () ka andar Parameters pass krtein hai

// Basic Arrow Function - Explicit Return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 4)); // 7

// Implicit Return, Parenthesis and Return Keyword hata diye, because haame ek hi line retur krni hai, to usko same line main hi likh diya
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 4)); // 7

// Agar yeh thoda confusig lagra hai toh usko parenthesis main wrap krdo
// const addTwo = (num1, num2) => (num1 + num2); // toh iska REACT main bhout use hai
// console.log(addTwo(3, 4)); // 7

// "Curly Braces" main wrap kara toh "return" keyword likhna padega
// "Parenthesis" main wrap kiya toh nahi likhna pdega

// Explicit Return jab "return" keyword use krte hai... means explicity lagana padhta hai
// Implicit Return jab "return" keyword nahi lagana pdhta

// Toh yeh parenthesis ka use kha aata hai
// Like abhi toh humne number return kiya, agar humme object return krna hota, toh yeh curly braces ka toh aise use hi nahi krr paate
// toh usko haame parenthesis main wrap krna pdega
const addTwo = (num1, num2) => ({username: "gunjan"})
console.log(addTwo(3, 4)); // 7
// Parenthesis main wrap nahi karenge toh "undefined" aayega output main

// Loops main bhi use aata hai
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())
