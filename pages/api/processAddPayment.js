const FlowApi = require("flowcl-node-api-client");
import { db } from "../../services/firebaseService";

export default async function handler(request, response) {
  const config = {
    apiKey: "332F432C-0523-4832-A963-36CLA8D505F8",
    secretKey: "ed20bb9761d5f18c7d7171b804b12a4ba7ba1797",
    apiURL: "https://www.flow.cl/api",
    baseURL: "https://mountainpass.cl",
  };
  let settings = await db.collection("settings").doc("--").get();
  db.collection("accounts")
    .doc(request.query.uid)
    .get()
    .then(async (documentSnapshot) => {
      if (documentSnapshot.exists) {
        const params = {
          commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
          subject: `MountainPass - ${
            documentSnapshot.data().addedSubscriptionsCount == 1
              ? "1 Suscripción Anual"
              : `${
                  documentSnapshot.data().addedSsubscriptionsCount
                } suscripciones anuales`
          }`,
          currency: "CLP",
          amount:
            parseInt(documentSnapshot.data().addedSubscriptionsCount) *
            (parseInt(settings.data().offerPrice) > 0
              ? parseInt(settings.data().offerPrice)
              : parseInt(settings.data().price)),
          //amount: 500,
          email: documentSnapshot.data().email,
          paymentMethod: 9,
          urlConfirmation: config.baseURL + "/api/paymentCallback",
          urlReturn:
            config.baseURL + `/api/paymentAddResult?uid=${request.query.uid}`,
        };

        const serviceName = "payment/create";

        try {
          // Instancia la clase FlowApi
          const flowApi = new FlowApi(config);
          // Ejecuta el servicio
          let flowResponse = await flowApi.send(serviceName, params, "POST");
          //Prepara url para redireccionar el browser del pagador
          let redirect = flowResponse.url + "?token=" + flowResponse.token;
          // console.log(`location: ${redirect}`);
          return response.redirect(redirect);
        } catch (error) {
          console.log("ERROR EN FLOW: ", error.message);
          return response.redirect(`/pay/${request.query.uid}/add/error`);
        }
      } else {
        return response.redirect(`/pay/${request.query.uid}/add/error`);
      }
    })
    .catch((error) => {
      console.log(error);
      return response.redirect(`/pay/${request.query.uid}/add/error`);
    });
}
