
# 📝 MERN  Blog App

A full-stack MERN (MongoDB, Express, React, Node.js) application for a Notice Board or Blog system. Users can register, login, create, edit, and delete posts, and add comments.

---

## 🚀 Features

- User Authentication (JWT)
- Create, Read, Update, Delete (CRUD) for Posts
- Comment system for each post
- Protected Routes (only authors can edit/delete their posts)
- React Context API for global auth state
- Tailwind CSS for styling

---

## 📁 Project Structure

- mini-victor-store/
- ├── server/ # Express API
- ├── client/ # React app with Tailwind CSS
- ├── .env # Environment variables
- ├── README.md


---

## ⚙️ Technologies

- MongoDB
- Express.js
- React.js
- Node.js
- JWT for authentication
- Tailwind CSS



## 📦 Setup Instructions

### 1. Clone the Repository


git clone https://github.com/haile12michael12/mini-victor-store
cd mini-victor-store

2. Backend Setup
- cd server
- npm install
# Create a .env file and add:
 MONGO_URI=
 JWT_SECRET=
 PORT=5000
- npm run dev

3. Frontend Setup
- cd client
- npm install
- npm run dev


🙋‍♂️ Author
Hailemichael Assefa
Junior Full Stack Developer
Addis Ababa, Ethiopia