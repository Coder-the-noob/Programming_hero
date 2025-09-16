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
    
    for(const post of posts){
        // console.log(post);

        // 2.create HTML element
        const li = document.createElement('li');
        li.innerText = post.title;

        // 3.append child
        postContainer.appendChild(li);
    }
}