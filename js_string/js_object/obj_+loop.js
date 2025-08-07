const profile = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    hobbies: ["Reading", "Traveling", "Cooking"]                                      
};

for(const prop in profile){
    console.log(prop);
    console.log(profile[prop]);
}

const keys = Object.keys(profile);
console.log(keys);

for(const key of keys){
    console.log(key);
    console.log(key, ":", profile[key]);
}