const computer = {
    brand: "Dell",
    model: "XPS 13",
    year: 2020,
    specifications: {
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD"
    },
    isGamingRig: false
}

const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);

const profileKeys = Object.keys(computer);
const hasName = profileKeys.includes('name');
console.log(hasName); 

// Check if a key exists in the object

if('brand' in computer){
    console.log("Brand key exists in the computer object.");
} else {
    console.log("Brand key does not exist in the computer object.");
}


if(computer.hasOwnProperty('email')){
    console.log("Email niye boroloki dalhay");
}else{
    console.log("Email chara jibon");
}