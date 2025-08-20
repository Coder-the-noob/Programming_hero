function countNumber(arr, findNum){
    let count = 0;
    for(let num of arr){
        if(num === findNum){
            count++;
        }
    }
    return count;
}

let numbers = [5, 13, 3, 5, 665,34, 67, 3, 6, 5, 10];
let find = 5;
console.log(countNumber(numbers, find));