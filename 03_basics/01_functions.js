function sayMyName() {
    console.log("G");
    console.log("U");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("N");
}

// sayMyName, yeh sirf function ka reference hai... isko kuch bhi output main nahi aayega
// sayMyName(), function ko aise execute krte hai

// function addTwoNumbers(number1, number2) { // Parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers() // NaN, because haamne function ka arguments number1 and number2 ko koi value hi ni di
// addTwoNumbers(3, 4); // 7, Arguments
// // So, below cases main thodi problem aati hai because function ko nahi pta hota ki kaise add krne hai alag numbers nahi hai toh... issiliye uska aise if else krke condition lagakr dekh sakte hai ki datatype agar number hai toh add krdo vrna nahi... toh voh hum logics baad main dekhlenge
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, null) // 3
// Jab function create krte hai toh uss time PARAMETERS kehte hai and function call krte time joh values pass krte hai unhe ARGUMENTS bolte hai

// toh yeh aise variable main store nahi hota
// const result = addTwoNumbers(3, 5); // 8
// console.log("Result: ", result); // Result: undefined

// correct way
// function addTwoNumbers(number1, number2) {
//     // let result = number1 + number2;
//     // return result;
//     // console.log("Gunjan"); // yeh kabhi print nahi hoga... because isse pehle hum function sa return krr chuke hai
//     return number1 + number2;
// }
// const result = addTwoNumbers(3, 5);
// console.log("Result: ", result); // Result: 8

function loginUserMessage(username) { // username = "sam", yeh default value bhi de saktein hai aise... toh aise uski value kabhi empty ya undefined nahi aaygi... agar humne function call ka time koi value pass ni ki toh yeh "sam just logged in" dikha dega... aur agar koi value pass ki toh yeh default value override hojaygi and haame pass ki hui value output main dikh jaygi
    // if(username === undefined) {
    //     console.log("Please enter a username");
    //     return; // if this condition became true then output will be "Please enter a username \n undefined"
    // }
    // OR
    if(!undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
loginUserMessage("Gunjan"); // kuch bhi print nahi hoga.. because values pass krdi... function na return bhi krdi... but kahi parr unhe print toh ni karaya na issliye
console.log(loginUserMessage("Gunjan")); // Gunjan just logged in
console.log(loginUserMessage("")); // just logged in, Empty String passed toh kuch ni aayega
console.log(loginUserMessage()); // undefined just logged in ; but jab koi value hi pass ni ki... tab undefined aata hai, toh iske liye bhi if statement sa check karr saktein hai

// function calculateCartPrice(num1) {
//     return num1;
// }
// console.log(calculateCartPrice(200)) // 200
// console.log(calculateCartPrice(200, 400, 500)) // 200, by chance baad main shopping cart main aur zyada add ho gya toh
// so, for this we use REST operator, sabko ek array main daal denge
// function calculateCartPrice(...num1) { // yeh "..." ko hi SPREAD/REST opearator bolte hai, iske use case par depend krta hai ki isse kya bolenge
//     return num1;
// }
// console.log(calculateCartPrice(200, 400, 500)) //[ 200, 400, 500 ]

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000)) //[ 500, 2000 ]

const user = {
    username: "gunjan",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); // output will come

// Abb agar humne uppar object main "price" ki jagaha "prices" likh diya toh voh niche "undefined" aayega... abb agar object name galat de diya toh voh bhi aise galat print ho jayega...
// Toh issiliye log "TypeScript" use krna pasand krte hai... "JavaScript" main bhi ho jata hai bass thoda code likhne padhta hai

// handleObject({
//     username: "gunjan",
//     price: 399
// })
// Toh zaroori nahi hai ki hum object aise name pass karrein... aise direct user banake bhi pass krte hai

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 500, 1000]));