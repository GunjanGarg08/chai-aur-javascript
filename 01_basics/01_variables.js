// Declaration of Constants
const accountId = 144553

// Declaration of Variables - let, var
let accountEmail = "gunjan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // can be declared without using any keyword also but still this is worst method to use
let accountState; // Not assigning any value to the variable, so this will be assigned "undefined" by default

// So, problem with js initially was that there was no concept of scope, it doesn't know about scope
// So var is not used in js, we use let so that this scope problem don't come
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// when using const keyword, the value once assigned to it cannot be changed
// accountId = 2;
// console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// Will display the values of all the stated variables in form of a table
// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])