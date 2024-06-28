// Example: 01
// Using Promises

// function fetchData (url) {
//   return new Promise ((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject(new Error("Failed to fetch data"));
//       }
//     };
//     xhr.onerror = reject;
//     xhr.send();
//   });
// }
// fetchData("https://api.example.com/data")
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// Example: 02
// Fetch API (Network Request):

// fetch('https://api.example.com/data')
//   .then(response => response.json()) // Process the JSON response
//   .then(data => {
//     console.log('Data fetched:', data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// console.log('Fetching data...'); // Continues execution without waiting

// Example: 03
// setTimeout (Timer):

// console.log('Start');
// setTimeout(() => {
//   console.log('After 2 seconds');
// }, 2000);

// console.log('End (script continues)');