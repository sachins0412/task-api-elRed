const sgMail = require("@sendgrid/mail");

const API_KEY = process.env.API_KEY;

sgMail.setApiKey(API_KEY);

const sendEmail = (email, otp) => {
  sgMail
    .send({
      to: email,
      from: "saxenas964@gmail.com",
      subject: `OTP Verification Email`,
      text: `Your OTP for login verification in task-api-elred is ${otp}`,
    })
    .then(() => {
      console.log("mail sent for OTP verification");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = { sendEmail };
