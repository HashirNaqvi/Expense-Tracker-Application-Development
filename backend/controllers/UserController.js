const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

// Middleware to verify token and attach user ID to req.user
const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "HashirNaqviKey");
    req.user = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
});

// User Registration and Login Controller
const usersController = {
  // Register
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Validate input fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Send the response
    res.json({
      username: user.username,
      email: user.email,
      id: user._id,
      message: "User registered successfully",
    });
  }),

  // Login
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a token
    const token = jwt.sign({ id: user._id }, "HashirNaqviKey", {
      expiresIn: "30d",
    });

    // Send response with token and user details
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      message: "Login successful",
    });
  }),

  // Profile
  profile: asyncHandler(async (req, res) => {
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ username: user.username, email: user.email });
  }),

  // Change password
  changeUserPassword: asyncHandler(async (req, res) => {
    const { newPassword } = req.body;
    if (!newPassword) {
      return res.status(400).json({ message: "New password is required" });
    }

    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;

    // Save the updated password
    await user.save({ validateBeforeSave: false });
    res.json({ message: "Password changed successfully" });
  }),

  // Update user profile
  updateUserProfile: asyncHandler(async (req, res) => {
    const { email, username } = req.body;
    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "Username and email are required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user,
      { username, email },
      { new: true }
    );

    res.json({ message: "User profile updated successfully", updatedUser });
  }),
};

module.exports = { usersController, verifyToken };
