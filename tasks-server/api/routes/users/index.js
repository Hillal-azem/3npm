import express from "express";
import { body, validationResult } from "express-validator";
import {
  hashPassword,
  createUser,
  generateJwt,
} from "../../services/users/index.js";

const router = express.Router();

const validationRules = [
  body("email").isEmail().withMessage("Email is not valid"),
  body("password").isLength({ min: 6 }).withMessage("Password is too short"),
];

router.post("/", validationRules, async (req, res) => {
  // je dois valider les données reçues dans le body de la requête

  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }

  //

  const { email, password } = req.body;

  try {
    // je dois faire appel au service pour hasher le mot de passe
    const hashedPassword = await hashPassword(password);

    // je dois faire appel au service pour créer un nouvel utilisateur
    createUser({ email, password: hashedPassword });

    // je dois générer un jwt signé avec RSA
    const token = await generateJwt({ email });

    // enrigister le jwt dans un cookie
    res.cookie("auth-token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }

  // réponse au client ( celui qui a émit la requête)
});

export default router;
