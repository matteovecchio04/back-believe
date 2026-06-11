const express = require("express");
const router = express.Router();

const { getTables } = require("../controllers/dbController");

router.get("/tables", getTables);

module.exports = router;