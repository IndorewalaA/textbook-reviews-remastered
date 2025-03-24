const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Define routes (example)
app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/textbooks', require('./routes/textbookRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});