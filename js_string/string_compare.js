const subject = 'Programming Hero';
const course = 'programming hero';

if(subject.toLowerCase() === course.toLowerCase()){
    console.log('Both are same');
}else{
    console.log('Both are different');
}

const drink = ' water';
const food = 'water   ';

if(drink.trim() === food.trim()){
    console.log('I want to drink water');
}else{
    console.log('I want to drink something else');
}


//String comparison:
/*  for white space we are using trim() method, also we can use trimStart() and trimEnd() */