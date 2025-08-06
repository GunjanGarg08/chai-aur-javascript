// JavaScript Demo: Array.reduce()

// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//     (accumulator, currentValue) => accuemulator + currentValue,
//     initialValue
// );

// console.log(sumWithInitial);
// // Expected Output: 10

// const muNums = [1, 2, 3]

// const myTotal = myNumers.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) // here "0" is the value passed to the accumulator... so basically this is the initial value of the accumulator

// // acc: 0 and currval: 1
// // acc: 1 and currval: 2
// // acc: 3 and currval: 3

// console.log(myTotal); // 6

// const muNums = [1, 2, 3]

// const myTotal = myNumers.reduce( (acc, curr) => acc + curr, 0 )
// console.log(myTotal); // 6

const shoppingCart - [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

// So, what is asked us to do is to add all the prices present in this shoppingCart Array

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay); // 22996