import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import moment from "moment";
import { Montserrat } from "next/font/google";
import { db } from "../../../../services/firebaseService";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });
function Success(props) {
  const [userName, setUserName] = useState("");
  const [subscriptionsCount, setSubscriptionsCount] = useState(0);
  const [expirationDate, setExpirationDate] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let userData = await db.collection("accounts").doc(props.userId).get();
    setUserName(
      `${userData.data().firstName} ${userData.data().lastName1} ${
        userData.data().lastName2
      }`
    );
    setSubscriptionsCount(userData.data().subscriptionsCount);
    setExpirationDate(
      moment.unix(userData.data().expirationDate.seconds).format("DD-MM-YYYY")
    );
  };

  return (
    <Fragment>
      <Head>
        <title>Smarter ChatBOT</title>
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
        <meta property="og:site_name" content="Smarter ChatBot" />
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
        {/* <Script
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
      </div>
      <header>
        <nav className="navbar-transparent d-flex justify-content-center">
          <a className="d-block text-center" href="/">
            <img
              className="margin-top img-fluid"
              src="/images/smarterbotv2.svg"
              width={220}
            />
          </a>
        </nav>
      </header>
      <div className="section-shop pt-5 pb-0">
        <div className="container">
          <div className="z-index">
            <h1 className="text-center mb-4">¡Todo listo para Chatear SMARTER!</h1>
            <div className="bg-light rounded col-md-12 col-xl-6 py-5 mx-auto">
              <div className="row order-container">
                <div className="col-md-12">
                  <div className="text-center mt-0 mb-4">
                    <img
                      className="icon-ok align-middle img-fluid"
                      src="/images/icon-ok.svg"
                      width="100"
                    />
                  </div>

                  <h4 className="mb-4">
                    ¡Te damos la bienvenida,{" "}
                    <span className="color">{userName}</span>!
                  </h4>
                  <p>
                    Hemos actualizado tu suscripción. Para realizar cambios,
                    dirígete a la información y configuración de tu perfil.
                  </p>

                  <h5 className="text-uppercase opacity-50 mt-4">
                    Suscripción
                  </h5>
                  <p>
                    {subscriptionsCount > 1
                      ? `${subscriptionsCount} Suscripciones Anuales`
                      : `1 Suscripción Anual`}
                  </p>

                  <h5 className="text-uppercase opacity-50 mt-4">
                    Válido hasta
                  </h5>
                  <p>{expirationDate}</p>

                  <div className="text-center mt-4">
                    <a
                      className="btn btn-primary btn-lg d-block mt-4"
                      href="/auth/login"
                    >
                      Ir a mi cuenta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer bg-transparent">
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-sm-12">
                <p className="d-block">
                  <strong>Smarter Bot</strong> 2023 –{" "}
                  <a href="mailto:clientes@smarterbot.cl">
                    clientes@smarterbot.cl
                  </a>
                </p>
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
      userId: context.query.id,
    },
  };
}

export default Success;
