var a = isNaN('11');

console.log("Is '11' a number? " + a); 
/* isNaN() function checks if a value is NaN (Not-a-Number). In this case, '11' is a string representation of a number, so isNaN('11') will return false. */

var b = isNaN(2-10);
console.log("Is 2-10 a number? " + b);
/* isNaN() function checks if a value is NaN (Not-a-Number). In this case, 2-10 evaluates to -8, which is a valid number, so isNaN(2-10) will return false. */