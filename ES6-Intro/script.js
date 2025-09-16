console.log("Hello, World!");

const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    NationalId: 123456789 // private
};

console.log(person.name);


//JSON.stringify() - converts a JavaScript object or value to a JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString);