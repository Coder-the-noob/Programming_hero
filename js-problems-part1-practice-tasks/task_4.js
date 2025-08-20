function findLongestWord(str){
    let words = str.split(' ');
    let longest = '';
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

let text = "Web development is amazing";
console.log(findLongestWord(text));