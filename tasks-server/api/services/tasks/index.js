import TaskModel from "../../../models/tasks/index.js";

function listAllTasks() {
  return new Promise((resolve, reject) => {
    TaskModel.find({})
      .then((tasks) => {
        resolve(tasks);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { listAllTasks };
