const session = require("express-session");

const MongoDBSession = require("connect-mongodb-session")(session);

const store = new MongoDBSession({
  uri: "mongodb://127.0.0.1:27017/task-api-elred",
  collection: "userSessions",
});

const initializeSession = session({
  secret: "mysecret",
  resave: false,
  saveUninitialized: false,
  store: store,
});

module.exports = initializeSession;
