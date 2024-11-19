const express = require("express");
const { usersController } = require("../controllers/UserController"); // Ensure correct import
const isAuthenticated = require("../middlewares/Authantication"); // Ensure correct import
const userRouter = express.Router();

// User registration route
userRouter.post("/api/v1/users/register", usersController.register);

// User login route
userRouter.post("/api/v1/users/login", usersController.login);

// Profile route (requires authentication)
userRouter.get(
  "/api/v1/users/profile",
  isAuthenticated,
  usersController.profile
);

// Change password route (requires authentication)
userRouter.put(
  "/api/v1/users/change-Password",
  isAuthenticated,
  usersController.changeUserPassword
);

// Update profile route (requires authentication)
userRouter.put(
  "/api/v1/users/update-profile",
  isAuthenticated,
  usersController.updateUserProfile
);

module.exports = userRouter;
