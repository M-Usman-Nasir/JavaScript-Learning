// Control Flow & Loops

// if ("") {
//         console.log(true);
//     }
//     else {
//             console.log(false);
//         }

// Practice: 1 (if & else / if & else if)
// let firstname = "Ali"
// if (firstname === "Ali") {
//     console.log("Hello Ali");
// }
// else {
//     console.log("You are not Ali");
// }

// let firstname = "Ali"
// if (firstname !== "Ali") {
//     console.log("Hello Ali");
// }
// else {
//     console.log("You are not Ali");
// }

// let username = "Mohammad";
// let username1 = "Usman";
// if (username === "Mohammad") {
//     console.log("Assalam-u-Alaikum, Mohammad");
// }
// else if (username1 === "Usman") {
//     console.log("Assalam-u-Alaikum Usman");
// }

// Conditions Exercise No.: 1
// const isUserLoggedIn = true;
// const isProSubscriber = true;
// if (!isUserLoggedIn) {
//     console.log("Please login first");
// }
// else if (isUserLoggedIn && !isProSubscriber) {
//     console.log("consider subscribe Please");
// }
// else {
//     console.log("Welcome Sir, Thanks for Login & subscribing");
// }

// Conditions Exercise No.: 2
// let english = 85;
// let urdu = 80;
// let mathematics = 90;
// let totalMarks = 300;
// let obtainedMarks = english + urdu + mathematics;
// let obtainedPercentage = (obtainedMarks * 100) / totalMarks;
// if (obtainedPercentage >= 85) {
//     console.log("Congratulations, you have passed with A+ grade");
// }
// else if (obtainedPercentage >= 80) {
//     console.log("A grade");
// }
// else if (obtainedPercentage >= 70) {
//     console.log("B grade");
// }
// else if (obtainedPercentage >= 60) {
//     console.log("C grade");
// }
// else if (obtainedPercentage >= 50) {
//     console.log("F grade. Sorry, you have failed");
// }

// Practice: 2
// const trafficLight = "Green";
// switch (trafficLight) {
//     case "Green":
//         console.log("Go immediately");
//         break;
//     case "Yellow":
//         console.log("Slow down");
//         break;
//     case "Red":
//         console.log("Stop");
//         break;
//         default: console.log ("not a valid signal");
// }

// const trafficLight = "Purple";
// let message = "Not a valid signal"
// switch (trafficLight) {
//     case "Green":
        // console.log("Go immediately");
//         break;
//     case "Yellow":
        // console.log("Slow down");
//         break;
//     case "Red":
        // console.log("Stop");
//         break;
//         default: console.log ("not a valid signal");
// }
// console.log (message);

// Switch Statements Exercise No.: 1
// const dayOfWeek = "Monday"
// switch (dayOfWeek) {
//     case "Monday":
//         console.log("It's a weekday wake up at 8am");
//         break;
//     case "Tuesday":
//     case "Wednesday":
//         console.log("It's a weekday wake up at 9am");
//         break;
//     case "Thursday":
//         console.log("It's a weekday wake up at 9:30am");
//         break;
//     case "Friday":
//         console.log("It's a weekday wake up at 8:30am");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's a weekend wake up at 10am");
//         break;
//         default: console.log ("not a valid day");
// }

// For Loop Exercise: 1 (Print Number from 1 to 20)
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// For Loop Exercise: 2 (Sum of Natural Numbers)
// let total = 10;
// for (let i = 1; i <= 20; i++) {
//     total = total + i;
// }
// console.log(total);
// The provided code snippet increments a total variable inside a for loop. Let's break it down and understand how it works:
// Initialization: The variable total is initialized to 10.
// Loop Setup: The for loop runs from i = 1 to i = 20 (inclusive).
// Iteration: On each iteration of the loop, the value of i is added to total.
// Output: After the loop completes, the final value of total is logged to the console.
// Let's analyze the loop step-by-step:
// Initially, total is 10.
// On the first iteration (i = 1), total becomes 10 + 1 = 11.
// On the second iteration (i = 2), total becomes 11 + 2 = 13.
// This process continues until i = 20.
// To find the final value of total, we can sum all the integers from 1 to 20 and then add this sum to the initial value of total.

