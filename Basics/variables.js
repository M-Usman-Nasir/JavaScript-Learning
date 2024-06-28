// Variables
// let , var , or const.
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

var name1 = "Usman";
let name2 = "Leena";
const name3 = "Zaki";

var name1 = "Nasir";
// let name2 = "Sara";
// const name3 = "Hasan";

console.log (name1);
console.log (name2);
console.log (name3);

const accountId = 8127146
let accountEmail = "usman@gmail.com"
var accountPassword = "12345"

accountId = "Karachi"
accountEmail = "nasir@gmail.com"
accountPassword = "678910"
accountId = "Lahore"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountId);

console.table ([accountEmail, accountId, accountPassword, accountId]);