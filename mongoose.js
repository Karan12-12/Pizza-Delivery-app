const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://yadavkaran471:UodgikBSn4hL8ojT@cluster0.67r13yb.mongodb.net/pizza-db";

mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo db is successfully connected");
});
db.on("error", () => {
  console.log("Mongo db connection failed");
});

module.exports = mongoose;

// require("dotenv").config();
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://yadavkaran471:QzPOHviCvK0yxib4@cluster0.67r13yb.mongodb.net/pizza-db"
//     );
//     console.log("connect to mongoDB successfully");
//   } catch (error) {
//     console.log("connnection failed", error);
//   }
// };

// // mongoose.connect(process.env.MONGO_CONNECTION_URL);

// // const db = mongoose.connection;

// // db.on("error", console.error.bind(console, "error in connecting to database"));

// // db.once("open", function () {
// //   console.log("successfully connected to database");
// // });

// module.exports = connectDB;
