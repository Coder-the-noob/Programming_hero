//copying in array 
const numbers = [1, 2, 3];
const copy = [...numbers];
console.log(copy);


//Merging Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);

// copying an object
const person = { name: "Moin", age: 25 };
const personCopy = { designation: "Engineer", ...person };
console.log(personCopy);