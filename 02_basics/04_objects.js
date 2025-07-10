// const appUser = new Object() // SINGLETON Object
// OR
// const appUser = {} // NON-SINGLETON Object
// console.log(appUser); // {}, int both cases we will get same output only, just one difference of SINGLETON & NON-SINGLETON only

// appUser.id = "123abc"
// appUser.name = "Sammy"
// appUser.isLoggedIn = false

// console.log(appUser) // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "gunjan",
            lastname: "garg"
        }
    }
}

console.log(regularUser.fullname); // { userfullname: { firstname: 'gunjan', lastname: 'garg' } }
console.log(regularUser.fullname.userfullname); // { firstname: 'gunjan', lastname: 'garg' }
console.log(regularUser.fullname.userfullname.firstname); // gunjan
console.log(regularUser.fullname?.userfullname.firstname); // yeh question mark (?) security ka liye lagaya hai.. jab hum api sa lete hai toh yeh exist krta hai ya nahi... abhi aage iske baare main aur aache sa padhenge

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = { obj1, obj2 };
// yha vhi array vali dikkat aaygi... ek ka andar ek object bann jayega
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2); // This function of Object returns the value so we have stored it in a variable
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2); // same result hi aayega but thoda safe syntax hota hai yeh ki combined array hi aayega
// toh kaise rehta hai ki yeh first {} hamara target hai aur baaki saare act karenge as a source
// toh agar hum aise nahi denge toh means hai ki saari values obj1 main jaayngi, toh ek safe syntax hai aise blank curly braces lagake

// Using Spread Operator
const obj3 = {...obj1, ...obj2}; // toh haame yhi use krna hai... sabse zyada efficient hai yeh
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// jab Database sa values aayngi
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(appUser);

console.log(Object.keys(appUser)); // [ 'id', 'name', 'isLoggedIn' ]
// Toh idhar iska datatype check karenge toh array aayega... toh hamare pass saari values array ki form main save ho gyi, toh abb hum ispe koi bhi operation laga sakte hai... loops lagao chahe ya joh marzi
console.log(Object.values(appUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(appUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// toh kahi baar kya hota hai ki, app ek array ka uppar loop krre hai toh koi value nikal rahe hai but voh value exist hi ni krti toh kya crash hone ka chances hai
// toh issliye we can ask ki value exist krti hai ya ni
console.log(appUser.hasOwnProperty('isLoggedIn')); // true
console.log(appUser.hasOwnProperty('isLogged')); // false


// Destructuring... abb yeh Array ki bhi hoti hai and Objects ki bhi... abhi Object ki dekhenge... Array ki kisi aur din dekhlenge
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hemant"
}

// agar haame koi value ko extract karna hai
// course.courseInstructor

// better method
const {courseInstructor} = course
console.log(courseInstructor); // hemant

// of we say ki courseInstructor bhout bada name hai toh aise usse short name dekar access bhi karr saktein hai
const {courseInstructor: instructor} = course
console.log(instructor); // hemant

// This type of Destructuring used in REACT
// baar baar, props.company vgehra likhne sa aacha aise sidha company likh saktein hai
// const navbar = ({company}) => {

// } // props

// navbar(company = "gunjan")


// APIs - apna kaam kisi aur ka sarr par daal dena
// pehle info aati hai XML main.. abb aati hai JSON Format main

// {
//     "name": "gunjan",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// https://api.github.com/users/hiteshchoudhary

// hamesha api zaroori nahi json format main millein... kabhi kabhi array ki form main bhi milti hai

[
    {},
    {},
    {}
]

// Json Formatter par jakr api sa joh json data aayega hai usko study krr sktein hai samajhne ka liye

