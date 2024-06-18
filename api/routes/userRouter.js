const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// Route to handle user creation
router.post("/create", userController.createUser);

// Route to handle user login
router.post("/login", userController.loginUser);

// Route to handle user logout
router.get("/logout", userController.logoutUser);

// Route to handle updating user information
router.put("/:userId", userController.updateUser);

router.get("/session", userController.getSession);

module.exports = router;
