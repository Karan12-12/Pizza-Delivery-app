const express = require("express");

const router = express.Router();

const pizzasController = require("../controllers/pizzasController");

router.get("/getAllPizzas", pizzasController.getAllPizzas);

module.exports = router;
