// let, var, const ki kahani
// let a = 100;
// const b = 200;
// var c = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    d = 40;
    console.log("INNER: ", a);
}

for(let i=0; i<Array.length; i++) {
    const element = array[i];
}

// bahar toh yeh saare print hogee
console.log(a); // andar yeh nahi print hoga
console.log(b); // andar yeh bhi nahi print hoga
console.log(c); // but yeh andar sa bhi print ho jayega ; 30
console.log(d); // but yeh andar sa bhi print ho jayega ; 40