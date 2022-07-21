import { todoFuncs, projectFuncs } from './applogic';

const domFuncs = (function () {
    const todoGrid = document.querySelector('.todoList');
    const projectGrid = document.querySelector('.proj-panel'); 
    const addToDotoGrid = (todo) => {
        const todoLine = document.createElement('div');
        todoLine.textContent = todo['title'];
        todoGrid.appendChild(todoLine);
    };
    const displayTodos = () => {
        while (todoGrid.firstChild) {
            todoGrid.removeChild(todoGrid.lastChild);
        };
        for (const todo of projectFuncs.projects['All']) {
            addToDotoGrid(todo);
        };
    };
    const displayProjects = (projects) => {
        while (projectGrid.firstChild) {
            projectGrid.removeChild(projectGrid.lastChild);
        };
        for (const project in projects) {
            const projLine = document.createElement('div');
            projLine.textContent = project;
            projectGrid.appendChild(projLine);
        };
    };
    return { displayTodos, displayProjects }
})(); 

const btnFuncs = (function () {
    const projBtn = document.querySelector('.add-proj');
    const todoBtn = document.querySelector('.todo-btn');
    const addToDo = () => {
        const input = document.querySelector('.todo-inp').value;
        const newTodo = todoFuncs.todo(input);
        todoFuncs.add(newTodo);
        projectFuncs.addTo('All', newTodo);
        domFuncs.displayTodos();
    }
    todoBtn.addEventListener('click', () => {
        addToDo();
        console.log(projectFuncs.projects['All'])
    });
})();