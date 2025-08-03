

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let sumOdd = 0;
let numOdd = 81;
while (numOdd <= 131) {
    if (numOdd % 2 !== 0) {
        sumOdd += numOdd;
    }
    numOdd++;
}
console.log('Sum of odd numbers from 81 to 131:', sumOdd);

let sumEven = 0;
let numEven = 206;
while (numEven <= 311) {
    if (numEven % 2 === 0) {
        sumEven += numEven;
    }
    numEven++;
}
console.log('Sum of even numbers from 206 to 311:', sumEven);