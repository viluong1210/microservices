const express = require("express");
const accessControllers = require("../../controllers/access.controller");
const router = express.Router();

router.post("/signUp", accessControllers.signUP);

module.exports = router;
