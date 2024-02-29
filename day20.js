const express = require('express');
const mongoose = require('');

// Let EsBBConnected
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/yourdatabasename", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB: ', err);
  }
};

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

const UserModel = mongoose.model('users', UserSchema);

const app = express();

app.get('/average-age', async (req, res) => {
  try {
    await connectDB();

    const result = await UserModel.aggregate([
      {
        $group: {
          _id: null,
          average: { $avg: '$age' },
        },
      },
    ]);

    const average = result[0].average;
    res.send(`Average age: ${average}`);
  } catch (err) {
    console.error('Operation failed:', err);
    res.status(500).send('Operation failed');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
