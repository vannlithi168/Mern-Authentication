const bcrypt = require("bcrypt");
const User = require("../models/Users");
const { checkUserExists } = require("../utils/userUtils"); // Import the utility function

// Sign Up Controller
const signUp = async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists using the utility function
  await checkUserExists(username);

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({
    username,
    password: hashedPassword,
  });

  // Save the user to the database
  await user.save();
  res.status(201).json({ message: "User created successfully" });
};

module.exports = {
  signUp,
};
