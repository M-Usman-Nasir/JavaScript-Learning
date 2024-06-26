// • Non-Primitive (Reference) Data Types (Heap Memory)
// 1. Array
// 2. Object 
// 3. Function

// _____ Array _________
// let fruits = ["apple", "banana", "orange", "grapes", "strawberry"]; 
// let x = [1, 2, "Ali"];
// let myVariable = [1, 'Bob', 'Steve', 10];

// console.log (fruits);
// console.log (x);
// console.log (myVariable);

// _______ Object ___________
// const car = {
//     type: "Toyota",		
//     model: "Corolla",  		
//     year: 2009};

// console.log (car);

// const person = { 
//     name: "Alice",	
//     age: 30,		  
//     hobbies: ["reading", "coding"]};
// console.log (person);
// console.log (person.name);
// console.log (person.hobbies[1]);

// _________ Functions ___________
function greet (name) {
    return "Hello, " + name + "!";
  }
  
const message = greet("Bob");
 console.log(message); // Outputs "Hello, Bob!"