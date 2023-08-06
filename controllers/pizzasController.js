const Pizzas = require("../Model/PizzaModel");

module.exports.getAllPizzas = async function (req, res) {
  try {
    const pizzas = await Pizzas.find({});
    return res.send(pizzas);
  } catch (error) {
    console.log("error in getting all pizzas", error);
  }
};
