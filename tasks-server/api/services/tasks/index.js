import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = path.resolve(__dirname, "../../../tasks.json");

function listAllTasks() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        return reject(error);
      }

      resolve(JSON.parse(data));
    });
  });
}

export { listAllTasks };
