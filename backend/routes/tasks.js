const express = require('express');

const router = express.Router();

let tasks = [
  { id: 1, title: 'Estudar Linux', done: true },
  { id: 2, title: 'Estudar Docker', done: false },
  { id: 3, title: 'Criar Pipeline', done: false },
];
let nextId = 4;

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'title is required' });
  }

  const task = { id: nextId++, title: title.trim(), done: false };
  tasks.push(task);
  res.status(201).json(task);
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'task not found' });
  }

  const { title, done } = req.body;
  if (title !== undefined) task.title = title;
  if (done !== undefined) task.done = done;

  res.json(task);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'task not found' });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
