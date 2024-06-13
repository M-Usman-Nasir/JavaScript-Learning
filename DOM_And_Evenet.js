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
//   //   console.log(e.target.value)
//     // console.log(input.value)
//   para.textContent = e.target.value
//   //   console.log(e)
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
