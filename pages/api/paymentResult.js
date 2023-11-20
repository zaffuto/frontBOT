const FlowApi = require("flowcl-node-api-client");
import moment from "moment";
import { db } from "../../services/firebaseService";
const mailgun = require("mailgun.js");
const mg = mailgun.client({
  username: "api",
  key: "key-80d577c302f3bcad991bea13930b3fde",
});

export default async function handler(request, response) {
  db.collection("accounts")
    .doc(request.query.uid)
    .get()
    .then(async (documentSnapshot) => {
      if (documentSnapshot.exists) {
        try {
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
          if (flowResponse.status == 2) {
            await db
              .collection("accounts")
              .doc(documentSnapshot.id)
              .update({
                paymentStatus: "DONE",
                expirationDate: moment().add(1, "years").toDate(),
              });
            await db.collection("paymentData").add({
              accountId: documentSnapshot.id,
              dateCreated: new Date(),
              paymentData: flowResponse,
            });
            mg.messages
              .create("mail.smarterbot.cl", {
                from: "SmarterBot<noreply@mail.smarterbot.cl>",
                to: [documentSnapshot.data().email],
                subject: "Confirmación de pago de tu cuenta SmarterBot",
                text: "Te damos la bienvenida a SmarterBot",
                html: `<html><head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    <title>Simple Transactional Email</title>
                    <style>
                      /* -------------------------------------
                          GLOBAL RESETS
                      ------------------------------------- */
                      
                      /*All the styling goes here*/
                      
                      img {
                        border: none;
                        -ms-interpolation-mode: bicubic;
                        max-width: 100%; 
                      }
                
                      body {
                        background-color: #f6f6f6;
                        font-family: sans-serif;
                        -webkit-font-smoothing: antialiased;
                        font-size: 14px;
                        line-height: 1.4;
                        margin: 0;
                        padding: 0;
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%; 
                      }
                
                      table {
                        border-collapse: separate;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        width: 100%; }
                        table td {
                          font-family: sans-serif;
                          font-size: 14px;
                          vertical-align: top; 
                      }
                
                      /* -------------------------------------
                          BODY & CONTAINER
                      ------------------------------------- */
                
                      .body {
                        background-color: #f6f6f6;
                        width: 100%; 
                      }
                
                      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                      .container {
                        display: block;
                        margin: 0 auto !important;
                        /* makes it centered */
                        max-width: 580px;
                        padding: 10px;
                        width: 580px; 
                      }
                
                      /* This should also be a block element, so that it will fill 100% of the .container */
                      .content {
                        box-sizing: border-box;
                        display: block;
                        margin: 0 auto;
                        max-width: 580px;
                        padding: 10px; 
                      }
                
                      /* -------------------------------------
                          HEADER, FOOTER, MAIN
                      ------------------------------------- */
                      .main {
                        background: #ffffff;
                        border-radius: px;
                        width: 100%; 
                      }
                
                      .wrapper {
                        box-sizing: border-box;
                        padding: 20px; 
                      }
                
                      .content-block {
                        padding-bottom: 10px;
                        padding-top: 10px;
                      }
                
                      .footer {
                        clear: both;
                        margin-top: 10px;
                        text-align: center;
                        width: 100%; 
                      }
                        .footer td,
                        .footer p,
                        .footer span,
                        .footer a {
                          color: #999999;
                          font-size: 12px;
                          text-align: center; 
                      }
                
                      /* -------------------------------------
                          TYPOGRAPHY
                      ------------------------------------- */
                      h1,
                      h2,
                      h3,
                      h4 {
                        color: #000000;
                        font-family: sans-serif;
                        font-weight: 400;
                        line-height: 1.4;
                        margin: 0;
                        margin-bottom: 30px; 
                      }
                
                      h1 {
                        font-size: 40px;
                        font-weight: 800;
                        text-align: left;
                        margin-top: .5em;
                      }
                
                      p,
                      ul,
                      ol {
                        font-family: sans-serif;
                        font-size: 14px;
                        font-weight: normal;
                        margin: 0;
                        margin-bottom: 15px; 
                      }
                        p li,
                        ul li,
                        ol li {
                          list-style-position: inside;
                          margin-left: 5px; 
                      }
                
                      a {
                        color: #3498db;
                        text-decoration: underline; 
                      }
                
                      /* -------------------------------------
                          BUTTONS
                      ------------------------------------- */
                      .btn {
                        box-sizing: border-box;
                        width: 100%; }
                        .btn > tbody > tr > td {
                          padding-bottom: 15px; }
                        .btn table {
                          width: auto; 
                      }
                        .btn table td {
                          background-color: #ffffff;
                          border-radius: 5px;
                          text-align: center; 
                      }
                        .btn a {
                          background-color: #ffffff;
                          border: solid 1px #3498db;
                          border-radius: 100px;
                          box-sizing: border-box;
                          color: #3498db;
                          cursor: pointer;
                          display: inline-block;
                          font-size: 14px;
                          font-weight: bold;
                          margin: 0;
                          padding: 12px 25px;
                          text-decoration: none;
                          text-transform: capitalize; 
                      }
                
                      .btn-primary table td {
                        background-color: #0043FF; 
                                  border-radius: 100px;
                      }
                
                      .btn-primary a {
                        background-color: #0043FF;
                        border-color: #0043FF;
                        color: #ffffff; 
                      }
                
                      /* -------------------------------------
                          OTHER STYLES THAT MIGHT BE USEFUL
                      ------------------------------------- */
                      .last {
                        margin-bottom: 0; 
                      }
                
                      .first {
                        margin-top: 0; 
                      }
                
                      .align-center {
                        text-align: center; 
                      }
                
                      .align-right {
                        text-align: right; 
                      }
                
                      .align-left {
                        text-align: left; 
                      }
                
                      .clear {
                        clear: both; 
                      }
                
                      .mt0 {
                        margin-top: 0; 
                      }
                
                      .mb0 {
                        margin-bottom: 0; 
                      }
                
                      .preheader {
                        color: transparent;
                        display: none;
                        height: 0;
                        max-height: 0;
                        max-width: 0;
                        opacity: 0;
                        overflow: hidden;
                        mso-hide: all;
                        visibility: hidden;
                        width: 0; 
                      }
                
                      .powered-by a {
                        text-decoration: none; 
                      }
                
                      hr {
                        border: 0;
                        border-bottom: 1px solid #f6f6f6;
                        margin: 20px 0; 
                      }
                
                      /* -------------------------------------
                          RESPONSIVE AND MOBILE FRIENDLY STYLES
                      ------------------------------------- */
                      @media only screen and (max-width: 620px) {
                        table.body h1 {
                          font-size: 28px !important;
                          margin-bottom: 10px !important; 
                        }
                        table.body p,
                        table.body ul,
                        table.body ol,
                        table.body td,
                        table.body span,
                        table.body a {
                          font-size: 16px !important; 
                        }
                        table.body .wrapper,
                        table.body .article {
                          padding: 10px !important; 
                        }
                        table.body .content {
                          padding: 0 !important; 
                        }
                        table.body .container {
                          padding: 0 !important;
                          width: 100% !important; 
                        }
                        table.body .main {
                          border-left-width: 0 !important;
                          border-radius: 0 !important;
                          border-right-width: 0 !important; 
                        }
                        table.body .btn table {
                          width: 100% !important; 
                        }
                        table.body .btn a {
                          width: 100% !important; 
                        }
                        table.body .img-responsive {
                          height: auto !important;
                          max-width: 100% !important;
                          width: auto !important; 
                        }
                      }
                
                      /* -------------------------------------
                          PRESERVE THESE STYLES IN THE HEAD
                      ------------------------------------- */
                      @media all {
                        .ExternalClass {
                          width: 100%; 
                        }
                        .ExternalClass,
                        .ExternalClass p,
                        .ExternalClass span,
                        .ExternalClass font,
                        .ExternalClass td,
                        .ExternalClass div {
                          line-height: 100%; 
                        }
                        .apple-link a {
                          color: inherit !important;
                          font-family: inherit !important;
                          font-size: inherit !important;
                          font-weight: inherit !important;
                          line-height: inherit !important;
                          text-decoration: none !important; 
                        }
                        #MessageViewBody a {
                          color: inherit;
                          text-decoration: none;
                          font-size: inherit;
                          font-family: inherit;
                          font-weight: inherit;
                          line-height: inherit;
                        }
                        .btn-primary table td:hover {
                          background-color: #34495e !important; 
                        }
                        .btn-primary a:hover {
                          background-color: #34495e !important;
                          border-color: #34495e !important; 
                        } 
                      }
                
                    </style>
                  </head>
                  <body>
                    <span className="preheader">Tu cuenta ya está creada y tus subscripciones listas para ser inscritas.</span>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" className="body">
                      <tbody><tr>
                        <td>&nbsp;</td>
                        <td className="container">
                          <div className="content">
                
                            <table width="100%" style="max-width:640px;">
                            <!-- START CENTERED WHITE CONTAINER -->
                            </table><table role="presentation" className="main">
                              <!-- START MAIN CONTENT AREA -->
                              <tbody><tr>
                                <td className="wrapper">
                                  <table>
                                      <tbody><tr>
                                      <td>
                                        <img src="https://smarterbot.cl/images/email-cover.png" width="100%" style="border-radius: 10px;">
                                      </td>
                                    </tr>
                                  </tbody></table>
                  
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tbody><tr>
                                      <td>
                                      <h1 style="font-size:22px">Hola <span style="color: ##0043ff">${
                                        documentSnapshot.data().firstName
                                      },</span><br/>hemos recibido el pago de tu suscripción</h1>
                                        <p>Tu cuenta SmarterBot ya está activa y te invitamos a completar todos los datos de tu suscripción</p>
                                        <p>Si compraste más de una membresía, ingresa los datos de tus invitados para que todos puedan acceder a las reservas de los centros de ski asociados. ¡Te esperamos!</p> 
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" className="btn btn-primary">
                                          <tbody>
                                            <tr>
                                              <td align="left">
                                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                  <tbody>
                                                    <tr>
                                                      <td> <a href="https://smarterbot.cl/auth/login" target="_blank">Inicia sesión aquí</a> </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                
                            <!-- END MAIN CONTENT AREA -->
                            </tbody></table>
                            <!-- END CENTERED WHITE CONTAINER -->
                
                            <!-- START FOOTER -->
                            <div className="footer">
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                  <td className="content-block">
                                    <span className="apple-link">SmarterBot 2023</span>
                                  </td>
                                </tr>
                
                              </tbody></table>
                            </div>
                            <!-- END FOOTER -->
                
                          </div>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    </tbody></table>
                  
                </body></html>
                `,
              })
              .then((msg) => {
                return response.redirect(`/pay/${request.query.uid}/success`);
              })
              .catch((err) => {
                console.log("error: ", err);
                return response.redirect(`/pay/${request.query.uid}/error`);
              });
          } else {
            console.log(flowResponse);
            mg.messages
              .create("mail.smarterbot.cl", {
                from: "SmarterBot<noreply@mail.smarterbot.cl>",
                to: "esteban@slashstudio.cl",
                subject: "Pago con problema en SmarterBot",
                text: "",
                html: `Llegó un pedido con problema en mountainpass, acá va el problema: ${JSON.stringify(
                  flowResponse
                )}`,
              })
              .then((msg) => {
                return response.redirect(`/pay/${request.query.uid}/error`);
              })
              .catch((err) => {
                console.log("error: ", err);
                return response.redirect(`/pay/${request.query.uid}/error`);
              });
          }
        } catch (error) {
          return response.redirect(`/pay/${request.query.uid}/error`);
        }
      } else {
        return response.redirect(`/pay/${request.query.uid}/error`);
      }
    })
    .catch((error) => {
      return response.redirect(`/pay/${request.query.uid}/error`);
    });
}
