const FlowApi = require('flowcl-node-api-client');

export default async function handler(request, response) {
  try {
    console.log('PAYMENT CALLBACK');
    let config = {
      apiKey: '332F432C-0523-4832-A963-36CLA8D505F8',
      secretKey: 'ed20bb9761d5f18c7d7171b804b12a4ba7ba1797',
      apiURL: 'https://www.flow.cl/api',
      baseURL: 'https://mountainpass.cl',
    };
    let params = {
      token: request.body.token,
    };
    let serviceName = 'payment/getStatus';
    const flowApi = new FlowApi(config);
    let flowResponse = await flowApi.send(serviceName, params, 'GET');
    console.log(flowResponse);
    return response
      .status(200)
      .send({status: 'OK', flowResponse: flowResponse});
  } catch (error) {
    return response.status(200).send({status: 'ERROR', error: error});
  }
}
