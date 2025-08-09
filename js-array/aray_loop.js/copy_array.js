const products = [25, 25, 25];
const comp_products = [];

for(const product of products){
    comp_products.push(product);
}


comp_products[0] =15;
products[1] = 55;

// console.log(products);
// console.log(comp_products);

const numbers = [1, 2, 3, 4, 5];

// const new_numbers = Array.from(numbers);
// const new_numbers = [...numbers];
const new_numbers = [].concat(numbers);

new_numbers.push(6);

console.log(numbers);
console.log(new_numbers);

//array reference dhore rakhe so array copy korar jonno porper method use korte hobe