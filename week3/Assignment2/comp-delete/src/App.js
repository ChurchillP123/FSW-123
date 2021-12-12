import './App.css';
import ToDoList from './ToDoList.js';
import Todos from './STORE.js';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState(Todos);  


  const completeTodo = id => {
    const tempTodos = [...todos];
    const todoID = tempTodos.find(todo => todo.id === id);
    todoID.isCompleted = true;
    setTodos(tempTodos);
  }

  const deleteTodo = (id) => {
    const tempTodos = [...todos];
    const filteredTodos = tempTodos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);

  }

  return (
    <ToDoList todos ={todos} completeTodo ={completeTodo} deleteTodo ={deleteTodo}/>
  );
}

export default App;
