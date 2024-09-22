const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./configs/db");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

connectDB();

// Use the auth routes
app.use("/api", authRoutes);

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
