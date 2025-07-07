// Dates
// January 1, 1970

let myDate = new Date();
console.log(myDate); // 2025-07-07T17:39:41.575Z
console.log(myDate.toString()); // Mon Jul 07 2025 17:39:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Jul 07 2025
console.log(myDate.toISOString()); // 2025-07-07T17:39:41.575Z
console.log(myDate.toJSON()); // 2025-07-07T17:39:41.575Z
console.log(myDate.toLocaleDateString()); // 7/7/2025
console.log(myDate.toLocaleString()); // 7/7/2025, 5:39:41 PM

console.log(typeof myDate); // Object, interview ques

// let myCreateDate = new Date(2023, 0, 23); // YYYY, MM, DD ; Month indexing starts from 0, keep im mind
// console.log(myCreateDate.toDateString()); // Mon Jan 23 2023

// let myCreateDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreateDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

// let myCreateDate = new Date("2023-01-14"); // "YYYY-MM-DD", here indexing of month starts from 1... keep these things in mind
// console.log(myCreateDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

// let myCreateDate = new Date("01-14-2023"); // "MM-DD-YYYY", here indexing of month starts from 1... keep these things in mind
// console.log(myCreateDate.toLocaleString());


// used in Quizes, polls etc. to maybe know who has completed first or something like this
// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1677672589191, in milli-seconds

// let myCreateDate = new Date("01-14-2023");
// console.log(myCreateDate.getTime()); // 1673654400000, in milli-seconds
// console.log(Math.floor(Date.now()/1000)); // interview ques

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay()); // etc... so many functions, you can read about them
console.log(newDate.getMonth()); // month indexing will start from 0, keep in mind
console.log(newDate.getMonth() + 1); // end user ko problem na ho toh +1 kardo... abb voh 1 sa month start hokar aaynge

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})