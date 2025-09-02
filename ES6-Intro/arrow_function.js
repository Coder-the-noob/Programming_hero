//Function declaration

function add(num1 , num2){
    return num1 + num2;
}

//Function expression

const adding = function(num1, num2){
    return num1 + num2;
}

// const result = adding(13, 17);
// console.log(result);

//Arrow function

const add2 = (num1 , num2) => num1 + num2;
const multiply = (a , b) => a * b;

const mult = multiply(3, 4);
console.log(mult);

const result2 = add2(13, 17);
console.log(result2);


//Multiple lines in the function body

const calculate = (a, b) => {
    let sum = a + b;
    let product = a * b;
    return `Sum: ${sum}, Product: ${product}`;
}

console.log(calculate(3, 4));