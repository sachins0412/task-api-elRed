const session = require("express-session");

const MongoDBSession = require("connect-mongodb-session")(session);

const store = new MongoDBSession({
  uri: process.env.MONGODB_URI,
  collection: "userSessions",
});

const initializeSession = session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 1000,
  },
  store: store,
});

module.exports = initializeSession;
