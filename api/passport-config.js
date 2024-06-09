const LocalStrategy = require("passport-local").Strategy;
const {Op} = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("./database"); // Ensure the path is correct for your project
console.log(db.User);
const User = db.User;

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email", // Change from "login" to "email"
        passwordField: "password",
      },
      (email, password, done) => {
        User.findOne({
          where: {
            email: email, // Updated to search only by email
          },
        })
          .then((user) => {
            if (!user) {
              return done(null, false, {
                message: "No user found with that email address",
              });
            }

            // Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {message: "Password incorrect"});
              }
            });
          })
          .catch((err) => {
            console.error("Database error in Passport strategy:", err);
            return done(err);
          });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findByPk(id, {
      attributes: {exclude: ["password"]},
    })
      .then((user) => {
        done(null, user);
      })
      .catch((error) => {
        done(error, null);
      });
  });
};
