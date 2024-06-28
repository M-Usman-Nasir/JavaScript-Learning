// Example: 01

function Person (name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
}
const person1 = new Person ("Usman");
person1.greet(); 			    // Output: Hello, my name is Usman
function Student (name, major) {
  Person.call (this, name);
  this.major = major;
}
Student.prototype = Object.create (Person.prototype);
Student.prototype.constructor = Student;
const student1 = new Student ("Zaki", "Computer Science");
student1.greet (); 		        // Output: Hello, my name is Zaki
console.log (student1.major);   // Output: Computer Science