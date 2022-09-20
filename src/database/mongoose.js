const mongoose = require("mongoose");
const mongoDBURI = process.env.MONGODB_URI;
mongoose.connect(mongoDBURI);
