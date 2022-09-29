const checkUnknowns = require("./../utils/checkUnknowns");

const taskSchemaValidator = (req, res, next) => {
  const allowedKeys = new Set(["task", "date", "status"]);
  try {
    checkUnknowns(req.body, allowedKeys);
  } catch (e) {
    return res.status(400).send(e.message);
  }
  next();
};

module.exports = { taskSchemaValidator };
