import Todo from './Todo.js';

function ToDoList({todos, completeTodo, deleteTodo}) {
    const data = Array.from({todos});

    const todoList = data.map((todo) => <Todo todo ={todo} key ={todo.id} completeTodo ={completeTodo} deleteTodo ={deleteTodo}/>)
    return (
        <>
            <h1>List of Todos</h1>
            <ul>{todoList}</ul>
        </>
    );
}

export default ToDoList;