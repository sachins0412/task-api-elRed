const sgMail = require("@sendgrid/mail");

const API_KEY = "dummy key";

sgMail.setApiKey(API_KEY);

const otp = 1234;

const sendEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "saxenas964@gmail.com",
      subject: `OTP Verification Email`,
      text: `Your OTP for login verification in task-api-elred is ${otp}`,
    })
    .then(() => {
      console.log("mail sent for enrollment");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = { sendEmail };
