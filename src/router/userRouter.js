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

router.post("/login", async (req, res) => {
  try {
    const user = await User.findUser(req.body.email, req.body.password);
    res.send(user);
  } catch (error) {
    error.status = error.status || 500;
    res.status(error.status).json(error);
  }
});

module.exports = router;
