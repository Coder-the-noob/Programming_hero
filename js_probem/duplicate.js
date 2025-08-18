const biriyaniKhor = ['Beef Biriyani', 'Chicken Biriyani', 'Mutton Biriyani', 'Mutton tehari', 'Prawn Biriyani', 'Vegetable Biriyani', 'Beef Biriyani', 'Mutton Biriyani', 'Noli Biriyani', 'Mutton tehari' ];

function duplicateBiriyani(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const unique = duplicateBiriyani(biriyaniKhor);
console.log(unique);