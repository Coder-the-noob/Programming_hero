const user = { name: "Moin", age: 21, country: "BD" };

console.log(Object.keys(user));
// ["name", "age", "country"]
console.log(Object.values(user));
// ["Moin", 21, "BD"]
console.log(Object.entries(user));
// [["name", "Moin"], ["age", 21], ["country", "BD"]]
// Returns an array of key-value pairs (as small arrays).