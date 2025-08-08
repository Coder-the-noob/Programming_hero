const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers);

const reversed = [];
for (let i=0; i<numbers.length; i++){
    reversed.unshift(numbers[i]);
}

console.log(reversed);