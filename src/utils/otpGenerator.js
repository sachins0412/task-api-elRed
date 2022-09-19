const otpGenerator = require("otp-generator");

module.exports = () => {
  return otpGenerator.generate(5, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
};
