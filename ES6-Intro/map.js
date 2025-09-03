const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled);


const users = [
    { name: 'Moin', age: 22 },
    { name: 'Suraiya', age: 20 },
    { name: 'Mathin', age: 20 }
]

const names = users.map(user => user.name);
console.log(names);

//map() loops through an array and it returns a new array with the results of calling a provided function on every element in the calling array.