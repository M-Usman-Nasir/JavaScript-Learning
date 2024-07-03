const number = 10;
// console.log(typeof number);

const numToString = number.toString();

const result = 160.66;
const fixedValue = result.toFixed(2);
// console.log(fixedValue);

const preciseValue = result.toPrecision(6);
// console.log(preciseValue);

const round = Math.round(result);
// console.log(round);

const checkNum = isNaN("result");
// console.log(checkNum);

const price = 10000000;
const formatNum = price.toLocaleString("en-IN");
// console.log(formatNum);

function reverseInt(num) {
  const result = num.toString().split("").reverse().join("");
  //   console.log(result);
  return parseInt(result);
}

const result1 = reverseInt(-61);
// console.log(result1);

const revenue = -31;
const absRevenue = Math.abs(revenue);
// console.log(absRevenue);

const num1 = 64.19;
const floorNum = Math.floor(num1);
const ceilNum = Math.ceil(num1);
// console.log(floorNum);
// console.log(ceilNum);

// const random = Math.floor(Math.random() * 10) + 1;
// console.log(random);

// function getRandomInt(min, max) {
//   const result = Math.floor(Math.random() * (max - min + 1));

//   const result2 = result + min;

//   return result2;
// }

// const randomInt = getRandomInt(11, 14);

// console.log(randomInt);

const colors = ["red", "green", "blue", "white"];
const randomArr = Math.floor(Math.random() * colors.length);

// console.log(colors[randomArr]);

const person = {
  name: "Ali",
  email: "ali@email.com",
};

const hasName = person.hasOwnProperty("names");

// console.log(hasName);

const personKeys = Object.keys(person);
const personValues = Object.values(person);

const personEntries = Object.entries(person);

// console.log(personKeys);
// console.log(personValues);
// console.log(personEntries);

// Frequency Counter Pattern

// const frequency = {};

// for (let product of products) {
//   if (!frequency[product]) {
//     frequency[product] = 1;
//   } else {
//     frequency[product] = frequency[product] + 1;
//   }
// }

// console.log(frequency);

const products = [
  "mouse",
  "keyboard",
  "mouse",
  "headphone",
  "speaker",
  "speaker",
  "mouse",
];

function removeDuplicate(arr) {
  const frequency = {};

  for (let item of arr) {
    if (!frequency[item]) {
      frequency[item] = 1;
    } else {
      frequency[item] = frequency[item] + 1;
    }
  }

  return Object.keys(frequency);
}

const result3 = removeDuplicate(products);
// console.log(result3);

function validAnagram(str1, str2) {
  const frequency = {};

  for (let char of str1) {
    if (!frequency[char]) {
      frequency[char] = 1;
    } else {
      frequency[char] = frequency[char] + 1;
    }
  }

  //   console.log(frequency);

  for (let item of str2) {
    if (!frequency[item]) {
      return false;
    } else {
      frequency[item] = frequency[item] - 1;
    }
  }

  return true;
}

// const result4 = validAnagram("aaz", "zza");
// console.log(result4);
// const map = {
//   G: "A",
//   A: "G",
//   g: "a",
//   a: "g",
//   D: "E",
//   E: "D",
//   d: "e",
//   e: "d",
// };
const key = "GA-DE-RY-PO-LU-KI";
// const key = "GA-DE";

function createMap(key) {
  const splitKeys = key.split("-");
  //   console.log(splitKeys);
  const map = {};
  for (let item of splitKeys) {
    map[item[0]] = item[1];
    map[item[1]] = item[0];
    map[item[0].toLowerCase()] = item[1].toLowerCase();
    map[item[1].toLowerCase()] = item[0].toLowerCase();
  }
  //   console.log(map);
  return map;
}

// const result5 = console.log(createMap(key));

function decodeCipher(str) {
  let decodedStr = "";
  const keys = createMap("GA-DE-RY-PO-LU-KI");
  for (let char of str) {
    if (keys[char]) {
      decodedStr = decodedStr + keys[char];
    } else {
      decodedStr = decodedStr + char;
    }
  }
  return decodedStr;
}

const decode = decodeCipher("Ala has a cat");
// console.log(decode);

function chunkyMonkey(arr, size) {
  const result = [];
  let chunk = [];

  for (let i = 0; i < arr.length; i += size) {
    const sliceArr = arr.slice(i, i + size);

    result.push(sliceArr);
  }
  return result;

  //   for (let item of arr) {
  //     chunk.push(item);
  //     if (chunk.length === size) {
  //       result.push(chunk);
  //         chunk = [];
  //     }
  //   }
  //   console.log(result);
}

[
  ["a", "b"],
  ["c", "d"],
];
const result10 = chunkyMonkey(["a", "b", "c", "d"], 2);

// console.log(result10);

function createCounter(init) {
  let counter = init || 0;

  function increment() {
    counter++;
    return counter;
  }

  function decrement() {
    return --counter;
  }
  function reset() {
    let result = init;
    return result;
  }

  return {
    increment,
    decrement,
    reset,
  };
}

const makeCounter = createCounter(10);
const increment = makeCounter.increment();
const decrement = makeCounter.decrement();
const reset = makeCounter.reset();

// console.log("increment", increment);
// console.log("decrement", decrement);
// =======
// const number = 10;
// console.log(typeof number);

// const numToString = number.toString();

// const result = 160.66;
// const fixedValue = result.toFixed(2);
// console.log(fixedValue);

