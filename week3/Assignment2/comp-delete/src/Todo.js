function Todo({todo, completeTodo, deleteTodo}) {
    return (
        <li key ={todo.id}>
            <input type="checkbox" checked ={todo.isCompleted} onChange ={() => completeTodo(todo.id)}/>
            {todo.text}
            <button onClick ={() => deleteTodo(todo.id)}>X</button>
        </li>
    );
}

export default Todo;