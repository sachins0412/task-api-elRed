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

router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).send("task not found");
    }

    updates.forEach((update) => {
      task[update] = req.body[update];
    });

    await task.save();
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).send("task not found");
    }

    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
