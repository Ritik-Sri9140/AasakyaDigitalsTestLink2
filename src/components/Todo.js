import React from 'react';
import './Todo.css';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="left-section">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo._id, todo.completed)}
        />
        <span className="task-text">{todo.task}</span>
      </div>
      <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
        ✕
      </button>
    </li>
  );
};

export default Todo;
