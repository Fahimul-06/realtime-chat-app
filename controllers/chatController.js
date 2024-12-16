const ChatRoom = require('../models/ChatRoom');

// Create a new chat room
const createChatRoom = async (req, res) => {
  const { name, users } = req.body;
  try {
    const chatRoom = new ChatRoom({ name, users });
    await chatRoom.save();
    res.status(200).json(chatRoom);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get chat rooms for a user
const getUserChatRooms = async (req, res) => {
  try {
    const rooms = await ChatRoom.find({ users: req.user._id });
    res.json(rooms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { createChatRoom, getUserChatRooms };