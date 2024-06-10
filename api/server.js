const express = require("express");
const next = require("next");
const {sequelize} = require("./database"); // Adjust path as necessary
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const userRouter = require("./routes/userRouter");

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

  // Configure the session store
  const sessionStore = new SequelizeStore({
    db: sequelize,
  });

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      store: sessionStore,
      resave: false, // 'false' is typically recommended
      saveUninitialized: false, // 'false' for GDPR compliance
      cookie: {
        // Set cookie options here
        secure: "auto", // recommended to use 'auto'
        maxAge: 30 * 24 * 60 * 60 * 1000, // 1 month in milliseconds
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // Use the userRouter for all user-related API routes
  app.use("/api", userRouter);

  // Serve all Next.js pages
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
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
