import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import Sidebar from "../../../../components/Sidebar";
import { db } from "../../../../services/firebaseService";
import moment from "moment";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function Account(props) {
  const [subscriptionsCount, setSubscriptionsCount] = useState(0);
  const [expirationDate, setExpirationDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rut, setRut] = useState("");
  const [type, setType] = useState("");
  const [subscriptors, setSubscriptors] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);

  useEffect(() => {
    if (typeof window != "undefined") {
      db.collection("accounts")
        .doc(props.userId)
        .get()
        .then((docRef) => {
          setFirstName(docRef.data().firstName);
          setLastName1(docRef.data().lastName1);
          setLastName2(docRef.data().lastName2);
          setEmail(docRef.data().email);
          setPhone(docRef.data().phone);
          setRut(docRef.data().rut);
          setType(docRef.data().type);
          setExpirationDate(
            moment
              .unix(docRef.data().expirationDate.seconds)
              .format("DD-MM-YYYY")
          );
          setSubscriptionsCount(docRef.data().subscriptionsCount);
          getSubscriptors();
          getPaymentInfo();
        });
    }
  }, []);

  const getSubscriptors = () => {
    db.collection("subscriptions")
      .where("accountId", "==", props.userId)
      .where("deleted", "==", false)
      .get()
      .then((querySnapshot) => {
        let subscriptors = querySnapshot.docs.map((item) => {
          return { id: item.id, data: item.data() };
        });
        setSubscriptors(subscriptors);
      });
  };

  const getPaymentInfo = () => {
    db.collection("paymentData")
      .where("accountId", "==", props.userId)
      .get()
      .then((querySnapshot) => {
        let paymentItems = querySnapshot.docs.map((paymentItem) => {
          return { id: paymentItem.id, data: paymentItem.data() };
        });
        setPaymentInfo(paymentItems);
      });
  };

  return (
    <Fragment>
      <Head>
        <title>SmarterBot</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Smarter Bot – Suscríbete y paga sólo las horas que esquíes"
        />
        <meta name="author" content="Smarter Bot" />
        <title>Smarter Bot – Esquía pagando solo el tiempo que uses</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Smarter Bot - La nueva forma de disfrutar la montaña"
        />
        <meta
          property="og:description"
          content="Suscríbete y obtén una montaña de beneficios"
        />
        <meta
          property="og:image"
          content="https://smarterbot.cl/images/smarterbot-cover.jpg"
        />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://smarterbot.cl" />
        <meta property="og:site_name" content="SmarterBot" />
        <meta property="fb:app_id" content="" />
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-96.png"
          sizes="96x96"
        ></link>
        <link rel="apple-touch-icon" href="images/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="images/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="images/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="images/touch-icon-ipad-retina.png"
        />
      </Head>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        {" "}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRN2ZCR8ZP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MRN2ZCR8ZP');
        `}
        </Script>{" "}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WS4L7S5"
          strategy="afterInteractive"
        />
        <header>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href={`/dashboard/${props.userType}`}>
                <img
                  className="margin-top img-fluid"
                  src="/images/MountainPassv2.svg"
                  width={220}
                />
              </a>
            </div>
          </nav>
        </header>
        <div className="container-fluid mont dashboard">
          <div className="row">
            <Sidebar userType={props.userType} />
            <main
              role="main"
              className="col-md-10 ml-sm-auto col-lg-9 pt-5 pb-5 px-5"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-5 border-bottom">
                <h2>
                  Usuario: {firstName} {lastName1} {lastName2}{" "}
                  <span>
                    <small>
                      ({type == "user" ? "Cliente" : "Usuario Centro"})
                    </small>
                  </span>
                </h2>
              </div>

              <div className="row mt-5 mb-5 align-items-center justify-content-center">
                <div className="col-12">
                  <h3>Datos</h3>
                </div>
                <div className="col-4">
                  <p>Rut: {rut}</p>
                </div>
                <div className="col-4">
                  <p>Email: {email}</p>
                </div>
                <div className="col-4">
                  <p>teléfono: {phone}</p>
                </div>
                {type == "user" ? (
                  <Fragment>
                    <div className="col-12">
                      <h3>Plan</h3>
                    </div>
                    <div className="col-4 mb-3">
                      <p>Cantidad de suscripciones: {subscriptionsCount}</p>
                    </div>
                    <div className="col-4 mb-3">
                      <p>Plan Expira el : {expirationDate}</p>
                    </div>
                    <div className="col-4 mb-3"></div>
                  </Fragment>
                ) : (
                  ""
                )}
              </div>

              {type == "user" ? (
                <Fragment>
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-5 border-bottom">
                    <h2>Suscripciones</h2>
                  </div>

                  <div className="row mt-5 mb-5">
                    {subscriptors.map((item, index) => {
                      return (
                        <div className="col-4" key={index}>
                          <div className="card">
                            <h5 className="card-header">{item.data.name}</h5>
                            <div className="card-body">
                              <h5 className="card-title">
                                Rut: {item.data.rut}
                              </h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-12">
                    <h3 className="mb-3">Pagos Del Usuario</h3>
                  </div>

                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Nº Orden</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Asunto</th>
                            <th scope="col">Método</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paymentInfo.length > 0 ? (
                            paymentInfo.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td>{item.data.paymentData.commerceOrder}</td>
                                  <td>
                                    {item.data.paymentData.requestData
                                      ? moment
                                          .unix(
                                            item.data.paymentData.requestData
                                          )
                                          .format("DD-MM-YYYY HH:mm:ss")
                                      : moment(
                                          item.data.paymentData.requestDate
                                        ).format("DD-MM-YYYY HH:mm:ss")}
                                  </td>
                                  <td>
                                    ${item.data.paymentData.amount}
                                    {item.data.paymentData.currency}
                                  </td>
                                  <td>{item.data.paymentData.subject}</td>
                                  <td>
                                    {item.data.paymentData.paymentData?.media ||
                                      ""}
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <p className="mt-4">No hay Pagos registrados</p>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Fragment>
              ) : (
                ""
              )}
            </main>
          </div>
        </div>
        <footer className="footer mt-auto py-4">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <a className="footer-brand d-block" href="#">
                  <img
                    className="margin-top img-fluid "
                    src="/images/MountainPass-white.svg"
                  />
                </a>
              </div>
              <div className="col-sm-6">
                <p className="d-block">Smarter Bot 2023 </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      userType: context.query.type,
      userId: context.query.id,
    },
  };
}

export default Account;
