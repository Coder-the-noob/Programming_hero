var numbers =['Tom', 'Tim', 'Tin', 'Tik'];

var concatArray =[];

for ( const number of numbers){
   concatArray = concatArray.concat(number);
}

console.log(concatArray.join(''));

// .join('') takes all array elements and merges them into a single string.

// The empty string '' means no separator is inserted between elements.