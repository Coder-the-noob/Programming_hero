const person ={
    name: "Moin",
    age: 23,
    profession: "Software Engineer",
    skills: ["JavaScript", "Python", "React"],
    married: false,
    'fav places': ["Cox's Bazar", "Sundarbans", "Srimangal"],
    hobbies: ["Reading", "Traveling", "Gaming"],
    address: {
        street: "123 Main St",
        city: "Dhaka",
        country: "Bangladesh"
    }
}

console.log(person);
console.log(person.name); // dot notation
console.log(person['fav places']);  //bracket notation for spaces in key
console.log(person['married']); //bracket notation for boolean value