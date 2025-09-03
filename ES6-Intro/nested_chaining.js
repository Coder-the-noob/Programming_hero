// nested objects
const myBio = {
    id: 1,
    name: 'Moin',
    profile: {
        age: 21,
        'height-inch': '5 ft 7 inch',
        address:{
            street: '123 Main St',
            city: 'Dhaka',
            zip: '1212'
        }

    }
}

console.log(myBio.profile.age);
console.log(myBio.profile.address.city);


console.log(myBio.profile.address.country);

// Optional chaining: If a property doesn’t exist, accessing it throws an error.
console.log(myBio.profile?.contact?.phone);
