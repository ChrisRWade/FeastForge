const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const {sequelize} = require("./database");

require("dotenv").config({path: path.resolve(__dirname, ".env")});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Test the DB Connection
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
