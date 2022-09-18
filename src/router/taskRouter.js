const express = require("express");
const router = express.Router();
const { Task } = require("./../models/task");
const checkDate = require("./../middlewares/checkDate");
const isAuth = require("./../middlewares/isAuth");

router.post("/create", isAuth, checkDate, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.session.user,
  });

  try {
    await task.save();
    res.send(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", isAuth, checkDate, async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.session.user,
    });

    if (!task) {
      return res.status(404).send("task not found");
    }

    updates.forEach((update) => {
      task[update] = req.body[update];
    });

    await task.save();
    res.send(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", isAuth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.session.user,
    });

    if (!task) {
      return res.status(404).send("task not found");
    }

    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
