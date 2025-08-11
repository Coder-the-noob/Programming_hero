function evensNumberOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5, 8, 14, 40, 35, 78];
// const evens = evensNumberOnly(numbers);
// console.log('Even Numbers are:', evens);

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum += number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('Sum of Even Numbers is:', sum);