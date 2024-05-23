import express from "express";
import { listAllTasks } from "../../services/tasks/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  // je dois faire appel à la fonction qui permet de lire toutes
  // les tâches qui se trouvent dans le fichier tasks.json
  // une fois que j'aurai récupéré toutes les tâches, je les enverrai dans
  // la réponse à la requete

  listAllTasks()
    .then((tasks) => {
      return res.json({
        tasks,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        error: "Internal server error",
      });
    });
});

export default router;
