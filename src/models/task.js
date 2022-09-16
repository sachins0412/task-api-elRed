const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  date: {
    type: Date,
    default: new Date(),
  },
  task: {
    type: String,
    trim: true,
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
