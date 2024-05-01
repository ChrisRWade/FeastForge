"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
let db = {};

require("dotenv").config({path: path.resolve(__dirname, "../../.env")});

// Create a Sequelize instance based on environment variables
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false, // console.log for each query
  }
);

// Read all model files in the models directory
fs.readdirSync(path.join(__dirname, "models"))
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, "models", file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

// Apply model associations if they are defined
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .sync({force: false}) // Set to true to drop tables first and re-create them
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Failed to synchronize database:", error);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
