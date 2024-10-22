// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://pass:pass@cluster0.l2bnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Stop the app if the connection fails
  }
};

module.exports = connectDB;
