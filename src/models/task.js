const mongoose = require("mongoose");
const moment = require("moment");
const taskSchema = mongoose.Schema({
  date: {
    type: String,
    default: moment(new Date()).format("YYYY-MM-DD"),
  },
  task: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  status: {
    type: String,
    default: "incomplete",
    lowercase: true,
    validate(value) {
      if (!["incomplete", "complete"].includes(value)) {
        throw new Error("invalid status value");
      }
    },
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = { Task };
