const age = 50;
const price = 500;

if(age > 60 && price > 300) {
    console.log("You are eligible for a senior citizen discount.");
    console.log("Discounted Price: " + (price * 0.9)); // 10% discount
}

else if(age >= 60 || price <= 300) {
    console.log("You are eligible for a senior citizen discount.");
    console.log("Discounted Price: " + (price * 0.95)); // 5% discount
} 

else if(age >= 50){
    const discount = price * 50 / 100;
    const discountedPrice = price - discount;
    console.log("You are eligible for a senior citizen discount.");
    console.log("Discounted Price: " + discountedPrice);
}
else {
    console.log("No senior citizen discount available.");
}