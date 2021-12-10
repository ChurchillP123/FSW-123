function Todo({todo, completeTodo, deleteTodo}) {
    return (
        <div className = "divItems">
            <input type="checkbox" checked ={todo.isCompleted} onChange ={() => completeTodo(todo.id)}/>
            <button onClick ={() => deleteTodo(todo.id)}>X</button>
        </div>
    );
}

export default Todo;