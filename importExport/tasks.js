import chalk from "chalk";

const addTask = function (task) {
  console.log(chalk.green("Task added: ", task));
};

const deleteTask = function () {
  console.log(chalk.red("Task deleted"));
};

const listAllTasks = function () {
  console.log(chalk.blue("Listing all tasks"));
};

const findTask = function () {
  console.log(chalk.yellow("Task found"));
};

const updateTask = function () {
  console.log(chalk.magenta("Task updated"));
};

export { addTask, deleteTask, listAllTasks, findTask, updateTask };
