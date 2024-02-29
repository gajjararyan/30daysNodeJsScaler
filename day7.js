const express = require('express');
const app = express();

// Express middleware to log incoming requests
function requestLoggerMiddleware(req, res, next) {
  // Your Implementation here

  const timestamp = new Date().toISOString();
  console.log(`${timestamp} ${req.method} request received.`);

  res.send('Server is working.');

  next();
}

app.get('/', requestLoggerMiddleware);

const port = 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
