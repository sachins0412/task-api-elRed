const checkLoggedIn = (req, res, next) => {
  if (req.session && req.session.isAuth) {
    res.status(400).send("Please log off from current session first");
  } else {
    next();
  }
};

module.exports = checkLoggedIn;
