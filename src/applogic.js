const todoFuncs = (function () {
    const todo = function (title) {
        return Object.assign({title});
    };
    const todoList = [];
    const add = (todo) => {
        todoList.push(todo);
    }
    const remove = (title) => {
        //for i find where list[i]['title'] === title
        todoList.splice(i, 1);
    }
    return { todo, todoList, add, remove }
})();

const projectFuncs = (function () {
    const projects = {
        All: []
    };
    const add = (name) => {
        projects[name] = [];
    };
    const remove = (name) => {
        delete projects[name];
    };
    const addTo = (project, todo) => {
        projects[project].push(todo);
    };
    const removeFrom = (project, title) => {
       //for i find where list[i]['title'] === title;
        delete projects[todo];
    };
    return { projects, add, remove, addTo, removeFrom };
})();

export { todoFuncs, projectFuncs }