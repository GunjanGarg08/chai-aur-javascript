// let, var, const ki kahani
// let a = 100;
// const b = 200;
// var c = 300;

// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     d = 40;
//     console.log("INNER: ", a);
// }

// for(let i=0; i<Array.length; i++) {
//     const element = array[i];
// }

// bahar toh yeh saare print hogee
// console.log(a); // andar yeh nahi print hoga
// console.log(b); // andar yeh bhi nahi print hoga
// console.log(c); // but yeh andar sa bhi print ho jayega ; 30
// console.log(d); // but yeh andar sa bhi print ho jayega ; 40

function one() {
    const username = "gunjan"

    function two() {
        const website = "youtube"
        console.log(username); // isse "gunjan" print ho jayega, jab function "two()" execute hoga
    }
    console.log(website); // isme ERROR aayega... isko yha access nahi karr sakte, kyunki iski scope sirf function two tak hi hai
    two(); // yha "gunjan" print ho jayega... because jaise hi function two execute hua toh console.log vaali line challi aur username print ho gya
}
one();
// Toh issi ko hi "Closure" bhi kha jata hai ki joh andar ka function hai voh bhr ka variables ko access krr pata hai... toh Closure main aur bhi bht kuch hai, voh aage discuss karenge
// Child Function can access the Parent Variable

// So this same thing happend in if else as well
is (true) {
    const username = "gunjan";
    if(username === "gunjan") {
        const website = " youtube";
        console.log(username + website); // gunjan youtube
    }
    console.log(website); // yeh ERROR dega, because "website" ka scope yha par nahi hai
}
console.log(username); // yeh bhi ERROR dega, because "username" ka scope yha par nahi hai

// ------------------ INTERESTING ------------------

addOne(5); // isko agar function sa pehle likh denge toh yeh koi error nahi dega... normally execute hojayega
console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

// addOne(5); // abhi yha sirf return hua hai, print nahi hua toh yeh kuch bhi output nahi dega

addTwo(5); // But yeh ERROR dega agar isko pehle likh denge toh, aage ek concept aata hai HOISTING... toh vha isse deep main dekhenge
const addTwo = function(num) {
    return num + 2;
}

// addTwo(5); // abhi yha sirf return hua hai, print nahi hua toh yeh kuch bhi output nahi dega