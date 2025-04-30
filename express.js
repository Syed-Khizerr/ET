// server.js
const express = require('express');
const app = express();
const port = 3000;

// Define a route that sends a response
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Define another route
app.get('/about', (req, res) => {
  res.send('About page');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
