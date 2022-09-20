const express = require("express");
const app = express();
app.use(express.json());

require("./database/mongoose");

const initializeSession = require("./middlewares/initializeSession");

app.use(initializeSession);

const PORT = process.env.PORT;

const userRouter = require("./router/userRouter");
const taskRouter = require("./router/taskRouter");

app.use("/users", userRouter);

app.use("/tasks", taskRouter);

app.listen(PORT, () => console.log("server up"));
