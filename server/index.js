const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
require("dotenv").config();
const customerRoute = require("./routes/customer.routes");
app.use("/api", customerRoute);
module.exports = app;