// For Loop Exercise: 3
// for (let i = 20; i >= 1; i--) {
//         console.log(i);
//       }

// Print all even numbers from 1 to 40 but not the number who are divisible by 5 using a for loop
// For Loop Exercise: 4
// for (let i = 2; i <= 40; i += 2) {
//         if (i % 5 !== 0) {
//           console.log(i);
//         }
//       }

// Practice: 3
// let i;
// for (i = 1; i <= 40; i++) {
//     if (i % 3 === 5) {
//         break;
//     }
// }
// console.log(i); // Logs 2, as the loop breaks on the first even number

// For Loop Exercise: 1
// for (let i = 1; i <= 100; i++) {
//     if (i === 50) {
//         console.log ("half way there!");
//         continue;
//     }
//     if (i % 10 === 0) {
//       console.log("checkpoint " + i);
//     }
// }
// console.log("All done!");

// For Loop Exercise: 2
// const n = 4
// for (let i =1; i<=10; i++) {
//     console.log(n + " * " + i + " = " + n * i);
// }

// While Loop Exercise: 01
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Practice: 04
// prompt ("Please Input a number")
// let firstname = "Fahad";
// if (false == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (firstname !== "Ali") {
//   console.log("we did not find any name");
// } else {
//   console.log("ali");
// }

// Practice: 05
// const isLoggedIn = false;
// const isProSubscriber = false;
// if (!isLoggedIn) {
//   console.log("please login first");
// } else if (isLoggedIn && !isProSubscriber) {
//   console.log("consider subscribe");
// } else {
//   console.log("thanks for subscribing");
// }

// Practice: 06
// const totalMarks = 300;
// const englishMarks = 75;
// const mathsMarks = 92;
// const physicsMarks = 80;
// const passingPercentage = 70;
// const obtainedMarks = englishMarks + mathsMarks + physicsMarks;
// const obtainedPercentage = (obtainedMarks / totalMarks) * 100;
// console.log("obtainedPercentage", obtainedPercentage);
// if (obtainedPercentage >= 80 && obtainedPercentage < 90) {
//   console.log("B grade");
// } else if (obtainedPercentage >= 90) {
//   console.log("A grade");
// } else if (obtainedPercentage >= 70) {
//   console.log("C grade");
// } else if (obtainedPercentage >= 60) {
//   console.log("D grade");
// } else {
//   console.log("F grade");
// }

// Practice: 07
// const trafficLight = "green";
// switch (trafficLight) {
//   case "green":
//     console.log("please move");
//     break;
//   case "red":
//     console.log("please stop");
//     break;
//   case "yellow":
//     console.log("get ready");
//     break;
//   default:
//     console.log("not a valid signal");
// }

// Practice: 08
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// Practice: 09
// let total = 0;
// for (let i = 1; i <= 10; i++) {
//   total = total + i;
// }
// console.log(total);

// Practice: 10
// for (let i = 20; i >= 1; i--) {
//   console.log(i);
// }

// Practice: 11
// for (let i = 1; i <= 40; i++) {
//   if (i === 21) {
//     break;
//   }
//   console.log(i);

// Practice: 12
// for (let i = 0; i < 10; i++) { // Example loop iterating 10 times
//         if (i % 5 === 0) {
//           continue;
//         }
//         if (i % 2 === 0) {
//           console.log(i);
//         }
//       }

// Practice: 13
// for (let i = 1; i <= 100; i++) {
//   if (i === 50) {
//     console.log("half way there!");
//     continue;
//   }
//   if (i === 100) {
//     console.log("you made it!");
//     continue;
//   }
//   if (i % 10 === 0) {
//     console.log("checkpoint " + i);
//   }
// }
// console.log("All done");

// const n = 7;

// for (let i = 1; i <= 10; i++) {
//   console.log(n + " * " + i + " = " + n * i);
// }

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// prompt("please input a number");
