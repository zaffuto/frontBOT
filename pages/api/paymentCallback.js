const FlowApi = require("flowcl-node-api-client");

export default async function handler(request, response) {
  try {
    console.log("PAYMENT CALLBACK");
    let config = {
      apiKey: "68EB4FFE-0454-4B3C-AD87-675851LD2F8D",
      secretKey: "39069667c3db958f40d9b084c7b9509e8cd50f13",
      apiURL: "https://www.flow.cl/api",
      baseURL: "https://smarterbot.cl",
    };
    let params = {
      token: request.body.token,
    };
    let serviceName = "payment/getStatus";
    const flowApi = new FlowApi(config);
    let flowResponse = await flowApi.send(serviceName, params, "GET");
    console.log(flowResponse);
    return response
      .status(200)
      .send({ status: "OK", flowResponse: flowResponse });
  } catch (error) {
    return response.status(200).send({ status: "ERROR", error: error });
  }
}
