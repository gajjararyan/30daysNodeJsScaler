const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define the User schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// Create the User model
const User = mongoose.model('User', UserSchema);

// Function to add a user to the database
function addUserToDatabase(user) {
    const newUser = new User(user);
    newUser.save()
        .then(() => console.log('User added successfully:', user.username))
        .catch(err => console.error('Error adding user:', err));
}

// Test case
addUserToDatabase({ username: 'Aryan', email: 'aryan@example.com' });
