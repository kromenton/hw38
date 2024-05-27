import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from './redux/todoSlice';
import './App.css';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {sortedTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
