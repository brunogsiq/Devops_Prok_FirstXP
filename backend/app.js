const express = require('express');
const path = require('path');
const tasksRouter = require('./routes/tasks');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/tasks', tasksRouter);

module.exports = app;
