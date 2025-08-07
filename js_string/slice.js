const address = 'Faridpur';

const addressSlice = address.slice(5, 8);
console.log(addressSlice);


// Split a string into an array of words
const sentence = 'I am a student of Programming Hero';
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendStr = 'Rahim, karim, jamil, kamal, salim';
const friends = friendStr.split(', ');
console.log(friends);


// Join an array of words into a string
const realfriend =['Rahim', 'Karim', 'Jamil', 'Kamal', 'Salim'];
const realfriendStr = realfriend.join(', ');
console.log(realfriendStr);