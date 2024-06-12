document.addEventListener('DOMContentLoaded', ()=>{
    const todoForm = document.getElementById('todoForm');
    const todoItem = document.getElementById('todoItem');
    const todoList = document.getElementById('todoList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const getTasks = ()=>{
        todoList.innerHTML = '';
        tasks.forEach((task, index)=>{
            const li = document.createElement('li');
            li.innerHTML = `<p>${task.text}</p>`;
            todoList.append(li);
        })
    }

    const addTask= (e)=>{
        e.preventDefault();
        const newTask = {
            text: todoItem.value
        }
        tasks.push(newTask);
        getTasks();
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }

    todoForm.addEventListener('submit', addTask);
    getTasks();
})