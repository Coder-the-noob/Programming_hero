/*
* This function checks if a year is a leap year.
* A year is a leap year if it is divisible by 4,
* but not divisible by 100, unless it is also divisible by 400.
*/


//function isLeap(year){
    //if(year % 4 === 0){
   //     return true
   // }
   // return false;
 //}

//const isLeapYear = isLeap(2045);
// console.log(isLeapYear);


function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{

        return false;
    }
}

const isLeap = isLeapYear2(2045);
const isLeap2 = isLeapYear2(2000);
const isLeap3 = isLeapYear2(1900);
const isLeap4 = isLeapYear2(2057);

console.log(isLeap, isLeap2, isLeap3, isLeap4);

