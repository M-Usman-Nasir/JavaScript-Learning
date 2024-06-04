// const str1 = "\"I Love Pakistan\"";
// console.log (str1);

// const str2 = 'Dr suggested, \'Do not drink cold water\'';
// console.log (str2);

// const str3 = 'C:\\Users\\Name\\Document';
// console.log (str3);

// const str4 = "This is line one";
// const str5 = "      This is line two with a tab"
// console.log (str4);
// console.log (str5);

// const firstName = "Usman";
// const lastName = "Nasir";
// const fullName = `${firstName} ${lastName}`
// console.log (firstName + lastName);
// console.log (fullName);

// const product = {
//     name: "Laptop",
//     price: 40000
// }
// console.log (`${product.name} price is ${product.price}`);

// const devName = "Laptop price is"
// const price = 40000;
// const bothMerged = `${devName} ${price}`
// console.log (bothMerged);

// const mes1 = "Assalam U Alaikum World";
// console.log (mes1.toUpperCase ());
// console.log (mes1.toLowerCase());
// console.log (mes1.length);
// console.log (mes1.lastIndexOf ("o"));
// console.log (mes1.indexOf ("m "));

// const toArray = mes1.split ("")
// const toArray = mes1.split (" ")
// const toArray = mes1.split ("a")

// const toArray = mes1.slice (2, 7)
// console.log (toArray);

// const email = "         usnmannasir98@gmail.com             ";
// const trimMsg = email.trim ()
// console.log (trimMsg);

// const var1 = "We are learning JavaScript";
// console.log (var1.split ("").reverse());
// console.log (var1.split ("").join());

// const result = var1.split ("").reverse().join ("")
// console.log (result);

// const email1 = "usmannasir98@gmail.com";
// const email2 = "john.doe@gmail.com";
// const email3 = "example@example.com";
// const result = email1.split ("@")

// console.log (result);

// const userName = result [0]
// console.log (userName);
// const result1 = userName [0] + "*".repeat (userName.length -2) + userName [userName.length -1] + "@" + result [1]
// console.log (result1);

// 2D Array
// const array1 = [[1, 2], [3, 4], [5, 3]]
// console.log (array1 [1][1]);

// const colors = ["red", "green", "blue", "white"]
// for (let i = 0; i < colors.length; i ++) {
//     console.log(colors [i]);
// }

// const numbers = [1, 2 ,3, 4]
// const result = 1

// for (let num of numbers) {
//     result = result * num
// }
// console.log (result);

// const student = {
//     name: "Ali",
//     email: "alitahir@gmail.com",
//     phone: 923458127146
// }

// for (let key is student) {
//     console.log (student[key]);
// }

// function declaration

// function greet (name) {
//     console.log (`Assalam U Alaikum ${name}`);
// }
// calling function
// greet ("Usman")
// const result = greet ()
// console.log (result);

// function add (a, b) {
//     return a + b
// }
// const result = add (4, 5)
// console.log (result);

// const str = "We are learning JavaScript, Its too much fun"
// const vowels = ["a", "e", "i", "o", "u"]
// function countVowels (str) {
//     let count = 0
//     for (let char of str) {
//         if (vowels.includes (char))
//         count ++
//     }    
//     return count
// }
// const totalVowels = countVowels (str)
// console.log (totalVowels);

function truncateString (str, maxLength) {
    return str.slice (0, maxLength) + ". . ."
}
const result = truncateString (str, 5)
console.log (result);