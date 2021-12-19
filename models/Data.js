const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    auth_id: {
      type: String,
      required: true,
    },
    velo: {
      type: String,
      required: true,
    },
    acc: {
      type: String,
      required: true,
    },
    gyro: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", dataSchema);