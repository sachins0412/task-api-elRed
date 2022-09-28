const express = require("express");
const router = express.Router();

const { User } = require("./../models/user");

const { sendEmail } = require("../utils/sendEmail");
const generateOTP = require("./../utils/otpGenerator");

router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  user.otp = generateOTP();
  try {
    await user.save();

    sendEmail(user.email, user.otp);

    res.send(
      "SignUp successful. Please verify the OTP (sent on your email) at /users/verify route to login and begin your session."
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findUser(req.body.email, req.body.password);

    user.otp = generateOTP();
    await user.save();
    sendEmail(user.email, user.otp);

    res.send(
      "Please verify the OTP(sent on your email) at /users/verify to begin your session"
    );
  } catch (error) {
    error.status = error.status || 500;
    res.status(error.status).json(error);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.isAuth) {
    req.session.destroy(); // change to use JWT approach
    return res.send("logged off now");
  }
  res.status(401).send("you are not logged in");
});

router.post("/verify", async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send("User Not Found");
  }

  if (!user.otp) {
    return res
      .status(403)
      .send("Please generate OTP first before proceeding to verify");
  }

  if (user.otp === parseInt(otp)) {
    user.set("otp", undefined, { strict: false });

    const token = await user.generateAuthToken();
    await user.save();

    const response = {
      message: "OTP verified. You are now logged in",
      user,
      token,
    };

    res.send(response);
  } else {
    res.status(400).send("OTP verification failed");
  }
});
module.exports = router;
