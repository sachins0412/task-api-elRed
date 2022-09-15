const express = require("express");
const router = express.Router();

const { User } = require("./../models/user");

router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", (req, res) => {
  const user = req.body;
  res.json(user);
});

module.exports = router;
