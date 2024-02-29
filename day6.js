const express = require('express');

const app = express();

// Handles GET requests to greet endpoint
function greetHandler(req, res) {
  const name = req.query.name;
  const greeting = name ? `Hello, ${name}!` : "Hello, Aryan!";
  res.send(greeting);
}

// Define the route handler for GET requests to "greet"
app.get('/greet', greetHandler);

// Start the server
const port = 3806; // Note: Port number differs from the one mentioned in the image
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
