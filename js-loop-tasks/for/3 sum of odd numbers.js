

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */


/*programming hero*/

let sumOdd = 0;
for (let i = 91; i <= 129; i++) {   
  if (i % 2 !== 0) {
    sumOdd += i;
  }
}
console.log('Sum of odd numbers from 91 to 129:', sumOdd);

let sumEven = 0;
for (let j = 51; j <= 85; j++) {
  if (j % 2 === 0) {
    sumEven += j;
  }
}
console.log('Sum of even numbers from 51 to 85:', sumEven);