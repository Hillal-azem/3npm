import {
  addTask,
  deleteTask,
  listAllTasks,
  findTask,
  updateTask,
} from "./tasks.js";

addTask("Task 1", "This is task 1");

deleteTask();

listAllTasks();

findTask();

updateTask();
