const User = require("../models/Users");

// Function to check if a user already exists
const checkUserExists = async (username) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    const error = new Error("User already exists");
    error.status = 409; // Conflict
    throw error; // Throw error for handling later
  }
};

module.exports = {
  checkUserExists,
};
