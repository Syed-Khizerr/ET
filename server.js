const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/todoDB');

const taskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean
});
const Task = mongoose.model('Task', taskSchema);

// Get tasks
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Add task
app.post('/tasks', async (req, res) => {
  const task = new Task({ text: req.body.text, completed: false });
  await task.save();
  res.json(task);
});

// Toggle complete
app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

// Delete task
app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
