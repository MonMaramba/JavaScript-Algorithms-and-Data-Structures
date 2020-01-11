// Class is a blueprint for creating objects with pre-defined properties and methods
// Class name should be PascalCased
// the class keyword creates a constant so it cannot be redefined
// The constructor method creates new objects.
// this keyword refers to individual instance of the class.

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0; //adding a property that is by default 0
    this.scores = [];
  }
  // INSTANCE METHODS provide functionality to that particular instance of a class
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  // CLASS METHOD
  // according to mdn docs - The static keyword defines a static method for a class.
  // Static methods are called without instantiating their class and cannot be called through a class instance.
  // Static methods are often used to create utility functions for an application.
  static EnrollStudents() {
    return "ENROLLING STUDENTS";
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies > 3) {
      console.log("You have been expelled!");
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }
  addScore(score) {
    this.scores.push(score);
    return console.log(this.scores);
  }
  calculateAverage() {
    let totals = this.scores.reduce((a, b) => {
      return a + b;
    });
    return totals / this.scores.length;
  }
}

// To call the static method
console.log(`${Student.EnrollStudents()}`);

// The new keyword creates an instance/object of the class. The new keyword calls on the constructor method to create the object
let firstStudent = new Student("Ramon", "Maramba");
let secondStudent = new Student("Michaela", "Perez");

// Updating a property
secondStudent.grade = 4;
firstStudent.markLate();
console.log(secondStudent);

// Calling the instance method
console.log(firstStudent.fullName());
console.log(firstStudent.markLate());

// Calling a method with a parameter
secondStudent.addScore(75);
secondStudent.addScore(92);

console.log(`${secondStudent.calculateAverage()}`);

// CLASS METHODS
// static keyword in front of method definition is only pertinent to the class and not necessarily to the instance created by the class.

// RECAP
// Classes are blueprints that when created make objects known as instances
// Classes are created with the "new" keyword
// The "constructor" function is a special function that gets run when the class is instantiated
// Instance methods can be added to classes similar to methods in objects
// Class methods can be added using the "static" keyword
