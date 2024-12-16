Real-Time Chat Application

Description

This is a real-time chat application built with Node.js, Express.js, MongoDB, and Socket.io. The application allows users to authenticate using JWT tokens, send real-time messages to individual users or group chat rooms, and view message history. The application provides an efficient and scalable way to communicate in both private and group settings.

Key Features:
User Authentication: JWT-based authentication for secure login and registration.
Real-Time Messaging: Real-time message exchange using Socket.io.
Group Chat and Private Messaging: Ability to create chat rooms and send private messages.
Message History: All messages are stored in MongoDB for later retrieval.
Search Messages: Ability to search for messages in the chat history.
Technologies Used:
Node.js: JavaScript runtime for building the server.
Express.js: Web framework for handling HTTP requests.
MongoDB: NoSQL database for storing users, messages, and chat rooms.
Socket.io: Real-time WebSocket communication for sending/receiving messages.
JWT: JSON Web Tokens for secure user authentication.
Installation
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 14 or above)
MongoDB (local installation or cloud instance like MongoDB Atlas)

Clone the repository
git clone https://github.com/Fahimul-06/real-time-chat-app.git
* cd real-time-chat-app
* Install dependencies
* Run the following command to install the necessary dependencies:
* npm install
  Environment Variables
* Create a .env file in the root directory with the following values:

**At (.env)
MONGODB_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_jwt_secret
PORT=3005
MONGODB_URI: MongoDB connection URI (replace with your MongoDB Atlas URI if using a cloud database).
JWT_SECRET: A secret key for signing JWT tokens.
PORT: Port where the server will run (default: 5000).
Start the Server
Run the following command to start the backend server:


node index.js
Your server will now be running on http://localhost:3005.

API Endpoints
Authentication Routes
POST /api/auth/register: Register a new user
Request Body: { "username": "testuser", "password": "password123" }
Response: { "message": "User registered successfully" }
POST /api/auth/login: Login with existing user
Request Body: { "username": "testuser", "password": "password123" }
Response: { "token": "<JWT_TOKEN>" }
Chat Room Routes
POST /api/chats: Create a new chat room

Request Body: { "name": "General Chat", "users": ["<user_id>"] }
Response: { "chatRoomId": "<chat_room_id>" }
GET /api/chats: Get all chat rooms

Response: [ { "chatRoomId": "<chat_room_id>", "name": "General Chat" }, ... ]
Message Routes
POST /api/messages: Send a message

Request Body: { "content": "Hello, world!", "roomId": "<chat_room_id>" }
Response: { "message": "Message sent successfully" }
GET /api/messages/:roomId: Get message history for a chat room

Response: [ { "content": "Hello, world!", "sender": "<user_id>", "timestamp": "2024-12-13T12:00:00" }, ... ]
Real-Time Messaging with Socket.io
This application uses Socket.io for real-time message communication. Once a user joins a chat room, they can send and receive messages in real-time without needing to refresh the page.

Events
joinRoom: Join a chat room.
Data: { "roomId": "<chat_room_id>" }
sendMessage: Send a message to a chat room.
Data: { "content": "Hello!", "roomId": "<chat_room_id>" }
receiveMessage: Receive a message from the server.

Testing
You can test the API endpoints using tools like Postman or curl.

Register a new user: Send a POST request to /api/auth/register with the username and password.
Login: Send a POST request to /api/auth/login to obtain the JWT token.
Create a Chat Room: Send a POST request to /api/chats with the room name and user list.
Send a Message: Send a POST request to /api/messages with the message content and room ID.
Troubleshooting
MongoDB Connection Error: Ensure MongoDB is running and the connection URI is correct.
JWT Authentication Issues: Double-check that you’re passing the token in the headers of requests that require authentication.
Socket.io Issues: Ensure that Socket.io is correctly initialized on both the server and client sides.

License
This project is licensed under the MIT License - see the LICENSE file for details.
