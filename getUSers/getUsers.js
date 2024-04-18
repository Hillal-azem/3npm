import axios from "axios";

const getUsers = function (monCallbackQuiVaSexecuterALaFinDeLaRequete) {
  // faire un appel api vers un endpoint pour récupérer les utilisateurs
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      // je récupère les données de l'api
      monCallbackQuiVaSexecuterALaFinDeLaRequete(response, null);
    })
    .catch(function (error) {
      // j'intercèote l'erreur
      monCallbackQuiVaSexecuterALaFinDeLaRequete(null, error);
    });
};

export default getUsers;
