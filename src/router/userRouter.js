const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("response from user router");
});

module.exports = router;
