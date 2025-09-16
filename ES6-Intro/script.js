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

//JSON.parse() - parses a JSON string, constructing the JavaScript value or object described by the string
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);