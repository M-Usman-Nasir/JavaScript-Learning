//  Non primitive types "Arrays" and "Objects".
// 1. Always use pluralization
// 2. array literals "[]"

// Practice No.: 01 (Loop over the Array)
// const colors = ["red", "green", "yellow", "blue", "pink"];
// for (let i = 0; i < colors.length; i++) {
    //     console.log (colors [i]);
    // }
    
// Practice No.: 02 (Common Array Methods)
// const names = "Ali";
// console.log (colors.includes ("red"));
    
// console.log (Array.isArray (names));
// console.log (Array.isArray (colors));
// colors [1] = "White"; // to modify colors
    
// const colorSetOne = ["red", "blue"]
// const colorSetTwo = ["green", "white"]
    
// const combinedArray = colorSetOne.concat (colorSetTwo);
// console.log (combinedArray);

// console.log (colors);
// console.log (colors.length);
// console.log (colors [0]);
    
// Add and remove Array Element
// colors.push ("black");
// colors.unshift ("white");
// colors.pop ();
// colors.shift (); // remove the red
// console.log (colors);
    
// Array literals
// Practice No.: 03
// const colors = ['red', 'blue', 'green', 'pink']
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]) }
        
// const name1 = 'John'
// console.log(colors.includes('orange'))

// console.log(Array.isArray(name1))
        
// Change / Modify Array Element 
// colors[1] = 'white'
// colors[3] = 'black'
// colors[10] = 'purple'
        
// console.log(colors)
// console.log(colors.length)
        
// console.log(colors[1])
        
// colors.push('purple')
// console.log(colors)
        
// colors.unshift('white')
// console.log(colors)
    
// colors.pop()
// console.log(colors)
    
// colors.shift()
// console.log(colors)

// JavaScript Array Exercises 
// Question No. 1 and Answer 
// const nums = [13, 9, 15, 10, 12];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i]}
// console.log("sum" , sum);

// Question No. 2 and Answer 
// const nums = [13, 9, 15, 10, 15, 80];
// let largestNum = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > largestNum) {
//         largestNum = nums[i];
//     }
// }
// console.log("largestNum", largestNum);

// Question No. 3 and Answer
// const products = ["keyboard", "mouse", "keyboard", "speaker", "printer", "headphone", "printer", "keyboard", "mouse"]
// const uniqueProducts = [];
// for (let i = 0; i < products.length; i++) {
//     if (!uniqueProducts.includes(products[i])) {
//         uniqueProducts.push(products[i]);
//     }
// }
// console.log(uniqueProducts);

// Practice No. 1
// const products = ["keyboard", "mouse", "keyboard", "speaker", "printer", "headphone", "printer", "keyboard"]
// console.log (products);
// const slice = products.slice(0, 1);
// console.log("products" , products);
// console.log ("slice", slice);
// const products = ["keyboard", "mouse", "keyboard", "speaker", "printer", "headphone", "printer", "keyboard"]

// Practice No. 2
// const splice = products.splice (2, 2);
// console.log("slice", splice);

// Extras No. 1 and 2
// let x = 10
// let y = 20
// let z = x
// x = y = z
// console.log(+ "23");
// console.log("x",x);
// console.log("y", y);

//  Extras No. 3
// const firstName = "Ali"
// const lastName = "Taha"
// const fullName = firstName + " " + lastName
// console.log (fullName);

// let x = 10;
// let y = 20;
// console.log (x === y);

// let x = [10];
// let y = [20];
// console.log (x === y);

//  Objects
// Exercise No. 1
// const product = {
//     name: "mouse",
//     description: "gaming mouse",
//     colors: ["red", "blue"],
//     price : 100,
//     inStock: true,
//     units : 10,
// }
// console.log (product);

// const objectDetails = {
//     name2: "Book",
//     description: "Story Book",
//     author: "Ali",
//     color: "Black & White",
//     units: 50,
//     publisher: "Sindhi Board",
//     price: 200,
//     inStock: false,
//     "total units": 80
// }
// console.log(objectDetails);
// console.log(objectDetails.author);
// console.log(objectDetails ["name2"]);

// Object Exercise No. 2
// const restaurant = {
//     name1: "Delhi Restaurant",
//     address: `$ {Math.floor(Math.random() * 100 ) + 1} Jinnah Ave`,
//     city: "Karachi",
//     state: "Sindhi",
//     zipcode: 7477,
//     "fullAddress"
// }
// console.log (restaurant); //

// Modifying Objects
//     name2: "Taha",
//     age: 32,
//     city: "New York",
// }
// person ["city"] = "Karachi"
// delete person.age
// console.log(person);

// const person = {
//     name2: "Taha",
//     age: 32,
//     city: "New York",
// }
// person ["city"] = "Karachi"
// delete person.age
// console.log(person);

// Object Exercise: 03 
// const student = {
//     name2: "Haris",
//     age: 23,
//     subjects: ["Math", "English", "Urdu"],
//     isEnrolled: true,
// }
// student ["grade"] = "A";
// student.grade = "A";
// console.log (student);

// Array of Objects
// const library = [{
//     title: "Book1",
//     author: "Ali",
//     yearPublished: 1998,
// },
// {
//     title: "Book2",
//     author: "Ali1",
//     yearPublished: 1999,
// },
// {
//     title: "Book3",
//     author: "Ali2",
//     yearPublished: 1997,
// }
// ]
// library.push ({title: "system design", author: "Tabish", yearPublished: 2001})
// console.log (library);

// const library = [
//   { title: 'book 1', author: 'john', yearPublished: 2022 },
//   { title: 'book 2', author: 'mark', yearPublished: 1999 },
//   { title: 'book 3', author: 'Sara', yearPublished: 2015 },
// ]

// library.push({
//   title: 'system design',
//   author: 'zeeshan usmani',
//   yearPublished: 2020,
// })
// console.log(library)

// const product = {
//   name: 'mouse',
//   description: 'gaming mouse',
//   colors: ['red', 'blue'],
//   price: 100,
//   inStock: false,
//   'total units': [10, 12],
//   relatedProducts: {
//     name: 'keyboard',
//   },
// }
// console.log(product['total units'][1])
// const title = product['total units']
// console.log(product)

// console.log(product)
// console.log(title)

// const person = {
//   name: 'Mark',
//   age: 32,
//   city: 'New York',
// }

// person['city'] = 'Chicago'

// person.grade = 'A'

// delete person.age
// console.log('person', person)