// • JavaScript Syntax and Data Types (Primitives)
// • Primitive Data Types (Stack Memory)

"use strict"; // treat all JS code as new version 

alert (3 + 3) // we are using node.js, not browser

console.log(3 
    +
     3) // code readability should be high

let firstName = "Ali";
let unassigned;
let isMarried = true;
let score = 25;			
let ab = 123;			
let b = 123.456;
let empty = null;
let abc = 123n;		
let bigInt = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
const mySymbol = Symbol();

console.log(firstName);
console.log(typeof firstName); 
console.log(unassigned);
console.log(typeof unassigned); 
console.log(isMarried);
console.log(typeof isMarried); 
console.log(score);
console.log(typeof score); 
console.log(ab);
console.log(typeof ab); 
console.log(b);
console.log(typeof b); 
console.log(empty);
console.log(typeof empty); 
console.log(abc);
console.log(typeof abc); 
console.log(bigInt);
console.log(typeof bigInt); 
console.log(mySymbol);
console.log(typeof mySymbol);