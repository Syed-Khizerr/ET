// server.js
const http = require('http');  // Import the built-in HTTP module
// Define the port number
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;  // OK status
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is your Node.js server!');  // Send a response
});


// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
