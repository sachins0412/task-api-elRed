const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.status(401).send("you are not authorized. Please login first.");
  }
};

module.exports = isAuth;
