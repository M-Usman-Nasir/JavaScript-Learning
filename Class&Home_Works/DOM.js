// <<<<<<< HEAD
// const title = document.getElementById("title");
// const section = document.getElementById("header");

// const h2 = document.createElement("h2");

// h2.textContent = "We are learning Javascript";

// document.createTextNode("we are learning javascript")

// console.log(h2);

// section.appendChild(h2);

// console.log(section);

// title.style.fontSize = "100px";
// title.style.backgroundColor = "#ccc";

// const titleArr = title.getAttribute("class");
// const setTitleArr = title.setAttribute("class", "main-title heading");
// const removeTitleArr = title.removeAttribute();

// console.log(removeTitleArr);

// title.innerText = "<p>Welecome BWT</p>";

// forEach loop - higher order function

const colors = ["red", "green", "blue", "orange"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// for (let color of colors) {
//   console.log(color);
// }

// function arrItem(item, index, arr) {
//     console.log(index, item);
//   }

// const arr = []

// colors.forEach(function (elem, i, arr) {
//   console.log(index, item);
//   arr.push(elem);
// });

const now = new Date();
// const now = new Date(1000);

// console.log(now);
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// setTimeout

// setTimeout(function () {
//   console.log("Hello World");
// }, 4000);

// setInterval

let count = 10;

const interval = setInterval(function () {
  if (count === 15) {
    clearInterval(interval);
  } else {
    console.log((count += 1));
    // count++;
  }
}, 1000);
// =======
// const title = document.getElementById("title");
// const section = document.getElementById("header");

// const h2 = document.createElement("h2");

// h2.textContent = "We are learning Javascript";

// document.createTextNode("we are learning javascript")

// console.log(h2);

// section.appendChild(h2);

// console.log(section);

// title.style.fontSize = "100px";
// title.style.backgroundColor = "#ccc";

// const titleArr = title.getAttribute("class");
// const setTitleArr = title.setAttribute("class", "main-title heading");
// const removeTitleArr = title.removeAttribute();

// console.log(removeTitleArr);

// title.innerText = "<p>Welecome BWT</p>";

// forEach loop - higher order function

// const colors = ["red", "green", "blue", "orange"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// for (let color of colors) {
//   console.log(color);
// }

// function arrItem(item, index, arr) {
//     console.log(index, item);
//   }

// const arr = []

// colors.forEach(function (elem, i, arr) {
//   console.log(index, item);
//   arr.push(elem);
// });

// const now = new Date();
// const now = new Date(1000);

// console.log(now);
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// setTimeout

// setTimeout(function () {
//   console.log("Hello World");
// }, 4000);

// setInterval

// let count = 10;

// const interval = setInterval(function () {
  if (count === 15) {
    clearInterval(interval);
  } else {
    console.log((count += 1));
    // count++;
  }
// }, 1000);
// >>>>>>> c9d2994104ca8a7c0dbe6c3a84ce16e5579c008a
