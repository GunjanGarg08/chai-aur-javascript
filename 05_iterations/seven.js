const myNumers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// const newNums = myNumers.map( (num) => num + 10 )
// const newNums = myNumers.map( (num) => { return num + 10 } ) // scope open krdi toh return lagana padega
// console.log(newNums);

const newNums = myNumers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 ) // filter main true hota hai toh print hota hai

console.log(newNums);