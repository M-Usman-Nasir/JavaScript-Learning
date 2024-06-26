// ____________ "this" keyword in object ____________
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function () {
//     return this.firstName + this.lastName
//   },
// }

// ____________ function declaration ____________
// function add(a, b) {
//   return a + b
// }

// const result = add(20, 10)
// console.log(result)

// ____________ arrow function ____________
// const add = (a, b) => {
//   return a + b
// }

// const result = add(20, 10)
// console.log(result)

// const greet = (name) => {
//   return 'Hello, ' + name + '!'
// }

// const square = (x) => x * x

// const calculateRectangleArea = (length, width) => {
//   const area = length * width
//   return area
// }

// ____________ callback functions____________
// function greet(name, callback) {
//   console.log(name)
//   callback()
// }

// function sayHi() {
//   console.log('hi')
// }

// greet('Fahad', sayHi)

// const arr = [1, 2, 3, 4]

// function calculate(a, b, callback) {
//   return callback(a, b)
// }

// const sub = (a, b) => a - b

// const result = calculate(20, 10, (a, b) => a * b)
// const result1 = calculate(20, 10, sub)

// console.log(result)

// arr.forEach((item,index)=>{

// })

// const arr = [2, 10, 20, 25]

// let result = []
// for (let num of arr) {
//   result.push(num * 2)
// }

// console.log(result)

// ____________ higher order functions ____________
// ____________ map method ____________

// const result = arr.map((item) => item * 2)

// console.log(result)

// const students = [
//   { firstName: 'Alice', lastName: 'Smith' },
//   { firstName: 'Bob', lastName: 'Johnson' },
//   { firstName: 'Charlie', lastName: 'Williams' },
// ]

// const result = students.map(
//   (student) => `${student.firstName} ${student.lastName}`
// )

// console.log(result)
// ____________ filter method ____________
// const arr = [15, 16, 20, 4, 6, 10]

// const result = arr.filter((item, index) => item % 2 === 0)

// console.log(result)

// const arr = [5, 12, 13, 3, 7]

// const result = arr.filter((item) => item > 10)

// console.log(result)

// ____________ map and filter combine | chaining ____________
// const students = [
//   { name: 'Alice', score: 52 },
//   { name: 'Bob', score: 67 },
//   { name: 'Charlie', score: 80 },
//   { name: 'David', score: 45 },
// ]

// const result = students
//   .filter((item) => item.score >= 60)
//   .map((item) => item.name.toUpperCase())

// console.log(result)

// ____________ Destructuring ____________
// ____________ Object Destructuring ____________
// const person = {
//   name: 'Smith',
//   email: 'smith@gmail.com',
//   designation: 'Software Engineer',
// }

// const name = person.name
// const email = person.email
// const designation = person.designation

// const { name: firstName, email, designation = 'Marketer' } = person

// const result = `${firstName} is a ${designation} and his email is ${email}`

// console.log(result)

// ____________ array destructuing ____________
// const nums = [10, 20, 30]

// const [x, y, z] = nums

// console.log('x', x)
// console.log('y', y)
// console.log('z', z)

// const car = {
//   make: 'Toyota',
//   model: 'Camry',
// }

// const { make, model } = car

// const data = ['Alice', 30, 'New York']

// const [name, age, city] = data