// const preciseValue = result.toPrecision(6);
// console.log(preciseValue);

// const round = Math.round(result);
// console.log(round);

// const checkNum = isNaN("result");
// console.log(checkNum);

// const price = 10000000;
// const formatNum = price.toLocaleString("en-IN");
// console.log(formatNum);

function reverseInt(num) {
  const result = num.toString().split("").reverse().join("");
  //   console.log(result);
  return parseInt(result);
}

// const result1 = reverseInt(-61);
// console.log(result1);

// const revenue = -31;
// const absRevenue = Math.abs(revenue);
// console.log(absRevenue);

// const num1 = 64.19;
// const floorNum = Math.floor(num1);
// const ceilNum = Math.ceil(num1);
// console.log(floorNum);
// console.log(ceilNum);

// const random = Math.floor(Math.random() * 10) + 1;
// console.log(random);

// function getRandomInt(min, max) {
//   const result = Math.floor(Math.random() * (max - min + 1));

//   const result2 = result + min;

//   return result2;
// }

// const randomInt = getRandomInt(11, 14);

// console.log(randomInt);

// const colors = ["red", "green", "blue", "white"];
// const randomArr = Math.floor(Math.random() * colors.length);

// console.log(colors[randomArr]);

// const person = {
//   name: "Ali",
//   email: "ali@email.com",
// };

// const hasName = person.hasOwnProperty("names");

// console.log(hasName);

// const personKeys = Object.keys(person);
// const personValues = Object.values(person);

// const personEntries = Object.entries(person);

// console.log(personKeys);
// console.log(personValues);
// console.log(personEntries);

// Frequency Counter Pattern

// const frequency = {};

// for (let product of products) {
//   if (!frequency[product]) {
//     frequency[product] = 1;
//   } else {
//     frequency[product] = frequency[product] + 1;
//   }
// }

// console.log(frequency);

// const products = [
//   "mouse",
//   "keyboard",
//   "mouse",
//   "headphone",
//   "speaker",
//   "speaker",
//   "mouse",
// ];

// function removeDuplicate(arr) {
//   const frequency = {};

//   for (let item of arr) {
//     if (!frequency[item]) {
//       frequency[item] = 1;
//     } else {
//       frequency[item] = frequency[item] + 1;
//     }
//   }

//   return Object.keys(frequency);
// }

// const result3 = removeDuplicate(products);
// console.log(result3);

// function validAnagram(str1, str2) {
//   const frequency = {};

//   for (let char of str1) {
//     if (!frequency[char]) {
//       frequency[char] = 1;
//     } else {
//       frequency[char] = frequency[char] + 1;
//     }
//   }

  //   console.log(frequency);

//   for (let item of str2) {
//     if (!frequency[item]) {
//       return false;
//     } else {
//       frequency[item] = frequency[item] - 1;
//     }
//   }

//   return true;
// }

// const result4 = validAnagram("aaz", "zza");
// console.log(result4);
// const map = {
//   G: "A",
//   A: "G",
//   g: "a",
//   a: "g",
//   D: "E",
//   E: "D",
//   d: "e",
//   e: "d",
// };
// const key = "GA-DE-RY-PO-LU-KI";
// const key = "GA-DE";

// function createMap(key) {
//   const splitKeys = key.split("-");
//   //   console.log(splitKeys);
//   const map = {};
//   for (let item of splitKeys) {
//     map[item[0]] = item[1];
//     map[item[1]] = item[0];
//     map[item[0].toLowerCase()] = item[1].toLowerCase();
//     map[item[1].toLowerCase()] = item[0].toLowerCase();
//   }
  //   console.log(map);
//   return map;
// }

// const result5 = console.log(createMap(key));

// function decodeCipher(str) {
//   let decodedStr = "";
//   const keys = createMap("GA-DE-RY-PO-LU-KI");
//   for (let char of str) {
//     if (keys[char]) {
//       decodedStr = decodedStr + keys[char];
//     } else {
//       decodedStr = decodedStr + char;
//     }
//   }
//   return decodedStr;
// }

// const decode = decodeCipher("Ala has a cat");
// console.log(decode);

// function chunkyMonkey(arr, size) {
//   const result = [];
//   let chunk = [];

//   for (let i = 0; i < arr.length; i += size) {
//     const sliceArr = arr.slice(i, i + size);

//     result.push(sliceArr);
//   }
//   return result;

  //   for (let item of arr) {
  //     chunk.push(item);
  //     if (chunk.length === size) {
  //       result.push(chunk);
  //         chunk = [];
  //     }
  //   }
  //   console.log(result);
// }

// [
//   ["a", "b"],
//   ["c", "d"],
// ];
// const result10 = chunkyMonkey(["a", "b", "c", "d"], 2);

// console.log(result10);

// function createCounter(init) {
//   let counter = init || 0;

//   function increment() {
//     counter++;
//     return counter;
//   }

//   function decrement() {
//     return --counter;
//   }
//   function reset() {
//     let result = init;
//     return result;
//   }

//   return {
//     increment,
//     decrement,
//     reset,
//   };
// }

// const makeCounter = createCounter(10);
// const increment = makeCounter.increment();
// const decrement = makeCounter.decrement();
// const reset = makeCounter.reset();

// console.log("increment", increment);
// console.log("decrement", decrement);
// >>>>>>> c9d2994104ca8a7c0dbe6c3a84ce16e5579c008a
// console.log("reset", reset);