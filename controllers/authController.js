const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

// Register a new user
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ username, password: bcrypt.hashSync(password, 10) });
    await user.save();
    
    const payload = { userId: user._id };
    const token = jwt.encode(payload, process.env.JWT_SECRET);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login User
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { userId: user._id };
    const token = jwt.encode(payload, process.env.JWT_SECRET);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { registerUser, loginUser };