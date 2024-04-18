import getUsers from "./getUsers.js";

console.log("lancement de mon programme.");
console.log(
  "je vais effectuer une requête API pour récupérer des utilisateurs."
);
console.log(
  "Cette action va prendre du temps, donc je vais continuer à exécuter mon code tout en attendant la réponse de l'API."
);

const monCallback = function (response, error) {
  if (error) {
    console.log("Une erreur est survenue !");
  } else {
    console.log(
      "tout s'est bien passé. J'ai récupéré les données :",
      response.data
    );
  }
};

console.log(
  "ici je peux continuer à exécuter mon code sans attendre la réponse de l'API, en partant du principe que ce que je vais faire ici ne dépend pas de la réponse de l'api."
);

getUsers(monCallback);
