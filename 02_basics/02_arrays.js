const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // already existing array main push krrdeta hai
console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman'] ]
console.log(marvel_heros[3][1]); // flash
// Hence, this is not a good method to merge the array like this

marvel_heros.concat(dc_heros); // doesn't work on already existing array
console.log(marvel_heros); //  [ 'thor', 'Ironman', 'spiderman' ]

const allHeros = marvel_heros.concat(dc_heros); // need to make a new array for the conat
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; // aise ek ke andar ek array ko single array main kren ka liye "flat" use karte hai
const real_another_array = another_array.flat(Infinity); // provide depth in parenthesis ki kitne depth tak array solve krna hai... and if you don;t want to count the depth then just write "infinity", but still avoid using infinity
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// Used in Data Scraping
console.log(Array.isArray("Gunjan")); // false
// but agar convert krna ho toh
console.log(Array.from("Gunjan")); // [ 'G', 'U', 'N', 'J', 'A', 'N' ]
console.log(Array.from({name: "Gunjan"})); // [], interesting case for interviews

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]