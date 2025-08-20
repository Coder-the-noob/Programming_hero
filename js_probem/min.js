function getMinimum(numbers){

    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const prices = [1000, 10000, 23000, 45099, 50000, 87344];
const minPrice = getMinimum(prices);
console.log("Minimum price: ", minPrice);