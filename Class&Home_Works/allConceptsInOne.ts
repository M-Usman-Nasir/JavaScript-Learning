// Typescript
// ___________ primitive data types ___________
let studentName: number | string = 'John'
let num: number = 45
let isLogin: boolean = false

// studentName = 23

// function sayName(name:any) {
//     return name
// }

// ___________ Arrays ___________
type Colors = string[]

const colors: Colors = ['red', 'green', 'blue']

const colors1: (string | number)[] = ['red', 'green', 41]

colors1[3] = 54

// ___________ tuples ___________
let employee: [string, number] = ['Alice', 40]

// employee[1]

// ___________ interface | object types ___________
// interface Person {
//   name: string
//   designation: string
//   age?: number
// }

type A = { name: string }
type B = { designation: string }

type Person = A & B

const person: Person = {
  name: 'Ali',
  designation: 'Plumber',
}

// ___________ function types ___________
// function add(a: number, b: number): number {
//   return a + b
// }

// add(4, 10)

// const subtract = (a: number, b: number): number => {
//   return a - b
// }

interface Subtract {
  (a: number, b: number): number
}

const subtract: Subtract = (a, b) => {
  return a - b
}

// ___________ ts exercise solution ___________
function processData(input: string | number[]): string | number {
  if (typeof input === 'string') {
    return input.toLowerCase()
  } else {
    let sum = 0
    for (let num of input) {
      sum += num
    }
    return sum
  }
}
