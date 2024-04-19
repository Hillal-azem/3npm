import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getAllTaks() {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(__dirname, "tasks.json").toString(), "utf8")
    );
  } catch (err) {
    console.log("an error occured while reading the file", err);
    return [];
  }
}

export { getAllTaks };
