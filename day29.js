const express = require('express');

const app = express();

function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let errorMessage = err.message || 'Internal Server Error';
  if (err.name === 'CustomError') {
    statusCode = err.statusCode;
    errorMessage = err.message;
  }
  console.error(err.stack);

  res.status(statusCode).json({ error: errorMessage });
}

app.get('/error', (req, res, next) => {
  const err = new Error('Custom Error');
  err.statusCode = 400;
  next(err);
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
