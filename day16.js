const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

function connectToMongoDB() {
  mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + '/?retrywrites=true&w=majority');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("Connected to MongoDB");
  });
}

connectToMongoDB();

app.get('/', (req, res) => {
  res.send('Hello NodeJs');
});

app.listen(8000);
