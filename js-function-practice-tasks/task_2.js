function guessNumber(userGuess){
    
    let result;
    if(userGuess % 2 !== 0){
        result = userGuess * 2;
        return result;
    }
    else if(userGuess % 2 === 0){
        result = userGuess / 2;
        return result;
    }
}

const randomNumber = guessNumber(12);
console.log('The result is:', randomNumber);