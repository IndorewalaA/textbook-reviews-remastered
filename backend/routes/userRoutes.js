const express = require('express');
const { createUser, getCurrentUser, loginUser } = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getCurrentUser);

module.exports = router;
