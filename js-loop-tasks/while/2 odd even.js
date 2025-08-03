/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***



Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

let num = 61;
while (num <= 100) {
    if (num % 2 !== 0) {
        console.log(num + ' is odd');
    }
    num++;
}


let numEven = 78;
while (numEven <= 98) {
    if (numEven % 2 === 0) {
        console.log(numEven + ' is even');
    }
    numEven++;
}