const express = require("express");
const port = 7000;
const app = express();
const path = require("path");
const pizzasRoute = require("./routes/pizzasRoute");
const usersRoute = require("./routes/usersRoute");
const ordersRoute = require("./routes/ordersRoute");

const db = require("./mongoose");
const Pizzas = require("./Model/PizzaModel");
app.use(express.json());

app.use("/api/pizzas", pizzasRoute);
app.use("/api/users", usersRoute);
app.use("/api/orders", ordersRoute);
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/", function (req, res) {
  return res.end("hello");
});

app.listen(port, function (err) {
  if (err) {
    console.log("error in connecting to express server", err);
    return;
  }
  console.log("Express server is running on port:", port);
});
