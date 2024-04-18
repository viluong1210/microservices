const express = require("express");
const router = express.Router();
const baseApi = "/v1/api";

router.use(baseApi, require("./access"));

module.exports = router;
