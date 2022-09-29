module.exports = function checkUnknowns(params, allowedKeys) {
  for (const key in params) {
    if (params.hasOwnProperty(key) && !allowedKeys.has(key)) {
      throw new Error("Unknown keys in request body.");
    }
  }
};
