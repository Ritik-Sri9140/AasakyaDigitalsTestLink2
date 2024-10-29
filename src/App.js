import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('/api/todos');
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (!task) return;
    await axios.post('/api/todos', { task });
    setTask('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (id, completed) => {
    await axios.put(`/api/todos/${id}`, { completed: !completed });
    fetchTodos();
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
