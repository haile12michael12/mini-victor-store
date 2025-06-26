const mongoose = require("mongoose");
//connect to db

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MOGO_URL);
    console.log("DB has been connected");
  } catch (error) {
    console.log("DB Connection failed", error.message);
  }
};

module.exports = connectDB;

//ZNfWvTRd8sNf6Xof
//mongodb+srv://hailemichaelassefa5:ZNfWvTRd8sNf6Xof@notice-board.0vbwjug.mongodb.net/?retryWrites=true&w=majority&appName=notice-board