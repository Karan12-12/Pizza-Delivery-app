const express = require("express");

const router = express.Router();

const usersController = require("../controllers/usersController");

router.post("/register", usersController.create);
router.post("/login", usersController.createSession);

module.exports = router;
