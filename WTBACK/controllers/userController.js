// controllers/userController.js
const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/users
const registerUser = async (req, res) => {
  const { name, age, phobiaInfo, email, promptResponse, assessmentType, data } = req.body;

  try {
    const user = new User({
      name,
      age,
      phobiaInfo,
      email,
      promptResponse,
      assessmentType,
      data,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { registerUser };
