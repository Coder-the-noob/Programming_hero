// Parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
  }
}

// Child class
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // call parent constructor
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying. ID: ${this.studentId}`);
  }
}

const student1 = new Student("Moin", 23, "CSE123");
student1.greet();  // Hi, I am Moin, 23 years old.
student1.study();  // Moin is studying. ID: CSE123
const student2 = new Student("Suraiya", 20, "LLB123");
student2.greet();
student2.study();