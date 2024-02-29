const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
const secrectkey = "scaler-task";

function authenticationMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, secrectkey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized Invalid Token" });
  }
}

app.get("/login", (req, res) => {
  const user = {
    username: "Aryan",
    password: "Aryan123",
  };

  const token = jwt.sign(user, secrectkey, { expiresIn: 300s });
  res.json({ token });
});

app.use(authenticationMiddleware);

app.get("/protected", (req, res) => {
  res.json({ message: "Access granted, user:", req.user });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
