// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phobiaInfo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  promptResponse: {
    type: String,
    required: true,
  },
  assessmentType: {
    type: String, // You can also use enums if you have specific types in mind
    required: true,
  },
  data: {
    type: String, // You can also use enums if you have specific types in mind
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
