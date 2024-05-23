import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const usersFilePath = path.resolve(__dirname, "../../../users.json");
const privateKeyPath = path.resolve(__dirname, "../../../private.key");
//const publicKeyPath = path.resolve(__dirname, "../../../public.key");

const privateKey = fs.readFileSync(privateKeyPath, "utf-8");

function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return reject(err);
      }

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    });
  });
}

function createUser(user) {
  try {
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    users.push(user);
    fs.writeFileSync(usersFilePath, JSON.stringify(users));
  } catch (error) {
    throw new Error("Error while creating a new user");
  }
}

function generateJwt(data) {
  return new Promise((resolve, reject) => {
    const payload = {
      ...data,
      tata: "tata",
    };

    jwt.sign(
      payload,
      privateKey,
      { algorithm: "RS256", expiresIn: "1h" },
      (err, token) => {
        if (err) {
          return reject(err);
        }
        resolve(token);
      }
    );
  });
}

export { hashPassword, createUser, generateJwt };
