const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const historicCtrl = require("../controllers/historic");

router.post("/", authMiddleware, historicCtrl.createHistoric);
router.get("/", authMiddleware, historicCtrl.getAllHistorics);

module.exports = router;
