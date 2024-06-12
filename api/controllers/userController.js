const bcrypt = require("bcrypt");
const db = require("../database");
const passport = require("passport");
const User = db.User;

// Helper function to exclude password and other sensitive information from user objects before sending them to the client
function getUserData(user) {
  const {password, emailVerificationToken, passwordResetToken, ...userData} =
    user.get();
  return userData;
}

// Create a new user account
exports.createUser = async (req, res) => {
  try {
    const {firstName, lastName, email, password, phoneNumber} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      // additional fields can be added here as necessary
    });

    res.status(201).send(getUserData(newUser));
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Failed to create user.");
  }
};

// Login handler
exports.loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).send(info.message);

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.send(getUserData(user));
    });
  })(req, res, next);
};

// Logout handler
exports.logoutUser = (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.error("Logout failed:", err);
      return res.status(500).send("Logout failed");
    }
    res.send("Logged out successfully");
  });
};

// Update user account
exports.updateUser = async (req, res) => {
  try {
    const {userId} = req.params; // Assuming userID is passed as URL parameter
    const updates = req.body;

    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const updatedUser = await User.update(updates, {
      where: {id: userId},
      returning: true,
      individualHooks: true, // Necessary if you want to execute hooks such as hashing the password
    });

    if (updatedUser) {
      res.send(getUserData(updatedUser[1][0])); // Sequelize returns an array where the second element contains the array of updated instances
    } else {
      res.status(404).send("User not found.");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Failed to update user.");
  }
};

// Include other handlers as necessary, e.g., password reset, email verification, etc.
