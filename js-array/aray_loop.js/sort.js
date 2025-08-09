const numbers = [5, 3, 8, 1, 2];
numbers.sort();
// console.log(numbers);


//ascending order

const ages =[15, 24, 17, 100, 45, 60, 30, 37];
// ages.sort();
// console.log(ages);
const sortedAges = ages.sort(function(a,b) {return a- b});
console.log(sortedAges);

//descending order
const sortedAgesDesc = ages.sort(function(a , b){ return b - a});
console.log(sortedAgesDesc);