const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("response from user router");
});

module.exports = router;
