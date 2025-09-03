const users = [
    { name: 'Moin', age: 22 },
    { name: 'Suraiya', age: 20 },
    { name: 'Mathin', age: 21 }
];

users.forEach(user => console.log(user.name));

const adults = users.filter(user => user.age >= 21);
console.log(adults);

const firstAdult = users.find(user => user.age >= 21);
console.log(firstAdult);



// Memory Trick:

// forEach = loop only

// filter = many results (array)

// find = one result (first match)