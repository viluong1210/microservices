const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const router = require("./routers/index");
const app = express();

require("dotenv").config();

// init middleware
// app.use(morgan('combined'));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// init db
require("./utils/mongoose");

// init router
app.use("", router);

module.exports = app;
