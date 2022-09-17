const express = require("express");
const router = express.Router();

const { User } = require("./../models/user");

const checkLoggedIn = require("./../middlewares/checkLoggedInMiddleware");

router.post("/signup", checkLoggedIn, async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    req.session.isAuth = true;
    res.send("SignUp successful and you are logged in now");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", checkLoggedIn, async (req, res) => {
  try {
    const user = await User.findUser(req.body.email, req.body.password);
    req.session.isAuth = true;
    res.send(user);
  } catch (error) {
    error.status = error.status || 500;
    res.status(error.status).json(error);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.isAuth) {
    req.session.destroy();
    return res.send("logged off now");
  }
  res.status(401).send("you are not loggedin");
});

module.exports = router;
