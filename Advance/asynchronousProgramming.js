// Example: 01

function fetchData (url) {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error("Failed to fetch data"));
      }
    };
    xhr.onerror = reject;
    xhr.send();
  });
}
fetchData("https://api.example.com/data")
  .then(data => console.log(data))
  .catch(error => console.error(error));
