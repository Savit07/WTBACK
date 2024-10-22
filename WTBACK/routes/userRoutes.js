// routes/userRoutes.js
const express = require('express');
const { registerUser, gt } = require('../controllers/userController');
const router = express.Router();

router.post('/add', registerUser);
router.get('/',gt);
module.exports = router;
