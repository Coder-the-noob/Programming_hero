const numbers = [1, 2, 3];
const comp_number=[];

for(const number of numbers){
    comp_number.push(number);
}

comp_number[0] = 99;

console.log(numbers);
console.log(comp_number);