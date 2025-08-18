function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const moinHeight = inchToFeet(75);

// console.log(moinHeight);

function inchToFeet2(inch){
    const feet2 = inch / 12;
    const feetNumber = parseInt(feet2);
    const inchNumber = inch % 12;
    const result = feetNumber + " ft " + inchNumber + " inch";
    return result;
}

const moinHeight2 = inchToFeet2(75);
 console.log(moinHeight2);