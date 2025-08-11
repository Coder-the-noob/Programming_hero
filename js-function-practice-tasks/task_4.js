function count_zero(binaryString){
    let count = 0;

    for(let char of binaryString){
        if(char === '0'){
            count++;
        }
    }
    return count;
}

let bin = "1001001";
let zeroCount = count_zero(bin);
console.log('Number of zeros:', zeroCount);