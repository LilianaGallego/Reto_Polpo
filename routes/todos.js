const express = require('express');
const router = express.Router();

const todos = [{id: 1, title:'Universidad', keywords: ['estudios', 'importante', 'academia'],userId:1},
{id: 2, title:'Casa', keywords: ['oficio', 'necesario', 'orden'],userId:1}]


const tasks = [{id: 1, title: "Estudiar para el examen de programación", completed: 0, todoId: 1, userId: 1}, 
    {id: 2, title: "Ir a clases", completed: 1, todoId: 1, userId: 1}];

router.get('/users/:id/todos', (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);
    
    const todo = todos.filter((todo) => todo.userId === parseInt(id));
    res.json({ok: true, todo});
});

router.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.filter((todo) => todo.id === parseInt(id))[0];
    todo.todos = tasks.filter((task) => task.todoId === parseInt(id));
    res.json({ok: true, todo});
});

router.post('/todos/:id/task', (req, res) => {
    const { title } = req.body;
    const { id } = req.params;
    if(title){
        const todo = todos.filter((todo) => todo.id === parseInt(id))[0];
        const completed = 1;
        const idTask = tasks.length + 1;
        const task = {id: idTask, title: title, completed: completed, todoId: todo.id, userId: todo.userId}
        tasks.push(task);
        res.json({ok: true, task});
    }
});

module.exports = router;