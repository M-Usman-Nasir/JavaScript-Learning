// const welcome = 'I\'am learning Javascript'

// console.log(welcome)

const firstName = "Abdul"
const lastName = "Basit"

// const fullName = firstName + " " + lastName

// template literals
// backtick

const fullName = `${firstName} ${lastName}`

// console.log(fullName)

const product = {
    name: 'keyboard',
    price: 1500
}

// console.log(`${product.name} price is ${product.price}`)

// const msg = "Hello world"

// console.log(msg.toUpperCase())
// console.log(msg.length)
// console.log(msg.lastIndexOf('o'))

// const toArray = msg.split(' ')

// const slicedArray = msg.slice(-3)

// const email = "   johndoe@email.com    "

// const trimMsg = email.trim()


// console.log(msg.endsWith("ld"))

// const msg = "We are learning Javascript"

// const result = msg.split("").reverse().join("")

// console.log(result)

const email = "abdulbasit@email.com"

// const result = "j*****e@gmail.com"

const splitEmail = email.split("@")

// console.log(splitEmail)

// const userName = splitEmail[0]

// console.log(userName)

// const result = userName[0] + "*".repeat(userName.length - 2)  + userName[userName.length-1] + '@'+ splitEmail[1]

// console.log(result)

// 2D array
                    //* 
const arr = [[1,2],[3,4], [5,3]]

// console.log(arr[1][1])

const colors = ['red', 'green', 'blue', 'white']


// for (let i=0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// for (let color of colors) {
//     console.log(color)
// }

const numbers = [1,2,3,4]

// let result = 1

// for (let num of numbers) {
//     result = result * num
// }

// console.log(result)

const student = {
    name: 'Ali',
    email: 'ali@email.com',
    phone: 123456
}

// for (let key in student) {
//     console.log(student[key])
// }
// 

// var name = "ali"
// funtion declartion

// greet()

function greet(name) {
 console.log(`Hello ${name}`)   
}

// calling function
// argument
// greet('Fahad')
// greet('Fahad')
// const result = greet()

// console.log(result)

// function expression
// const add  = function (a,b) {
//     const result = a + b

//     // console.log(result)
//     return result
// }

// const result = add(4, 5)

// console.log(result + 5)

const str = "I am basit".toLowerCase()
const str2 = "How are you?".toLowerCase()

const vowels = ['a','e','i', 'o', 'u']

function countVowels(str) {
    let count = 0
    for (let char of str) {
        if (vowels.includes(char))
            count ++
    }
    // console.log(count)
    return count
}

countVowels(str)
// const totalVowels2 = countVowels(str2)

// console.log(totalVowels)
// console.log(totalVowels2)


function truncateString(str, maxLength) {
    return str.slice(0, maxLength) + "..."
}

const result = truncateString(str, 5)
console.log(result)