// 1.create element and set innerText or innerHTML

const newChild = document.createElement('li');
newChild.innerText = 'Lamine Yamal';

// 2.find the parent where you want to append the child

const playerList = document.getElementById('player-list');

// 3.append the child to the parent 
playerList.appendChild(newChild);