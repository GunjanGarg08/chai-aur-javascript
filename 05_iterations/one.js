// for loop

// Basic Syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop Value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop Value ${j} and Inner Loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
    } 
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}