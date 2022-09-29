function checkUnknowns(params, allowedKeys) {
  for (const key in params) {
    if (params.hasOwnProperty(key) && !allowedKeys.has(key)) {
      throw new Error("Unknown keys in request body.");
    }
  }
}

const signupSchemaValidator = (req, res, next) => {
  const allowedKeys = new Set(["username", "email", "password"]);
  try {
    checkUnknowns(req.body, allowedKeys);
  } catch (e) {
    return res.status(400).send(e.message);
  }
  next();
};

const loginSchemaValidator = (req, res, next) => {
  const allowedKeys = new Set(["email", "password"]);
  try {
    checkUnknowns(req.body, allowedKeys);
  } catch (e) {
    return res.status(400).send(e.message);
  }
  next();
};

const verifyOTPSchemaValidator = (req, res, next) => {
  const allowedKeys = new Set(["email", "otp"]);
  try {
    checkUnknowns(req.body, allowedKeys);
  } catch (e) {
    return res.status(400).send(e.message);
  }
  next();
};

module.exports = {
  signupSchemaValidator,
  loginSchemaValidator,
  verifyOTPSchemaValidator,
};
