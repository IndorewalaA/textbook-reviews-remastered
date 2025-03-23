const express = require('express');
const { addTextbook, getTextbooks } = require('../controllers/textbookController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, addTextbook); // Admin-only route
router.get('/', getTextbooks); // Public route

module.exports = router;
