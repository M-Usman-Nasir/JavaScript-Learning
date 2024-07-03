const addBtn = document.querySelector('#add-todo-button')
const taskInput = document.querySelector('.todo-input')
const taskList = document.querySelector('#todo-list')

addBtn.addEventListener('click', function () {
  const li = document.createElement('li')
  li.textContent = taskInput.value
  taskList.appendChild(li)

  const deleteBtn = document.createElement('button')

  deleteBtn.textContent = 'Delete'
  deleteBtn.classList.add('delete-btn')

  li.appendChild(deleteBtn)

  taskInput.value = ''
  deleteBtn.addEventListener('click', function () {
    console.log(li.textContent)
    taskList.removeChild(li)
  })
})

// const para = document.querySelector('#para')
// const input = document.querySelector('.text')

// input.addEventListener('input', function (e) {
//   console.log(e)
  //   console.log(e.target.value)
    // console.log(input.value)
//   para.textContent = e.target.value
  //   console.log(e)
// })

// let display = document.querySelector('#counter')

// let displayCount = parseInt(display.textContent)
// console.log(typeof displayCount)

// const increment = document.querySelector('.increment')
// const decrement = document.querySelector('.decrement')
// const reset = document.querySelector('.reset')

// let initialCounter = 0

// innerHTML
// textContext
// innerText
// document.createTextNode('')

// increment.addEventListener('click', function () {
//   displayCount = displayCount + 1
//   display.innerHTML = displayCount
// })

// decrement.addEventListener('click', function () {
//   displayCount = displayCount - 1
//   display.innerHTML = displayCount
// })

// reset.addEventListener('click', function () {
//   displayCount = 0
//   display.innerHTML = displayCount
// })

// const btn = document.querySelector('#btn')

// btn.addEventListener('click', function () {
//   console.log('clicked')
// })

// const section = document.querySelector('.main-section')
// const para = document.querySelector('p')

// section.removeChild(para)

// console.log(title)

// const li = document.querySelectorAll('li')

// console.log(li)
// const students = [
//   { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
//   { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
//   { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
//   { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
// ]

// const table = document.getElementById('table')

// const thead = document.createElement('thead')
// const tbody = document.createElement('tbody')

// const tr = document.createElement('tr')

// thead.appendChild(tr)

// const tHeading = Object.keys(students[0])

// console.log(tHeading)

// for (let heading of tHeading) {
//   const th = document.createElement('th')
//   th.textContent = heading[0].toUpperCase() + heading.slice(1)
//   tr.appendChild(th)
// }

// table.appendChild(thead)
// table.appendChild(tbody)

// for (let student of students) {
//   const tr = document.createElement('tr')

//   tbody.appendChild(tr)

//   for (let key in student) {
//     const td = document.createElement('td')
//     td.textContent = student[key]
//     tr.appendChild(td)
//   }
// }

// console.log(table)
// =======
// const addBtn = document.querySelector('#add-todo-button')
// const taskInput = document.querySelector('.todo-input')
// const taskList = document.querySelector('#todo-list')

addBtn.addEventListener('click', function () {
  const li = document.createElement('li')
  li.textContent = taskInput.value
  taskList.appendChild(li)

  const deleteBtn = document.createElement('button')

  deleteBtn.textContent = 'Delete'
  deleteBtn.classList.add('delete-btn')

  li.appendChild(deleteBtn)

  taskInput.value = ''
  deleteBtn.addEventListener('click', function () {
    console.log(li.textContent)
    taskList.removeChild(li)
  })
})

// const para = document.querySelector('#para')
// const input = document.querySelector('.text')

// input.addEventListener('input', function (e) {
//   console.log(e)
  //   console.log(e.target.value)
    // console.log(input.value)
//   para.textContent = e.target.value
  //   console.log(e)
// })

// let display = document.querySelector('#counter')

// let displayCount = parseInt(display.textContent)
// console.log(typeof displayCount)

// const increment = document.querySelector('.increment')
// const decrement = document.querySelector('.decrement')
// const reset = document.querySelector('.reset')

// let initialCounter = 0

// innerHTML
// textContext
// innerText
// document.createTextNode('')

// increment.addEventListener('click', function () {
//   displayCount = displayCount + 1
//   display.innerHTML = displayCount
// })

// decrement.addEventListener('click', function () {
//   displayCount = displayCount - 1
//   display.innerHTML = displayCount
// })

// reset.addEventListener('click', function () {
//   displayCount = 0
//   display.innerHTML = displayCount
// })

// const btn = document.querySelector('#btn')

// btn.addEventListener('click', function () {
//   console.log('clicked')
// })

// const section = document.querySelector('.main-section')
// const para = document.querySelector('p')

// section.removeChild(para)

// console.log(title)

// const li = document.querySelectorAll('li')

// console.log(li)
// const students = [
//   { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
//   { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
//   { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
//   { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
// ]

// const table = document.getElementById('table')

// const thead = document.createElement('thead')
// const tbody = document.createElement('tbody')

// const tr = document.createElement('tr')

// thead.appendChild(tr)

// const tHeading = Object.keys(students[0])

// console.log(tHeading)

// for (let heading of tHeading) {
//   const th = document.createElement('th')
//   th.textContent = heading[0].toUpperCase() + heading.slice(1)
//   tr.appendChild(th)
// }

// table.appendChild(thead)
// table.appendChild(tbody)

// for (let student of students) {
//   const tr = document.createElement('tr')

//   tbody.appendChild(tr)

//   for (let key in student) {
//     const td = document.createElement('td')
//     td.textContent = student[key]
//     tr.appendChild(td)
//   }
// }

// console.log(table)

// 

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
