import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import TodoSearch from './components/SearchBar';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const searchTodo = (searchText) => {
    const filtered = todos.filter(todo =>
      todo.text.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  return (
    <div>
    <h1>Todo App</h1>
    <TodoForm addTodo={addTodo} />
    <TodoSearch searchTodo={searchTodo} />
    <TodoList todos={filteredTodos.length > 0 ? filteredTodos : todos} />
  </div>
  )
}

export default App