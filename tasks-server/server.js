import express from "express";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";

import tasksRouter from "./api/routes/tasks/index.js";
import userRouter from "./api/routes/users/index.js";
import Database from "./Database/index.js";

const app = express();

Database.connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });

app.use(express.json());
app.use(cookieParser());

app.use("/tasks", tasksRouter);
app.use("/users", userRouter);

const httpServer = app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("message", (message) => {
    console.log("New message from client", message);
    socket.emit("message", "Thank you for sending the task");
  });
});
