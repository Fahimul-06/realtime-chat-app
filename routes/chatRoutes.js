const express = require('express');
const { createChatRoom, getUserChatRooms } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createChatRoom);
router.get('/', authMiddleware, getUserChatRooms);

module.exports = router;