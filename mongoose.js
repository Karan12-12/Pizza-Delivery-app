require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECTION_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting to database"));

db.once("open", function () {
  console.log("successfully connected to database");
});

module.exports = db;
