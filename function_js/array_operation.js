function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum += number;
    }
    return sum;
}

const numbs = [54, 62, 12, 6];
const sum = sumOfNumbers(numbs);
console.log('Sum of Numbers:', sum);