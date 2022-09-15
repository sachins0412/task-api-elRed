const express = require("express");
const app = express();

const userRouter = require("./router/userRouter");

app.use("/user", userRouter);

app.listen(3000, () => console.log("server up"));
