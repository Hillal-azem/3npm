import express from "express";
import cookieParser from "cookie-parser";

import tasksRouter from "./api/routes/tasks/index.js";
import userRouter from "./api/routes/users/index.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/tasks", tasksRouter);
app.use("/users", userRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
