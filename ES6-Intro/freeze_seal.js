const user = { name: "Moin", age: 21, country: "BD" };

Object.seal(user); // prevents adding or removing properties, but allows modifying existing properties
user.age = 22; // modifies the age property
user.salary = 20000;

delete user.age; // deletes the age property

console.log(user);


// -------------------------------- //

Object.freeze(user); // prevents all modifications
user.age = 23; // has no effect
user.salary = 20000; // has no effect
delete user.country; // has no effect

console.log(user);