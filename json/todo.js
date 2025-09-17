const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
    .then(res => res.json())
    .then(data => displayTodo(data));
};

const displayTodo = (todos) =>{
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';
    
    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-card');
        todoDiv.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`} </p>
        `;
        todoContainer.appendChild(todoDiv);
    });
}

loadTodo();