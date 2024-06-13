document.addEventListener('DOMContentLoaded', ()=>{
    const todoForm = document.getElementById('todoForm');
    const todoItem = document.getElementById('todoItem');
    const todoList = document.getElementById('todoList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const getTasks = ()=>{
        todoList.innerHTML = '';
        tasks.forEach((task, index)=>{
            const li = document.createElement('li');
            li.className = task.completed ? 'completed':'';
            li.innerHTML = `<p>${task.text}</p>
            <div><button onclick="complete(${index})">${task.completed ? 'Undo':'Complete'}</button>
            <button onclick="deleteTask(${index})">Delete</button>
            </div>
            `;
            todoList.append(li);
        })
    }


    window.complete = function(index){
        tasks[index].completed = !tasks[index].completed;
    
        localStorage.setItem('tasks', JSON.stringify(tasks));
        getTasks();
    }
    
    window.deleteTask = function(index){
        tasks.splice(index,1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        getTasks();

    }
    const addTask= (e)=>{
        e.preventDefault();
        const newTask = {
            text: todoItem.value,
            completed:false
        }
        tasks.push(newTask);
        getTasks();
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }

    todoForm.addEventListener('submit', addTask);
    getTasks();
})