const FlowApi = require("flowcl-node-api-client");
import { db } from "../../services/firebaseService";

export default async function handler(request, response) {
  const config = {
    apiKey: "68EB4FFE-0454-4B3C-AD87-675851LD2F8D",
    secretKey: "39069667c3db958f40d9b084c7b9509e8cd50f13",
    apiURL: "https://www.flow.cl/api",
    baseURL: "https://smarterbot.cl",
  };
  let settings = await db.collection("settings").doc("--").get();
  db.collection("accounts")
    .doc(request.query.uid)
    .get()
    .then(async (documentSnapshot) => {
      if (documentSnapshot.exists) {
        if (documentSnapshot.data().paymentStatus != "PENDING") {
          return response
            .status(200)
            .send({ status: "ERROR", message: "PAYMENT_ALREADY_DONE" });
        } else {
          const params = {
            commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
            subject: `MountainPass - ${
              documentSnapshot.data().subscriptionsCount == 1
                ? "1 Suscripción Anual"
                : `${
                    documentSnapshot.data().subscriptionsCount
                  } suscripciones anuales`
            }`,
            currency: "CLP",
            amount: parseInt(documentSnapshot.data().totalPrice),
            //amount: 500,
            email: documentSnapshot.data().email,
            paymentMethod: 9,
            urlConfirmation: config.baseURL + "/api/paymentCallback",
            urlReturn:
              config.baseURL + `/api/paymentResult?uid=${request.query.uid}`,
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
            return response.redirect(`/pay/${request.query.uid}/error`);
          }
        }
      } else {
        return response.redirect(`/pay/${request.query.uid}/error`);
      }
    })
    .catch((error) => {
      console.log(error);
      return response.redirect(`/pay/${request.query.uid}/error`);
    });
}
