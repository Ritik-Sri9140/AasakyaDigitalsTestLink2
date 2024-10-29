const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a new todo
router.post('/', async (req, res) => {
  const newTodo = new Todo({
    task: req.body.task,
  });
  await newTodo.save();
  res.json(newTodo);
});

// Update a todo
router.put('/:id', async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
