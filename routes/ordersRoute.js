const express = require("express");

const router = express.Router();

const pizzasController = require("../controllers/ordersController");

router.post("/placeOrder", pizzasController.placeOrder);
router.post("/getOrders", pizzasController.getOrders);

module.exports = router;
