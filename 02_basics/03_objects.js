// Two ways to declare the objects, one is like "constructor" and second is like "literal"
// "Constructor" ki tarha banega toh "SINGLETON" ki tarha banega... but "Literals" main singelton nahi banega

// Constructor - SINGLETON
// Object.create

// Object Literals
// const JsUser = {} // Empty Object with no values

// asked in interviews, symbol create karo and then usse object main pass karo
const mySym = Symbol("key1");

const JsUser = {
    name: "Gunjan", // "name" and all yha par string ki taraha hi store hote hai, "name"... bass hum unhe aise hi likh dete hai
    "full name": "Gunjan Garg",
    // mySym: "mykey1", // Symbol ko declare krna hai object ka andar... aise nahi krte... abhi yeh symbol ki taraha treat nahi ho rha
    [mySym]: "mykey1", // SQUARE BRACKETS are mandatory
    age: 19,
    location: "Jaipur",
    email: "gunjan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// 2 methods to access the values of objects
// console.log(JsUser.email) // gunjan@gmail.com
// console.log(JsUser["email"]) // gunjan@gmail.com
// because yeh keys yha object main string ki taraha store hoti hai na toh issliye aise double quotes main diya hai

// console.log(JsUser.fullname); // Abb hum isko aise dot operator ka through access nahi karr payenge, because uppar humne isse double quotes main likha hai
// so isse humme square brackets sa hi access krna pdega
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym); // mykey1, abhi yha par yeh symbol ki taraha declare nahi ho rha
// console.log(typeof JsUser.mySym); // string
// console.log(JsUser[mySym]); // aise square brackets sa access bhi aise hi krna hai

JsUser.email = "gunjan@chatgpt.com"; // value ko change krna
Object.freeze(JsUser); // if we want ki object ki values ko lock krrdiya jaay, koi usse change na karr paay then we can apply freeze on this
JsUser.email = "gunjan@microsoft.com" // abb yeh email ki value change nahi hoogi.. isko print karaenge... koi error nahi aayega but values bhi change nahi hogi
console.log(JsUser);
// {
//   name: 'Gunjan',
//   'full name': 'Gunjan Garg',
//   age: 19,
//   location: 'Jaipur',
//   email: 'gunjan@chatgpt.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

// Symbols ko dekho isme... kaise display hoora hai... yahi interviewer puchta hai

JsUser.greeting = funtion() {
    console.log("Hello Js User")
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting()); // Hello Js user, undefined -> yeh undefined issiliye aara hai becoz humne function sa kuch return nahi karaya hai

console.log(JsUser.greeting()); // Hello Js user ; undefined
console.log(JsUser.greetingTwo()); // Hello Js user, gunjan ; undefined
