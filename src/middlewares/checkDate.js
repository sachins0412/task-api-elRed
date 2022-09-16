const moment = require("moment");
const checkDate = (req, res, next) => {
  let date = req.body.date;
  if (date) {
    date = moment(date).format("DD-MM-YYYY");
    if (date.includes("Invalid")) {
      return res.status(400).send("invalid date format. please use YYYY-MM-DD");
    }
    req.body.date = date;
    next();
  }
};

module.exports = checkDate;
