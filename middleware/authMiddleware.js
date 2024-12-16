const jwt = require('jwt-simple');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;