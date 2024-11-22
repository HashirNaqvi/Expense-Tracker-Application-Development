const express = require("express");
const usersController = require("../controllers/UserController");
const isAuthenticated = require("../middlewares/Authantication");
const categoryController = require("../controllers/categoryController");
const categoryRouter = express.Router();

//!add
categoryRouter.post(
  "/api/v1/categories/create",
  isAuthenticated,
  categoryController.create
);
//! lists
categoryRouter.get(
  "/api/v1/categories/lists",
  isAuthenticated,
  categoryController.lists
);
//! update
categoryRouter.put(
  "/api/v1/categories/update/:categoryId",
  isAuthenticated,
  categoryController.update
);
//! delete
categoryRouter.delete(
  "/api/v1/categories/delete/:id",
  isAuthenticated,
  categoryController.delete
);

module.exports = categoryRouter;
