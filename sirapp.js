// let x = 10
// let y = 20

// let z = x
// x = y
// y = z

// let x =[]
// let y = [10]

// console.log(x == y)

// const firstName = 'John'
// const lastName = 14

// const fullName = firstName + ' ' + lastName

// console.log(fullName)
// console.log(+'23')

// console.log('x', x)
// console.log('y', y)

// const products = ['keyboard', 'mouse', 'keyboard', 'speaker', 'printer']

// const splice = products.splice(2, 1, 'scanner')
// // const slice = products.slice(0, 3)

// console.log('splice', splice)
// console.log('products', products)

// let uniqueProducts = []
// for (let i = 0; i < products.length; i++) {
//   if (!uniqueProducts.includes(products[i])) {
//     uniqueProducts.push(products[i])
//   }
// }

// console.log(uniqueProducts)

// const nums = [13, 9, 15, 10, 15, 80]
// let largestNum = 0

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > largestNum) {
//     largestNum = nums[i] //80
// }
// }

// console.log('largestNum', largestNum)
// console.log('sum', sum)

// for (let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i]
// }

// console.log('sum', sum)

// array literals
// const colors = ['red', 'blue', 'green', 'pink']

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i])
// }

// const name = 'John'
// console.log(colors.includes('orange'))

// console.log(Array.isArray(name))

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

// const colorSetOne = ['red', 'blue']
// const colorSetTwo = ['green', 'white']

// const combinedArray = colorSetOne.concat(colorSetTwo)

// console.log(colorSetOne)
// console.log(combinedArray)

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

const person = {
  name: 'Mark',
  age: 32,
  city: 'New York',
}

person['city'] = 'Chicago'

person.grade = 'A'

delete person.age
console.log('person', person)

const library = [
  { title: 'book 1', author: 'john', yearPublished: 2022 },
  { title: 'book 2', author: 'mark', yearPublished: 1999 },
  { title: 'book 3', author: 'Sara', yearPublished: 2015 },
]

library.push({
  title: 'system design',
  author: 'zeeshan usmani',
  yearPublished: 2020,
})

console.log(library)
