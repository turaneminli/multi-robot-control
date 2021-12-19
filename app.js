const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const hardwareRouter = require("./routes/main");

const app = express();

app.use(cors());
app.use(bodyParser.json()); // application/json

app.use("/hardware", hardwareRouter);

mongoose
  .connect(process.env.MONGOOSE_CONNECTION_STRING)
  .then((result) => {
    app.listen(8080);
    console.log("Listening to 8080");
  })
  .catch((err) => console.log(err));
