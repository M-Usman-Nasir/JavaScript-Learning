// Example: 01

function createCounter (initialValue) {
  let count = initialValue;
  return function() {
    count++;
    return count;
  }
}
const counter1 = createCounter (0);
console.log (counter1()); 		    // Output: 1
console.log (counter1()); 		    // Output: 2

const counter2 = createCounter(10);
console.log(counter2());            // Output: 11

// Example: 02
