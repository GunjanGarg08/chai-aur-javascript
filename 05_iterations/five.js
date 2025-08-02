const coding = ["js", "ruby", "java", "python", "cpp"]

// for-each loop - IMPORTANT - Higher-Order Function
// In this forEach we give a Callback function.. so here we do not have to specify the name of the function like we use to do in normal functions
// coding.forEach( function (val) {
//     console.log(val); // Every element of the array is printed in next line
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// To create functions separately and pass it's name as callback function in the forEach loop
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe); // Function ka reference dena hai... usko execute nahi krna hai (printMe())

// Other parameters except item in the callback function
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )


const myCoding =[
    {
        languageName: "javascript",
        languagerFileName: "js"
    },
    {
        languageName: "java",
        languagerFileName: "java"
    },
    {
        languageName: "python",
        languagerFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )