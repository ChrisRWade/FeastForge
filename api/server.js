const express = require("express");
const next = require("next");
const {sequelize} = require("./database"); // Adjust path as necessary
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");

require("dotenv").config({path: path.resolve(__dirname, "../.env")});
require("./passport-config")(passport);

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.use(morgan("dev"));
  app.use(cors());

  app.use(express.json());

  app.use(passport.initialize());
  app.use(passport.session());

  // Define your API routes here, for example:
  // app.use('/api', apiRoutes);

  // Serve all Next.js pages
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  // Test the DB Connection
  sequelize
    .authenticate()
    .then(() => {
      console.log(
        "Connection to the database has been established successfully."
      );
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
