// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item; // but, here also "undefined" will come
// } )
// console.log(values);
// So, here... all the values of the array will be printed in separate lines... but also "undefined" will be printed
// So, we need to manually return something here

// So, let's see how we will manage this

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( () => () )
// myNums.filter( () => {} )
// Arrow function, parenthesis and curly braces dono se define krr sakte hai

// Single line maine likhna hai arrow function to brackets ki need nahi hai
// const newNums = myNums.filter( (num) => num > 4 ) // toh yeh kuch value return krta hai...
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter( (num) => { // becoz yha humne curly braces lagakar scope open krrdi hai... toh return keyword lagana padega
//     // num > 4
//     return num > 4
// } )
// console.log(newNums); // This will give us an empty array, []
// toh yha par "return" keyword likhna padega

// using for-each

const newNums = []

myNums.forEach( (num) => {
    if (nums > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);

const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'Non-Fiction',
        publish: 1992,
        edition: 2008
    },
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'Book Four',
        genre: 'Non-Fiction',
        publish: 1989,
        edition: 2010
    },
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'Book Six',
        genre: 'Fiction',
        publish: 1987,
        edition: 2010
    },
    {
        title: 'Book Seven',
        genre: 'History',
        publish: 1986,
        edition: 1996
    },
    {
        title: 'Book Eight',
        genre: 'Science',
        publish: 2011,
        edition: 2016
    },
    {
        title: 'Book Nine',
        genre: 'Non-Fiction',
        publish: 1981,
        edition: 1989
    }
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )
userBooks = books.filter( (bk) => {
    // return bk.publish >= 1995
    return bk.publish >= 1995 && bk.genre === "History"
} )

console.log(userBooks);