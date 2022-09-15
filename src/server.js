const express = require("express");
const app = express();
app.use(express.json());

require("./database/mongoose");

const userRouter = require("./router/userRouter");

app.use("/users", userRouter);

app.listen(3000, () => console.log("server up"));
