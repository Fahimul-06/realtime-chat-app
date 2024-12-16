# Real-Time Chat Application

This is a real-time chat application built with Node.js, Express.js, MongoDB, and Socket.io. The application provides a platform for secure, real-time communication through private messaging and group chat functionality. It includes features like JWT-based authentication, message history, and the ability to search through past conversations.

---

## Key Features

- **User Authentication**: Secure login and registration using JSON Web Tokens (JWT).
- **Real-Time Messaging**: Instant message exchange using Socket.io.
- **Group Chat and Private Messaging**: Chat with individuals or groups in dedicated chat rooms.
- **Message History**: Store and retrieve all messages from MongoDB for later reference.
- **Search Messages**: Quickly search for specific messages in chat history.

---

## Technologies Used

- **Node.js**: JavaScript runtime for server-side scripting.
- **Express.js**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing users, messages, and chat rooms.
- **Socket.io**: Real-time WebSocket communication for sending and receiving messages.
- **JWT**: JSON Web Tokens for secure user authentication.

---

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or above)
- **MongoDB** (local installation or cloud instance like MongoDB Atlas)

### Clone the Repository

```bash
git clone https://github.com/Fahimul-06/real-time-chat-app.git
cd real-time-chat-app
```

### Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory with the following values:

```
MONGODB_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_jwt_secret
PORT=3005
```

- **MONGODB_URI**: MongoDB connection URI (replace with your MongoDB Atlas URI if using a cloud database).
- **JWT_SECRET**: A secret key for signing JWT tokens.
- **PORT**: Port where the server will run (default: 3005).

### Start the Server

Run the following command to start the backend server:

```bash
node index.js
```

Your server will now be running on [http://localhost:3005](http://localhost:3005).

---

## API Endpoints

### Authentication Routes

#### Register a New User

**POST** `/api/auth/register`

**Request Body:**

```json
{
  "username": "testuser",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "User registered successfully"
}
```

#### Login

**POST** `/api/auth/login`

**Request Body:**

```json
{
  "username": "testuser",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "<JWT_TOKEN>"
}
```

### Chat Room Routes

#### Create a New Chat Room

**POST** `/api/chats`

**Request Body:**

```json
{
  "name": "General Chat",
  "users": ["<user_id>"]
}
```

**Response:**

```json
{
  "chatRoomId": "<chat_room_id>"
}
```

#### Get All Chat Rooms

**GET** `/api/chats`

**Response:**

```json
[
  {
    "chatRoomId": "<chat_room_id>",
    "name": "General Chat"
  }
]
```

### Message Routes

#### Send a Message

**POST** `/api/messages`

**Request Body:**

```json
{
  "content": "Hello, world!",
  "roomId": "<chat_room_id>"
}
```

**Response:**

```json
{
  "message": "Message sent successfully"
}
```

#### Get Message History

**GET** `/api/messages/:roomId`

**Response:**

```json
[
  {
    "content": "Hello, world!",
    "sender": "<user_id>",
    "timestamp": "2024-12-13T12:00:00"
  }
]
```

---

## Real-Time Messaging with Socket.io

This application uses Socket.io for real-time message communication. Users can send and receive messages in real-time without refreshing the page.

### Events

#### joinRoom

Join a chat room.

**Data:**

```json
{
  "roomId": "<chat_room_id>"
}
```

#### sendMessage

Send a message to a chat room.

**Data:**

```json
{
  "content": "Hello!",
  "roomId": "<chat_room_id>"
}
```

#### receiveMessage

Receive a message from the server.

---

## Testing

You can test the API endpoints using tools like Postman or curl:

1. **Register a New User**: Send a POST request to `/api/auth/register` with a username and password.
2. **Login**: Send a POST request to `/api/auth/login` to obtain the JWT token.
3. **Create a Chat Room**: Send a POST request to `/api/chats` with the room name and user list.
4. **Send a Message**: Send a POST request to `/api/messages` with the message content and room ID.

---

## Troubleshooting

- **MongoDB Connection Error**: Ensure MongoDB is running and the connection URI is correct.
- **JWT Authentication Issues**: Ensure the token is included in the request headers for authenticated routes.
- **Socket.io Issues**: Verify that Socket.io is correctly initialized on both the server and client sides.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
