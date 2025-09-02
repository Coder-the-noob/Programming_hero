// es6 ------> Ecma Script 6

// default parameter

function add(a, b = 0) {
  return a + b;
}
add(5);       // 5
add(5, 10);   // 15

function greet(name = "Guest") {
  return "Hello, " + name;
}
greet();        // Hello, Guest
greet("Moin");  // Hello, Moin


// Expression and functions
function multiply(a, b = a) {
  return a * b;
}
multiply(5);    // 25
multiply(5, 3); // 15

function randomNumber() {
  return Math.floor(Math.random() * 10);
}
function rollDice(sides = randomNumber()) {
  return sides;
}
rollDice();   // random (0–9)
rollDice(6);  // 6


// Arrays
function sumArray(numbers = []) {
  return numbers.reduce((total, num) => total + num, 0);
}
sumArray([1, 2, 3]); // 6
sumArray();          // 0


// objects 
function showUser(user = {}) {
  console.log(user.name || "Unknown", user.age || "N/A");
}
showUser({ name: "Moin", age: 22 }); // Moin 22
showUser();                          // Unknown N/A


// destructing with defaults
function createUser({ name = "Guest", age = 0 } = {}) {
  console.log("Name:", name, "| Age:", age);
}
createUser({ name: "Moin", age: 22 }); // Name: Moin | Age: 22
createUser({ name: "Sara" });          // Name: Sara | Age: 0
createUser();                          // Name: Guest | Age: 0


/**
 * ⚡ Rule of Thumb:
 * Use default parameters whenever you want a safe fallback to avoid undefined errors and make your function more flexible.
 */