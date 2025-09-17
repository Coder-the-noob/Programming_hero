const loadData = () => {
    const url ='https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error:', error));
}

const displayData = (posts) => {
    
    //1.get the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    
    for(const post of posts){
        // console.log(post);

        // 2.create HTML element
        const postCard = document.createElement('div');
        postCard.innerHTML = `<div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;

        postContainer.append(postCard);

        
    }
}

loadData();