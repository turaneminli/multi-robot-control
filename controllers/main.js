const { validationResult } = require("express-validator");
const Data = require("../models/Data");

exports.getInstruction = (req, res, next) => {
  Data.find()
    .then((result) => {
      res.status(200).json({
        message: "Successfully obtained data.",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postData = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is incorrect",
      errors: errors.array(),
    });
  }

  const auth_id = req.body.auth_id;
  const velo = req.body.velo;
  const acc = req.body.acc;
  const gyro = req.body.gyro;

  const post = new Data({
    auth_id: auth_id,
    velo: velo,
    acc: acc,
    gyro: gyro,
  });

  if (auth_id == "MNEQCourseProject2021") {
    post
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Hardware data logging appended successfully",
          post: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return res.status(422).json({
      message: "Authentication is failed",
    });
  }
};
