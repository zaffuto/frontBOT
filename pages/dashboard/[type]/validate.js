import { Fragment, Suspense, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { Montserrat } from "@next/font/google";
import Sidebar from "../../../components/Sidebar";
import ChileanRutify from "chilean-rutify";
import { db } from "../../../services/firebaseService";
import DashNav from "../../../components/DashNav";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function Dashboard(props) {
  const [displayMobileBar, setDisplayMoblieBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validRut, setValidRut] = useState(false);
  const [rut, setRut] = useState("");
  const [subscriptor, setSubscriptor] = useState({});
  const [subscriptorFound, setSubscriptorFound] = useState(false);

  const handleRut = (rut) => {
    setRut(ChileanRutify.formatRut(rut));
  };

  const verifyRut = () => {
    setValidRut(ChileanRutify.validRut(rut));
  };

  const check = () => {
    setLoading(true);
    setSubscriptorFound(false);
    db.collection("subscriptions")
      .where("rut", "==", rut)
      .limit(1)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size == 0) {
          alert("No encontramos un suscriptor con ese rut. Prueba nuevamente");
          setRut("");
          setLoading(false);
        } else {
          setSubscriptorFound(true);
          setSubscriptor(querySnapshot.docs[0].data());
          setLoading(false);
        }
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
          content="Smarter ChatBOT – Puedes probarlo GRATIS"
        />
        <meta name="author" content="Smarter Bot" />
        <title>Smarter ChatBOT – Ahora puedes organizar tus clientes de WhatsApp Business</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Smarter Bot - La nueva forma de disfrutar la montaña"
        />
        <meta
          property="og:description"
          content="  Ahora puedes envíar notificaciones push para organizar tus clientes de WhatsApp Business y el ChatBOT vende las 24 HS!"
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
          href="/images/smarterbot-favicon-16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/smarterbot-favicon-32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/smarterbot-favicon-96.png"
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
       {/*  <Script
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
        /> */}
        <header>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href={`/dashboard/${props.userType}`}>
                <img
                  className="margin-top img-fluid"
                  src="/images/smarterbotv2.svg"
                  width={220}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setDisplayMoblieBar(!displayMobileBar)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`dash-nav collapse navbar-collapse ${
                  displayMobileBar ? "show" : ""
                }`}
                id="navbarCollapse"
              >
                <DashNav userType={props.userType}></DashNav>
              </div>
            </div>
          </nav>
        </header>
        <div className="container-fluid dashboard">
          <div className="row">
            <Sidebar userType={props.userType} />
            <main
              role="main"
              className="col-md-10 ml-sm-auto col-lg-9 pt-5 pb-5 px-5"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-5 border-bottom">
                <h2>Valida un Rut</h2>
              </div>

              <div className="row mt-5 mb-5 align-items-center justify-content-center">
                <Fragment>
                  <div className="col-8 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="111111-1"
                      value={rut}
                      onChange={(e) => handleRut(e.target.value)}
                      onBlur={(e) => verifyRut()}
                    />
                  </div>
                  <div className="col-4 mt-4">
                    <button
                      className="btn btn-primary w-100"
                      disabled={loading}
                      onClick={() => check()}
                    >
                      {loading ? "Validando..." : "Validar"}
                    </button>
                  </div>
                  <div className="col-12">
                    {subscriptorFound ? (
                      <Fragment>
                        <h4 className="mt-4">
                          Nombre suscriptor: {subscriptor.name}
                        </h4>
                        <p>Rut: {subscriptor.rut}</p>
                        <p>Email: {subscriptor.email}</p>
                      </Fragment>
                    ) : (
                      ""
                    )}
                  </div>
                </Fragment>
              </div>
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
                    src="/images/smarterbot-white.svg"
                  />
                </a>
              </div>
              <div className="col-sm-6">
                <p className="d-block">Smarter ChatBOT Chile 2023/2024 </p>
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
    },
  };
}

export default Dashboard;
