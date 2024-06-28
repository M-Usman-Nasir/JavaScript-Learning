// _____________ Asynchronous Code with Callback _______________
function firstTask() {
  console.log('one')
}

function secondTask(callback) {
  setTimeout(() => {
    console.log('two')
    callback()
  }, 2000)
}

function thirdTask() {
  console.log('three')
}

// firstTask()
// secondTask(() => {
//   thirdTask()
// })
// thirdTask()

let data

function fetchData(callback) {
  setTimeout(() => {
    data = {
      name: 'John',
      age: 30,
    }
    callback(data)
  }, 2000)
}

// console.log(data)

// fetchData((data) => {
//   console.log(data)
// })

// console.log('Data is being fetched')

function getThings(callback) {
  setTimeout(() => {
    const step = 'step 1'
    const message = 'here are your ingredients'
    console.log(step + ' ' + message)
    callback(message)
  }, 3000)
}

function makeTea(callback) {
  setTimeout(() => {
    const step = 'step 2'
    const message = 'Start making tea'
    console.log(step + ' ' + message)
    callback(message)
  }, 2000)
}

function serveTea(callback) {
  setTimeout(() => {
    const step = 'step 3'
    const message = 'here is your tea'
    console.log(step + ' ' + message)
    callback(message)
  }, 1000)
}

// _____________ Callback Hell _______________
// getThings(() => {
//   makeTea(() => {
//     serveTea((message) => {
//       console.log(message)
//     })
//   })
// })
// makeTea()
// serveTea()

// _____________ Creating a Promise _______________
const promise = new Promise((resolve, reject) => {
  const isSuccessful = true

  if (isSuccessful) {
    resolve('promise is fulfilled')
  } else {
    reject('promise is failed')
  }
})

// console.log(promise)

// promise
//   .then((message) => {
//     console.log(message)
//   })
//   .catch((e) => {
//     console.log(e)
//   })
//   .finally(() => {
//     console.log('this is finally method')
//   })

function getThings() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const step = 'step 1'
      const message = 'here are your ingredients'
      resolve(step + ' ' + message)
    }, 3000)
  })
}

function makeTea() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const step = 'step 2'
      const message = 'Start making tea'
      reject(step + ' ' + message)
    }, 2000)
  })
}

function serveTea() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const step = 'step 3'
      const message = 'here is your tea'
      resolve(step + ' ' + message)
    }, 1000)
  })
}

// _____________ Using Promise _______________
// getThings()
//   .then((message) => {
//     console.log(message)
//     return makeTea()
//   })
//   .then((message) => {
//     console.log(message)
//     return serveTea()
//   })
//   .then((message) => {
//     console.log(message)
//   })
//   .catch((error) => {
//     console.log('error is ', error)
//   })

// _____________ Asynchronous Code Async Await _______________
async function fetchData() {
  try {
    const things = await getThings()
    console.log(things)

    const makingTea = await makeTea()
    console.log(makingTea)

    const serving = await serveTea()
    console.log(serving)
  } catch (error) {
    console.log('error', error)
  }
}

// fetchData()
// _____________ Fetch data from API with .then() method _______________
const url = 'https://jsonplaceholder.typicode.com/posts'

function fetchData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        console.log(item)
      })
    })
    .catch((error) => console.log(error))
}

const result = fetchData()

console.log('then result', result)

// fetchData()
const container = document.querySelector('.container')

// _____________ Fetch data from API with Async Await _______________
async function fetchApiData() {
  try {
    const response = await fetch(url)
    const data = await response.json()

    data.slice(0, 10).forEach((item, index) => {
      const { title, body } = item
      const div = document.createElement('div')
      div.setAttribute('class', 'card')

      div.innerHTML = `
      <span>${index + 1}</span>
         <h1>${title}</h1>
         <p>${body}</p>
      `
      container.appendChild(div)
    })

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

fetchApiData()

// console.log(apiData)

// console.log(getThings())

// _____________ Quiz Api _______________
fetch('https://opentdb.com/api.php?amount=10')
  .then((res) => res.json())
  .then((data) => console.log(data))
