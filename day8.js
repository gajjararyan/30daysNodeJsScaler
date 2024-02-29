const express = require('express');

const app = express();

// Route to handle requests with a positive integer parameter
app.get('/positive', positiveIntegerHandler);

// Express middleware to handle requests with a positive integer parameter
function positiveIntegerHandler(req, res, next) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    res.status(200).send("Success: The number is a positive integer.");
  } else {
    res.status(400).send("Error: The number parameter must be a positive integer.");
  }
}

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
