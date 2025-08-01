const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for-in Loop: to iterate on objects

// Basic Syntax
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in myObject) {
    console.log(key);
}

for (const key in myObject) {
    console.log(myObject[key]);
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key); // abb yha values nahi keys dega yeh arrays ki.. keys in arrays means index... so this is problem here... for-of main toh values deta tha... but in for-in loop its gives key(indexes)
}

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); // Nothing will come in output... not even error also
}
// So, for now we can't do iteration like this on maps... further afterwards we will see them how to do