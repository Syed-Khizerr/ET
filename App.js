import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTask = async () => {
    if (!text.trim()) return;
    const res = await axios.post('http://localhost:5000/tasks', { text });
    setTasks([...tasks, res.data]);
    setText('');
  };

  const toggleComplete = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.map(task => task._id === id ? res.data : task));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="App">
      <h2>📝 To-Do App (MERN)</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span
              onClick={() => toggleComplete(task._id)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task._id)} style={{ marginLeft: 10 }}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

