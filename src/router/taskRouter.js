const express = require("express");
const router = express.Router();

const { Task } = require("./../models/task");

router.post("/create", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
