const mongoose = require('mongoose'); const express = require('express'); const app = express();
const port
= 3000;
const UserSchema = new mongoose.Schema({
name: String,
email: string,
// Add other fields as necessary
});
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('user', UserSchema);


function getAllUsers (req, res) {
User.find({}, (err, users) => {
if (err) {
res.status(500).send({ error: 'An error occurred fetching the users' });
} else {
res.json(users);
}
});
// Define the route
app.get('/users', getAllUsers); app.listen(port, () => {
});
console.log(`Server listening at http://localhost:${port}`);
};
