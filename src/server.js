const express = require("express");
const app = express();
app.use(express.json());

require("./database/mongoose");

const userRouter = require("./router/userRouter");
const taskRouter = require("./router/taskRouter");

app.use("/users", userRouter);

app.use("/tasks", taskRouter);

app.listen(3000, () => console.log("server up"));
