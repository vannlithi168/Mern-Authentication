const express = require("express");
const { signUp } = require("../controllers/userController");
const { asyncHandler } = require("../middlewares/errorHandler");

const router = express.Router();

// Sign Up Route
router.post("/signup", asyncHandler(signUp));

module.exports = router;
