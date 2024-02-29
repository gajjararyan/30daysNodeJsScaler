const express = require("express");
const app = express();
const port = 3000;

// Connect to MongoDB
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/node30";

function connectToMongoDB() {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
}

connectToMongoDB();

// User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
});

const User = mongoose.model("User", userSchema);

// Add user with validation
async function addUserWithValidation(user) {
  const newUser = new User(user);

  try {
    await newUser.save();
    console.log("User added successfully");
  } catch (err) {
    console.log("Error adding user:", err);
  }
}

// Routes
app.get("/", (req, res) => {
  res.send("This task has been completed!");
});

app.get("/adduser", (req, res) => {
  // Add user validation logic here
  addUserWithValidation({ username: "johndoe@example.com" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
