const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { connectDb } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const chatRoutes = require('./routes/chatRoutes');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/chats', chatRoutes);

// MongoDB Connection
connectDb();

// Socket.io for real-time messaging
io.on('connection', socket => {
  console.log('A user connected');
  
  socket.on('sendMessage', (messageData) => {
    io.to(messageData.roomId).emit('receiveMessage', messageData);
  });

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
