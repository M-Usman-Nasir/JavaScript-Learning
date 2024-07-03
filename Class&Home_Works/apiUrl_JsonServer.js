// ___________ API URL | JSON Server url ___________
const url = 'http://localhost:4000/students'

const tbody = document.querySelector('tbody')

const nameInput = document.querySelector('#name-input')
const majorInput = document.querySelector('#major-input')

const submitBtn = document.querySelector('.submit-btn')

// ___________ displaying data with GET Request  ___________
async function displayStudents() {
  const response = await fetch(url)

  const data = await response.json()

  console.log(data)

  data.forEach((item) => {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.major}</td>
    `

    tbody.appendChild(tr)
  })
}

// ___________ POST Request  ___________
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const nameValue = nameInput.value
  const majorValue = majorInput.value

  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: nameValue,
      major: majorValue,
    }),
    'Content-Type': 'application/json',
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
})

displayStudents()
