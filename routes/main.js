const express = require("express");

const hardwareController = require("../controllers/main");

const router = express.Router();

// GET /hardware/instruction
router.get("/instruction", hardwareController.getInstruction);

// POST /hardware/data
router.post("/data", hardwareController.postData);

module.exports = router;
