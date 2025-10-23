const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World its gaurav! here is my first Node.js server.\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// for run the server use command: node index.js
// then open your browser and go to: http://localhost:3000/
// node --watch index.js to enable auto-restart on file changes