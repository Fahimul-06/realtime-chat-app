const Message = require('../models/Message');

// Send message
const sendMessage = async (req, res) => {
  const { content, roomId } = req.body;
  try {
    const message = new Message({
      sender: req.user._id,
      content,
      roomId
    });
    await message.save();
    res.status(200).json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get messages in a room
const getMessages = async (req, res) => {
  const { roomId } = req.params;
  try {
    const messages = await Message.find({ roomId }).populate('sender', 'username');
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { sendMessage, getMessages };