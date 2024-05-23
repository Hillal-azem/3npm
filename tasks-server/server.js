import express from "express";
import tasksRouter from "./api/routes/tasks/index.js";

const app = express();

app.use("/tasks", tasksRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
