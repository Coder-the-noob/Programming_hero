// It's the descriptive way of DOM to append child and the create section

const mainContainer = document.getElementById('main-container');

const placeSection = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'Popular Tourist Destinations';  
placeSection.appendChild(h1);

const placeList = document.createElement('ul');

const placeItem1 = document.createElement('li');

placeItem1.innerText = 'Bandarban';
placeList.appendChild(placeItem1);

const placeItem2 = document.createElement('li');
placeItem2.innerText = 'Cox\'s Bazar';
placeList.appendChild(placeItem2);

const placeItem3 = document.createElement('li');
placeItem3.innerText = 'Sylhet';
placeList.appendChild(placeItem3);

placeSection.appendChild(placeList);
mainContainer.appendChild(placeSection);


// easiest way to create html

const bookSection = document.createElement('section');

bookSection.innerHTML = `
  <h1>Popular Books</h1>
  <ul>
    <li>The Great Gatsby</li>
    <li>To Kill a Mockingbird</li>
    <li>1984</li>
  </ul>
`;

mainContainer.appendChild(bookSection);
