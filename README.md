
# MERN Chat App

MERN Chat App is a real-time chat application that allows users to communicate with each other through direct messages or within chat rooms. This project uses MongoDB for data storage, Express.js and Node.js for the backend, and React for the frontend, along with Socket.IO for real-time communication.

## Features

- User authentication (sign up and login)
- Real-time messaging using Socket.IO
- Create and join chat rooms
- Direct messaging between users
- List of active users in chat rooms
- Notifications for new messages
- Responsive design for desktop and mobile users

## Demo

Insert a link to the live demo or screenshots of the application.

## Technologies Used

- **Frontend:** React, Redux for state management, Bootstrap for styling
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** Socket.IO
- **Authentication:** JSON Web Tokens (JWT)
- **Testing:** Jest for backend testing, Cypress for end-to-end testing

## Installation

Follow these steps to set up the project locally:

Fork the following code and make clone it

### Prerequisites

- Node.js
- MongoDB
- Git

### Cloning the repository

```bash
git clone [https://github.com/JibachhhMahto764/Chat-App.git]
cd Chat-App
```

### Installing dependencies

From within the project directory:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Configuring the environment

Create a `.env` file in the `backend` directory and add the following:

```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the application

```bash
# Start the backend
cd backend
npm start

# Start the frontend
cd ../frontend
npm start
```

Visit `http://localhost:3000` to view the app.

## Usage

1. **Register:** Sign up for an account.
2. **Login:** Log into the app.
3. **Create/Join a Room:** Start a new chat room or join an existing one.
4. **Send Messages:** Send messages in a chat room or direct messages to other users.

## Contributing

Contributions are welcome, and any contributions you make are **greatly appreciated**. If you have suggestions for adding or improving features, follow the guidelines below:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Project Link: [[https://github.com/JibachhhMahto764/Chat-App](https://github.com/JibachhhMahto764/Chat-App)]

---

This README provides a comprehensive guide for anyone interested in the project, from setup to contribution. Adjust the sections based on the specific requirements and functionalities of your application.
