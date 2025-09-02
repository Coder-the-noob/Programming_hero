// Destructuring means unpacking values from arrays or objects into variables in a clean, shorter way.

const {name , age } = {name: "Moin", age: 23};

console.log(name); // Moin
console.log(age); // 23

const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;

// console.log(firstColor); // red
// console.log(secondColor); // green


// for arrays inside arrays
const [primary, [secondary, teritary]] = ['red', ['green', 'blue']];

console.log(primary); // red
console.log(secondary); // green
console.log(teritary); // blue
