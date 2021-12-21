const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const hardwareRouter = require("./routes/main");

const app = express();

app.use(cors());
app.use(bodyParser.json()); // application/json

app.use("/hardware", hardwareRouter);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});
app.get("/abstract", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/abstract.html"));
});
app.get("/methodology", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/methodology.html"));
});
app.use(express.static("dist"));

mongoose
  .connect(process.env.MONGOOSE_CONNECTION_STRING)
  .then((result) => {
    app.listen(8080);
    console.log("Listening to 8080");
  })
  .catch((err) => console.log(err));
